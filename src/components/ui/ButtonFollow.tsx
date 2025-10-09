import React from 'react'
import { useState } from 'react'


const ButtonFollow = () => {

  const [follow, setFollow] = useState(false)

  const handleFollow = () => {
    setFollow(!follow)
  }

  return (
    <button onClick={handleFollow} style={ { backgroundColor: follow ? '#E44442' : '#1DA1F2', color: follow ? '#000' : 'white'} } className='rounded-[5px] '>
      {follow ? 'Siguiendo' : 'Seguir'}
    </button>
  )
}

export default ButtonFollow

    // <button className=' text-black bg-green-500 rounded-full p-2 w-10 h-10 flex justify-center items-center hover:cursor-pointer'>
