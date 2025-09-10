// Sample project data - you can replace with your own projects
export const projectsData = [
  {
    id: 1,
    title: "🎬 React Movie Discovery App",
    description: "A dynamic movie search and discovery platform built with React.js and Tailwind CSS. Features real-time API integration with movie databases, allowing users to search, filter, and explore movies with detailed information, ratings, and trailers. Includes responsive design and smooth user interactions.",
    image: "https://images.unsplash.com/photo-1489599849554-6f1a9d2e8ad3?w=400&h=250&fit=crop&auto=format",
    techStack: ["React", "Tailwind CSS", "REST API", "JavaScript"],
    liveLink: "https://abdels-movie-app2.netlify.app",
    codeLink: "https://github.com/abdelelgendy/react-Movie-app",
    featured: true
  },
  {
    id: 2,
    title: "🍽️ MealMind - Meal Planning App",
    description: "Comprehensive full-stack meal planning application designed to simplify nutrition management. Built with React, Vite, and Supabase backend, featuring user authentication, personalized meal recommendations, grocery list generation, and nutritional tracking. Helps users plan healthy meals and maintain dietary goals.",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=250&fit=crop&auto=format",
    techStack: ["React", "Vite", "Supabase", "JavaScript"],
    liveLink: "https://mealmind-abdel.netlify.app/",
    codeLink: "https://github.com/abdelelgendy/mealmind",
    featured: true
  },
  {
    id: 3,
    title: "🛒 E-commerce Platform",
    description: "Robust full-stack e-commerce solution with complete shopping functionality. Features secure user authentication, dynamic product catalog, shopping cart management, integrated payment processing (Stripe & Razorpay), cloud-based image uploads via Cloudinary, and JWT-based security. Includes admin dashboard for inventory and order management.",
    image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=400&h=250&fit=crop&auto=format",
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
    liveLink: "https://herself-era.netlify.app", // replace with your deployed link
    codeLink: "https://github.com/abdelelgendy/Ecommerce-project",
    featured: true,
  },
  {
    id: 4,
    title: "🌊 Mediterranean & Middle Eastern Travel Journal",
    description: "Interactive digital travel diary documenting a 2-month cultural journey through Egypt, Turkey, and Italy. Features 11 detailed destination entries with personal travel experiences, location ratings, photo galleries, and immersive visual storytelling. Built with React and custom CSS3 animations, showcasing responsive design and engaging user interface patterns.",
    image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73d30?w=400&h=250&fit=crop&auto=format",
    techStack: ["React", "Vite", "CSS3", "ESLint"],
    liveLink: "https://travel-journal-abdel.netlify.app", // replace with your deployed link
    codeLink: "https://github.com/abdelelgendy/react-project",
    featured: true,
  },
  {
    id: 5,
    title: "♠️ BlackJack Game",
    description: "Fully interactive BlackJack card game implementation with authentic casino rules and features. Includes intelligent betting system, automatic stand-on-21 logic, chip-locking mechanisms for strategic gameplay, and realistic card animations. Built with vanilla JavaScript, HTML5, and CSS3, demonstrating strong foundational programming skills and game logic implementation.",
    image: "https://images.unsplash.com/photo-1612817159949-195b46d41b54?w=400&h=250&fit=crop&auto=format",
    techStack: ["JavaScript", "HTML", "CSS"],
    liveLink: "https://blackjack-app-abdel.netlify.app", // replace with your deployed link
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
