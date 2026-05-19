export interface Album {
  id: string;
  year: string;
  title: string;
  imageKey: "nari" | "hidup" | "doves";
  description: string;
  spotify: string;
  ytMusic: string;
  yt: string;
}

export const ALBUMS: Album[] = [
  {
    id: "menari-dengan-bayangan",
    year: "2019",
    title: "Menari Dengan Bayangan",
    imageKey: "nari",
    description:
      "Album debut solo Hindia. Introspektif, penuh kegelisahan, dan kejujuran tentang diri sendiri.",
    spotify: "https://open.spotify.com/album/1DAuVHMlBvIjzWZALSUXbn",
    ytMusic:
      "https://music.youtube.com/playlist?list=OLAK5uy_lvfCxPUsCzss1fTa0Tm3GRkMsg7x1VCtM",
    yt: "https://www.youtube.com/watch?v=nneH6vs3ah8&list=PLPwkHp6oYXKgW1cK3ohsqankm4crTdPsK",
  },
  {
    id: "lagipula-hidup-akan-berakhir",
    year: "2023",
    title: "Lagipula Hidup Akan Berakhir",
    imageKey: "hidup",
    description:
      "Album ganda yang berbicara tentang kecemasan, tubuh, dan kekhawatiran kolektif generasi sekarang.",
    spotify: "https://open.spotify.com/album/0DMdiWcqnutCi81EqBXkF8",
    ytMusic:
      "https://music.youtube.com/playlist?list=OLAK5uy_mmZ7dBAtj4jy0x7PQDeGL2n38AWD5Uhu4",
    yt: "https://www.youtube.com/watch?v=IAcMR8PkBIk&list=PLPwkHp6oYXKh9WFTHza6fU24CW4fziUA4",
  },
  {
    id: "doves-25-on-blank-canvas",
    year: "2025",
    title: "Doves, '25 on Blank Canvas",
    imageKey: "doves",
    description:
      "Album terbaru Hindia. Eksperimental, optimistik, dan penuh ruang kosong yang sengaja dibiarkan.",
    spotify: "https://open.spotify.com/album/6HiRRMXgflIyrpjCiPW8rU",
    ytMusic:
      "https://music.youtube.com/playlist?list=OLAK5uy_nSn_61CBt02jCVu4HEKQ0QZAR6U963SCs",
    yt: "https://www.youtube.com/watch?v=fpI1-HiLOuQ&list=PLPwkHp6oYXKhQwMe2nZNw7xkko9KKoo2m",
  },
];
