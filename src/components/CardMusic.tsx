import Image from 'next/image'
import React from 'react'
import ButtonPlayCard from './ui/ButtonPlayCard';
import { Song } from '@/data/songs';

const CardMusic: React.FC<Song> = ({title, artist, image}) => {

    return (
        <>
            <article className="relative group flex flex-col gap-2 w-[200px] h-70 p-3 bg-[#171717] rounded-[10px] hover:bg-[#282828]">
                <img src={image} alt={title} width={200} height={200} className='rounded-[5px]'/>
                <div className="container text-left">
                    <h3 className="text-white text-[20px] font-bold text-ellipsis overflow-hidden whitespace-nowrap">{title}</h3>
                    <h3 className="text-[#7a7a7a] font-semibold">{artist}</h3>
                </div> 
                <ButtonPlayCard className='absolute bottom-[35%] right-[10%] z-10 w-12 h-12 p-2 rounded-full bg-green-600 text-black text-2xl opacity-0 translate-y-[10%] transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-green-400 hover:cursor-pointer'/>
            </article>
        </>
    )
}

export default CardMusic
