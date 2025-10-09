import Image from 'next/image'
import React from 'react'
import { Song } from '@/data/songs';

const CardVertical: React.FC<Song> = ({title, artist, image}) => {




    return (
        <>
            <article className="relative flex gap-3 items-center h-25 p-3 bg-[#00000000] rounded-[10px] hover:bg-[#282828]">
                <Image src={image} alt={title} width={70} height={50} className='rounded-[5px]'/>
                <div className="container text-left w-[50%]">
                    <h3 className="text-white text-[20px] font-bold ">{title}</h3>
                    <h3 className="text-[#7a7a7a] font-semibold">{artist}</h3>
                </div>
            </article>

        </>
    )
}

export default CardVertical
