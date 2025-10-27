import { useRouter } from "next/router";
import Head from "next/head";
import { songs } from "@/data/singles";
import { DM_Sans } from "next/font/google";
import { useState } from "react";
import Header from "@/components/layout/Header";
import Link from "next/link";
import { artists } from "@/data/artists";
import SingleItem from "@/components/music/SingleItem";
import Reproductor from "@/components/music/Reproductor";
import Image from "next/image";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

interface TrackState {
    audio: string;
    lyrics: string[];
    color: string;
    title: string;
}

const SongDetails = () => {

    const router = useRouter();
    const { id } = router.query;

    const single = songs.find((element) => element.id === Number(id));

    const [trackState, setTrackState] = useState<TrackState>({
            audio: '',
            lyrics: [],
            color: '',
            title: '',
        });

    if (!single) return <div className="text-center text-3xl text-white">El Tema no fue encontrado</div>;

    const {title, artistId, image, color, year} = single

    const artistSingle = artists.find((artist) => artist.name === single?.artistId);


    type AudioHandler = (audio: string, lyrics: string[], color: string, title: string) => void;
    
    const handleCardClick: AudioHandler = (audio, lyrics, color, title) => {
        setTrackState({
            audio,
            lyrics,
            color,
            title,
        });
    }

    return (
        <>

            <Head>
                <title>{title} - {artistId}</title>
            </Head>

            <div
                className={`${dmSans.className} font-sans`} 

            >
                <Header />

                <main className="bg-[#121212] grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-2 mx-auto lg:max-w-[90%] h-[93dvh]">

                    <section className="overflow-auto scrollbar-hide scroll-personalizado">

                        <section style={{ backgroundColor: `${color}`}} className="h-[50dvh] lg:h-[40dvh] flex flex-col justify-center lg:gap-[5%] lg:flex-row items-center bg-gradient-to-b to-[#121212]">

                            <figure className="relative w-30 h-30 lg:w-70 lg:h-70">
                                <Image src={image} alt={title} fill className="rounded-lg" />
                            </figure>

                            <span className="flex flex-col text-center items-center lg:items-start w-[70%] lg:w-[60%]">

                                <h4 className="font-bold lg:text-2xl text-gray-300 mt-[5%] lg:ml-0">Single</h4>

                                <h1 className="lg:text-6xl  lg:text-left text-2xl font-bold lg:tracking-[-5px] text-white my-[2%]">{title}</h1>

                                <span className="flex flex-row items-center lg:mt-[3%]">

                                    <Image src={artistSingle?.image || '/Spotify-icono.png'} alt={artistSingle?.name || 'Unknown'} width={30} height={30} className="rounded-[50%]"/>

                                    <p className="pl-2 font-bold text-gray-200 hover:cursor-pointer hover:underline">
                                        <Link href={`/artist/${artistSingle?.id}`}>
                                            {artistSingle?.name}
                                        </Link>
                                    </p>

                                    <p className="px-2 font-bold text-gray-400">
                                        · {year} 
                                    </p>

                                </span>
                            </span>
                        </section>

                        <SingleItem handleCardClick={handleCardClick} {...single} color={color} />

                    </section>

                    <Reproductor trackState={trackState} />
                </main>
            </div>
        </>
    )
}

export default SongDetails