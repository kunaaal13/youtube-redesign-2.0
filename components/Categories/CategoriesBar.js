import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchVideos,
  selectActiveCategory,
  selectVideos,
  setActiveCategory,
  setVideos,
} from '../../redux/videoSlice'
import { categories } from '../../utils/constants'

function CategoriesBar() {
  const activeCategory = useSelector(selectActiveCategory)
  const dispatch = useDispatch()
  const videos = useSelector(selectVideos)

  const updateCategory = async (category) => {
    if (activeCategory !== category) {
      // set videos to null to reach at the top of feed
      dispatch(setVideos(null))

      // update videos
      dispatch(fetchVideos(category))

      // change active category
      dispatch(dispatch(setActiveCategory(category)))
    }
  }

  return (
    <div className='py-3 px-4'>
      <div className='flex space-x-4 overflow-x-scroll scroll-smooth px-2 scrollbar-hide'>
        {categories.map((category, i) => (
          <div
            onClick={() => updateCategory(category)}
            key={i}
            className={`flex cursor-pointer items-center rounded-3xl px-3 py-2 text-base ${
              activeCategory === category
                ? 'bg-black text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            <h3>{category}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoriesBar
