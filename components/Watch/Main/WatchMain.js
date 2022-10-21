import React from 'react'
import VideoPlayer from './VideoPlayer/VideoPlayer'
import VideoDetails from './VideoDetails'
import ChannelDetails from './ChannelDetails'
import VideoComments from './VideoComments'

function WatchMain({ videoId, video, channel, comments }) {
  let tags = video.snippet.tags
  tags = tags && tags.length >= 2 ? tags.slice(0, 2) : tags

  return (
    <div className='flex h-full flex-1 flex-col items-center px-3 py-3 pb-48 sm:px-9 xl:flex-[0.67]'>
      <VideoPlayer id={videoId} />

      {/* Video Details */}
      <VideoDetails
        likes={video.statistics.likeCount}
        views={video.statistics.viewCount}
        title={video.snippet.title}
        timestamp={video.snippet.publishedAt}
        tags={tags}
      />

      {/* Channel Details */}
      <ChannelDetails
        logoUrl={channel.snippet.thumbnails.medium.url}
        subscribers={channel.statistics.subscriberCount}
        title={channel.snippet.title}
        description={channel.snippet.description}
      />

      {/* Comments */}
      <VideoComments comments={comments} />
    </div>
  )
}

export default WatchMain
