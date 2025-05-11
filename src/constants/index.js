const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Founders",
    link: "#founders",
  },
  {
    name: "Tech",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 5, suffix: "+", label: "Years of Experience" },
  { value: 100, suffix: "+", label: "Satisfied Clients" },
  { value: 100, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "Php with Laravel",
    imgPath: "/images/phpLaravel.png",
  },
  {
    name: "MySQL Database",
    imgPath: "/images/mySql.png",
  },
  {
    name: "Photoshop",
    imgPath: "/images/photoshop.png",
  },
  {
    name: "Microsoft SQL Server",
    imgPath: "/images/microsoftServer.png",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
    {
    name: ".NET with C#",
    modelPath: "/models/csharp.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    img: "/images/me.jpg",
    name: "Aleksandro",
    logoPath:"/images/reactSmall.png",
    review:"Talk is cheap. Show me the code.",
    title: "Co-Founder & Head of Developement",
    date: "2020 - Present",
    responsibilities: [
      "Architecture and backend development using ASP.NET and SQL Server",
      "Managing infrastructure and deployments",
      "Managing infrastructure and deployments",
      "Leading frontend development using React and Redux",
      "Collaborating with the frontend team to ensure seamless integration with the backend",
      "Overseeing code quality and performance optimization",
      "Setting up CI/CD pipelines and automating deployment processes",
      "Ensuring security best practices in development and deployment"
    ],
  },
  {
    img: "/images/kriss.jpg",
    name: "Kristijan",
    review:"The best way to predict the future is to invent it",
    logoPath:"/images/phpSmall.png",
    title: "Co-Founder & Backend Developer",
    date: "2020 - Present",
    responsibilities: [
      "Architecture and backend development using PHP and MySQL",
      "Managing infrastructure and deployments",
      "Designing and maintaining robust and scalable APIs",
      "Optimizing database queries and ensuring efficient data management",
      "Setting up server environments and configuring production systems",
      "Implementing backend security measures and best practices",
      "Integrating third-party services and APIs for advanced functionality"
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "NextGen Solutions transformed our online presence with an outstanding website. Their team is incredibly skilled and efficient!",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "We're thrilled with the web application NextGen Solutions developed for us. It’s user-friendly, fast, and reliable. Highly recommended!",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "NextGen Solutions exceeded our expectations! The website they built for us is stunning and performs seamlessly across all devices",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Working with NextGen Solutions was a game-changer. Their team brought our ideas to life with a smooth and professional web app. Great experience!",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "NextGen Solutions helped us develop a top-tier web app that’s easy to navigate and packed with features. We couldn’t be happier with the result.",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Our new website, created by NextGen Solutions, has drastically improved our customer engagement. Their service was fast and exceptional",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    url:"https://www.instagram.com",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    url:"https://www.facebook.com",
    imgPath: "/images/fb.png",
  },
  // {
  //   name: "x",
  //   imgPath: "/images/x.png",
  // },
  // {
  //   name: "linkedin",
  //   imgPath: "/images/linkedin.png",
  // },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
