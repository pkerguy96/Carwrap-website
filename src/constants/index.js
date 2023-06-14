import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    cardecal,
    paintcorrection,
    carwrap,
    commercialwrap,
    plastidip,
    paintrestoration,
    tint
  } from "../assets";

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "Services",
      title: "Services",
    },
    {
      id: "Gallery",
      title: "Gallery",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
 
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  const expertises = [{
    id:1,
   title:"Habillage de véhicules",
   context:"En utilisant des matériaux de la plus haute qualité et une équipe de techniciens experts formés dans l'industrie, nous offrons une gamme de services d'emballage, y compris des emballages de changement de couleur complet ou partiel et des impressions numériques pour tout véhicule.",
   image:carwrap,
  },
  {
    id:2,
    title:"Habillage commercial",
    context:"Reconnu par des entreprises à travers le Royaume-Uni, nous avons construit une clientèle fidèle et créé d'innombrables solutions de marque de transport pour les grandes flottes ainsi que les petites entreprises sur tous les types de véhicules.",
    image: commercialwrap,
   },
   {
    id:3,
    title:"Protection de la peinture",
    context:"Notre film de protection de peinture offre une couche de protection optiquement transparente pour la peinture de votre voiture. Protégez votre investissement des copeaux, des rayures et des débris de la route en maximisant la valeur de revente des voitures et en maintenant sa finition d'usine.",
    image:paintcorrection ,
   },
   {
    id:4,
    title:"restauration de la peinture ",
    context:"Nos techniciens offrent une gamme de services d'esthétique pour les véhicules tant à l'intérieur qu'à l'extérieur. Ceux-ci inclus; options de nettoyage en profondeur et de lavage en toute sécurité, correction et amélioration de la peinture, ainsi que scellants et revêtements céramiques",
    image: paintrestoration,
   },
   {
    id:5,
    title:"conception et impression",
    context:"Notre studio de design interne dispose de la toute dernière technologie d'impression grand format. Des solutions de branding et de marketing à la production d'autocollants par lots et à la fourniture d'impressions grand format, nous avons ce qu'il vous faut.",
    image: cardecal,
   },
   {
    id:6,
    title:"jantes en alliage",
    context:"Nous offrons une remise à neuf professionnelle des jantes en alliage et un revêtement en poudre, avec des finitions brillantes, satinées, mates et métalliques disponibles, nous pouvons assortir presque toutes les couleurs pour transformer l'apparence de votre véhicule.",
    image: plastidip,
   },
   {
    id:7,
    title:"Film teinté ",
    context:"Les vitres teintées améliorent le style, le confort, la sécurité et la protection solaire. Notre environnement dédié sans poussière garantit que la finition de notre travail est identique à une finition d'usine. Une légère teinte peut rapidement améliorer le style de n'importe quelle voiture",
    image: tint,
   },
  ];
   const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects,expertises };