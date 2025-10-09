import React from 'react'

interface ButtonPlayCardProps {
    className?: string
}

const ButtonPlayCard = ({className}: ButtonPlayCardProps) => {
  return (
    <button className={className}>
        ▶
    </button>
  )
}

export default ButtonPlayCard

    // <button className=' text-black bg-green-500 rounded-full p-2 w-10 h-10 flex justify-center items-center hover:cursor-pointer'>
