export interface SongMetadata {
  title: string
  artist?: string
  uploader: string
  uploadedAt: Date // TODO: make a date type?
  youtubeId: string
  originalSourceUrl?: string
  originalSourceType: "musescore" | "flat.io" | "other"
  originalArranger: string
  duration: string
  filename?: string
}

export function getSongs(): SongMetadata[] {
  return [
    {
      title: "People Can't Stop Chillin",
      artist: "Sports",
      uploader: "sightread",
      uploadedAt: new Date("2022-04-26"),
      youtubeId: "ivPV66gBxrc",
      originalSourceUrl: "https://dannybloommusic.com/",
      originalSourceType: "other",
      originalArranger: "Danny Bloom",
      duration: "1:21",
    },
    {
      title: "Simple and Clean",
      artist: "Utada Hikaru",
      uploader: "sightread",
      uploadedAt: new Date("2022-04-25"),
      youtubeId: "-8z9zB61Vac",
      originalSourceUrl: "https://musescore.com/user/164580/scores/421356",
      originalSourceType: "musescore",
      originalArranger: "Sawdust.Apple",
      duration: "3:05",
    },
    {
      title: "Scarborough Fair",
      uploader: "sightread",
      uploadedAt: new Date("2022-04-23"),
      youtubeId: "hC-Xca0X5ZI",
      originalSourceType: "musescore",
      originalSourceUrl: "https://musescore.com/user/203715/scores/5183854",
      originalArranger: "thepianoplayer",
      duration: "1:03",
    },
    {
      title: "All Eyes On Me",
      artist: "Bo Burnham",
      uploader: "sightread",
      uploadedAt: new Date("2022-04-22"),
      youtubeId: "fP9erBo-Eds",
      originalSourceType: "musescore",
      originalSourceUrl: "https://musescore.com/user/21150936/scores/6817499",
      originalArranger: "musicllama",
      duration: "3:05",
    },
    {
      title: "Havana",
      artist: "Camila Cabello",
      uploader: "sightread",
      youtubeId: "z7nttEdJNTo",
      uploadedAt: new Date("2022-05-03"),
      originalSourceType: "flat.io",
      originalSourceUrl: "https://flat.io/score/5a160292f138063a18d8a14b-havana",
      originalArranger: "danielszymula",
      duration: "3:20",
    },
    {
      title: "Into The Unknown",
      artist: "The Blasting Company",
      uploader: "sightread",
      youtubeId: "9Y49FwoLeUk",
      uploadedAt: new Date("2022-05-04"),
      originalSourceType: "other",
      originalSourceUrl: "https://dannybloommusic.com/",
      originalArranger: "Danny Bloom",
      duration: "1:16",
    },
    {
      title: "Sweet Hibiscus Tea",
      artist: "Penelope Scott",
      uploader: "sightread",
      youtubeId: "gWQO56u_WBQ",
      uploadedAt: new Date("2022-05-04"),
      originalSourceType: "other",
      originalSourceUrl: "https://dannybloommusic.com/",
      originalArranger: "Danny Bloom",
      duration: "1:03",
    },
    {
      title: "Fur Elise",
      artist: "Beethoven",
      uploader: "sightread",
      youtubeId: "l0ZuUQaTP04",
      uploadedAt: new Date("2022-05-10"),
      originalSourceType: "musescore",
      originalSourceUrl: "https://musescore.com/classicman/fur-elise",
      originalArranger: "ClassicMan",
      duration: "2:37",
    },
    {
      title: "Gymnopedie No. 1",
      artist: "Erik Satie",
      uploader: "sightread",
      youtubeId: "xHe-wVtXNVc",
      uploadedAt: new Date("2022-05-11"),
      originalSourceType: "musescore",
      originalSourceUrl: "https://musescore.com/classicman/satie-gymnopedie-no-1",
      originalArranger: "ClassicMan",
      duration: "4:24",
    },
    {
      title: "One Piece - Bink's Sake",
      artist: "Kōhei Tanaka",
      uploader: "sightread",
      youtubeId: "eBZBTVCpTjU",
      uploadedAt: new Date("2022-05-16"),
      originalSourceType: "musescore",
      originalSourceUrl: "https://musescore.com/user/4994776/scores/2690691",
      originalArranger: "Mateo Bricio",
      duration: "2:39",
    },
    {
      title: "Mad World",
      artist: "Tears For Fears",
      uploader: "sightread",
      youtubeId: "BNkoq_EgK5U",
      uploadedAt: new Date("2022-05-23"),
      originalSourceType: "musescore",
      originalSourceUrl: "https://musescore.com/melfnt/mad-world",
      originalArranger: "melfnt",
      duration: "2:39",
    },
    {
      title: "Love Like You",
      artist: "Rebecca Sugar",
      uploader: "sightread",
      youtubeId: "iXdg4AJFhPo",
      uploadedAt: new Date("2022-05-23"),
      originalSourceType: "musescore",
      originalSourceUrl: "https://musescore.com/melfnt/mad-world",
      originalArranger: "ryder4me",
      duration: "2:08",
      filename: "Rebecca_Sugar-Love_Like_You",
    },
    {
      title: "Halo 3: One Final Effort",
      artist: "Martin O' Donnell",
      uploader: "sightread",
      youtubeId: "MfFIfvNAWUY",
      uploadedAt: new Date("2022-05-13"),
      originalSourceType: "musescore",
      originalSourceUrl: "https://musescore.com/user/40925/scores/5355836",
      originalArranger: "rzhang1997",
      duration: "3:28",
    },
    {
      title: "Let Her Go",
      artist: "Passenger",
      uploader: "sightread",
      youtubeId: "nYJdn9EeyBk",
      uploadedAt: new Date("2022-06-01"),
      originalSourceType: "musescore",
      originalSourceUrl: "https://musescore.com/pcazals/scores/3196536",
      originalArranger: "pcazals",
      duration: "5:11",
      filename: "Passenger-Let_Her_Go",
    },
    {
      title: "Someone Like You",
      artist: "Adele",
      uploader: "sightread",
      youtubeId: "GuQL84_5fX0",
      uploadedAt: new Date("2022-06-04"),
      originalSourceType: "musescore",
      originalSourceUrl: "https://musescore.com/user/13543696/scores/4836661",
      originalArranger: "matikavi11869",
      duration: "4:50",
      filename: "Adele-Someone_Like_You",
    },
    {
      title: "Dos Oruguitas - Encanto",
      artist: "Lin-Manuel Miranda",
      uploader: "sightread",
      youtubeId: "uCT73ntc4vw",
      uploadedAt: new Date("2022-06-05"),
      originalSourceType: "musescore",
      originalSourceUrl: "https://musescore.com/user/38178303/scores/7558667",
      originalArranger: "adonay_gds",
      duration: "3:32",
      filename: "Lin_Manuel_Miranda-Dos_Oruguitas",
    },
    {
      title: "Turkish March",
      artist: "Mozart",
      uploader: "sightread",
      youtubeId: "AY54ykZDsm4",
      uploadedAt: new Date("2022-06-07"),
      originalSourceType: "musescore",
      originalSourceUrl: "https://musescore.com/classicman/scores/49143",
      originalArranger: "ClassicMan",
      duration: "3:47",
      filename: "Mozart-Rondo_Alla_Turca",
    },
    {
      title: "Ylang Ylang",
      artist: "FKJ",
      uploader: "sightread",
      youtubeId: "FifKdfe2-y8",
      uploadedAt: new Date("2022-06-08"),
      originalSourceType: "musescore",
      originalSourceUrl: "https://musescore.com/user/31132549/scores/5903735",
      originalArranger: "LilRoo",
      duration: "3:21",
      filename: "FKJ-Ylang_Ylang",
    },
    {
      title: "La Campanella",
      artist: "Franz Liszt",
      uploader: "sightread",
      youtubeId: "a3QXkLiW6wc",
      uploadedAt: new Date("2022-06-09"),
      originalSourceType: "musescore",
      originalSourceUrl: "https://musescore.com/classicman/scores/106022",
      originalArranger: "ClassicMan",
      duration: "4:02",
      filename: "Franz_Liszt-La_Campanella",
    },
    {
      title: "Dandelions",
      artist: "Ruth B.",
      uploader: "sightread",
      youtubeId: "y2QopBuu_PQ",
      uploadedAt: new Date("2022-06-10"),
      originalSourceType: "musescore",
      originalSourceUrl: "https://musescore.com/classicman/scores/106022",
      originalArranger: "PenguinComposer",
      duration: "1:50",
      filename: "Ruth_B-Dandelions",
    },
  ]
}

export function getYoutubeThumbnailUrl(videoId: string) {
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
}
