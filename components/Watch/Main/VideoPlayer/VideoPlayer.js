import React from 'react'
import ReactPlayer from 'react-player/youtube'

function VideoPlayer({ id }) {
  return (
    <div className='mb-4 h-60 w-full rounded-md sm:min-h-[28rem]'>
      <ReactPlayer
        className='rounded-md'
        url={`https://www.youtube.com/watch?v=${id}`}
        width='100%'
        height='100%'
        controls={true}
        muted={false}
      />
    </div>
  )
}

export default VideoPlayer
