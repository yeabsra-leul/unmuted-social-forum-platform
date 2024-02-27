import { User, Vote, Post, VoteType } from '@prisma/client'
import React, { FC, useRef } from 'react'
import {formatTimeToNow} from "@/lib/utils"
import Link from 'next/link'
import { MessageSquare } from 'lucide-react'
import EditorOutput from './EditorOutput'
import { PostVoteClient } from './post-vote/PostVoteClient'

interface PostProps {
    post: Post & {
      author: User
      votes: Vote[]
    }
    subredditName:string,
    commentAmt:number;
    votesAmt:number;
    currentVote?:Pick<Vote, 'type'>
  }

const Post:FC<PostProps> = ({post,subredditName, commentAmt, votesAmt, currentVote}) => {

    const pRef = useRef<HTMLParagraphElement>(null)
    
    return (
        <div className='rounded-md bg-white shadow'>
          <div className='px-6 py-4 flex justify-between'>
            <PostVoteClient initialVotesAmt={votesAmt} postId={post.id} initialVote={currentVote?.type}/>
          <div className='w-0 flex-1'>
          <div className='max-h-40 mt-1 text-xs text-gray-500'>
            {subredditName ? (
              <>
                <a
                  className='underline text-zinc-900 text-sm underline-offset-2'
                  href={`/r/${subredditName}`}>
                  r/{subredditName}
                </a>
                <span className='px-1'>•</span>
              </>
            ) : null}
            <span>Posted by u/{post.author.username}</span>{' '}
            {formatTimeToNow(new Date(post.createdAt))}
          </div>
          <a href={`/r/${subredditName}/post/${post.id}`}>
            <h1 className='text-lg font-semibold py-2 leading-6 text-gray-900'>
              {post.title}
            </h1>
          </a>

          <div
            className='relative text-sm max-h-40 w-full overflow-clip'
            ref={pRef}>
            <EditorOutput content={post.content} />
            {pRef.current?.clientHeight === 160 ? (
              <div className='absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-white to-transparent'></div>
            ) : null}
          </div>
        </div>
      </div>

      <div className='bg-gray-50 z-20 text-sm px-4 py-4 sm:px-6'>
        <Link
          href={`/r/${subredditName}/post/${post.id}`}
          className='w-fit flex items-center gap-2'>
          <MessageSquare className='h-4 w-4' /> {commentAmt} comments
        </Link>
      </div>
      </div> 
    )
}

export default Post