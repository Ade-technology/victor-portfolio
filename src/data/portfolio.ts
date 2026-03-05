// ---------------- PERSONAL INFO ----------------
export const personalInfo = {
  name: "Victor Adeleye",
  initials: "VA",
  title: "Frontend Developer (Web & Mobile)",
  roles: ["Mobile App Development", "Web Development", "WordPress", "SEO"],
  description:
    "I focus on building modern, responsive web and mobile applications, leveraging React, Next.js, and WordPress, while optimizing for performance and SEO to deliver high-quality digital solutions.",
  aboutText:
    "Hello there! 🎉 I'm a passionate Frontend Developer specializing in Web and Mobile applications. I build modern, responsive, and user-friendly digital solutions using React, Next.js, WordPress, and SEO, with a focus on automation to streamline workflows and improve efficiency.\n\nMy journey started with WordPress, customizing themes and delivering real client projects, and has since expanded into React-based web and mobile apps. I enjoy turning ideas into digital products that solve real problems, enhance user experience, and automate repetitive processes wherever possible.\n\nI focus on continuously improving my skills in mobile development, frontend technologies, and automation, always seeking new challenges and opportunities to grow. My goal is to create scalable, efficient, and impactful digital solutions that users love and businesses value.",
  email: "victoradeleye07@gmail.com",
  resumeUrl:
    "https://drive.google.com/drive/folders/1XQnL--2hQJDYah7-zJdbd0Dr8W9xt5mm?usp=sharing",
  calendlyUrl: "https://calendly.com/victoradeleye07/contact-victor-adeleye",
  githubUrl: "https://github.com/Victor-Adeleye",
  social: {
    linkedin: "https://www.linkedin.com/in/adeleye-victor/",
    twitter: "https://x.com/Victoradeleye01",
    facebook: "https://web.facebook.com/profile.php?id=61557010019072",
    instagram: "https://www.instagram.com/victoradeleeye007/",
    github: "https://github.com/Victor-Adeleye",
  },
};

// ---------------- PROJECTS ----------------
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  techStack: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
  googlePlayStoreUrl?: string; // Button: Download on PlayStore
  apkDownloadUrl?: string; // Button: Download the App
}

export const projects: Project[] = [
  {
  id: "pointone-microfinance-mobile-app",
  title: "PointOne Microfinance Bank App – Secure Digital Banking & Loan Management",
  description: "Mobile banking platform for loan applications, repayment tracking, and secure wallet management.",
  longDescription:
    "PointOne Microfinance Bank Mobile App is a secure digital banking platform designed to provide seamless financial services including loan applications, repayment scheduling, wallet management, and real-time transaction tracking. The application empowers individuals and small businesses with fast, transparent, and accessible microfinance solutions.\n\nAt Alabian Solutions Limited, I contributed to the frontend development of the mobile application, building intuitive financial dashboards, implementing secure form validation, integrating APIs for loan and wallet operations, and optimizing mobile performance. The project strengthened my experience in fintech product development, secure user interface systems, and scalable mobile architecture.",
  image:
    "/assets/pointone-mcb.jpg",
  techStack: [
    "React Native",
    "JavaScript",
    "REST API",
    "State Management",
    "Fintech UI Systems",
    "Secure Authentication",
  ],
  category: "Mobile Apps",
  liveUrl: "https://www.pointonemfb.com.ng/",
  googlePlayStoreUrl: "https://play.google.com/store/apps/details?id=com.lagos_online.project",
},
  {
  id: "lagos-schools-online-app",
  title: "Lagos Schools Online Application Portal – Official Lagos State Admission App",
  description: "Digital platform for school admission, enrollment processing, and application tracking across Lagos State.",
  longDescription:
    "Lagos Schools Online Application Portal is the official digital admission platform serving public and private schools across Lagos State. The mobile application streamlines the entire school enrollment process, allowing parents and guardians to submit applications, upload required documents, and track admission status in real-time.\n\nWhile working at Alabian Solutions Limited, I contributed to the frontend development of the mobile application, implementing responsive UI components, optimizing application workflows, integrating REST APIs, and enhancing user experience for seamless navigation. The platform improves digital accessibility, reduces manual paperwork, and increases transparency in the Lagos State education system.",
  image:
    "/assets/lag-skul.jpg",
  techStack: [
    "React Native",
    "JavaScript",
    "REST API",
    "State Management",
    "Mobile UI/UX",
    "Secure Authentication",
  ],
  category: "Mobile Apps",
  liveUrl: "https://lagosschoolsonline.com/",
  googlePlayStoreUrl: "https://play.google.com/store/apps/details?id=com.pointonemfb.pointonemfbmobile&pli=1",
},
  {
  id: "imagex-ai-image-generator",
  title: "ImageX – AI-Powered Image Generator Mobile App",
  description: "AI image generation mobile app built with React Native and Node.js for creating high-quality visuals from text prompts.",
  longDescription:
    "ImageX is an AI-powered mobile application that converts text prompts into high-quality, visually stunning images using advanced artificial intelligence models. Designed for creators, designers, marketers, and digital enthusiasts, the app enables users to instantly generate custom visuals directly from their smartphones.\n\nBuilt with React Native for cross-platform performance and Node.js for backend orchestration, ImageX integrates AI image generation APIs with a clean, responsive, and user-friendly mobile interface. The application focuses on real-time API communication, secure request handling, optimized performance, and scalable architecture.\n\nKey features include dynamic text-to-image generation, customizable prompt input, fast rendering responses, mobile-optimized UI components, and structured backend processing. This project demonstrates strong expertise in AI integration, frontend mobile engineering, and backend API management.",
  image:
    "/assets/image-x.jpg",
  techStack: [
    "React Native",
    "Node.js",
    "Express.js",
    "AI Image Generation API",
    "REST API",
    "JavaScript",
  ],
  category: "Mobile Apps",
  apkDownloadUrl: "https://drive.google.com/drive/folders/1I8dAb_-kQV3MSaH7aTtZ9Vs3QrLE4SPi?usp=sharing",
  githubUrl: "https://github.com/Victor-Adeleye/ImageX",
},
  {
  id: "task-flow-fullstack-todo-app",
  title: "Task-Flow – Fullstack React Native To-Do & Productivity App",
  description: "Cross-platform productivity app built with React Native, Expo, and Convex featuring task management, progress tracking, and real-time sync.",
  longDescription:
    "Task-Flow is a fullstack productivity and task management mobile application designed to help users organize, track, and manage daily activities efficiently. Built with React Native and powered by Expo and Convex, the app delivers a seamless cross-platform experience with real-time data synchronization and modern UI architecture.\n\nThe application allows users to create, edit, delete, and categorize tasks while maintaining clear visibility between completed, active, and deleted items. Task-Flow also integrates notification reminders, timestamp tracking, dark/light mode support, and progress analytics to enhance productivity and usability.\n\nThe Settings module includes structured productivity insights such as total tasks, completed tasks, and active tasks. It also provides preference controls including dark mode, notification toggles, auto-sync configuration, and a secure reset feature within a protected 'Danger Zone' that confirms before permanently deleting all stored tasks.\n\nThis project demonstrates fullstack mobile engineering expertise including state management, backend integration with Convex, structured data modeling, real-time updates, scalable architecture, and performance optimization using Expo.",
  image:
    "/assets/task-flow-preview.jpg",
  techStack: [
    "React Native",
    "Expo",
    "Convex",
    "JavaScript",
    "State Management",
    "Real-Time Sync",
    "Push Notifications",
    "Dark/Light Mode Theming"
  ],
  category: "Mobile Apps",
  liveUrl: "https://drive.google.com/drive/folders/1xnhBYj59mwHoGFo-8Fvd73EB8roKDLUm?usp=sharing",
  apkDownloadUrl: "https://drive.google.com/file/d/1RIJ9QXK3mNiqx4yuFkDRKvAdnbrdItb1/view?usp=sharing",
},
  {
  id: "eco-platforms-web-app",
  title: "Eco Platforms Limited – Sustainable Solutions Web App",
  description: "Eco Platforms web application built with React and Django to provide sustainable solutions, online services, and environmental management tools.",
  longDescription: "Eco Platforms Limited is a web application designed to deliver eco-friendly solutions and digital services for businesses and communities. Built with React for a dynamic frontend and Django for a robust backend, the app integrates interactive dashboards, real-time data management, and responsive design to offer a seamless user experience.\n\nI contributed to the development of the frontend, implementing key features like user dashboards, service booking interfaces, and responsive UI components. The project highlights expertise in full-stack web development, API integration, and scalable web architecture.\n\nKey features include interactive service modules, user-friendly dashboards, responsive layouts, secure authentication, and data management tools tailored for sustainability projects.",
  image: "/assets/eco-platforms.jpg",
  techStack: [
    "React",
    "Django",
    "REST API",
    "PostgreSQL",
    "TailwindCSS",
    "Docker"
  ],
  category: "Web dev",
  liveUrl: "https://www.ecoplatform.net/",
},
  {
  id: "lulichat-landing-page",
  title: "Lulichat – AI-Powered Customer Chat Platform Landing Page",
  description: "Landing page for Lulichat, a Next.js web platform providing AI-driven chat solutions for businesses in Nigeria and Africa.",
  longDescription: "Lulichat is the official landing page for an AI-powered customer chat platform designed to help businesses automate and streamline their customer support. Built with Next.js for fast performance and SEO optimization, the landing page showcases key features, service offerings, and integrations with WhatsApp, Instagram, and other communication channels.\n\nI contributed to the frontend development, implementing responsive layouts, interactive sections, and smooth user experiences optimized for conversion and engagement. The project highlights expertise in modern web development, React/Next.js frameworks, and UI/UX design tailored for tech startups and small businesses.\n\nKey features include responsive design, dynamic content sections, optimized SEO, interactive call-to-action buttons, and seamless integration with marketing and AI automation tools.",
  image: "/assets/Lulichat-preview.png",
  techStack: [
    "Next.js",
    "React",
    "TailwindCSS",
    "Framer Motion",
    "SEO Optimization",
    "Responsive Design"
  ],
  category: "Web dev",
  liveUrl: "https://lulichat.com",
  githubUrl: ""
},
  {
  id: "msquared-kiddies-arena",
  title: "Msquared Kiddies Arena – Kids E-commerce Platform",
  description: "A full-featured e-commerce website for Msquared Kiddies Arena, built on WordPress with WooCommerce for online sales.",
  longDescription: "Msquared Kiddies Arena is a complete e-commerce platform built on WordPress, designed to offer a seamless shopping experience for customers of the kids’ store. The platform integrates WooCommerce for product management, online payments, and order tracking, while ensuring a responsive and mobile-friendly design. \n\nI contributed to the frontend customization, implementing responsive themes, optimizing user experience, and integrating essential plugins for payments, inventory, and shipping. This project demonstrates expertise in WordPress theme development, e-commerce workflow design, and creating secure, scalable online shopping platforms.",
  image: "/assets/msquareka-overview.png",
  techStack: [
    "WordPress",
    "WooCommerce",
    "PHP",
    "HTML",
    "CSS",
    "JavaScript",
    "Responsive Design",
    "Payment Integration",
    "SEO Optimization",
  ],
  category: "Web dev",
  liveUrl: "https://msquaredkiddiesarena.com/",
  githubUrl: ""
},
  {
  id: "lulibuy-ecommerce-platform",
  title: "Luli Buy – E-commerce Platform for Networking Equipment",
  description: "A full-featured e-commerce website for Luli Buy, built on WordPress/WooCommerce to sell networking and IT equipment online.",
  longDescription: "Luli Buy is a comprehensive e-commerce platform designed for selling networking and IT equipment online. Built on WordPress with WooCommerce, the platform offers a seamless shopping experience, including product catalog browsing, secure online payments, inventory management, and order tracking.\n\nI contributed to frontend customization, responsive theme implementation, and optimizing user experience across devices. The platform demonstrates skills in WordPress development, e-commerce workflow optimization, and delivering scalable online retail solutions tailored for tech products.",
  image: "/assets/lulibuy-overview.png",
  techStack: [
    "WordPress",
    "WooCommerce",
    "PHP",
    "HTML",
    "CSS",
    "JavaScript",
    "Responsive Design",
    "Payment Integration",
    "SEO Optimization"
  ],
  category: "Web dev",
  liveUrl: "https://lulibuy.com/",
  githubUrl: ""
},
  {
  id: "vhm-solution-ministry-platform",
  title: "VHM Solution – Church & Ministry Web Platform",
  description: "A full-featured church/ministry platform with live streaming, event management, sermons, blogs, gallery, and donation integration.",
  longDescription: "VHM Solution is a comprehensive digital platform for churches and ministries, designed to engage members online. The platform supports live streaming via YouTube, Facebook, and Instagram, event listings, sermon posting, blog updates, image galleries, and donation management integrated with First Bank (FirstCheckout) for seamless giving.\n\nI contributed to frontend development using React and ensured responsive, user-friendly interfaces across devices. The platform highlights skills in full-stack web development, payment integration, live streaming integration, and building scalable solutions for community-driven organizations.",
  image: "/assets/vhmsolutionpalace-overview.PNG",
  techStack: [
    "WordPress",
    "PHP",
    "First Bank Payment Integration",
    "Responsive Web Design",
    "Live Streaming Integration",
    "Content Management",
    "Secured fused",
    "SEO Optimization"
  ],
  category: "Web dev",
  liveUrl: "https://vhmsolutionplace.com/",
  githubUrl: ""
},
// ---------------- SEO & Content ----------------
{
  id: "lulichat-full-seo",
  title: "Lulichat Full SEO with AI SEO",
  description: "Full Google Business Profile setup, local SEO optimization, and content strategy for Lulichat.",
  longDescription: "Project Problem:\nLulichat had no Google presence—no profile, no keywords, no photos, and no categories. Google couldn't understand the business, so it never appeared on Search or Maps. Visibility was zero, engagement was low, and potential clients couldn't discover them.\n\nSolution:\nI built their entire Google Business Profile from scratch: added correct categories, a keyword-rich description, branded visuals, service list, and GBP posts. I aligned website signals, strengthened Google Maps SEO, and improved their ranking for CRM-related keywords.",
  image: "/assets/lulichat-seo.png",
  techStack: [
    "Google Business Profile (GBP) set-up",
    "GBP Optimization",
    "Technical SEO",
    "On-Page SEO",
    "Off-Page SEO",
    "AI SEO",
    "Business Listing",
    "Backlinking",
    "SEO Citation",
    "Search Engine Marketing (SEM)",
  ],
  category: "SEO & Content",
  liveUrl: "https://docs.google.com/presentation/d/1eAa6NA7bSmdu7AFU4cX9uJ0AlAOQBy7fcZjdqjANLnk/edit?usp=sharing",
  githubUrl: ""
},
  {
  id: "digitek-hub-seo",
    title: "Digitek Hub",
    description: "Full GBP setup and local SEO optimization for Digitek Hub, improving visibility and inquiries.",
    longDescription: "Project Problem:\nDigitek Hub had no Google Business Profile, meaning zero local search presence. No keywords, categories, photos, or SEO signals. Google had nothing to rank, making the brand invisible, untrustworthy, and unsearchable.\n\nSolution:\nI created their full GBP setup, added optimized categories, descriptions, branded visuals, and keyword-rich services. I improved website relevance, activated posts, and implemented map SEO—building a strong digital footprint for visibility and inquiries.",
    image: "/assets/digitekhub-seo.png",
    techStack: [
    "Google Business Profile (GBP) set-up",
    "GBP Optimization",
    "Technical SEO",
    "On-Page SEO",
    "Off-Page SEO",
    "AI SEO",
    "Business Listing",
    "Backlinking",
    "SEO Citation",
    "Search Engine Marketing (SEM)",
  ],
  category: "SEO & Content",
  liveUrl: "https://docs.google.com/presentation/d/1eAa6NA7bSmdu7AFU4cX9uJ0AlAOQBy7fcZjdqjANLnk/edit?usp=sharing",
  githubUrl: ""
},
  {
  id: "lulifiber-seo",
    title: "Lulifiber Internet Company",
    description: "SEO and GBP setup for Lulifiber, improving online visibility for fiber internet services.",
    longDescription: "Project Problem:\nLulifiber had almost no online visibility. No GBP, no keywords, wrong categories, no service list, no posts, and outdated visuals. Customers searching for 'fiber internet,' 'unlimited broadband,' and 'WiFi installation' could not find the brand.\n\nSolution:\nI built a complete GBP setup with proper categories, keyword-rich descriptions, branded visuals, and optimized services. I aligned their website with local SEO signals and strengthened Google Maps SEO, making Lulifiber more discoverable in a competitive ISP market.",
    image: "/assets/lulifiber-seo.png",
    techStack: [
    "Google Business Profile (GBP) set-up",
    "GBP Optimization",
    "Technical SEO",
    "On-Page SEO",
    "Off-Page SEO",
    "AI SEO",
    "Business Listing",
    "Backlinking",
    "SEO Citation",
    "Search Engine Marketing (SEM)",
  ],
  category: "SEO & Content",
  liveUrl: "https://docs.google.com/presentation/d/1eAa6NA7bSmdu7AFU4cX9uJ0AlAOQBy7fcZjdqjANLnk/edit?usp=sharing",
  githubUrl: ""
},

];

// ---------------- EXPERIENCE ----------------
export interface Experience {
  company: string;
  role: string;
  duration: string;
  points: string[];
  skills: string[];
}

export const experiences: Experience[] = [
  {
    company: "Alabian Solutions Academy",
    role: "Software & Mobile Developer Intern (Remote)",
    duration: "Sept. 2025 – Present",
    points: [
      "Converted Figma designs into functional React/Next.js applications.",
      "Integrated REST APIs, debugged, and tested applications in Agile sprints.",
      "Deployed live apps and maintained code quality standards.",
    ],
    skills: ["React", "React Native", "TypeScript", "TailwindCSS", "JavaScript", "Node.js", "Python", "Django"],
  },
  {
    company: "Lulifiber Telecommunications Ltd",
    role: "Software Developer & SEO Engineer (Hybrid)",
    duration: "July 2023 – Present",
    points: [
      "Developed and deployed SEO-optimized web applications using Next.js and WordPress.",
      "Boosted platform metrics: +335% views, +156% user events, +99% active users.",
      "Integrated analytics and automated SEO workflows using AI-powered tools.",
      "Contributed to GOX Suite HR platform, Lulichat, Lulibuy and Luli-Sign frontend features.",
    ],
    skills: ["React.js", "NextJs", "WordPress", "Redux", "MaterialUI", "TailwindCSS", "JavaScript", "Node.js", "Express.js", "Firebase"],
  },
  {
    company: "Freelance",
    role: "Portfolio Projects",
    duration: "2020 – Present",
    points: [
      "WordPress Sites – Theme customization, WooCommerce setup, and SEO optimization for small businesses.",
      "Built responsive custom websites and web apps using React, Next.js, and Django, implementing interactive UI components and performance optimization.",
      "Executed technical and on-page SEO, leveraging AI-powered SEO tools for keyword optimization, content strategy, and improving organic traffic.",
      "Automated workflows for SEO, reporting, and content management using Zapier and Make, integrating AI-based analytics for efficiency and insights.",
    ],
    skills: ["React.js", "NextJs", "React Native", "Redux", "MaterialUI", "TailwindCSS", "JavaScript", "Node.js", "Convex", "Express.js", "Firebase"],
  },
  {
    company: "Digitek Hub",
    role: "Front-end Developer & SEO Specialist (Freelance)",
    duration: "2025",
    points: [
      "Built responsive landing pages and business website for the brand using React, NextJs and TailwindCSS.",
      "Implemented metadata structures, internal linking, and SEO foundations.",
      "Optimized performance and user experience across devices.",
    ],
    skills: ["React.js", "NextJs", "TailwindCSS", "SEO"],
  },
  {
    company: "R3 Consulting LTD",
    role: "Digital Creative & Tech Strategist (Contract)",
    duration: "2024",
    points: [
      "Designed digital assets aligned with product goals and analytics insights.",
      "Supported software-focused marketing and digital transformation initiatives.",
    ],
    skills: ["Content strategy", "WordPress", "SEO"],
  },
    {
    company: "Delight Affection Foundation (DAF) NGO, Maiduguri",
    role: "IT Officer & Monitoring and Evaluation (M&E) Officer (Hybrid)",
    duration: "2019",
    points: [
          "Provided IT support across the organization, managing systems setup, troubleshooting hardware/software issues, and ensuring operational continuity.",
          "Maintained digital records and databases for program tracking, reporting, and donor compliance.",
          "Supported Monitoring & Evaluation processes by collecting, analyzing, and documenting project performance data.",
          "Generated structured reports to support data-driven decision-making and impact assessment.",
          "Improved internal workflow efficiency through structured documentation and basic automation processes.",
    ],
    skills: ["IT Support", "Data Collection & Analysis", "Monitoring & Evaluation (M&E)", "Technical Documentation", "System Troubleshooting", "Reporting & Performance Tracking"],
  },
];

// ---------------- EDUCATION ----------------
export interface Education {
  institution: string;
  degree: string;
  duration: string;
  highlights: string[];
}

export const education: Education[] = [
  {
    institution: "University of Ilorin",
    degree: "B.Eng. Mechanical Engineering",
    duration: "2014 – 2019",
    highlights: [
      "Completed a Bachelor’s degree in Mechanical Engineering with strong foundations in analytical thinking, systems design, and problem-solving.",
      "Applied engineering design principles in academic projects, focusing on practical implementation and efficiency.",
      "Extended technical skills beyond coursework by troubleshooting and repairing electronic devices including laptops and home appliances.",
      "Began transitioning into software development through self-driven learning in WordPress and web development.",
      "Served in leadership roles including Departmental Student Representative Council, Innovation Chair II – National Society of Black Engineers (Unilorin Chapter), and Google Student Ambassador.",
      "Participated as a Google Student Ambassador (2014), contributing to the Google Map Maker initiative that mapped the entire University of Ilorin campus and numerous locations across Kwara State, improving digital location accuracy and visibility on Google Maps.",
      "Collaborated using tools such as Google Map Maker, Google Maps, and structured geographic data validation systems to ensure accurate mapping and verification.",
      "Actively contributed to tech and knowledge-driven communities including Student Tech Ilorin and Readers Club.",
    ],
  },
  {
    institution: "National Youth Service Corps (NYSC) – Borno State, Nigeria",
    degree: "NYSC Certificate",
    duration: "2019 – 2020",
    highlights: [
      "Completed mandatory national service with primary assignment at the Ministry of Works, supporting administrative and technical operations.",
      "Contributed to the development of an automated handwashing system during the COVID-19 period as part of inter-state collaborative innovation efforts.",
      "Served as IT Officer and Monitoring & Evaluation (M&E) Support for an NGO, providing technical support, data tracking, and performance reporting.",
      "Participated in community development initiatives focused on social impact and rural outreach programs.",
      "Held leadership roles including General Secretary – Winners Corpers Fellowship (WCF), and active member of the Drama and Editorial Units.",
      "Engaged with the Borno State tech community, expanding exposure to technology-driven solutions and innovation.",
    ],
  },
];

// ---------------- CERTIFICATES ----------------
export interface Certificate {
  title: string;
  institution: string;
  year: string;
  description?: string;
}

export const certificates: Certificate[] = [
  { title: "B.Eng. Mechanical Engineering", institution: "University of Ilorin", year: "2019" },
  { title: "National Youth Service Corps", institution: "NYSC", year: "2020" },
  { title: "Software & Mobile Development", institution: "Udemy", year: "2025" },
  { title: "Software & Mobile Development", institution: "Alabian Learning Academy", year: "2025" },
  { title: "Software Development Certification", institution: "3MTT", year: "2025" },
  { title: "Website Design Certification", institution: "VSL", year: "2024" },
  { title: "Web Design MasterClass Certification", institution: "Spantrix Web Host", year: "2022" },
  { title: "Digital Marketing Certificate", institution: "India Institute of Digital Education, India", year: "2022" },
  { title: "Project Management (PMP) Certified", institution: "Formazione Business School, Abuja", year: "2020" },
  { title: "Web/Mobile App Development Training", institution: "ALX Certified", year: "2020" },
  { title: "IT Support Professional", institution: "Coursera", year: "2020" },
  { title: "Network Engineering", institution: "Federal Secretary Ilorin, Kwara State", year: "2019" },
  { title: "NiMechE Member Certification", institution: "University of Ilorin, Kwara State", year: "2017" },
  { title: "Google Ambassador", institution: "Google Student Ambassador, Kwara State", year: "2014" },
];

// ---------------- SKILLS ----------------
export const frontendSkills = [
  { name: "JavaScript", icon: "https://img.icons8.com/color/144/000000/javascript--v1.png" },
  { name: "ReactJS", icon: "https://img.icons8.com/ultraviolet/120/null/react--v1.png" },
  { name: "React Native", icon: "https://img.icons8.com/ultraviolet/120/null/react--v1.png" },
  { name: "TypeScript", icon: "https://img.icons8.com/color/144/null/typescript.png" },
  { name: "NextJS", icon: "https://res.cloudinary.com/lifecodes/image/upload/v1678131853/Portfolio/rmz2jvsww4cdwkfriuyc.svg" },
  { name: "TailwindCSS", icon: "https://img.icons8.com/color/144/null/tailwindcss.png" },
  { name: "Redux", icon: "https://img.icons8.com/color/144/null/redux.png" },
  { name: "Material UI", icon: "https://img.icons8.com/color/144/null/material-ui.png" },
  { name: "HTML5", icon: "https://img.icons8.com/color/144/null/html-5--v1.png" },
  { name: "CSS3", icon: "https://img.icons8.com/color/144/null/css3.png" },
  { name: "Bootstrap", icon: "https://img.icons8.com/color/144/null/bootstrap.png" },
];

export const backendSkills = [
  { name: "NodeJS", icon: "https://img.icons8.com/color/144/null/nodejs.png" },
  { name: "ExpressJS", icon: "https://img.icons8.com/fluency/144/null/node-js.png" },
  { name: "MongoDB", icon: "https://img.icons8.com/color/144/null/mongodb.png" },
  { name: "Firebase", icon: "https://img.icons8.com/color/144/null/firebase.png" },
  { name: "PostgreSQL", icon: "https://img.icons8.com/color/144/null/postgreesql.png" },
];

export const otherSkills = [
  { name: "Git", icon: "https://img.icons8.com/color/144/null/git.png" },
  { name: "GitHub", icon: "https://img.icons8.com/glyph-neue/144/null/github.png" },
  { name: "VS Code", icon: "https://img.icons8.com/color/144/null/visual-studio-code-2019.png" },
  { name: "Vercel", icon: "https://img.icons8.com/triangles/144/null/experimental-vercel-triangles.png" },
  { name: "Zapier", icon: "https://img.icons8.com/color/144/zapier.png" },
  { name: "Make", icon: "https://img.icons8.com/color/144/integromat.png" },
  { name: "On-page SEO", icon: "https://img.icons8.com/color/144/seo.png" },
  { name: "Off-page SEO", icon: "https://img.icons8.com/fluency/144/search.png" },
  { name: "AI SEO", icon: "https://img.icons8.com/color/144/artificial-intelligence.png" },
];