import React from 'react'
import CardMusic from '../music/CardDefault';
import TitleSection from '../ui/TitleSection';
import {Responsive} from '../ui/ResponsiveScroll';
import { songs } from '@/data/singles';
import { artists } from '@/data/artists';
import { albums } from '@/data/albums';
import CardArtist from '../music/CardArtist';
import Link from 'next/link';


const FeedLeft = () => {
  return (
    <section id='fedd' className='bg-[#121212] rounded-[10px] overflow-auto p-5 pb-[20dvh] scrollbar-personalizado'>
        <section id='singles'>
            <TitleSection title='Singles' />
            <Responsive>
                {songs.map((song, index) => 
                <Link href={`/song/${song.id}`}>
                    <CardMusic key={index} {...song} />
                </Link>)}
            </Responsive>
        </section>

        <section id='artist'>
            <TitleSection title='Artistas' />
            <Responsive>        
                {artists.map((artist, index) => 
                <Link href={`/artist/${artist.id}`}>
                    <CardArtist key={index} {...artist} />
                </Link>)}
            </Responsive>
            
        </section>

        <section id='Albumnes'>
            <TitleSection title='Albumnes' />
            <Responsive>
                {albums.map((album, index) => 
                <Link href={`/album/${album.id}`}>
                    <CardMusic key={index} {...album} />
                </Link>)}
            </Responsive>
            
        </section>

    </section>
  )
}

export default FeedLeft
