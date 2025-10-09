import { useRouter } from "next/router";
import Head from "next/head";
import CardVertical from "@/components/CardVertical";
import { songs } from "@/data/songs";
import FeedRight from "@/components/FeedRight";
import { DM_Sans } from "next/font/google";
import { artists } from "@/data/artists";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});


export default function SectionDetails() {

    const router = useRouter();
    const { id } = router.query;

    const element = songs.find((element) => element.id === Number(id)) || artists.find((element) => element.id === Number(id));
    if (!element) return console.log('nashei');
    
    
    return (

        <>

            <Head>
                <title>{element.title || false} - {element.artist}</title>
            </Head>

            <div
                className={`${dmSans.className} font-sans`} 
            >

            <main className="bg-[#121212] grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-2 mx-auto max-w-[90%] h-[100dvh]">

                <section>
                    <section style={{ backgroundColor: `${element.color}`}} className="h-[40dvh] flex items-center bg-gradient-to-b to-[#121212]">
                        <img src={element.image} alt={element.title} className="w-70 h-70 ml-[5%] rounded-lg" />
                        <span className="ml-[3%]">
                            <h1 className="text-6xl font-bold text-white mb-[1%]">{element.title || element.artist}</h1>
                            <h3 className="text-4xl font-bold text-gray-500">{element.artist}</h3>
                        </span>
                    </section>
                    <CardVertical {...element} />
                </section>

                <FeedRight />
            </main>


            </div>

        </>

    );
}