import Link from 'next/link'
import React from 'react'

const DashboardLayout = ({ children }) => {
  return (
    <div className='grid grid-cols-12 gap-5'>
      <div className='col-span-3 border-r-2 min-h-screen'>
        <h1 className='text-center bg-green-300'>Navigation</h1>
        <div className='flex flex-col gap-5 pt-10'>
            <Link className='py-2 px-4 bg-gray-300' href={"/dashboard/add-story"}>Add story</Link>
            <Link className='py-2 px-4 bg-gray-300' href={"/dashboard/my-profile"}>My Profile</Link>
            <Link className='py-2 px-4 bg-gray-300' href={"/dashboard/settings"}>Settings</Link>
        </div>
      </div>
      <div className='col-span-9'>
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout
