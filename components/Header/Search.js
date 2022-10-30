import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchSearchResults,
  selectSearch,
  setSearch,
  setSearchResults,
} from '../../redux/searchSlice'

function Search({ desktop }) {
  const searchValue = useSelector(selectSearch)
  const dispatch = useDispatch()
  const router = useRouter()

  const { search_query } = router.query
  console.log('search_query', search_query)

  const [value, setValue] = useState(searchValue)

  const handleSearch = () => {
    dispatch(setSearch(value))
    dispatch(setSearchResults(null))

    router.push({
      pathname: '/results',
      query: {
        search_query: value,
      },
    })

    console.log('Search for ', value)
  }

  return (
    <div
      className={`flex flex-grow items-center rounded-full border border-gray-300 ${
        desktop ? 'hidden lg:inline-flex' : ''
      }`}
    >
      {/* Search */}
      <input
        type='text'
        placeholder='Search'
        value={value}
        onChange={(e) => {
          e.preventDefault
          setValue(e.target.value)
        }}
        className='ml-5 h-10 flex-1 bg-white outline-none'
      />
      <MagnifyingGlassIcon
        onClick={handleSearch}
        className='mx-2 h-8 w-8 cursor-pointer rounded-full bg-gray-100 p-2'
      />
    </div>
  )
}

export default Search
