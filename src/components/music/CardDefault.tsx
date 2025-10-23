import ButtonPlayCard from '../ui/ButtonPlayCard';
import { Song } from '@/data/singles';

const CardMusic: React.FC<Song> = ({title, artistId, image}) => {

    return (
        <>
            <article className="relative group flex flex-col gap-2 w-40 lg:w-[200px] h-63 lg:h-70 p-3 bg-[#171717] rounded-[10px] hover:bg-[#282828]">
                <img src={image} alt={title} className='rounded-[5px] w-40 h-35 lg:w-70 lg:h-45'/>
                <div className="container text-left">
                    <h3 className="text-white text-[20px] font-bold text-ellipsis overflow-hidden whitespace-nowrap">{title}</h3>
                    <h3 className="text-[#7a7a7a] font-semibold">{artistId}</h3>
                </div> 
                <ButtonPlayCard className='absolute bottom-[35%] right-[10%] z-10 w-12 h-12 p-2 rounded-full bg-green-600 text-black text-2xl opacity-0 translate-y-[10%] transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-green-400 hover:cursor-pointer'/>
            </article>
        </>
    )
}

export default CardMusic
