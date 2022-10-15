import React, { useState } from 'react'
import { categories } from '../../utils/constants'

function CategoriesBar() {
  const [activeCategory, setActiveCategory] = useState('All')
  return (
    <div className='py-3 px-4'>
      <div className='flex space-x-4 overflow-x-scroll scroll-smooth scrollbar-hide px-2'>
        {categories.map((category, i) => (
          <div
            onClick={() => setActiveCategory(category)}
            key={i}
            className={`flex items-center rounded-3xl cursor-pointer text-base px-3 py-2 ${
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
