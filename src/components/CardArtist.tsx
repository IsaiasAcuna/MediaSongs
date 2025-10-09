import Image from 'next/image'
import React from 'react'
import { Artist } from '@/data/artists';
import ButtonFollow from './ui/ButtonFollow';

const CardArtist: React.FC<Artist> = ({name, image, color}) => {

    return (
        <>
            <article className="flex flex-col justify-center gap-2 w-[200px] h-70 p-3 bg-[#171717] rounded-[10px] hover:bg-[#282828]">
                <Image src={image} alt={name} width={200} height={200} className='rounded-[100px]'/>
                <h3 className="text-white text-[20px] text-center font-bold ">{name}</h3>
                <ButtonFollow />
            </article>
        </>
    )
}

export default CardArtist
