import React from 'react'
import { useState } from 'react'


const ButtonFollow = () => {

  const [follow, setFollow] = useState(false)

  const handleFollow = () => {
    setFollow(!follow)
  }

  return (
    <button onClick={handleFollow} style={ { backgroundColor: follow ? '#323336' : '#1a53c5', border: follow ? '1px solid #4e4e4e' : '1px solid #1a53c5'} } className='font-semibold text-2xl bg-[#2a2a2a] text-white rounded-[5px] p-2 px-4 hover:cursor-pointer'>
      {follow ? 'Siguiendo' : 'Seguir'}
    </button>
  )
}

export default ButtonFollow

    // <button className=' text-black bg-green-500 rounded-full p-2 w-10 h-10 flex justify-center items-center hover:cursor-pointer'>
