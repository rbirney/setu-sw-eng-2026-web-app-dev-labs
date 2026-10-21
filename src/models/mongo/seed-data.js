export const seedData = {
  users: {
    _model: "User",
    homer: {
      firstName: "Homer",
      lastName: "Simpson",
      email: "homer@simpson.com",
      password: "secret",
    },
    marge: {
      firstName: "Marge",
      lastName: "Simpson",
      email: "marge@simpson.com",
      password: "secret",
    },
    bart: {
      firstName: "Bart",
      lastName: "Simpson",
      email: "bart@simpson.com",
      password: "secret",
    },
  },
  playlists: {
    _model: "Playlist",
    mozart: {
      title: "Mozart Favourites",
      userid: "->users.bart",
    },
    symphonies: {
      title: "Beethoven Symphonies",
      userid: "->users.marge",
    },
    concertos: {
      title: "Beethoven Concertos",
      userid: "->users.homer",
    },
    sonatas: {
      title: "Beethoven Sonatas",
      userid: "->users.bart",
    },
  },
  tracks: {
    _model: "Track",
    track_1: {
      title: "Violin Concerto No. 1",
      artist: "Mozart",
      duration: 15,
      playlistid: "->playlists.mozart",
    },
    track_2: {
      title: "Concerto No. 13",
      artist: "Beethoven",
      duration: 11,
      playlistid: "->playlists.concertos",
    },
    track_3: {
      title: "Concerto No. 5",
      artist: "Beethoven",
      duration: 9,
      playlistid: "->playlists.concertos",
    },
    track_4: {
      title: "Sonata No. 23",
      artist: "Beethoven",
      duration: 19,
      playlistid: "->playlists.sonatas",
    },
  },
};
