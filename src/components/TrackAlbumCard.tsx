import Image from 'next/image'
import { Track } from '@/data/albums';

const TrackAlbumCard: React.FC<Track> = ({id, title, artist, duration, image, audio, lyrics, handleCardClick}) => {

    function formatDuration(seconds: number): string {
        const min = Math.floor(seconds / 60);
        const sec = seconds % 60;
        return `${min}:${sec.toString().padStart(2, '0')}`;
    }

    return (
        <>
            <article onClick={()=> handleCardClick(audio, lyrics)} className="relative flex gap-3 items-center h-20 p-3 bg-[#00000000] border-b-[1px] border-[#272727] hover:bg-[#282828]">
                <span>
                    <h3 className="text-[#7a7a7a] text-2xl px-3">{id}</h3>
                </span>
                
                <div className="container text-left w-[50%]">
                    <h3 className="text-white text-[20px] font-bold ">{title}</h3>
                    <h3 className="text-[#7a7a7a] font-semibold">{artist}</h3>
                </div>
                <span>
                    <h3 className="text-[#7a7a7a] font-semibold">{formatDuration(duration)}</h3>
                </span>
            </article>

        </>
    )
}

// <img src={image} alt={title} width={60} height={50} className='rounded-[5px]'/>

export default TrackAlbumCard
