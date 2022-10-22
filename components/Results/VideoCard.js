import dayjs from 'dayjs'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import relativeTime from 'dayjs/plugin/relativeTime'

function VideoCard({
  title,
  url,
  channel,
  timestamp,
  description,
  videoId,
  i,
  total,
}) {
  const [imageError, setImageError] = useState(false)
  dayjs.extend(relativeTime)
  let text = description.trim()
  text = text.replace(/\s\s+/g, '')

  return (
    <Link
      href={{
        pathname: '/watch',
        query: { v: videoId },
      }}
    >
      <div
        className={`mb-5 flex w-full items-center justify-start sm:pr-5 md:pr-20 ${
          imageError ? 'hidden' : ''
        } ${i === total - 1 ? 'mb-20' : ''}`}
      >
        <div className='relative h-36 w-[240px] cursor-pointer rounded-md border sm:w-80 md:h-48 md:w-[22rem]'>
          <Image
            src={url}
            onError={() => setImageError(true)}
            alt={`Thumbnail for`}
            layout='fill'
            className={`h-full w-full rounded-md object-cover`}
          />
        </div>

        <div className='ml-2 flex h-36 flex-1 flex-col items-start md:ml-7 md:h-48'>
          <h3 className='text-start font-semibold line-clamp-2 md:text-lg'>
            {title}
          </h3>

          <h3 className='my-[0.3rem] text-sm text-[#606060] md:text-base'>
            {channel}
          </h3>

          <p className='my-[0.3rem] text-sm text-[#606060]'>
            {dayjs().to(dayjs(timestamp))}
          </p>

          <p className='text-start text-sm text-[#606060] line-clamp-2'>
            {text}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default VideoCard
