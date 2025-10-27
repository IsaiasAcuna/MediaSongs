import { DM_Sans } from "next/font/google";
import FeedLeft from "@/components/layout/SectionMusic";
import Header from "@/components/layout/Header";
import Reproductor from "@/components/music/Reproductor";
import { useState } from "react";

interface TrackState {
    audio: string;
    lyrics: string[];
    color: string;
    title: string;
}

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export default function Home() {

      const [trackState, setTrackState] = useState<TrackState>({
          audio: '',
          lyrics: [],
          color: '',
          title: '',
      });

  return (
    <div
      className={`${dmSans.className} font-sans`} 
    >

    <Header />

      <main className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-2 mx-auto lg:max-w-[90%] h-[93dvh]">

        <FeedLeft />
        <Reproductor trackState={trackState} />
      </main>
    </div>
  );
}
