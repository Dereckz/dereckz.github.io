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
    { text: "X", href: "x.com/?lang=es" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/eduardoruizperez14/" },
    { text: "Github", href: "https://github.com/Dereckz" },
    { text: "Youtube", href: "https://www.youtube.com/@eduardoruiz4990" },
    { text: "Dribbble", href: "https://dribbble.com" },
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
       startDate: "May 2018",
      endDate: "Sept 2020",
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
      startDate: "Feb 2017",
      endDate: "May 2018",
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
      name: "Impulsora Mexicana De Productividad Laboral A.C.",
      summary: "Plataforma de cursos en línea.",
      linkPreview: "http://valuacionproductiva.mx",
      linkSource: "https://github.com/Dereckz/vproductiva",
      image: "/imp1.png",
    },
    {
      name: "Fraternidad Universal",
      summary: "Plataforma web informativa para el proyecto Fraternidad Universal, enfocada en la publicación de noticias y contenidos relacionados con temas religiosos y filosóficos.",
      linkPreview: "https://fraternidadmundial.com/",
      linkSource: "https://github.com/Dereckz/fraternidadmundial",
      image: "/funiver.png",
    },
    {
      name: "CARASOFT Soluciones Tecnológicas",
      summary: "Página web informativa (homepage) para Carasoft, enfocada en presentar sus servicios de soluciones tecnológicas de manera clara, profesional y accesible para sus clientes.",
      linkPreview: "https://carasoftweb.com/ ",
      linkSource: "https://github.com/",
      image: "/carasoft.png",
    },
  ],
  about: {
    description: `
      Hola, soy Eduardo Ruiz, un apasionado desarrollador web y móvil con un don para crear experiencias digitales fluidas. Con una sólida experiencia en desarrollo para Android e iOS, así como en tecnologías web front-end, me desenvuelvo en la intersección entre la creatividad y la tecnología.

A lo largo de los años, he perfeccionado mis habilidades para crear aplicaciones robustas e intuitivas que no solo satisfacen las necesidades de los usuarios, sino que también superan los límites de lo posible. Mis proyectos abarcan desde aplicaciones móviles innovadoras hasta diseños web responsivos, todos con un enfoque en el rendimiento, la seguridad y la escalabilidad.
    `,
    image: "/RUPE_BIG.jpg",
  },
};

// #5755ff
