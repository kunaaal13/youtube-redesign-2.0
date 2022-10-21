import React from 'react'
import { Bars3BottomRightIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { BiLike, BiDislike } from 'react-icons/bi'

function VideoComments({ comments }) {
  dayjs.extend(relativeTime)
  return (
    <div className='w-full py-2 pb-36'>
      <div className='flex items-center'>
        <h2 className=''>{comments.length} Comments</h2>

        <div className='flex items-center uppercase'>
          <Bars3BottomRightIcon className='ml-10 mr-3 h-6 w-6' />
          Sort by
        </div>
      </div>
      {comments.map((comment, i) => (
        <div key={i} className='my-7 flex w-full items-start'>
          <Image
            src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl}
            alt=''
            height={45}
            width={45}
            className='mr-5 cursor-pointer rounded-full'
          />

          <div className='ml-4 flex flex-1 flex-col'>
            {/* Name */}
            <div className='flex items-center'>
              <h3 className='text-sm font-semibold'>
                {comment.snippet.topLevelComment.snippet.authorDisplayName}
              </h3>
              <h3 className='ml-2 text-sm text-[#606060]'>
                {dayjs().to(
                  dayjs(comment.snippet.topLevelComment.snippet.publishedAt)
                )}
              </h3>
            </div>

            {/* Comment description */}
            <p className='my-1 text-sm line-clamp-3'>
              {comment.snippet.topLevelComment.snippet.textOriginal}
            </p>

            {/* Like and dislike */}
            <div className='my-1 flex items-center text-xs'>
              <BiLike className='mr-2 h-4 w-4 cursor-pointer' />
              <p className=''>
                {comment.snippet.topLevelComment.snippet.likeCount}
              </p>
              <BiDislike className='ml-4 mr-5 h-4 w-4 cursor-pointer' />
              <p className='text-xs uppercase text-[#606060]'>Reply</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default VideoComments
