import { getAuthSession } from "@/lib/auth"
import { db } from "@/lib/db"

interface PageProps{
    params:{
        slug:string
    }
}

const page = async ({params}:PageProps) => {
    const {slug} = params
    const session = await getAuthSession()

    const subreddit = await db.subreddit.findFirst({
        where:{
            name:slug
        },
        include:{
            posts:{
                include:{
                    author:true,
                    votes:true,
                    comments:true,
                    subreddit:true
                }
            }
        }
    })


    return null
}

export default page