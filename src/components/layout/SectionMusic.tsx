import React from 'react'
import CardMusic from '../music/CardDefault';
import TitleSection from '../ui/TitleSection';
import { songs } from '@/data/singles';
import { artists } from '@/data/artists';
import { albums } from '@/data/albums';
import {Responsive} from '../ui/ResponsiveScroll';
import CardArtist from '../music/CardArtist';
import CardDefaultAlbum from '../music/CardDefaultAlbum';
import Link from 'next/link';


const FeedLeft = () => {
  return (
    <section id='fedd' className='bg-[#121212] rounded-[10px] overflow-auto p-5 pb-[20dvh] scrollbar-personalizado'>
        <section id='singles'>
            <TitleSection title='Singles' />
            <Responsive>
                {songs.map((song) => 
                <Link key={song.id} href={`/song/${song.id}`}>
                    <CardMusic {...song} />
                </Link>)}
            </Responsive>
        </section>

        <section id='artist'>
            <TitleSection title='Artistas' />
            <Responsive>        
                {artists.map((artist) => 
                <Link key={artist.id} href={`/artist/${artist.id}`}>
                    <CardArtist {...artist} />
                </Link>)}
            </Responsive>
            
        </section>

        <section id='Albumnes'>
            <TitleSection title='Albumnes' />
            <Responsive>
                {albums.map((album) => 
                <Link key={album.id} href={`/album/${album.id}`}>
                    <CardDefaultAlbum {...album} />
                </Link>)}
            </Responsive>
            
        </section>

    </section>
  )
}

export default FeedLeft
