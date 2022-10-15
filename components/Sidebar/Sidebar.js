import { useState } from 'react'
import {
  BiHome,
  BiCog,
  BiHelpCircle,
  BiMessageSquareError,
  BiRun,
  BiHistory,
  BiHash,
  BiUserCheck,
  BiLibrary,
  BiLike,
  BiTimeFive,
  BiCodeAlt,
  BiMovie,
  BiMoviePlay,
  BiWifi,
  BiJoystick,
} from 'react-icons/bi'
import SidebarLinks from './SidebarLinks'
import SidebarOption from './SidebarOption'

function Sidebar() {
  const [selected, setSelected] = useState('Home')

  return (
    <div className='hidden xl:inline-flex flex-col flex-[0.15] h-full pt-2 pb-32 pr-2 overflow-y-auto scroll-smooth'>
      {/* Sidebar Options */}

      {/* Home */}
      <SidebarOption
        setSelected={setSelected}
        name='Home'
        Icon={BiHome}
        isSelected={selected === 'Home'}
      />

      {/* Explore */}
      <SidebarOption
        setSelected={setSelected}
        name='Explore'
        Icon={BiHash}
        isSelected={selected === 'Explore'}
      />

      {/* Subscriptions */}
      <SidebarOption
        setSelected={setSelected}
        name='Subscriptions'
        Icon={BiUserCheck}
        isSelected={selected === 'Subscriptions'}
      />

      {/* Library */}
      <SidebarOption
        setSelected={setSelected}
        name='Library'
        Icon={BiLibrary}
        isSelected={selected === 'Library'}
      />

      {/* History */}
      <SidebarOption
        setSelected={setSelected}
        name='History'
        Icon={BiHistory}
        isSelected={selected === 'History'}
      />

      {/* Liked videos */}
      <SidebarOption
        setSelected={setSelected}
        name='Liked videos'
        Icon={BiLike}
        isSelected={selected === 'Liked videos'}
      />

      {/* Watch later */}
      <SidebarOption
        setSelected={setSelected}
        name='Watch later'
        Icon={BiTimeFive}
        isSelected={selected === 'Watch later'}
      />

      <hr className='my-3' />

      <h3 className='text-lg pl-4 text-gray-400 mb-3 select-none'>Explore</h3>

      {/* Films */}
      <SidebarOption
        setSelected={setSelected}
        name='Films'
        Icon={BiMoviePlay}
        isSelected={selected === 'Films'}
      />

      {/* Gaming */}
      <SidebarOption
        setSelected={setSelected}
        name='Gaming'
        Icon={BiJoystick}
        isSelected={selected === 'Gaming'}
      />

      {/* Sport */}
      <SidebarOption
        setSelected={setSelected}
        name='Sport'
        Icon={BiRun}
        isSelected={selected === 'Sport'}
      />

      {/* Live */}
      <SidebarOption
        setSelected={setSelected}
        name='Live'
        Icon={BiWifi}
        isSelected={selected === 'Live'}
      />

      {/* Movies */}
      <SidebarOption
        setSelected={setSelected}
        name='Movies'
        Icon={BiMovie}
        isSelected={selected === 'Movies'}
      />

      {/* Learning */}
      <SidebarOption
        setSelected={setSelected}
        name='Learning'
        Icon={BiCodeAlt}
        isSelected={selected === 'Learning'}
      />

      <hr className='my-3' />

      <h3 className='text-lg pl-4 text-gray-400 mb-3 select-none'>
        More from Youtube
      </h3>

      {/* Youtube Premium */}
      <SidebarLinks name='Premium' Icon={null} imgUrl={'/logo.svg'} />

      {/* Youtube Music */}
      <SidebarLinks name='Music' imgUrl={'/yt-music.svg'} />

      {/* Youtube Kids */}
      <SidebarLinks name='Kids' imgUrl={'/yt-kids.svg'} />

      {/* Creator Academy */}
      <SidebarLinks name='Studio' imgUrl={'/yt-creator.webp'} />

      <hr className='my-3' />

      {/* Settings */}
      <SidebarLinks name='Settings' Icon={BiCog} />

      {/* Help */}
      <SidebarLinks name='Help' Icon={BiHelpCircle} />

      {/* Feedback */}
      <SidebarLinks name='feedback' Icon={BiMessageSquareError} />

      <hr className='my-3' />

      <h3 className='text-center text-lg'>Made with ❤️ by Kunaaal</h3>
    </div>
  )
}

export default Sidebar
