import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='bg-[#1fc55c] w-full h-[7dvh] flex justify-around items-center'>

          <Link href='/'>
            <h1 className='text-black text-4xl font-bold tracking-[-2px]'>MediaSongs</h1>
          </Link>

    </header>
  )
}

export default Header
