import React from 'react'
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import('react-player/youtube'), {
  ssr: false,
})

function VideoPlayer({ id }) {
  return (
    <div className='relative mb-4 h-60 min-h-[16rem] w-full max-w-full rounded-md pt-[56.25%] xl:min-h-[28rem]'>
      <ReactPlayer
        className='rounded-md'
        url={`https://www.youtube.com/watch?v=${id}`}
        width='100%'
        height='100%'
        style={{ position: 'absolute', top: '0', left: '0' }}
        controls={true}
        muted={false}
      />
    </div>
  )
}

export default VideoPlayer
