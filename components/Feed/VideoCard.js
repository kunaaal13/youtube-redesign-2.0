import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectActiveCategory } from '../../redux/videoSlice'

function VideoCard({ video }) {
  const activeCategory = useSelector(selectActiveCategory)

  // video id
  const videoId = activeCategory === 'All' ? video.id : video.id.videoId

  // Fall back to the default image if the video doesn't have a thumbnail
  const [imageError, setImageError] = useState(false)
  const fallBackSrc =
    'https://images.unsplash.com/photo-1662917697998-e5825f2b7831?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80'

  return (
    <Link
      href={{
        pathname: '/watch',
        query: { v: videoId },
      }}
    >
      <div className='flex flex-col items-center'>
        <div className='relative mx-auto h-44 w-[264px] cursor-pointer rounded-md border sm:w-96 md:h-40 md:w-[17rem]'>
          <Image
            src={imageError ? fallBackSrc : video.snippet.thumbnails.high.url}
            onError={() => setImageError(true)}
            alt={`Thumbnail for`}
            layout='fill'
            className={`h-full w-full rounded-md object-cover`}
          />
        </div>

        <div className='mt-2 flex w-[264px] flex-col items-start py-[2px] px-2 sm:w-96 md:w-[17rem]'>
          <p className='text-start text-xs font-semibold text-black line-clamp-2 md:text-sm'>
            {video.snippet.title}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default VideoCard
