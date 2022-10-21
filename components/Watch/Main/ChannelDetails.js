import Image from 'next/image'
import React from 'react'
import numeral from 'numeral'

function ChannelDetails({ logoUrl, subscribers, title, description }) {
  return (
    <div className='mb-2 w-full border-b py-3'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <Image
            src={logoUrl}
            alt=''
            height={55}
            width={55}
            className='rounded-full'
          />

          <div className='ml-5'>
            <h3 className='font-semibold'>{title}</h3>

            <p className='mb-1 text-xs text-[#606060]'>
              {numeral(subscribers).format('0a')} Subscribers
            </p>
          </div>
        </div>

        {/* Subscribe button */}
        <div className='mr-3 cursor-pointer rounded-md border bg-[#cc0000] px-4 py-3 text-sm uppercase text-white'>
          Subscribe
        </div>
      </div>

      {/* Video Description */}
      <p className='mt-3 ml-16 w-4/5 text-sm text-[#606060] line-clamp-3'>
        {description}
      </p>
    </div>
  )
}

export default ChannelDetails
