interface Project {
  id: number;
  title: string;
  image: string;
  subtitles: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Bentik Music",
    image: "./src/assets/BentikThumbnail.png",
    subtitles: ["Website Design"],
  },
  {
    id: 2,
    title: "Art School Timisoara",
    image: "./src/assets/LogoAP_Thumbnail-75.png",
    subtitles: ["Logo Design", "Website Design"],
  },
  {
    id: 3,
    title: "Webvision Agency",
    image: "./src/assets/WebvisionBranding.jpg",
    subtitles: ["Branding", "Website Design"],
  },
  {
    id: 4,
    title: "Football Reservation App Concept",
    image: "./src/assets/Teren_Showcase3.jpg",
    subtitles: ["UI Design", "App Concept"],
  },
  {
    id: 5,
    title: "Valtian Restaurant",
    image: "./src/assets/Valtian_Logo1.jpg",
    subtitles: ["Logo Design"],
  },
  {
    id: 6,
    title: "Beautiful Swearwords",
    image: "./src/assets/Poster_Thumbnail.jpg",
    subtitles: ["Poster Design", "Typography"],
  },
  {
    id: 7,
    title: "Sofia Smile | Dental Clinic",
    image: "./src/assets/LogoSofiaSmile-03.png",
    subtitles: ["Logo Design", "Website Design"],
  },
  {
    id: 8,
    title: "Dashboard UI",
    image: "/images/project5.png",
    subtitles: ["Dashboard", "UI Design"],
  },
  {
    id: 9,
    title: "Sauca & Partners | Lawyer",
    image: "./src/assets/Sauca_TrifoldBrochure2.jpg",
    subtitles: ["Brochure", "Print Design"],
  },
];