import Head from 'next/head'
import React from 'react'
import Header from '../components/Header/header'
import SuggestedVideos from '../components/Watch/SuggestedVideos/SuggestedVideos'
import WatchMain from '../components/Watch/Main/WatchMain'
import {
  fetchChannelDetails,
  fetchSuggestedVideos,
  fetchVideoComments,
  fetchVideoDetails,
} from '../utils/fetchData'

function Watch({ videoId, comments, suggestedVideos, video, channel }) {
  return (
    <div className='h-screen overflow-hidden bg-white text-black'>
      <Head>
        <title>{video.snippet.title}</title>
        <meta name='description' content='Youtube redesign' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      <div className='flex h-full w-full overflow-hidden p-3 xl:px-4'>
        <main className='flex h-full w-full overflow-y-scroll md:pl-10 md:pr-6'>
          <WatchMain
            videoId={videoId}
            video={video}
            channel={channel}
            comments={comments}
          />

          <SuggestedVideos videos={suggestedVideos} />
        </main>
      </div>
    </div>
  )
}

export default Watch

// Server side rendering
export async function getServerSideProps(context) {
  const { v } = context.query

  // video details
  const videoDetails = await fetchVideoDetails(v)

  // suggested videos
  const suggestedVideos = await fetchSuggestedVideos(v)

  // video comments
  const videoComments = await fetchVideoComments(v)

  // channel details
  const { items } = videoDetails
  const channelId = items[0].snippet.channelId
  const channelDetails = await fetchChannelDetails(channelId)

  return {
    props: {
      videoId: v,
      suggestedVideos: suggestedVideos.items,
      video: items[0],
      comments: videoComments.items,
      channel: channelDetails.items[0],
    }, // will be passed to the page component as props
  }
}
