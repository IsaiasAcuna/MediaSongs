import { useRouter } from 'next/router'
import SongDetails from '../details/SingleDetails'
import ArtistDetails from '../details/ArtistDetails'
import AlbumDetails from '../details/AlbumDetails'

export default function DetailPage() {
  const { query } = useRouter()
  const { type, id } = query

  if (!type || !id || typeof type !== 'string') return null

  switch (type) {
    case 'song':
      return <SongDetails />
    case 'artist':
      return <ArtistDetails />
    case 'album':
      return <AlbumDetails />
    default:
      return <div>Not found</div>
  }
}
