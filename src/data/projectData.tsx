interface Project {
  id: number;
  title: string;
  image: string;
  subtitles: string[];
  description?: string;
  gallery?: string[];
  video?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Bentik Music",
    image: "../assets/BentikThumbnail2.png",
    subtitles: ["Website Design"],
    description:
      "A modern and sleek website design for Bentik Music, showcasing their portfolio and services.",
    gallery: [
      "../assets/BentikWebsite1-min.jpg",
      "../assets/BentikWebsite2-min.jpg",
      "../assets/BentikWebsite3-min.jpg"
    ],
    video: "https://www.youtube.com/watch?v=m8Oy0MGnvx0",
  },
  {
    id: 2,
    title: "Art School Timisoara",
    image: "../assets/LogoAP_Thumbnail.jpg",
    subtitles: ["Logo Design", "Website Design"],
    gallery: [
      "../assets/Website1-min.jpg",
      "../assets/LogoAP_Thumbnail.jpg",
      "../assets/Website3-min.jpg"]
  },
  {
    id: 3,
    title: "Webvision Agency",
    image: "../assets/WebvisionBranding2.jpg",
    subtitles: ["Branding", "Website Design"],
    description:
      "This project was both a challenge and a blessing for me. Having the freedom to develop the entire brand for the company allowed me to experiment with various design patterns, color schemes, and bold layouts. I was able to express my creative vision into the logo, graphics, and website.",
    gallery: [
      "../assets/WebBranding.jpg",
      "../assets/WebvisionBranding2.jpg",
      "../assets/WebvisionWebsite.jpg",
    ],
    video: "https://www.youtube.com/watch?v=8bYF1zLrHgg",
  },
  {
    id: 4,
    title: "Football Reservation App Concept",
    image: "../assets/Teren_Showcase3-min.jpg",
    subtitles: ["UI Design", "Development"],
    description:
      "Teren was an application designed for football addicts to find a field where they could satisfy their cravings. With its simple and concise design, the app created better interaction between a player and a field. It also offered features such as notifications, calendar, and integration with other collaboration tools.",
    gallery: [
      "../assets/login_page.jpg",
      "../assets/field_details_page.jpg",
      "../assets/Teren_Showcase4.jpg",]
  },
  {
    id: 5,
    title: "Sofia Smile | Dental Clinic",
    image: "../assets/LogoSofiaSmile-03.png",
    subtitles: ["Logo Design", "Website Design"],
    gallery: [
      "../assets/SofiaSmile_Website1-min.jpg",
      "../assets/SofiaSmile_Website2-min.jpg",
      "../assets/SofiaSmile_Website3-min.jpg",]

  },
  {
    id: 6,
    title: "Satchinez Secondary School",
    image: "/assets/SatchinezThumbnail.jpg",
    subtitles: ["Website Design"],
    gallery: [
      "../assets/SatchinezWebsite1-min.jpg",
      "../assets/SatchinezWebsite2-min.jpg",
      "../assets/SatchinezWebsite3-min.jpg",]

  },
  {
    id: 7,
    title: "Valtian Restaurant",
    image: "../assets/Valtian_Logo1-min.jpg",
    subtitles: ["Logo Design"],
    description:
      "Teren was an application designed for football addicts to find a field where they could satisfy their cravings. With its simple and concise design, the app created better interaction between a player and a field. It also offered features such as notifications, calendar, and integration with other collaboration tools.",
    gallery: [
      "../assets/Valtian_Logo1-min.jpg",
      "../assets/Valtian_Logo2-min.jpg",
      "../assets/ValtianLogo3-min.jpg",]
  },
  {
    id: 8,
    title: "Beautiful Swearwords",
    image: "../assets/Poster_Thumbnail-min.jpg",
    subtitles: ["Poster Design", "Logo Design"],
    description:
      "Definitely one of the funniest and wholesome projects that I worked on. The whole concept of the posters was to create a paradox between the loveliness of the flowers and the hidden swear words that represented the opposite of beauty. Together with the client we brainstormed ideas for words and associate them with their perfect match to obtain a floral catalog that will soon be printed.",
    gallery: [
      "../assets/BS_logo(black).jpg",
      "../assets/BS_logo(white).jpg",
      "../assets/PosterConcept3.jpg",
      "../assets/PosterConcept2.jpg"]
  },
  {
    id: 9,
    title: "Sauca & Partners | Lawyer",
    image: "../assets/Sauca_TrifoldBrochure2-min.jpg",
    subtitles: ["Brochure", "Print Design"],
    gallery: [
      "../assets/Sauca_TrifoldBrochure2.jpg",
      "../assets/Sauca_TrifoldBrochure3-min.jpg",
      "../assets/Sauca_TrifoldBrouchure-min.jpg",
      ]
  },
];