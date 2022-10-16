import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchMoreVideos,
  selectActiveCategory,
  selectLoading,
  selectNextPageToken,
  selectTotalResults,
  selectVideos,
  setLoading,
} from '../../redux/videoSlice'
import VideoCard from './VideoCard'

function Feed() {
  const feedRef = useRef(null)
  const dispatch = useDispatch()
  const videos = useSelector(selectVideos)
  const loading = useSelector(selectLoading)
  const nextPageToken = useSelector(selectNextPageToken)
  const activeCategory = useSelector(selectActiveCategory)
  const totalResults = useSelector(selectTotalResults)

  // Implementing infinite scroll
  const onScroll = () => {
    if (videos && videos.length >= totalResults) {
      return
    }

    if (feedRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = feedRef.current
      if (scrollTop + clientHeight === scrollHeight) {
        // This will be triggered after hitting the last element.
        const category = activeCategory
        dispatch(setLoading(true))
        dispatch(fetchMoreVideos(category))
      }
    }
  }

  useEffect(() => {}, [dispatch])

  return (
    <div
      id='feed'
      className='feed h-full w-full flex-1 overflow-hidden border-t p-3 lg:flex-[0.85]'
    >
      <div
        onScroll={onScroll}
        ref={feedRef}
        className='mb-10 grid h-full w-full grid-cols-1 gap-10 overflow-y-auto scroll-smooth rounded-md bg-gray-100 p-3 pb-32 first:mr-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
      >
        {videos &&
          videos.map((video, i) => <VideoCard key={i} video={video} />)}

        {loading && (
          <div className='flex h-full w-full flex-1 justify-center'>
            <div className='loader'></div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Feed
