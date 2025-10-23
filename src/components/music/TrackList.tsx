import React from 'react'
import TrackItem from './TrackItem'
import { Track } from '@/data/albums'

interface TrackListProps {
    tracks: Track[],
        handleCardClick: (
        audio: string,
        lyrics: string[],
        color: string,
        title: string,) => void;
    color: string,
}

const TrackList = ({ tracks, handleCardClick, color }: TrackListProps) => {

    return (
        <section className='max-w-[95%] mx-auto mb-[9dvh]'>
            {tracks.map((track, index) => (
                <TrackItem key={index} {...track} handleCardClick={handleCardClick} color={color} />
                ))
            }
        </section>
    )
}

export default TrackList
