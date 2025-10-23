import { Artist } from '@/data/artists';

const CardArtist: React.FC<Artist> = ({name, image}) => {

    return (
        <>
            <article className="flex flex-col justify-center gap-2 w-[200px] h-70 p-3 bg-[#171717] rounded-[10px] hover:bg-[#282828]">
                <img src={image} alt={name} className='w-[100%] rounded-[100px]'/>
                <h3 className="text-white mt-[4%] text-[20px] text-center font-bold ">{name}</h3>
            </article>
        </>
    )
}

export default CardArtist
