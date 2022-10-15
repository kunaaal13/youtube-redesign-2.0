import Image from 'next/image'
import React from 'react'

function SidebarLinks({ Icon, name, imgUrl }) {
  return (
    <div
      className={`w-full hover:bg-slate-100 flex items-center justify-center rounded-md pl-4 cursor-pointer text-gray-600`}
    >
      <div className='flex items-center py-3 flex-1'>
        {Icon && <Icon className='h-6 w-6' />}
        {imgUrl && <Image src={imgUrl} alt='' height={24} width={24} />}
        <h3 className='text-lg ml-4'>{name}</h3>
      </div>
    </div>
  )
}

export default SidebarLinks
