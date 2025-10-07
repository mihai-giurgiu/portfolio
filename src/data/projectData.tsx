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
      "I collaborated with Bentik Music to design and develop an intuitive and responsive website that reflects the studio’s identity. The goal was to create a digital space that communicates trust and musical expertise while keeping navigation simple. The structure was built around clarity: a clean homepage introducing the studio, detailed service sections for recording, mixing, and mastering, and an integrated contact form for quick inquiries.The end result is a functional platform that helps Bentik Music showcase its work and connect effortlessly with new clients.",
    gallery: [
      "../assets/BentikWebsite1-min.jpg",
      "../assets/BentikWebsite2-min.jpg",
      "../assets/BentikWebsite3-min.jpg"
    ],
    video: "../assets/BentikTimeline1.mov"
  },
  {
    id: 2,
    title: "Art School Timisoara",
    image: "../assets/LogoAP_Thumbnail.jpg",
    subtitles: ["Logo Design", "Website Design"],
    description: "For Arte Plastice High School, I developed both the brand identity and the website. The challenge was making a site that feels artistic but functions with the precision of an academic platform. On the web side, I built a responsive WordPress site, with dynamic content sections that allow staff to easily update news, exhibitions, and student catalogs. The color palette, typography, and layout were chosen to highlight student projects and express the school's creative side. The logo design focuses on symmetry and geometric balance reflecting the artistic principles taught at the school.",
    gallery: [
      "../assets/Website1-min.jpg",
      "../assets/LogoAP_Thumbnail.jpg",
      "../assets/Website3-min.jpg"],
    video: "../assets/arteplasticescroll.mov"
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
    video: "../assets/webvisionscroll.mov",
  },
  {
    id: 4,
    title: "Football Reservation App Concept",
    image: "../assets/Teren_Showcase3-min.jpg",
    subtitles: ["UI Design", "Development"],
    description:
      "Teren was an app created for football enthusiasts looking to easily find and book nearby fields. With a clean and concise design, it simplified the connection between players and venues, offering features like notifications, calendar integration, and collaborative tools to make organizing matches easier.",
    gallery: [
      "../assets/login_page.jpg",
      "../assets/field_details_page.jpg",
      "../assets/Teren_Showcase4.jpg",],
    video: "../assets/terenscroll.mov"
  },
  {
    id: 5,
    title: "Sofia Smile | Dental Clinic",
    image: "../assets/LogoSofiaSmile-03.png",
    subtitles: ["Logo Design", "Website Design"],
    description: "Sofia Smile's website is built to reflect the professionalism of a modern dental clinic, making it easy for visitors to explore services, view transparent pricing, and book appointments in just a few clicks.",
    gallery: [
      "../assets/SofiaSmile_Website1-min.jpg",
      "../assets/SofiaSmile_Website2-min.jpg",
      "../assets/SofiaSmile_Website3-min.jpg",],
    video: "../assets/sofiasmilescroll.mov"

  },
  {
    id: 6,
    title: "Satchinez Secondary School",
    image: "/assets/SatchinezThumbnail.jpg",
    subtitles: ["Website Design"],
    description: "Scoala Satchinez was a really uplifthing project, building a website to give the school a friendly online presence. The goal was to create a space where parents, teachers, and students could easily find information about news, activities, and events.",
    gallery: [
      "../assets/SatchinezWebsite1-min.jpg",
      "../assets/SatchinezWebsite2-min.jpg",
      "../assets/SatchinezWebsite3-min.jpg",],
    video: "../assets/satchinezscroll.mov",

  },
  {
    id: 7,
    title: "Valtian Restaurant",
    image: "../assets/Valtian_Logo1-min.jpg",
    subtitles: ["Logo Design"],
    description:
      "I created a kind of logo that holds up well on signage, menus, and digital, reflecting the restaurant’s identity wherever people encounter it. The shape was composed to feel sturdy and grounded, yet approachable, symmetry and structure give it a confident silhouette, while slight curvatures soften the edges and make the design feel human rather than rigid.",
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
    description: "I designed this trifold brochure for Saucă & Partners, a law firm based in Timișoara, with the goal of presenting their services in a structured way. The design focuses on clarity and readability, guiding the reader naturally through the firm’s story, contact details, and key values.",
    gallery: [
      "../assets/Sauca_TrifoldBrochure2.jpg",
      "../assets/Sauca_TrifoldBrochure3-min.jpg",
      "../assets/Sauca_TrifoldBrouchure-min.jpg",
    ]
  },
];