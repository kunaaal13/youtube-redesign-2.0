import dayjs from 'dayjs'
import React from 'react'
import relativeTime from 'dayjs/plugin/relativeTime'
import VideoCard from './VideoCard'

function SuggestedVideos({ videos }) {
  dayjs.extend(relativeTime)
  console.log(videos[0])
  return (
    <div className='hidden h-full flex-[0.33] flex-col py-3 pb-48 pr-5 xl:inline-flex'>
      {videos.map((video, i) => (
        <VideoCard
          key={i}
          videoId={video.id.videoId}
          url={video.snippet.thumbnails.medium.url}
          title={video.snippet.title}
          channelTitle={video.snippet.channelTitle}
          timestamp={dayjs().to(dayjs(video.snippet.publishedAt))}
        />
      ))}
    </div>
  )
}

export default SuggestedVideos
