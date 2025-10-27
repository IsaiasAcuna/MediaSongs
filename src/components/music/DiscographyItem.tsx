import Image from "next/image";

interface DiscographyItemProps {
    title: string;
    artistId: string;
    duration: number;
    image: string;
}

const DiscographyItem: React.FC<DiscographyItemProps> = ({title, artistId, duration, image}) => {

    function formatDuration(seconds: number): string {
        const min = Math.floor(seconds / 60);
        const sec = seconds % 60;
        return `${min}:${sec.toString().padStart(2, '0')}`;
    }

    return (
        <>
            <article className="relative flex justify-around gap-3 items-center h-20 p-3 bg-[#00000000] border-b-[1px] border-[#272727] hover:bg-[#282828]">
                
                <Image src={image} alt={title} width={60} height={60} className='rounded-[5px]'/>
                
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

export default DiscographyItem
