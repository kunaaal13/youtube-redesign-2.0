import {
  ArrowLeftIcon,
  Bars3Icon,
  BellIcon,
  MagnifyingGlassIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline'
// import { signInWithPopup, signOut } from 'firebase/auth'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Search from './Search'

function Header() {
  const [showMobileSearch, setShowMobileSearch] = useState(false)
  const router = useRouter()

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
    <div className='relative top-0 z-50 flex h-16 w-full items-center justify-center py-2 px-2 lg:px-4'>
      {/* Left Container */}
      <div className='flex h-full items-center lg:flex-1'>
        {/* Hamburger menu icon */}
        <Bars3Icon className='h-5 w-5 cursor-pointer lg:hidden' />

        {/* Logo */}
        <div className='ml-1 flex items-center justify-center lg:ml-0'>
          <Image
            onClick={() => {
              router.push('/')
            }}
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
      <Search desktop={true} />

      {/* Right Container */}
      <div className='flex h-full flex-1 items-center justify-end'>
        {/* Search Icon */}
        <MagnifyingGlassIcon
          onClick={() => {
            setShowMobileSearch(true)
          }}
          className='mx-2 h-9 w-9 cursor-pointer rounded-full bg-gray-100 p-2 lg:hidden'
        />

        {/* Squares */}
        <Squares2X2Icon className='mr-2 hidden h-9 w-9 cursor-pointer rounded-full bg-gray-100 p-2 lg:mr-3 lg:inline-flex' />

        {/* Notifications */}
        <BellIcon className='mr-2 h-9 w-9 cursor-pointer rounded-full bg-gray-100 p-2 lg:mr-3' />

        {/* Avatar */}
        <img
          src={
            'https://pbs.twimg.com/profile_images/1562753790369218560/wtiHWrkG_400x400.jpg'
          }
          alt='avatar'
          className='h-9 w-9 cursor-pointer rounded-full lg:h-11 lg:w-11'
        />
      </div>

      {/* Search in Mobile view */}
      {showMobileSearch && (
        <div className='absolute top-0 left-0 z-[100] flex h-full w-full items-center justify-center bg-white py-2 px-2 lg:px-4'>
          <ArrowLeftIcon
            onClick={() => {
              setShowMobileSearch(false)
            }}
            className='mr-3 h-9 w-9 cursor-pointer rounded-full bg-gray-100 p-2'
          />

          {/* Search container */}
          <Search />
        </div>
      )}
    </div>
  )
}

export default Header
