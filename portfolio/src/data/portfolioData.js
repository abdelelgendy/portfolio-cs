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
    imageCount: 3,
    customImages: ['ecommerce-homepage.jpg', 'ecommerce-products.jpg', 'ecommerce-cart.jpg']
  },
  'travel-journal': {
    folder: 'weather-app',
    imageCount: 3,
    customImages: ['travel-homepage.jpg', 'travel-journal.jpg', 'travel-gallery.jpg']
  },
  'blackjack': {
    folder: 'portfolio-site',
    imageCount: 3,
    customImages: ['blackjack-game.jpg', 'blackjack-playing.jpg', 'blackjack-rules.jpg']
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
    description: "A Netflix-inspired movie discovery platform that solves the problem of scattered movie information across multiple platforms.",
    fullDescription: {
      problem: "Movie enthusiasts often struggle to find comprehensive information about films, including ratings, cast details, and streaming availability, scattered across multiple websites and platforms.",
      solution: "Built a centralized movie discovery platform that aggregates movie data from multiple APIs, providing users with detailed information, ratings, trailers, and reviews in one seamless interface.",
      techUsed: "Developed using React.js for dynamic UI components, integrated with The Movie Database (TMDb) API for real-time movie data, implemented responsive design with Tailwind CSS, and added smooth animations for enhanced user experience.",
      challenges: "The main challenge was handling large datasets from external APIs while maintaining fast load times. Solved this by implementing pagination, lazy loading for images, and optimizing API calls with debounced search functionality.",
      outcome: "Created a professional-grade application that demonstrates proficiency in API integration, state management, and modern React patterns. The app showcases ability to work with external data sources and create intuitive user interfaces."
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
    description: "An intelligent meal planning solution that addresses the daily struggle of healthy meal preparation and nutrition tracking.",
    fullDescription: {
      problem: "Many people struggle with meal planning, leading to poor nutrition choices, food waste, and the stress of deciding what to eat daily. Existing solutions were either too complex or lacked personalization.",
      solution: "Developed MealMind, a comprehensive meal planning application that provides personalized meal recommendations, generates shopping lists, and tracks nutritional goals based on user preferences and dietary restrictions.",
      techUsed: "Built with React and Vite for fast development and optimal performance, integrated Supabase for real-time database management and user authentication, implemented responsive design for mobile-first experience, and created custom algorithms for meal recommendation logic.",
      challenges: "The biggest challenge was creating an intelligent recommendation system that considers user preferences, dietary restrictions, and nutritional balance. Solved by implementing a scoring algorithm that weighs multiple factors and learns from user interactions.",
      outcome: "Successfully created a full-stack application that demonstrates database design, user authentication, complex state management, and algorithm implementation. The app shows proficiency in modern React patterns and backend integration."
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
    title: "🛒 E-commerce Platform",
    description: "A complete e-commerce solution that solves the complexity of online retail for small to medium businesses.",
    fullDescription: {
      problem: "Small businesses often struggle with expensive e-commerce platforms that lack customization or are too complex to manage. They need affordable, scalable solutions with essential features like inventory management, secure payments, and admin controls.",
      solution: "Built a full-stack e-commerce platform from scratch with complete shopping functionality, secure payment processing, inventory management, and an intuitive admin dashboard for business owners to manage their online store effectively.",
      techUsed: "Developed using the MERN stack (MongoDB, Express.js, React, Node.js) for full-stack JavaScript development, integrated Stripe and Razorpay for secure payment processing, implemented Cloudinary for optimized image management, used JWT for secure authentication, and designed responsive UI with Tailwind CSS.",
      challenges: "The main challenges included implementing secure payment processing, managing complex state for shopping cart functionality, and creating an efficient inventory management system. Solved by implementing proper authentication flows, optimistic UI updates, and real-time inventory tracking.",
      outcome: "Successfully delivered a production-ready e-commerce platform demonstrating full-stack development skills, payment integration expertise, database design, and security best practices. The project showcases ability to handle complex business logic and create scalable applications."
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
    description: "A digital storytelling platform that preserves and shares cultural travel experiences through interactive journaling.",
    fullDescription: {
      problem: "Traditional travel documentation often fails to capture the emotional depth and cultural nuances of travel experiences. Social media posts are fleeting, and written journals lack visual storytelling capabilities for sharing meaningful travel memories.",
      solution: "Created an interactive digital travel journal that combines visual storytelling with detailed cultural insights, allowing travelers to document, preserve, and share their journeys in an engaging, narrative-driven format with location-based entries and immersive photo galleries.",
      techUsed: "Built with React for component-based architecture, implemented custom CSS3 animations for smooth user interactions, used Vite for optimized development workflow, integrated ESLint for code quality, and designed responsive layouts that work seamlessly across devices.",
      challenges: "The primary challenge was creating an engaging storytelling interface that could handle rich media content while maintaining fast performance. Solved by implementing lazy loading for images, optimizing animation performance, and creating modular components for different content types.",
      outcome: "Delivered a visually stunning application that demonstrates advanced CSS skills, animation implementation, and storytelling through code. The project showcases ability to create engaging user experiences and handle multimedia content effectively."
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
    description: "A web-based casino game that demonstrates vanilla JavaScript mastery and game logic implementation.",
    fullDescription: {
      problem: "Learning fundamental programming concepts like game logic, state management, and DOM manipulation can be abstract and difficult to grasp without practical application. Many developers struggle with vanilla JavaScript after becoming dependent on frameworks.",
      solution: "Developed a fully functional BlackJack game using only vanilla JavaScript, HTML, and CSS to demonstrate mastery of core web development fundamentals, including complex game logic, DOM manipulation, and event handling without framework dependencies.",
      techUsed: "Built entirely with vanilla JavaScript for game logic and state management, HTML5 for semantic structure and accessibility, CSS3 for styling and card animations, implemented object-oriented programming principles, and created responsive design for cross-device compatibility.",
      challenges: "The main challenges included implementing authentic casino rules, managing complex game state (deck, hands, betting), and creating smooth animations without external libraries. Solved by breaking down game logic into modular functions, implementing proper state management patterns, and using CSS transforms for performance-optimized animations.",
      outcome: "Successfully created a production-quality game that demonstrates strong foundation in core web technologies. The project proves ability to build complex applications without frameworks and shows mastery of fundamental programming concepts essential for any advanced development work."
    },
    image: getProjectImages('blackjack')[0],
    images: getProjectImages('blackjack'),
    techStack: ["JavaScript", "HTML", "CSS"],
    liveLink: "https://blackjack-app-abdel.netlify.app",
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
