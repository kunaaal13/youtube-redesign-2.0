import React from 'react'

function SidebarOption({ Icon, name, isSelected, setSelected }) {
  return (
    <div
      className={`w-full ${
        isSelected ? 'bg-gray-200' : 'hover:bg-slate-100'
      } flex items-center justify-center rounded-md pl-4 cursor-pointer text-gray-600`}
      onClick={() => {
        setSelected(name)
      }}
    >
      <div className='flex items-center py-3 flex-1'>
        <Icon className='h-6 w-6' />
        <h3 className='text-lg ml-4'>{name}</h3>
      </div>
    </div>
  )
}

export default SidebarOption
