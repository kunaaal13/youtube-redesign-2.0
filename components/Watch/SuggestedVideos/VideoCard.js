import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

function VideoCard({ title, channelTitle, timestamp, videoId, url, i }) {
  const [imageError, setImageError] = useState(false)

  return (
    <Link
      href={{
        pathname: '/watch',
        query: { v: videoId },
      }}
    >
      <div className={`mb-4 flex w-full cursor-pointer items-start `}>
        <Image
          src={url}
          alt=''
          width={250}
          height={130}
          objectFit='rounded-md'
          className={imageError ? 'hidden' : ''}
          onError={() => setImageError(true)}
        />

        <div className='ml-2 flex w-full flex-col'>
          <p className='text-sm font-semibold line-clamp-2'>{title}</p>

          <h3 className='mt-[0.3rem] text-xs text-[#606060]'>{channelTitle}</h3>

          <p className='text-xs text-[#606060]'>{timestamp}</p>
        </div>
      </div>
    </Link>
  )
}

export default VideoCard
