export interface Artist {
  id: number;
  name: string;
  image: string;
  color: string
}

export const artists: Artist[] = [
    {
        id: 1,
        name: "Feid",
        image: 'https://i.scdn.co/image/ab6775700000ee854d2eb38e9cd5faedea8ba62b',
        color: 'green'
    },
    {
        id: 2,
        name: "Duki",
        image: '/img/duki.jpg',
        color: 'red'
    },
    {
        id: 3,
        name: "Avicii",
        image: '/img/avicii.jpeg',
        color: 'green'
    },
    {
        id: 4,
        name: "Martin Garrix",
        image: 'https://i.scdn.co/image/ab6761610000e5ebf5b8ee60f1f4ee3453aba40b',
        color: 'gray'
    },
    {
        id: 5,
        name: "Bad Bunny",
        image: 'https://i.scdn.co/image/ab6761610000e5eb81f47f44084e0a09b5f0fa13',
        color: 'red'
    },
    {
        id: 6,
        name: "Dua Lipa",
        image: 'https://i.scdn.co/image/ab6761610000e5eb0c68f6c95232e716f0abee8d',
        color: 'pink'
    }
]