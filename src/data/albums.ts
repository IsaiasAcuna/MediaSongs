export interface Album {
  id: number;
  title: string;
  artist: string;
  image: string;
  color: string,
  year: number,
  tracks: Track[]
}

export interface Track {
  id: number;
  title: string;
  duration: number;
  artist: string;
  image: string
}

export const albums: Album[] = [
  { 
    id: 1,
    title: "Mor, No Le Temas a La Oscuridad",
    artist: "Feid", 
    image: "/img/mor.jpg",
    color: "green",
    tracks: [
        {
            id: 1,
            title: "EY CHORY",
            artist: "Feid",
            duration: "3:20",
            image: "/img/mor.jpg",
        },
        {
            id: 2,
            title: "Privilegios",
            artist: "Feid",
            duration: "2:20",
            image: "/img/mor.jpg",
        }
    ]

  },
  { 
    id: 2,
    title: "FERXXO vol.1", 
    artist: "Feid", 
    image: "/img/mor.jpg",
    color: "green",
    tracks: [
        {
            id: 1,
            title: "EY CHORY",
            artist: "Feid",
            duration: "3:20",
            image: "/img/mor.jpg",
        },
        {
            id: 2,
            title: "Privilegios",
            artist: "Feid",
            duration: "2:20",
            image: "/img/mor.jpg",
        }
    ]

  },
  { 
    id: 3,
    title: "She Got Me Like", 
    artist: "NCS", 
    image: "/img/SHE GOT ME LIKE.jpg",
    color: "blue",
    tracks: [
        {
            id: 1,
            title: "EY CHORY",
            artist: "Feid",
            duration: "3:20",
            image: "/img/mor.jpg",
        },
        {
            id: 2,
            title: "Privilegios",
            artist: "Feid",
            duration: "2:20",
            image: "/img/mor.jpg",
        }
    ]

  },
  { 
    id: 4,
    title: "Antes de Ameri", 
    artist: "Duki", 
    image: "https://i.scdn.co/image/ab67616d0000b27397916acfd8f391e5f4198e45",
    color: "red",
    tracks: [
        {
            id: 1,
            title: "EY CHORY",
            artist: "Feid",
            duration: "3:20",
            image: "/img/mor.jpg",
        },
        {
            id: 2,
            title: "Privilegios",
            artist: "Feid",
            duration: "2:20",
            image: "/img/mor.jpg",
        }
    ]

  },
  { 
    id: 5,
    title: "Ameri", 
    artist: "Duki", 
    image: "https://i.scdn.co/image/ab67616d0000b273ee67e1ebdbc7a30772972a48",
    color: "red",
    tracks: [
        {
            id: 1,
            title: "EY CHORY",
            artist: "Feid",
            duration: "3:20",
            image: "/img/mor.jpg",
        },
        {
            id: 2,
            title: "Privilegios",
            artist: "Feid",
            duration: "2:20",
            image: "/img/mor.jpg",
        }
    ]

  },
  { 
    id: 6,
    title: "Desde el Fin del Mundo", 
    artist: "Duki", 
    image: "https://i.scdn.co/image/ab67616d0000b2738505bcb13693070975e4aaf5",
    color: "orange",
    tracks: [
        { 
            id: 1, 
            title: "Sudor y Trabajo", 
            artist: "Duki", 
            duration: "3:01", 
            image: "https://i.scdn.co/image/ab67616d0000b2738505bcb13693070975e4aaf5" 
        },
        { id: 2, title: "Pintao", artist: "Duki, YSY A, Rei", duration: "2:47", image: "https://i.scdn.co/image/ab67616d0000b2738505bcb13693070975e4aaf5" },
        { id: 3, title: "Chico Estrella", artist: "Duki", duration: "2:51", image: "https://i.scdn.co/image/ab67616d0000b2738505bcb13693070975e4aaf5" },
        { id: 4, title: "Volando Bajito", artist: "Duki", duration: "2:15", image: "https://i.scdn.co/image/ab67616d0000b2738505bcb13693070975e4aaf5" },
        { id: 5, title: "Cuanto", artist: "Duki, Lucho SSJ, Farina", duration: "3:11", image: "https://i.scdn.co/image/ab67616d0000b2738505bcb13693070975e4aaf5" },
        { id: 6, title: "Rapido", artist: "Duki", duration: "2:16", image: "https://i.scdn.co/image/ab67616d0000b2738505bcb13693070975e4aaf5" },
        { id: 7, title: "I Don't Know", artist: "Duki", duration: "3:39", image: "https://i.scdn.co/image/ab67616d0000b2738505bcb13693070975e4aaf5" },
        { id: 8, title: "Sol", artist: "Duki, Lara91k", duration: "4:04", image: "https://i.scdn.co/image/ab67616d0000b2738505bcb13693070975e4aaf5" },
        { id: 9, title: "Luna", artist: "Duki, Asan", duration: "3:20", image: "https://i.scdn.co/image/ab67616d0000b2738505bcb13693070975e4aaf5" },
        { id: 10, title: "Malbec", artist: "Duki, Bizarrap", duration: "2:55", image: "https://i.scdn.co/image/ab67616d0000b2738505bcb13693070975e4aaf5" },
        { id: 11, title: "Mi Diablo", artist: "Duki", duration: "3:01", image: "https://i.scdn.co/image/ab67616d0000b2738505bcb13693070975e4aaf5" },
        { id: 12, title: "Fifty Fifty", artist: "Duki, Pablo Chill-E, Obie Wanshot, Julianno Sosa, Neo Pistea, Young Cister", duration: "4:40", image: "https://i.scdn.co/image/ab67616d0000b2738505bcb13693070975e4aaf5" },
        { id: 13, title: "Valentino", artist: "Duki, Tobi", duration: "2:36", image: "https://i.scdn.co/image/ab67616d0000b2738505bcb13693070975e4aaf5" },
        { id: 14, title: "Cascada", artist: "Duki", duration: "3:01", image: "https://i.scdn.co/image/ab67616d0000b2738505bcb13693070975e4aaf5" },
        { id: 15, title: "Ticket", artist: "Duki", duration: "3:01", image: "https://i.scdn.co/image/ab67616d0000b2738505bcb13693070975e4aaf5" },
        { id: 16, title: "Muriéndome", artist: "Duki, KHEA", duration: "2:39", image: "https://i.scdn.co/image/ab67616d0000b2738505bcb13693070975e4aaf5" },
        { id: 17, title: "Ella Es Mi Bitch", artist: "Duki, Pekeño 77, Mesita, 44 Kid, Franux BB", duration: "4:06", image: "https://i.scdn.co/image/ab67616d0000b2738505bcb13693070975e4aaf5" },
        { id: 18, title: "Muero de Fiesta Este Finde", artist: "Duki, CA7RIEL", duration: "3:13", image: "https://i.scdn.co/image/ab67616d0000b2738505bcb13693070975e4aaf5" }
]
  },
  { 
    id: 7,
    title: "Temporada de Reggaeton", 
    artist: "Duki", 
    image: "https://i.scdn.co/image/ab67616d0000b2732cb8f4e4d17041d96d3de7e4",
    color: "red",
        tracks: [
        {
            id: 1,
            title: "EY CHORY",
            artist: "Feid",
            duration: "3:20",
            image: "/img/mor.jpg",
        },
        {
            id: 2,
            title: "Privilegios",
            artist: "Feid",
            duration: "2:20",
            image: "/img/mor.jpg",
        }
    ]
  },
  { 
    id: 8,
    title: "Temporada de Reggaeton 2", 
    artist: "Duki", 
    image: "https://i.scdn.co/image/ab67616d0000b273a9684521d088085362db23ae",
    color: "red",
    year: 2023,
    tracks: [
      { id: 1,
        title: "Amor Bipolar",
        artist: "Duki, Mora", 
        duration: 195, 
        image: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/91/c0/8a/91c08aaa-3b2a-2413-2b33-3531ae292cfa/196925462433.jpg/1200x1200bf-60.jpg",
        audio: `<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/54azU25VdlyMhiqHOOCZeL?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`,
        lyrics: [
          "Pero tú siempre regresas cuando te vas",
          "Es tu naturaleza con mi mente jugar",
          "Sé que verme bien te estresa, un amor bipolar",
          "Pa' mentir tiene' destreza, yo puedo ser igual",
          "",
          "Tú nunca fuiste real, tampoco lo de nosotros"
        ]
      },
      { id: 2, title: "Celosa", artist: "Duki", duration: 237, image: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/91/c0/8a/91c08aaa-3b2a-2413-2b33-3531ae292cfa/196925462433.jpg/1200x1200bf-60.jpg",
        audio: `<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/29DJN0aQmjeLXFg2Djurim?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
       },
      { id: 3, title: "Perreo Bendito", artist: "Duki", duration: 239, image: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/91/c0/8a/91c08aaa-3b2a-2413-2b33-3531ae292cfa/196925462433.jpg/1200x1200bf-60.jpg",
        audio: `<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/56uvG8rHQkvEtbRXK2R8rx?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
       },
      { id: 4, title: "Si Quieren Frontear", artist: "Duki, De La Ghetto, Quevedo", duration: 320, image: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/91/c0/8a/91c08aaa-3b2a-2413-2b33-3531ae292cfa/196925462433.jpg/1200x1200bf-60.jpg" },
      { id: 5, title: "Esto Recién Empieza", artist: "Duki, Emilia", duration: 226, image: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/91/c0/8a/91c08aaa-3b2a-2413-2b33-3531ae292cfa/196925462433.jpg/1200x1200bf-60.jpg" },
      { id: 6, title: "Antes de Perderte", artist: "Duki", duration: 256, image: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/91/c0/8a/91c08aaa-3b2a-2413-2b33-3531ae292cfa/196925462433.jpg/1200x1200bf-60.jpg" },
      { id: 7, title: "La Vuelta", artist: "Duki", duration: 234, image: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/91/c0/8a/91c08aaa-3b2a-2413-2b33-3531ae292cfa/196925462433.jpg/1200x1200bf-60.jpg" },
      { id: 8, title: "Givenchy", artist: "Duki", duration: 302, image: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/91/c0/8a/91c08aaa-3b2a-2413-2b33-3531ae292cfa/196925462433.jpg/1200x1200bf-60.jpg" }
    ],
  },

];