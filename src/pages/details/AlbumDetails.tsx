import { useRouter } from "next/router";
import Head from "next/head";
import { DM_Sans } from "next/font/google";
import { albums } from "@/data/albums";
import Header from "@/components/layout/Header";
import { artists } from "@/data/artists";
import Link from "next/link";
import { useState } from "react";
import Reproductor from "@/components/music/Reproductor";
import TrackList from "@/components/music/TrackList";
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

const AlbumDetails = () => {
  const router = useRouter();
    const { id } = router.query;

    const album = albums.find((album) => album.id === Number(id));

    const [trackState, setTrackState] = useState<TrackState>({
        audio: '',
        lyrics: [],
        color: '',
        title: '',
    });

    if (!album) return <div className="text-center text-3xl text-white">El Album no fue encontrado</div>;

    const {title, artistId, image, color, year, tracks} = album;

    const artistAlbum = artists.find((artist) => artist.name === album?.artistId);

    const albumDuration = album?.tracks.reduce((acc, track) => acc + track.duration, 0);


    type AudioHandler = (audio: string, lyrics: string[], color: string, title: string) => void;
    
    const handleCardClick: AudioHandler = (audio, lyrics, color, title) => {
        setTrackState({
            audio,
            lyrics,
            color,
            title,
        });
    }

    if (!trackState.audio) return <p>No hay audio seleccionado</p>;

    function formatDuration(seconds: number): string {
        const min = Math.floor(seconds / 60);
        const sec = seconds % 60;
        return `${min}:${sec.toString().padStart(2, '0')}`;
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

                        <section className="overflow-auto scrollbar-hide scrollbar-personalizado">

                            <section style={{ backgroundColor: `${color}`}} className="h-[50dvh] lg:h-[40dvh] flex flex-col justify-center lg:gap-[5%] lg:flex-row items-center bg-gradient-to-b to-[#121212]">

                                <Image src={image} alt={title} width={300} height={300} className="rounded-lg" />

                                <span className="flex flex-col text-center items-center lg:items-start w-[70%] lg:w-[60%]">

                                    <h4 className="font-bold lg:text-2xl text-gray-300 mt-[5%] lg:ml-0">Álbum</h4>

                                    <h1 className="lg:text-6xl  lg:text-left text-2xl font-bold lg:tracking-[-5px] text-white my-[2%]">{title}</h1>

                                    <span className="flex flex-row items-center lg:mt-[3%]">

                                        <Image src={artistAlbum?.image || '/Spotify-icono.png'} alt={artistAlbum?.name || 'Unknown'} width={30} height={30} className="rounded-[50%]"/>

                                        <p className="pl-2 font-bold text-gray-200 hover:cursor-pointer hover:underline">
                                            <Link href={`/artist/${artistAlbum?.id}`}>
                                                {artistAlbum?.name}
                                            </Link>
                                        </p>

                                        <p className="px-2 font-bold text-gray-400">
                                            · {year} | {formatDuration(albumDuration)}
                                        </p>

                                    </span>
                                </span>
                            </section>

                            <TrackList handleCardClick={handleCardClick} tracks={tracks} color={color} />

                        </section>

                        <Reproductor trackState={trackState}  />
                    </main>

                </div>

            </>
    )
}

export default AlbumDetails
