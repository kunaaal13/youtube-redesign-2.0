import { useNProgress } from '@tanem/react-nprogress'

import React from 'react'

function Progress({ isAnimating }) {
  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating,
  })

  return (
    <div
      className='pointer-events-one'
      style={{
        opacity: isFinished ? 0 : 1,
        transition: `opacity ${animationDuration}ms linear`,
      }}
    >
      <div
        className='fixed left-0 top-0 z-50 h-[2px] w-full bg-red-600'
        style={{
          marginLeft: `${(-1 + progress) * 100}%`,
          transition: `margin-left ${animationDuration}ms linear`,
        }}
      ></div>
    </div>
  )
}

export default Progress
