// Import poster images
import english from 'src/assets/images/home/posters/english2.png';
import indo from 'src/assets/images/home/posters/indo2.png';
import movie from 'src/assets/images/home/posters/movie2.png';
import SCP from 'src/assets/images/home/posters/SCP2.png';

export const postersData = [
  {
    id: 1,
    title: "English Debate Competition",
    description: "Kompetisi debat bahasa Inggris dengan format British Parliamentary Style.",
    image: english,
    link: "/activities/edc",
  },
  {
    id: 2,
    title: "Kompetisi Debat Bahasa Indonesia",
    description: "Kompetisi debat dengan format Asian Parliamentary Style dalam Bahasa Indonesia.",
    image: indo,
    link: "/activities/kdbi",
  },
  {
    id: 3,
    title: "Scientific Paper Competition",
    description: "Kompetisi penulisan karya ilmiah dengan tema 'Innovation for Sustainable Development'.",
    image: SCP,
    link: "/activities/scp",
  },
  {
    id: 4,
    title: "Student Movie Competition",
    description: "Kompetisi pembuatan film pendek dengan tema 'Local Wisdom in Modern Society'.",
    image: movie,
    link: "/activities/smc",
  },
];