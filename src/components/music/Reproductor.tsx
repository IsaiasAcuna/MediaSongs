import React from 'react'

import { useState } from "react";
import { useMediaQuery } from "react-responsive";

interface ReproductorProps {
	trackState: TrackState;
}

interface TrackState {
    audio: string;
    lyrics: string[];
    color: string;
    title: string;
}

const Reproductor: React.FC<ReproductorProps> = ({ trackState }) => {

	const [expandido, setExpandido] = useState(false);
	const esMobile = useMediaQuery({ maxWidth: 768 }); // Tailwind md breakpoint

	if (!trackState) return null

	const { audio, lyrics, color, title } = trackState

	console.log(trackState);

		return (
			<section className={`w-[100%] fixed bottom-0 md:static md:bottom-auto overflow-hidden`}>
				<div
					onClick={() => esMobile && setExpandido(!expandido)}
					className={`text-white lg:h-[93dvh] overflow-hidden transition-all duration-250 ease-in-out 
					${expandido ? "h-[93dvh]" : "h-15"} `}
					style={ { backgroundColor: expandido ? '#131313' : `${color}`, borderRadius: expandido ? '0' : '20px' } }
				>
					<div className={`p-4 ${expandido ? "overflow-auto scrollbar-hide h-[100%]" : "h-[auto]"}`}>

						<h2 className="mb-8 text-lg text-center font-bold">
							{title ? `Reproduciendo ${title}` : 'Reproductor'}
						</h2>

						{audio ? (
							<div dangerouslySetInnerHTML={{ __html: audio }} />
						) : (
								<div>Audio no disponible</div>
							)}

						<h2 className="text-3xl my-8 font-bold">
							Letra
						</h2>

						{lyrics ? lyrics.map((line, i) => (
								<p className='mb-5 text-2xl font-semibold' key={i}>{line}</p>
						)) : <h2>No disponibles</h2>}
						
					</div>
				</div>
			</section>
		)
	}

	export default Reproductor

	// {lyrics.map((line, i) => (
	//						<p className='mb-5 text-3xl font-semibold' key={i}>{line}</p>
	
// ))}


// <div dangerouslySetInnerHTML={{ __html: track }} />
