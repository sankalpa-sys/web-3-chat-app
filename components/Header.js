import Image from 'next/image'
import React from 'react'
import { useMoralis } from 'react-moralis'
import Avatar from './Avatar'
import ChangeUsername from './ChangeUsername'


function Header() {
    const {user} = useMoralis()
  return (
    <div className='text-pink-500 sticky top-0 p-5 z-50 bg-black shadow-sm border-b-2 border-pink-700 '>
        <div className='grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center'>
           <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
            <Image src='https://cdn.pixabay.com/photo/2015/11/16/16/41/web-1045994_1280.jpg' layout='fill' objectFit='cover' className='rounded-full'/>
           </div>

           <div className='col-span-4 text-left lg:text-center'>
                <div className='h-48 w-48 relative lg:mx-auto border-pink-500 border-8 rounded-full'>
                    <Avatar logoutOnPress/>
                </div>

                <h1 className='text-2xl '>Welcome to the Sankalpa Metaverse</h1>
                <h2 className='text-5xl truncate font-bold'>{user.get("username")}</h2>

                {/* //todo: Change Username */}
                <ChangeUsername/>
           </div>
        </div>
    </div>
  )
}

export default Header