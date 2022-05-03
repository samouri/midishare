import type { NextPage } from "next"
import Head from "next/head"
import { Header, Search, Spacer, MusicThumbnail } from "components"
import { getSongs, SongMetadata } from "features/data"
import { useState } from "react"

export const Landing: NextPage = () => {
  const [search, setSearch] = useState("")
  const songs = getSongs()
  const filteredSongs = songs.filter((s: SongMetadata) => {
    if (!search) {
      return true
    }
    return s.title.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div className="landing">
      <Head>
        <title>midishare</title>
        <meta name="description" content="Download and share MIDIs for learning Piano" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="max-width-wrapper">
        <Spacer size={24} axis={"vertical"} />
        Browse sheet music
        <Search onSearch={(query: string) => setSearch(query)} />
        <Spacer size={24} axis={"vertical"} />
        <div className="song_grid">
          {filteredSongs.map((metadata) => (
            <MusicThumbnail metadata={metadata} key={metadata.youtubeId} />
          ))}
        </div>
      </main>

      <footer></footer>
    </div>
  )
}
