import React from 'react'

interface titleProps {
    title: string
}

const TitleSection: React.FC<titleProps> = ( {title}) => {
  return (
    <div className='my-6  lg:m-5'>
      <h2 className='text-white font-bold text-3xl'>{title}</h2>
    </div>
  )
}

export default TitleSection
