// Utility function to generate image paths dynamically
const generateImagePaths = (projectFolder, imageCount = 3, extensions = ['jpg', 'png']) => {
  const basePath = `/projects/${projectFolder}`;
  const images = [];
  
  // Generate paths for different naming patterns
  for (let i = 1; i <= imageCount; i++) {
    extensions.forEach(ext => {
      images.push(`${basePath}/${projectFolder}-${i}.${ext}`);
    });
  }
  
  // Add common naming patterns
  const commonNames = ['homepage', 'dashboard', 'details', 'features', 'gallery'];
  commonNames.slice(0, imageCount).forEach(name => {
    extensions.forEach(ext => {
      images.push(`${basePath}/${projectFolder}-${name}.${ext}`);
    });
  });
  
  return images;
};

// Enhanced project configuration with dynamic image generation
const projectConfigs = {
  'movie-app': {
    folder: 'movie-app',
    imageCount: 4,
    customImages: ['app.png', 'movie-app-1.png', 'movie-app-2.png', 'movie-app-3.png']
  },
  'meal-planning': {
    folder: 'meal-mind',
    imageCount: 6,
    customImages: ['Homepage.png', 'plan.png', 'pantry.png', 'recipes.png', 'profile.png', 'pantry2.png']
  },
  'ecommerce': {
    folder: 'ecommerce-site',
    imageCount: 5,
    customImages: ['Homepage.png', 'collection.png', 'product.png', 'login.png', 'checkout.png']
  },
  'travel-journal': {
    folder: 'travel-journal',
    imageCount: 3,
    customImages: ['travel1.png', 'travel2.png', 'travel3.png']
  },
  'blackjack': {
    folder: 'Blackjack',
    imageCount: 5,
    customImages: ['game1.png', 'game2.png', 'game3.png', 'game4.png', 'game5.png']
  }
};

// Helper function to get project images
const getProjectImages = (projectKey) => {
  const config = projectConfigs[projectKey];
  if (!config) return [];
  
  if (config.customImages) {
    return config.customImages.map(img => `/projects/${config.folder}/${img}`);
  }
  
  return generateImagePaths(config.folder, config.imageCount);
};

// Sample project data - you can replace with your own projects
export const projectsData = [
  {
    id: 1,
    title: "🎬 React Movie Discovery App",
    description: "Built to master API integration and React fundamentals. Features a custom search algorithm and recommendation system that I'm genuinely proud of.",
    fullDescription: {
      problem: "I wanted to deepen my understanding of API integration and React state management while building something practical. The goal was to create a seamless movie discovery experience that could handle real-time data effectively.",
      solution: "Developed a comprehensive movie discovery platform using The Movie Database API, implementing dynamic search functionality and a custom recommendation algorithm that suggests relevant content based on user interactions.",
      techUsed: "Built with React.js for component-based architecture, integrated TMDb API with proper error handling and loading states, implemented debounced search to optimize API calls, and created a recommendation system using movie metadata analysis.",
      challenges: "Managing API rate limits and ensuring responsive user experience required implementing smart debouncing strategies. The recommendation algorithm needed careful tuning to provide relevant suggestions while handling diverse movie data efficiently.",
      outcome: "Successfully created a production-ready movie discovery platform that demonstrates strong API integration skills and React best practices. The search functionality is highly responsive and the recommendation system provides genuinely useful suggestions."
    },
    image: getProjectImages('movie-app')[0],
    images: getProjectImages('movie-app'),
    techStack: ["React", "Tailwind CSS", "REST API", "JavaScript"],
    liveLink: "https://abdels-movie-app2.netlify.app",
    codeLink: "https://github.com/abdelelgendy/react-Movie-app",
    featured: true
  },
  {
    id: 2,
    title: "🍽️ MealMind - Meal Planning App",
    description: "Designed to create real value for users managing meal planning and pantry organization. Currently in active use - it genuinely solves everyday problems.",
    fullDescription: {
      problem: "I wanted to build something with genuine utility that addresses real-world meal planning challenges. The initial focus was helping users maximize existing ingredients, which evolved into a comprehensive meal management solution.",
      solution: "Developed MealMind as a full-featured meal planning application that combines recipe discovery, meal scheduling, and pantry management. Users can plan meals based on available ingredients and maintain organized meal schedules.",
      techUsed: "Built with React and Vite for optimal performance, integrated Supabase for real-time database management and user authentication, implemented complex state management for pantry tracking, and integrated recipe APIs for comprehensive meal options.",
      challenges: "Database optimization and API reliability presented the primary technical challenges. Ensuring seamless real-time updates across pantry management and meal planning required careful state management and efficient database queries.",
      outcome: "Successfully deployed a functional meal planning application that I actively use and validate. The platform effectively addresses real meal planning needs, with future enhancements planned including automated pantry management through receipt scanning technology."
    },
    image: getProjectImages('meal-planning')[0],
    images: getProjectImages('meal-planning'),
    techStack: ["React", "Vite", "Supabase", "JavaScript"],
    liveLink: "https://mealmind-abdel.netlify.app/",
    codeLink: "https://github.com/abdelelgendy/mealmind",
    featured: true
  },
  {
    id: 3,
    title: "🛒 Herself Era - Islamic Fashion E-commerce",
    description: "A professional e-commerce platform I built for my family's 'Herself Era' Islamic/modest fashion business. Features beautiful product photography, clean design, and serves real customers with secure transactions.",
    fullDescription: {
      problem: "When a family member approached me to develop a website for their Islamic/modest fashion business 'Herself Era', I recognized an opportunity to create a comprehensive e-commerce solution that would transform their local Egyptian operation into a professional online presence. The challenge was building a platform that could handle real transactions, inventory management, and customer interactions while maintaining the elegant aesthetic that represents their brand values.",
      solution: "Built a comprehensive e-commerce platform from the ground up for Herself Era, featuring an elegant product catalog with stunning photography, secure payment processing, inventory tracking, and an intuitive admin dashboard. The design emphasizes the beauty and modesty of Islamic fashion with a clean, professional interface.",
      techUsed: "Implemented using the MERN stack (MongoDB, Express.js, React, Node.js) for full-stack development, integrated Stripe and Razorpay for international and local payment processing, utilized Cloudinary for optimized image management of the beautiful product photography, and secured with JWT authentication.",
      challenges: "The most complex aspect was implementing reliable payment processing and comprehensive database management while maintaining the elegant visual design that represents the Herself Era brand. Ensuring seamless integration between inventory systems, payment gateways, and admin controls required careful architecture and extensive testing.",
      outcome: "Successfully launched Herself Era's production e-commerce platform currently serving real customers and showcasing beautiful Islamic/modest fashion. The experience of building something with genuine business impact for my family's brand and seeing actual customer engagement has been incredibly rewarding and educational."
    },
    image: getProjectImages('ecommerce')[0],
    images: getProjectImages('ecommerce'),
    techStack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Express",
      "MongoDB",
      "Stripe",
      "Razorpay",
      "Cloudinary",
      "JWT",
    ],
    liveLink: "https://herself-era.netlify.app",
    codeLink: "https://github.com/abdelelgendy/Ecommerce-project",
    featured: true,
  },
  {
    id: 4,
    title: "🌊 Mediterranean & Middle Eastern Travel Journal",
    description: "A creative front-end project focused on visual storytelling and animation. Emphasized design aesthetics and smooth user interactions over complex functionality.",
    fullDescription: {
      problem: "I wanted to focus purely on front-end skills and visual design without the complexity of backend systems. The goal was to create something visually engaging that would showcase animation and design capabilities.",
      solution: "Created an interactive travel journal highlighting Mediterranean and Middle Eastern destinations with emphasis on smooth animations, visual storytelling, and engaging user experience design.",
      techUsed: "Built with React for component architecture, utilized Vite for efficient development workflow, implemented custom CSS3 animations for fluid interactions, and ensured responsive design across all device types.",
      challenges: "The primary focus was creating compelling visual experiences and smooth animations. While technically less complex than full-stack projects, achieving the right balance of visual appeal and performance required careful attention to animation optimization and user experience flow.",
      outcome: "Successfully created a visually engaging application that demonstrates strong front-end development skills and design sensibility. The animation work turned out particularly well and serves as an excellent showcase of pure front-end capabilities."
    },
    image: getProjectImages('travel-journal')[0],
    images: getProjectImages('travel-journal'),
    techStack: ["React", "Vite", "CSS3", "ESLint"],
    liveLink: "https://travel-journal-abdel.netlify.app",
    codeLink: "https://github.com/abdelelgendy/react-project",
    featured: true,
  },
  {
    id: 5,
    title: "♠️ BlackJack Game",
    description: "One of my foundational projects built in vanilla JavaScript to master core programming concepts. Still actively enjoyed and considering a React migration.",
    fullDescription: {
      problem: "As an early project, I wanted to solidify my understanding of vanilla JavaScript fundamentals before advancing to frameworks. Building an interactive game provided practical application of core programming concepts.",
      solution: "Developed a fully functional BlackJack game using pure vanilla JavaScript, HTML, and CSS. The project emphasizes fundamental programming principles including DOM manipulation, state management, and complex game logic implementation.",
      techUsed: "Built entirely with vanilla JavaScript for game logic and state management, HTML5 for semantic structure, and CSS3 for styling and animations. Implemented object-oriented programming principles and responsive design without external dependencies.",
      challenges: "The most complex aspect was implementing advanced BlackJack features like hand splitting and multi-split scenarios. Managing multiple game states, betting logic, and ensuring accurate rule implementation required careful algorithmic thinking.",
      outcome: "Created a production-quality game that demonstrates strong foundational programming skills. The project remains actively used and serves as a benchmark for my growth - currently considering migrating it to React to showcase framework evolution skills."
    },
    image: getProjectImages('blackjack')[0],
    images: getProjectImages('blackjack'),
    techStack: ["JavaScript", "HTML", "CSS"],
    liveLink: "https://www.shutterstock.com/image-photo/work-progress-sorry-inconvenience-caused-260nw-1486286573.jpg",
    codeLink: "https://github.com/abdelelgendy/BlackJack",
    featured: true,
  },
];

// Skills data
export const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 90, icon: "⚛️" },
      { name: "JavaScript", level: 95, icon: "🟨" },
      { name: "Vite", level: 85, icon: "⚡" },
      { name: "Tailwind CSS", level: 85, icon: "🎨" },
      { name: "HTML5", level: 95, icon: "🌐" },
      { name: "CSS3", level: 90, icon: "💄" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 80, icon: "🟢" },
      { name: "Express", level: 80, icon: "🚀" },
      { name: "MongoDB", level: 75, icon: "🍃" },
      { name: "Stripe/Razorpay", level: 70, icon: "💳" },
      { name: "Cloudinary", level: 70, icon: "☁️" },
      { name: "REST APIs", level: 85, icon: "🔗" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", level: 90, icon: "📚" },
      { name: "Figma", level: 75, icon: "🎯" },
      { name: "VS Code", level: 95, icon: "💻" },
      { name: "ESLint", level: 80, icon: "🧹" },
    ],
  },
];
