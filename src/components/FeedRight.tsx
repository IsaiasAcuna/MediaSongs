import React from 'react'

import { useState } from "react";
import { useMediaQuery } from "react-responsive";

const FeedRight = ({ trackAudio, lyrics }) => {

	const [expandido, setExpandido] = useState(false);
	const esMobile = useMediaQuery({ maxWidth: 768 }); // Tailwind md breakpoint

	return (
		<section className={`w-[100%] fixed bottom-0 md:static md:bottom-auto overflow-hidden`}>
			<div
				onClick={() => esMobile && setExpandido(!expandido)}
				className={`text-white lg:h-[93dvh] overflow-hidden transition-all duration-200 ease-in-out cursor-pointer 
					${expandido ? "h-[93dvh] bg-[#131313]" : "h-15 bg-[#121212]"} `}
			>
				<div className={`p-4 ${expandido ? "overflow-auto scrollbar-hide h-[100%]" : "h-[auto]" }`}>

					{esMobile && (
						<h2 className="mb-8 text-lg text-center font-bold">
							{expandido ? "Cierre " : "Abre "} el reproductor
						</h2>
					)}

					{!esMobile && <h2 className="mb-8 text-lg text-center font-bold">
							No se esta repoduciendo
						</h2>}
					
					<div dangerouslySetInnerHTML={{ __html: trackAudio }} />

					{!trackAudio && <h2 className="my-8 text-4xl font-bold">
						Letras
					</h2>}
					
					<p className="mt-2 text-3xl font-semibold">
						{lyrics.map((line, i) => (
							<p className='mb-5' key={i}>{line}</p>
						))}
					</p>
				</div>
			</div>
		</section>
	)
}

export default FeedRight
