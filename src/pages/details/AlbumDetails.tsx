import { useRouter } from "next/router";
import Head from "next/head";
import FeedRight from "@/components/FeedRight";
import { DM_Sans } from "next/font/google";
import { albums } from "@/data/albums";
import TrackAlbumCard from "@/components/TrackAlbumCard";
import Header from "@/components/Header";
import { artists } from "@/data/artists";
import Link from "next/link";
import { useState } from "react";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const AlbumDetails = () => {
  const router = useRouter();
    const { id } = router.query;

    const element = albums.find((element) => element.id === Number(id));
    if (!element) return <div>NO hay un pingo</div>;

    const artistAlbum = artists.find((artist) => artist.name === element?.artist);

    const tracksAlbum = element?.tracks.length

    const albumDuration = element?.tracks.reduce((acc, track) => acc + track.duration, 0);

    const [trackAudio, setTrackAudio] = useState<any>([])
    const [lyrics, setLyrics] = useState<any>([])
    const [color, setColor] = useState<any>([])

    const handleCardClick = (audio, lyrics, color) => {

        const iframeTrack = audio
        const lyricsTrack = lyrics
        const colorTrack = color

        setTrackAudio(iframeTrack)
        setLyrics(lyricsTrack)
        setColor(colorTrack);
    };

    function formatDuration(seconds: number): string {
        const min = Math.floor(seconds / 60);
        const sec = seconds % 60;
        return `${min} min ${sec.toString().padStart(2, '0')} segundos`;
    }

    return (
        <>

                <Head>
                    <title>{element.title} - {element.artist}</title>
                </Head>

                <div
                    className={`${dmSans.className} font-sans`} 
                >

                    <Header />

                    <main className="bg-[#121212] grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-2 mx-auto lg:max-w-[90%] h-[93dvh]">

                        <section className=" overflow-auto scrollbar-hide">
                            <section style={{ backgroundColor: `${element.color}`}} className="h-[40dvh] flex items-center bg-gradient-to-b to-[#121212]">
                                <img src={element.image} alt={element.title} className="w-30 h-30 lg:w-70 lg:h-70 ml-[5%] rounded-lg" />
                                <span className="ml-[3%]">
                                    <h4 className="font-bold text-white mb-[1%]">Álbum</h4>
                                    <h1 className="lg:text-6xl font-bold tracking-[-5px] text-white mb-[1%]">{element.title}</h1>
                                    <span className="mt-[5%] flex flex-col lg:flex-row lg:items-center">
                                        <img src={artistAlbum?.image} alt={artistAlbum?.name} className="rounded-[50%] w-8 h-8"/>
                                        <p className="pl-2 font-bold text-gray-200 hover:cursor-pointer hover:underline">
                                            <Link href={`/artist/${artistAlbum?.id}`}>
                                                {artistAlbum?.name}
                                            </Link>
                                        </p>
                                        <p className="px-2 font-bold text-gray-400">
                                            · {element.year} · {tracksAlbum} cancione, {formatDuration(albumDuration)}
                                        </p>
                                    </span>
                                </span>
                            </section>
                            <section className='max-w-[95%] mx-auto h-[53dvh]'>
                                {element.tracks.map((track, index) => (
                                    <TrackAlbumCard key={index} {...track} handleCardClick={handleCardClick} />
                                    ))
                                }
                            </section>
                        </section>

                        <FeedRight trackAudio={trackAudio} lyrics={lyrics} />
                    </main>

                </div>

            </>
    )
}

export default AlbumDetails
