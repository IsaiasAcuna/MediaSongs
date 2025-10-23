import { useRouter } from "next/router";
import Head from "next/head";
import { DM_Sans } from "next/font/google";
import { artists } from "@/data/artists";
import { songs } from "@/data/singles";
import { albums } from "@/data/albums";
import Header from "@/components/layout/Header";
import { useState } from "react";
import Link from "next/link";
import Reproductor from "@/components/music/Reproductor";
import ButtonFollow from "@/components/ui/ButtonFollow";
import DiscographyItem from "@/components/music/DiscographyItem";

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

const ArtistDetails = () => {
    const router = useRouter();
    const { id } = router.query;

    const element = artists.find((element) => element.id === Number(id)) || artists.find((element) => element.id === Number(id));
    if (!element) return <div>NO hay un pingo</div>;

    const artistSingles = songs.filter((song) => song.artistId === element.name);

    const artistAlbumnes = albums.filter((album) => album.artistId === element.name);

        const [trackState, setTrackState] = useState<TrackState>({
            audio: '',
            lyrics: [],
            color: '',
            title: '',
        });

    return (
        <>

                <Head>
                    <title>{element.name}</title>
                </Head>

                <div
                    className={`${dmSans.className} font-sans`} 
                >

                    <Header />

                    <main className="bg-[#121212] grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-2 mx-auto lg:max-w-[90%] h-[93dvh]">

                        <section className="overflow-auto scrollbar-hide scroll-personalizado">

                            <section style={{ backgroundColor: `${element.color}`}} className="h-[50dvh] lg:h-[40dvh] flex flex-col justify-center lg:gap-[5%] lg:flex-row items-center bg-gradient-to-b to-[#121212]">

                                <img src={element.image} alt={element.name} className="w-30 h-30 lg:w-70 lg:h-70 rounded-lg" />

                                <span className="flex flex-col text-center items-center lg:items-start w-[60%]">

                                    <h4 className="font-bold text-gray-300 mt-[5%] lg:ml-0">Artista</h4>

                                    <h1 className="lg:text-6xl  lg:text-left text-2xl font-bold lg:tracking-[-5px] text-white mb-[1%]">{element.name}</h1>

                                    <ButtonFollow />

                                </span>
                            </section>

                            <section className='max-w-[95%] mx-auto my-[3dvh]'>

                                <h4 className="font-bold text-3xl text-gray-300 my-[2%] lg:ml-0">Singles</h4>

                                {artistSingles.map((single, index) => (
                                        <DiscographyItem key={index} {...single} />
                                    ))
                                }
                            </section>
                            <section className='max-w-[95%] mx-auto my-[3dvh]'>
                                <h4 className="font-bold text-3xl text-gray-300 my-[2%] lg:ml-0">Albums</h4>

                                {artistAlbumnes.map((album, index) => (
                                        <Link href={`/album/${album.id}`}>
                                            <DiscographyItem key={index} {...album} />
                                        </Link>
                                    ))
                                }
                                
                            </section>
                        
                        </section>

                        <Reproductor trackState={trackState} />
                    </main>

                </div>

            </>
    )
}

export default ArtistDetails
