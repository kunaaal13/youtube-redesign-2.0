import {
  ArrowLeftIcon,
  Bars3Icon,
  BellIcon,
  MagnifyingGlassIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline'
// import { signInWithPopup, signOut } from 'firebase/auth'
import Image from 'next/image'
import { useEffect, useState } from 'react'

function Header() {
  const [showMobileSearch, setShowMobileSearch] = useState(false)

  // To handle the mobile search bar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setShowMobileSearch(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  })

  return (
    <div className='relative w-full h-16 py-2 px-2 lg:px-4 flex items-center justify-center top-0 z-50'>
      {/* Left Container */}
      <div className='lg:flex-1 h-full flex items-center'>
        {/* Hamburger menu icon */}
        <Bars3Icon className='h-5 w-5 cursor-pointer lg:hidden' />

        {/* Logo */}
        <div className='flex items-center justify-center ml-1 lg:ml-0'>
          <Image
            src='/logo-full.svg'
            width={130}
            height={100}
            objectFit='contain'
            className='cursor-pointer'
            alt='Logo'
          />
        </div>
      </div>
      {/* Search Container */}
      <div className='hidden lg:inline-flex items-center flex-grow border border-gray-300 rounded-full'>
        {/* Search */}
        <input
          type='text'
          placeholder='Search'
          className='h-10 ml-5 flex-1 outline-none bg-white'
        />
        <MagnifyingGlassIcon className='h-8 w-8 p-2 rounded-full mx-2 bg-gray-100 cursor-pointer' />
      </div>
      {/* Right Container */}
      <div className='flex-1 h-full flex items-center justify-end'>
        {/* Search Icon */}
        <MagnifyingGlassIcon
          onClick={() => {
            setShowMobileSearch(true)
          }}
          className='lg:hidden h-9 w-9 p-2 rounded-full mx-2 bg-gray-100 cursor-pointer'
        />

        {/* Squares */}
        <Squares2X2Icon className='hidden lg:inline-flex h-9 w-9 rounded-full p-2 bg-gray-100 mr-2 lg:mr-3 cursor-pointer' />

        {/* Notifications */}
        <BellIcon className='h-9 w-9 rounded-full p-2 bg-gray-100 mr-2 lg:mr-3 cursor-pointer' />

        {/* Avatar */}
        <img
          src={
            'https://pbs.twimg.com/profile_images/1562753790369218560/wtiHWrkG_400x400.jpg'
          }
          alt='avatar'
          className='h-9 w-9 lg:h-11 lg:w-11 rounded-full cursor-pointer'
        />
      </div>

      {/* Search in Mobile view */}
      {showMobileSearch && (
        <div className='absolute top-0 left-0 w-full h-full bg-white z-[100] py-2 px-2 lg:px-4 flex items-center justify-center'>
          <ArrowLeftIcon
            onClick={() => {
              setShowMobileSearch(false)
            }}
            className='h-9 w-9 rounded-full p-2 bg-gray-100 mr-3 cursor-pointer'
          />

          {/* Search container */}
          <div className='flex items-center flex-grow border border-gray-300 rounded-full'>
            {/* Search */}
            <input
              type='text'
              placeholder='Search'
              className='h-10 ml-5 flex-1 outline-none bg-white'
            />
            <MagnifyingGlassIcon className='h-8 w-8 p-2 rounded-full mx-2 bg-gray-100 cursor-pointer' />
          </div>
        </div>
      )}
    </div>
  )
}

export default Header
