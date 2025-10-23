
interface SingleItemProps {
    id: number;
    title: string;
    duration: number;
    artistId: string;
    audio: string
    color: string;
    lyrics: string[],
    handleCardClick: (
        audio: string,
        lyrics: string[],
        color: string,
        title: string,) => void;
}

const SingleItem: React.FC<SingleItemProps> = ({id, title, artistId, duration, audio, color, lyrics, handleCardClick}) => {

    function formatDuration(seconds: number): string {
        const min = Math.floor(seconds / 60);
        const sec = seconds % 60;
        return `${min}:${sec.toString().padStart(2, '0')}`;
    }

    return (
        <>
            <article onClick={()=> handleCardClick(audio, lyrics, color, title)} className="relative flex gap-3 items-center justify-around lg:justify-evenly h-20 p-3 bg-[#00000000] border-b-[1px] border-[#272727] hover:bg-[#282828] hover:cursor-pointer">
                <span>
                    <h3 className="text-[#7a7a7a] text-2xl">-</h3>
                </span>
                
                <div className="container text-left w-[60%] lg:w-[70%]">
                    <h3 className="text-white text-[20px] font-bold text-ellipsis overflow-hidden whitespace-nowrap">{title}</h3>
                    <h3 className="text-[#7a7a7a] font-semibold text-ellipsis overflow-hidden whitespace-nowrap">{artistId}</h3>
                </div>
                <span>
                    <h3 className="text-[#7a7a7a] font-semibold">{formatDuration(duration)}</h3>
                </span>
            </article>

        </>
    )
}

// <img src={image} alt={title} width={60} height={50} className='rounded-[5px]'/>

export default SingleItem
