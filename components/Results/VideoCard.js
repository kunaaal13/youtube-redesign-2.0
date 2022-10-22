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
  text = text.replace(/  |\r\n|\n|\r/gm, '')

  return (
    <Link
      href={{
        pathname: '/watch',
        query: { v: videoId },
      }}
    >
      <div
        className={`mb-5 flex w-full max-w-full flex-col items-center justify-start sm:flex-row lg:pr-20 ${
          imageError ? 'hidden' : ''
        } ${i === total - 1 ? 'mb-20' : ''}`}
      >
        <div className='relative h-52 w-full cursor-pointer rounded-md border sm:h-48 sm:w-[27rem] sm:min-w-[350px] sm:max-w-[350px]'>
          <Image
            src={url}
            onError={() => setImageError(true)}
            alt={`Thumbnail for`}
            layout='fill'
            className={`relative w-full rounded-md object-cover`}
          />
        </div>

        <div className='mt-3 flex flex-col items-start sm:ml-7 sm:h-48'>
          <h3 className='text-start font-semibold line-clamp-2 sm:mb-2 md:text-lg'>
            {title}
          </h3>

          <div className='flex flex-row space-x-2 space-y-0 sm:flex-col sm:items-start sm:space-y-1 sm:space-x-0'>
            <h3 className='text-sm text-[#606060] line-clamp-1 md:text-base'>
              {channel}
            </h3>

            <p className='text-sm text-[#606060]'>
              {dayjs().to(dayjs(timestamp))}
            </p>
          </div>

          <p className='mt-1 text-start text-sm text-[#606060] line-clamp-2 sm:mt-3'>
            {text}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default VideoCard
