import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import VideoCard from './VideoCard'

function Feed() {
  const [videos, setVideos] = useState(null)
  const dispatch = useDispatch()

  return (
    <div className='h-full w-full flex-1 overflow-hidden border-t p-3 lg:flex-[0.85]'>
      <div className='mb-10 grid h-full w-full grid-cols-1 gap-10 overflow-y-auto scroll-smooth rounded-md bg-gray-100 p-3 pb-32 first:mr-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {videos &&
          videos.map((video) => (
            <VideoCard key={video.id.videoId} video={video} />
          ))}
      </div>
    </div>
  )
}

export default Feed
