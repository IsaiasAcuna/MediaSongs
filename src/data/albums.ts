export interface Album {
  id: number;
  title: string;
  artistId: string;
  image: string;
  color: string,
  duration: number, // seconds
  year: number,
  tracks: Track[]
}

export interface Track {
  id: number;
  title: string;
  duration: number;
  artistId: string;
  audio: string,
  lyrics: string[]
}

export const albums: Album[] = [
  { 
    id: 1,
    title: "Mor, No Le Temas a La Oscuridad",
    artistId: "Feid", 
    image: "/img/mor.jpg",
    year: 2023,
    color: "green",
    duration: 2718,
    tracks: [
      { id: 1, title: "FERXXO 30", artistId: "Feid", duration: 180 },
      { id: 2, title: "VOL 2", artistId: "Feid", duration: 176 },
      { id: 3, title: "VENTE CONMIGO", artistId: "Feid", duration: 190 },
      { id: 4, title: "Niña Bonita", artistId: "Feid, Sean Paul", duration: 200 },
      { id: 5, title: "GANGSTERS Y PISTOLAS", artistId: "Feid, Ñengo Flow", duration: 185 },
      { id: 6, title: "FERXXO 151", artistId: "Feid, ICON", duration: 178 },
      { id: 7, title: "BUBALU", artistId: "Feid, Rema", duration: 195 },
      { id: 8, title: "RITMO DE MEDALLO", artistId: "Feid, Ryan Castro", duration: 188 },
      { id: 9, title: "FERXXO EDITION", artistId: "Feid", duration: 182 },
      { id: 10, title: "NX TX SIENTAS SOLX", artistId: "Feid", duration: 174 },
      { id: 11, title: "LUCES DE TECNO", artistId: "Feid", duration: 180 },
      { id: 12, title: "EY CHORY", artistId: "Feid", duration: 177 },
      { id: 13, title: "VELOCIDAD CRUCERO", artistId: "Feid", duration: 183 },
      { id: 14, title: "ROMÁNTICOS DE LUNES", artistId: "Feid", duration: 190 },
      { id: 15, title: "el único tema del ferxxo", artistId: "Feid, Young Cister, Pailita", duration: 186 },
      { id: 16, title: "PRIVILEGIOS", artistId: "Feid, Cupido", duration: 179 },
    ]

  },
  { 
    id: 2,
    title: "TRUE", 
    artistId: "Avicii", 
    image: "/img/true.jpeg",
    year: 2015,
    color: "gray",
    duration: 2718,
    tracks: [
      {
        id: 1,
        title: "Wake Me Up",
        artistId: "Avicii, Aloe Blacc",
        duration: 247,
        image: "/img/true/wake.jpg",
        audio: '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/0nrRP2bk19rLc0orkWPQk2?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      },
      {
        id: 2,
        title: "You Make Me",
        artistId: "Avicii, Salem Al Fakir",
        duration: 213,
        image: "/img/true/youmake.jpg",
        audio: '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/52RK8UVEDgUAgpecOpTQM3?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      },
      {
        id: 3,
        title: "Hey Brother",
        artistId: "Avicii, Dan Tyminski",
        duration: 248,
        image: "/img/true/heybrother.jpg",
        audio: '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/4lhqb6JvbHId48OUJGwymk?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      },
      {
        id: 4,
        title: "Addicted to You",
        artistId: "Avicii, Audra Mae",
        duration: 122,
        image: "/img/true/addicted.jpg",
        audio: '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/4eDYMhIin1pSLIG96f1aD0?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      },
      {
        id: 5,
        title: "Dear Boy",
        artistId: "Avicii, MØ",
        duration: 213,
        image: "/img/true/dearboy.jpg",
        audio: '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/4yTeQK2XThWYeEW8D72XmU?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
        lyrics: ["Oh dear boy, it's so hollow without you",
                  "In a world with everything but it won't do",
                  "Oh dear boy, I wanna follow you",
                  "You're a wild boy, I am a wild girl too",
                  "Oh dear boy, so shallow in the blue", 
                  "It's our time for everything and I call you"]
      },
      {
        id: 6,
        title: "Liar Liar",
        artistId: "Avicii, Blondfire",
        duration: 178,
        image: "/img/true/liar.jpg",
      },
      {
        id: 7,
        title: "Shame on Me",
        artistId: "Avicii",
        duration: 210,
        image: "/img/true/shame.jpg",
      },
      {
        id: 8,
        title: "Lay Me Down",
        artistId: "Avicii, Adam Lambert, Nile Rodgers",
        duration: 215,
        image: "/img/true/lay.jpg",
      },
      {
        id: 9,
        title: "Hope There's Someone",
        artistId: "Avicii, Linnea Henriksson",
        duration: 236,
        image: "/img/true/hope.jpg",
      },
      {
        id: 10,
        title: "Heart Upon My Sleeve",
        artistId: "Avicii, Dan Reynolds",
        duration: 240,
        image: "/img/true/heart.jpg",
      },
    ]

  },
  { 
    id: 3,
    title: "AVĪCI (01)", 
    artistId: "Avicii", 
    image: "/img/avicii-01.jpeg",
    year: 2017,
    color: "black",
    duration: 2718,
    tracks: [
      {
        id: 1,
        title: "Friend of Mine",
        artistId: "Avicii, Vargas & Lagola",
        duration: 159,
        image: "/img/avicii01/friend.jpg",
        audio: '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/0nrRP2bk19rLc0orkWPQk2?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'
      },
      {
        id: 2,
        title: "Lonely Together",
        artistId: "Avicii, Rita Ora",
        duration: 181,
        image: "/img/avicii01/lonely.jpg",
      },
      {
        id: 3,
        title: "You Be Love",
        artistId: "Avicii, Billy Raffoul",
        duration: 207,
        image: "/img/avicii01/youbelove.jpg",
      },
      {
        id: 4,
        title: "Without You",
        artistId: "Avicii, Sandro Cavazza",
        duration: 181,
        image: "/img/avicii01/withoutyou.jpg",
      },
      {
        id: 5,
        title: "What Would I Change It To",
        artistId: "Avicii, AlunaGeorge",
        duration: 185,
        image: "/img/avicii01/change.jpg",
      },
      {
        id: 6,
        title: "So Much Better (Avicii Remix)",
        artistId: "Sandro Cavazza",
        duration: 156,
        image: "/img/avicii01/somuchbetter.jpg",
      },
    ]
  },
  { 
    id: 4,
    title: "nadie sabe lo que va a pasar mañana", 
    artistId: "Bad Bunny", 
    image: "https://i.scdn.co/image/ab67616d0000b2732ea1f035463d11e1fc3b193d",
    year: 2023,
    color: "#CCA26E",
    tracks: [
      { id: 1, title: "NADIE SABE", artistId: "Bad Bunny", duration: 180, image: "/img/nadie-sabe.jpg" },
      { id: 2, title: "MONACO", artistId: "Bad Bunny", duration: 200, image: "/img/monaco.jpg" },
      { id: 3, title: "FINA", artistId: "Bad Bunny & Young Miko", duration: 185, image: "/img/fina.jpg" },
      { id: 4, title: "HIBIKI", artistId: "Bad Bunny & Mora", duration: 190, image: "/img/hibiki.jpg" },
      { id: 5, title: "MR. OCTOBER", artistId: "Bad Bunny", duration: 175, image: "/img/mr-october.jpg" },
      { id: 6, title: "CYBERTRUCK", artistId: "Bad Bunny", duration: 165, image: "/img/cybertruck.jpg" },
      { id: 7, title: "VOU 787", artistId: "Bad Bunny", duration: 170, image: "/img/vou-787.jpg" },
      { id: 8, title: "SEDA", artistId: "Bad Bunny & Bryant Myers", duration: 180, image: "/img/seda.jpg" },
      { id: 9, title: "GRACIAS POR NADA", artistId: "Bad Bunny", duration: 160, image: "/img/gracias.jpg" },
      { id: 10, title: "TELEFONO NUEVO", artistId: "Bad Bunny & Luar La L", duration: 175, image: "/img/telefono-nuevo.jpg" },
      { id: 11, title: "BABY NUEVA", artistId: "Bad Bunny", duration: 170, image: "/img/baby-nueva.jpg" },
      { id: 12, title: "MERCEDES CAROTA", artistId: "Bad Bunny & YOVNGCHIMI", duration: 180, image: "/img/mercedes-carota.jpg" },
      { id: 13, title: "LOS PITS", artistId: "Bad Bunny", duration: 165, image: "/img/los-pits.jpg" },
      { id: 14, title: "VUELVE CANDY B", artistId: "Bad Bunny", duration: 170, image: "/img/vuelve-candy.jpg" },
      { id: 15, title: "BATICANO", artistId: "Bad Bunny", duration: 175, image: "/img/baticano.jpg" },
      { id: 16, title: "NO ME QUIERO CASAR", artistId: "Bad Bunny", duration: 160, image: "/img/no-me-quiero-casar.jpg" },
      { id: 17, title: "WHERE SHE GOES", artistId: "Bad Bunny", duration: 180, image: "/img/where-she-goes.jpg" },
      { id: 18, title: "THUNDER Y LIGHTNING", artistId: "Bad Bunny & Eladio Carrión", duration: 185, image: "/img/thunder-lightning.jpg" },
      { id: 19, title: "PERRO NEGRO", artistId: "Bad Bunny & Feid", duration: 190, image: "/img/perro-negro.jpg" },
      { id: 20, title: "EUROPA :)", artistId: "Bad Bunny", duration: 170, image: "/img/europa.jpg" },
      { id: 21, title: "ACHO PR", artistId: "Bad Bunny, Arcángel, De La Ghetto & Ñengo Flow", duration: 200, image: "/img/acho-pr.jpg" },
      { id: 22, title: "UN PREVIEW", artistId: "Bad Bunny", duration: 175, image: "/img/un-preview.jpg" }
    ]

  },
  { 
    id: 5,
    title: "Ameri", 
    artistId: "Duki", 
    image: "https://i.scdn.co/image/ab67616d0000b273ee67e1ebdbc7a30772972a48",
    year: 2024,
    color: "red",
    duration: 2718,
    tracks: [
      { id: 1, title: "Leitmotiv", artistId: "Duki", duration: 180 },
      { id: 2, title: "Nueva Era", artistId: "Duki, Myke Towers", duration: 195 },
      { id: 3, title: "Brindis", artistId: "Duki, Headie One", duration: 188, image: "/img/ameri/brindis.jpg" },
      { id: 4, title: "Buscarte Lejos", artistId: "Duki, Bizarrap", duration: 200, image: "/img/ameri/buscarte.jpg" },
      { id: 5, title: "Imperio", artistId: "Duki, Judeline", duration: 185, image: "/img/ameri/imperio.jpg" },
      { id: 6, title: "Hardaway", artistId: "Duki, YG, Eladio Carrión", duration: 190, image: "/img/ameri/hardaway.jpg" },
      { id: 7, title: "Cine", artistId: "Duki", duration: 175, image: "/img/ameri/cine.jpg" },
      { id: 8, title: "Vida De Rock", artistId: "Duki, Milo j", duration: 182, image: "/img/ameri/vida.jpg" },
      { id: 9, title: "No Drama", artistId: "Duki, Ovi, Lucho SSJ", duration: 178, image: "/img/ameri/nodrama.jpg" },
      { id: 10, title: "Barro", artistId: "Duki", duration: 180, image: "/img/ameri/barro.jpg" },
      { id: 11, title: "Un Día Más", artistId: "Duki, YSY A", duration: 185, image: "/img/ameri/undia.jpg" },
      { id: 12, title: "Trato De Estar Bien", artistId: "Duki, Morad", duration: 190, image: "/img/ameri/trato.jpg" },
      { id: 13, title: "Wake Up & Bake Up", artistId: "Duki, Wiz Khalifa, Arcángel", duration: 200, image: "/img/ameri/wakeup.jpg" },
      { id: 14, title: "Constelación", artistId: "Duki, Lia Kali", duration: 187, image: "/img/ameri/constelacion.jpg" },
      { id: 15, title: "Ameri", artistId: "Duki", duration: 192, image: "/img/ameri/ameri.jpg" },
    ]

  },
  { 
    id: 6,
    title: "Desde el Fin del Mundo", 
    artistId: "Duki", 
    image: "https://i.scdn.co/image/ab67616d0000b2738505bcb13693070975e4aaf5",
    year: 2021,
    color: "orange",
    tracks: [
      { id: 1, title: "Sudor y Trabajo", artistId: "Duki", duration: 180, iframe: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3eZt1Yk6Y7XqZ1kq9q3qkP" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"></iframe>' },
      { id: 2, title: "Pintao", artistId: "Duki, YSY A & Rei", duration: 190},
      { id: 3, title: "Chico Estrella", artistId: "Duki", duration: 185 },
      { id: 4, title: "Volando Bajito", artistId: "Duki", duration: 175 },
      { id: 5, title: "Cuanto", artistId: "Duki, Lucho SSJ & Farina", duration: 180 },
      { id: 6, title: "Rápido", artistId: "Duki", duration: 170 },
      { id: 7, title: "I Don't Know", artistId: "Duki", duration: 165 },
      { id: 8, title: "Sol", artistId: "Duki & Lara91k", duration: 190 },
      { id: 9, title: "Luna", artistId: "Duki & Asan", duration: 195 },
      { id: 10, title: "Malbec", artistId: "Duki & Bizarrap", duration: 200 },
      { id: 11, title: "Mi Diablo", artistId: "Duki", duration: 170 },
      { id: 12, title: "Fifty Fifty", artistId: "Duki, Pablo Chill-E & Obie Wanshot", duration: 210 },
      { id: 13, title: "Valentino", artistId: "Duki & Tobi", duration: 175 },
      { id: 14, title: "Cascada", artistId: "Duki", duration: 180 },
      { id: 15, title: "Ticket", artistId: "Duki", duration: 165 },
      { id: 16, title: "Muriéndome", artistId: "Duki & KHEA", duration: 185 },
      { id: 17, title: "Ella Es Mi Bitch", artistId: "Duki, Pekeño 77 & Mesita", duration: 190 },
      { id: 18, title: "Muero de Fiesta Este Finde", artistId: "Duki & Ca7riel", duration: 200 }
    ]
  },
  { 
    id: 7,
    title: "FERXXOCALIPSIS", 
    artistId: "Feid", 
    image: "https://i.scdn.co/image/ab67616d0000b273f1aad814a40ec7419c234242",
    year: 2023,
    color: "green",
    duration: 2718,
    tracks: [
        {
          id: 1,
          title: "ALAKRAN",
          artistId: "Feid",
          duration: 180,
          image: "/img/alakran.jpg",
        },
        {
          id: 2,
          title: "50 PALOS",
          artistId: "Feid",
          duration: 175,
          image: "/img/50-palos.jpg",
        },
        {
          id: 3,
          title: "LA VUELTA",
          artistId: "Feid & Mañas Ru-Fino",
          duration: 190,
          image: "/img/la-vuelta.jpg",
        },
        {
          id: 4,
          title: "CUAL ES ESA",
          artistId: "Feid & Pirlo",
          duration: 185,
          image: "/img/cual-es-esa.jpg",
        },
        {
          id: 5,
          title: "INTERLUDE",
          artistId: "Feid",
          duration: 120,
          image: "/img/interlude.jpg",
        },
        {
          id: 6,
          title: "LUNA",
          artistId: "Feid & ATL Jacob",
          duration: 195,
          image: "/img/luna.jpg",
        },
        {
          id: 7,
          title: "ESQUIRLA",
          artistId: "Feid",
          duration: 170,
          image: "/img/esquirla.jpg",
        },
        {
          id: 8,
          title: "DESQUITE",
          artistId: "Feid",
          duration: 178,
          image: "/img/desquite.jpg",
        },
        {
          id: 9,
          title: "YO AK",
          artistId: "Feid & Jhay P",
          duration: 182,
          image: "/img/yo-ak.jpg",
        },
        {
          id: 10,
          title: "Classy 101",
          artistId: "Feid & Young Miko",
          duration: 200,
          image: "/img/classy-101.jpg",
        }
    ]
  },
  { 
    id: 8,
    title: "Future Nostalgie", 
    artistId: "Dua Lipa", 
    image: "https://i.scdn.co/image/ab67616d0000b2734bc66095f8a70bc4e6593f4f",
    color: "pink",
    duration: 2718,
    year: 2020,
    tracks: [
    {
      id: 1,
      title: "Future Nostalgia",
      artistId: "Dua Lipa",
      duration: 180,
      audio: "https://open.spotify.com/track/5vTyZz3lZzZzZzZzZzZzZz"
    },
    {
      id: 2,
      title: "Don't Start Now",
      artistId: "Dua Lipa",
      duration: 183,
      audio: "https://open.spotify.com/track/3PfIrDoz19wz7qK7tYeu62"
    },
    {
      id: 3,
      title: "Cool",
      artistId: "Dua Lipa",
      duration: 185,
      audio: "https://open.spotify.com/track/1xQ6trAsedVPCdbtDAmk0c"
    },
    {
      id: 4,
      title: "Physical",
      artistId: "Dua Lipa",
      duration: 190,
      audio: "https://open.spotify.com/track/3AzjcOeAmA57TIOr9zF1ZW"
    },
    {
      id: 5,
      title: "Levitating",
      artistId: "Dua Lipa",
      duration: 203,
      audio: "https://open.spotify.com/track/463CkQjx2Zk1yXoBuierM9"
    },
    {
      id: 6,
      title: "Pretty Please",
      artistId: "Dua Lipa",
      duration: 175,
      audio: "https://open.spotify.com/track/1jYiIOC5d6soxkJP81fxq2"
    },
    {
      id: 7,
      title: "Hallucinate",
      artistId: "Dua Lipa",
      duration: 180,
      audio: "https://open.spotify.com/track/3Uq1jNGnDqJYhJzqbjRx2F"
    },
    {
      id: 8,
      title: "Love Again",
      artistId: "Dua Lipa",
      duration: 185,
      audio: "https://open.spotify.com/track/4kflIGfjdZJW4ot2ioixTB"
    },
    {
      id: 9,
      title: "Break My Heart",
      artistId: "Dua Lipa",
      duration: 190,
      audio: "https://open.spotify.com/track/017PF4Q3l4DBUiWoXk4owT"
    },
    {
      id: 10,
      title: "Good In Bed",
      artistId: "Dua Lipa",
      duration: 170,
      audio: "https://open.spotify.com/track/6WrI0LAC5M1Rw2MnX2ZvEg"
    },
    {
      id: 11,
      title: "Boys Will Be Boys",
      artistId: "Dua Lipa",
      duration: 165,
      audio: "https://open.spotify.com/track/3eekarcy7kvN4yt5ZFzltW"
    }
  ]
  },

];