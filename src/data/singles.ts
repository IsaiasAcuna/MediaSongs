export interface Song {
  id: number;
  title: string;
  artistId: string;
  image: string;
  color: string;
  duration: number;
  audio: string;
  year: number
  lyrics: string[];
}

export const songs: Song[] = [
  { 
    id: 1,
    title: "DALLAX",
    artistId: "Feid", 
    image: "https://i.scdn.co/image/ab67616d0000b273118f42c06b33f5102899d15b",
    color: "green",
    duration: 150,
    audio: '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/4cZiqNmLWLoAx67ENn53YG?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    year: 2025,
    lyrics: [  "Está bien, me he equivocado, también he tenido fallas",
      "Yo me fui pa Medellín, no estábamos bien",
      "Mami, tú te fuiste pa Dallas, yeah",
      "Prendí un crespo"]
  },
  { 
    id: 2,
    title: "Forbidden Voices", 
    artistId: "Martin Garrix", 
    image: "https://i.scdn.co/image/ab67616d0000b2735a68d024d71cba0508ac3664",
    color: "purple",
    duration: 184,
    audio: '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/6EsH66Uto1zwZlDGQ6RokU?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    year: 2015,
    lyrics: ['']
  },
  { 
    id: 3,
    title: "Let's Ride Away", 
    artistId: "Avicii", 
    image: "https://i.scdn.co/image/ab67616d0000b2730bc8b6fd7ebae252a5846a67",
    color: "#03488F",
    duration: 154,
    audio: '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/4tdSojwmf4vNZMWS6HcQWb?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    year: 2025,
    lyrics: ['']
  },
  { 
    id: 4,
    title: "Ticket", 
    artistId: "Duki", 
    image: "https://i.scdn.co/image/ab67616d0000b2738505bcb13693070975e4aaf5",
    color: "orange",
    duration: 194,
    audio: '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/6JAtYFDUmBpKkr6nlsLUNI?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    year: 2021,
    lyrics: [
  "Mami, estoy buscándome otro avión",
  "Trato de escaparme",
  "Siento que soy malo para amar",
  "Me duele pensarte"
]

  },
  { 
    id: 5,
    title: "Dear Boy", 
    artistId: "Avicii", 
    image: "/img/TRUE.jpeg",
    color: "gray",
    duration: 154,
    audio: '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/4yTeQK2XThWYeEW8D72XmU?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    year: 2018,
    lyrics: [
  "Oh dear boy, it's so hollow without you",
  "In a world with everything but it won't do",
  "Oh dear boy, I wanna follow you",
  "You're a wild boy, I am a wild girl too",
  "Oh dear boy, so shallow in the blue"
]
  },
  { 
    id: 6,
    title: "Una Vez", 
    artistId: "Bad Bunny", 
    image: "https://i.scdn.co/image/ab67616d0000b273548f7ec52da7313de0c5e4a0",
    color: "#03488F",
    duration: 154,
    audio: '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/5J7teKIJGtqVypgYI6sqXj?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    year: 2021,
    lyrics: ['Le pido a Dios que me deje verte desnuda',
      'Tú te vas, pero esta bellaquera continúa',
      'Me pongo celoso cuando hablas de él (shh)',
      'Dime qué vamo a hacer',

      'Yo solo quiero hacerlo hasta el amanecer',
      'Porque sé que pronto vas a desaparecer',
      'Si fuera por mí, te llevara de gira',
      'Creo que voy a extrañar la forma esa en que me miras',

      'Con cara de nena buena pero bellaquita',
      'Esos ojitos que los poderes me quita',
      'Quiero verte brincando, toda mojadita']
  },
  { 
    id: 7,
    title: "Don't Start Now", 
    artistId: "Dua Lipa", 
    image: "https://i.scdn.co/image/ab67616d0000b2734bc66095f8a70bc4e6593f4f",
    color: "pink",
    duration: 154,
    audio: '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/3PfIrDoz19wz7qK7tYeu62?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    year: 2020,
    lyrics: ["Oh lorem boy, est vacuus sine te",
            "In mundo pleno sed non sufficit me",
            "Oh lorem boy, te sequi volo",
            "Tu es ferus puer, ego sum fera puella quoque",
            "Oh lorem boy, tam levis in caeruleo",
            "Tempus est nostrum et te voco"]
  },
  { 
    id: 8,
    title: "eCLIPSE sOLAR", 
    artistId: "Duki", 
    image: "/img/Antes de Ameri.jpg",
    color: "gray",
    duration: 154,
    audio: '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/29QWLM6tRe7Yp4dvNt02JC?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    year: 2025,
    lyrics: ["Oh lorem boy, est vacuus sine te",
            "In mundo pleno sed non sufficit me",
            "Oh lorem boy, te sequi volo",
            "Tu es ferus puer, ego sum fera puella quoque",
            "Oh lorem boy, tam levis in caeruleo",
            "Tempus est nostrum et te voco"]
  },
  { 
    id: 9,
    title: "Animals", 
    artistId: "Martin Garrix", 
    image: "https://i.scdn.co/image/ab67616d00001e026abad6915a2216dc18e7e3a7",
    color: "black",
    duration: 154,
    audio: '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/0A9mHc7oYUoCECqByV8cQR?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    year: 2013,
    lyrics: ["Oh lorem boy, est vacuus sine te",
            "In mundo pleno sed non sufficit me",
            "Oh lorem boy, te sequi volo",
            "Tu es ferus puer, ego sum fera puella quoque",
            "Oh lorem boy, tam levis in caeruleo",
            "Tempus est nostrum et te voco"]

  },
    { 
    id: 10,
    title: "Tu No Metes Cabra", 
    artistId: "Bad Bunny", 
    image: "https://i.scdn.co/image/ab67616d0000b273cbd84f7b3d3dab7743cfa88e",
    color: "skyblue",
    duration: 160,
    audio: '<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/43SMQMC2X2fAOuTPRnSGrG?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
    year: 2019,
    lyrics: ["Oh lorem boy, est vacuus sine te",
            "In mundo pleno sed non sufficit me",
            "Oh lorem boy, te sequi volo",
            "Tu es ferus puer, ego sum fera puella quoque",
            "Oh lorem boy, tam levis in caeruleo",
            "Tempus est nostrum et te voco"]
  }, 

];