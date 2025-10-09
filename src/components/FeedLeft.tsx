import React from 'react'
import CardMusic from './CardMusic';
import TitleSection from './ui/TitleSection';
import {Responsive} from './carrousel/ResponsiveScroll';
import { songs } from '@/data/songs';
import { artists } from '@/data/artists';
import CardArtist from './CardArtist';
import Link from 'next/link';
import { albums } from '@/data/albums';


const FeedLeft = () => {
  return (
    <section id='fedd' className='bg-[#121212] rounded-[10px] overflow-auto  p-5'>
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
