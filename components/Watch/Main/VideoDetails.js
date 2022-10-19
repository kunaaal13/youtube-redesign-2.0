import dayjs from 'dayjs'
import React from 'react'
import {
  BiDislike,
  BiDotsHorizontalRounded,
  BiLike,
  BiListPlus,
  BiShare,
} from 'react-icons/bi'
import relativeTime from 'dayjs/plugin/relativeTime'
import numeral from 'numeral'

function VideoDetails({ likes, views, title, timestamp, tags }) {
  dayjs.extend(relativeTime)
  console.log(tags)
  return (
    <div className='mb-2 w-full border-b pb-5'>
      {/* Video Tags */}
      {tags &&
        tags.map((tag, i) => (
          <span className='mr-3 text-sm text-[#065fd4]' key={i}>
            {tag}
          </span>
        ))}

      {/* Video Title */}
      <h1 className='text-xl'>{title}</h1>

      {/* Video Stats */}
      <div className='mt-2 flex w-full items-center justify-between'>
        <div className='flex items-center'>
          <p className='mr-5 text-sm text-[#606060]'>
            {numeral(views).format('0,0')} views
          </p>
          <p className='hidden text-sm text-[#606060] sm:inline-flex'>
            {dayjs().to(dayjs(timestamp))}
          </p>
        </div>

        <div className='flex items-center'>
          {/* Like */}
          <span className='mr-4 flex items-center'>
            <BiLike className='mr-1 h-5 w-5 cursor-pointer text-[#606060]' />
            {numeral(likes).format('0a')}
          </span>

          {/* Dislike */}
          <span className='mr-4 flex items-center'>
            <BiDislike className='mr-1 h-5 w-5 cursor-pointer text-[#606060]' />
            Dislike
          </span>

          {/* Share */}
          <span className='mr-4 flex items-center'>
            <BiShare className='mr-1 h-5 w-5 cursor-pointer text-[#606060]' />
            Share
          </span>

          {/* Save */}
          <span className='mr-4 flex items-center'>
            <BiListPlus className='mr-1 h-6 w-6 cursor-pointer text-[#606060]' />
            Save
          </span>

          {/* More */}
          <BiDotsHorizontalRounded className='h-6 w-6 cursor-pointer text-[#606060]' />
        </div>
      </div>
    </div>
  )
}

export default VideoDetails
