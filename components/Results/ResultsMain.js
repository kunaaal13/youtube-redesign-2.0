import React from 'react'
import { useSelector } from 'react-redux'
import { selectSearchResults } from '../../redux/searchSlice'
import VideoCard from './VideoCard'

function ResultsMain() {
  const results = useSelector(selectSearchResults)
  console.log('results 2', results)
  console.log('results 2', typeof results)

  return (
    <div className='feed h-full w-full flex-1 overflow-hidden border-t p-3 pb-7 lg:flex-[0.85]'>
      <div className='mb-10 h-full w-full overflow-y-auto scroll-smooth rounded-md bg-gray-100 p-3 pr-7 pb-80 text-center md:p-6'>
        {results &&
          results.map((result, i) => (
            <VideoCard
              key={i}
              title={result.snippet.title}
              url={result.snippet.thumbnails.medium.url}
              channel={result.snippet.channelTitle}
              timestamp={result.snippet.publishedAt}
              description={result.snippet.description}
              videoId={result.id.videoId}
              total={results.length}
            />
          ))}
      </div>
    </div>
  )
}

export default ResultsMain
