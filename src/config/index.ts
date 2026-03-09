import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Eduardo Ruiz — Mobile & Web Developer",
  author: "Eduardo Ruiz Pérez",
  description:
    "Ingeniero en Tecnologías de la Información y comunicaciones. Especializado en Sistemas de Escritorio, Aplicaciones Web y Móviles.",
  lang: "en",
  siteLogo: "/alejandro-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Twitter", href: "https://github.com/immois/astro-zen" },
    { text: "LinkedIn", href: "https://github.com/immois/astro-zen" },
    { text: "Github", href: "https://github.com/immois/astro-zen" },
    { text: "Youtube", href: "https://github.com/immois/astro-zen" },
    { text: "Dribbble", href: "https://github.com/immois/astro-zen" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Eduardo Ruiz",
    specialty: "Mobile & Web Developer",
    summary:
   "Ingeniero en Tecnologías de la Información y comunicaciones. Especializado en Sistemas de Escritorio, Aplicaciones Web y Móviles.",
    email: "ruizperezeduardo1@gmail.com",
  },
  experience: [
    {
      company: "Impulsora Mexicana De Productividad Laboral A.C.",
      position: "Freelancer",
      // startDate: "May 2018",
      //endDate: "Sept 2020",
      summary: [
        "Desarrollo de una plataforma web de capacitación en línea, diseñada para que la empresa Impulsora Mexicana De Productividad Laboral pudiera ofrecer cursos digitales a sus distintos clientes.",
        "La plataforma permite distribuir contenido formativo en áreas como: ",
        "•	Habilidades digitales",
        "•	Psicología",
        "•	Finanzas",
        "•	Desarrollo personal y profesional",
      ],
    },
    {
      company: "Fraternidad Universal",
      position: "Freelancer",
      //startDate: "Feb 2017",
      //endDate: "May 2018",
      summary: [
        "Desarrollo de una plataforma web informativa para el proyecto Fraternidad Universal, enfocada en la publicación de noticias y contenidos relacionados con temas religiosos y filosóficos. ",
        "El objetivo principal fue crear un sitio claro, ligero y fácil de navegar, que permitiera comunicar información de forma ordenada y accesible al público.",
      ],
    },
    {
      company: "Driveer",
      position: "Frontend Developer",
      startDate: "Jun 2015",
      endDate: "Oct 2016",
      summary:
        "Developed and integrated a real-time vehicle tracking system using WebSockets, improving accuracy and data update in the application. This functionality increased user satisfaction by 30% and reduced customer service inquiries by 25%.",
    },
  ],
  projects: [
    {
      name: "Spotifu Music",
      summary: "A music streaming app that emulates Spotify's core features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/spotifu.png",
    },
    {
      name: "Shopp App",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
    },
    {
      name: "ClonTagram",
      summary: "A social network that replicates the features of Instagram",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `
      Hi, I’m Alejandro Múnez, a passionate Mobile and Web Developer with a knack for crafting seamless digital experiences. With a strong background in both Android and iOS development, as well as front-end web technologies, I thrive in the intersection where creativity meets technology.

      Over the years, I’ve honed my skills in building robust, user-friendly applications that not only meet the needs of users but also push the boundaries of what’s possible. My projects range from innovative mobile applications to responsive web designs, all with a focus on performance, security, and scalability.
    `,
    image: "/alejandro-big.jpg",
  },
};

// #5755ff
