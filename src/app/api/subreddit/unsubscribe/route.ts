import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { SubredditSubscriptionValidator } from "@/lib/validators/subreddit";
import { z } from "zod";

export async function POST(req:Request) {
    try {
        const session = await getAuthSession()

        if(!session?.user){
            return new Response("Unauthorized", {status:401})
        }
        const reqBody = await req.json()
        const {subredditId} = SubredditSubscriptionValidator.parse(reqBody)

        const ExistingSubscription = await db.subscription.findFirst({
            where:{
                subredditId:subredditId,
                userId:session.user.id
            },
        })

        if(!ExistingSubscription){
            return new Response("You are not subscribed", {status:400})
        }

        const subreddit = await db.subreddit.findFirst({
            where:{
                id:subredditId,
                creatorId:session.user.id
            }
        })

        if(subreddit){
            return new Response("You can't unsubscribe from your own subreddit", {status:400})
        }

        await db.subscription.delete({
            where:{
                userId_subredditId:{
                    subredditId,
                    userId:session.user.id
                }
            }
        })

        return new Response(subredditId)
    } catch (error) {
        if(error instanceof z.ZodError){
            return new Response(error.message, {status:422})
        }

        return new Response("Can't unsubscribe from this subreddit right now", {status:500})
    }
}