import axios from 'axios'
import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'

function Feed() {
  const [videos, setVideos] = useState(null)

  useEffect(() => {
    const apiCall = async () => {
      const options = {
        method: 'GET',
        url: 'https://youtube-v31.p.rapidapi.com/search',
        params: {
          relatedToVideoId: '7ghhRHRP6t4',
          part: 'id,snippet',
          type: 'video',
          maxResults: '16',
        },
        headers: {
          'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
          'X-RapidAPI-Host': process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
        },
      }

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data.items)
          setVideos(response.data.items)
        })
        .catch(function (error) {
          console.error(error)
        })
    }

    apiCall()
  }, [])
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
