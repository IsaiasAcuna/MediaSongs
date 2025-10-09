import { DM_Sans } from "next/font/google";
import FeedLeft from "@/components/FeedLeft";
import FeedRight from "@/components/FeedRight";
import Header from "@/components/Header";


const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${dmSans.className} font-sans`} 
    >

    <Header />

      <main className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-2 mx-auto max-w-[90%] h-[93dvh]">

        <FeedLeft />
        <FeedRight />
      </main>
    </div>
  );
}
