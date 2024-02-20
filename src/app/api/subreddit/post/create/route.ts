import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { PostValidator } from "@/lib/validators/post";
import { z } from "zod";

export async function POST(req:Request) {
    try {
        const session = await getAuthSession()

        if(!session?.user){
            return new Response("Unauthorized", {status:401})
        }
        const reqBody = await req.json()
        const {subredditId,content, title} = PostValidator.parse(reqBody)

        const ExistingSubscription = await db.subscription.findFirst({
            where:{
                subredditId:subredditId,
                userId:session.user.id
            },
        })

        if(!ExistingSubscription){
            return new Response("Subscribe to the subreddit to post", {status:400})
        }

        await db.post.create({
            data:{
                subredditId,
                authorId:session.user.id,
                title,
                content
            }
        })

        return new Response("Ok")
    } catch (error) {
        if(error instanceof z.ZodError){
            return new Response(error.message, {status:422})
        }

        return new Response("Can't post right now", {status:500})
    }
}