import { Artist } from '@/data/artists';
import Image from 'next/image';

const CardArtist: React.FC<Artist> = ({name, image}) => {

    return (
        <>
            <article className="flex flex-col justify-center gap-2 w-[200px] h-70 p-3 bg-[#171717] rounded-[10px] hover:bg-[#282828]">
                <Image src={image} alt={name} width={200} height={200} className='rounded-[100px]'/>
                <h3 className="text-white mt-[4%] text-[20px] text-center font-bold ">{name}</h3>
            </article>
        </>
    )
}

export default CardArtist
