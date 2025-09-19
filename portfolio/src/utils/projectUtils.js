// Project Management Utilities
// This file makes it super easy to add new projects

// Auto-generate project configuration
export const createProject = ({
  id,
  title,
  description,
  folder, // e.g., 'my-awesome-app'
  techStack = [],
  liveLink = '',
  codeLink = '',
  featured = false,
  imageExtensions = ['jpg', 'png'],
  customImages = null, // If you have specific image names
  fullDescription = null
}) => {
  // Auto-generate image paths
  const generateImages = () => {
    if (customImages) {
      return customImages.map(img => `/projects/${folder}/${img}`);
    }
    
    // Default pattern: folder-1.jpg, folder-2.png, etc.
    const defaultImages = [];
    for (let i = 1; i <= 3; i++) {
      imageExtensions.forEach(ext => {
        defaultImages.push(`/projects/${folder}/${folder}-${i}.${ext}`);
      });
    }
    return defaultImages;
  };

  const images = generateImages();

  return {
    id,
    title,
    description,
    fullDescription,
    image: images[0], // First image as main
    images,
    techStack,
    liveLink,
    codeLink,
    featured
  };
};

// Quick project templates
export const projectTemplates = {
  reactApp: (overrides = {}) => createProject({
    techStack: ['React', 'JavaScript', 'CSS'],
    ...overrides
  }),
  
  fullStackApp: (overrides = {}) => createProject({
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    featured: true,
    ...overrides
  }),
  
  frontendOnly: (overrides = {}) => createProject({
    techStack: ['HTML', 'CSS', 'JavaScript'],
    ...overrides
  }),
  
  ecommerce: (overrides = {}) => createProject({
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    featured: true,
    ...overrides
  }),
  
  mobileResponsive: (overrides = {}) => createProject({
    techStack: ['React', 'Tailwind CSS', 'Responsive Design'],
    ...overrides
  })
};

// Batch image operations
export const batchImageUtils = {
  // Generate image paths for multiple projects
  generateAllPaths: (projectFolders) => {
    const result = {};
    projectFolders.forEach(folder => {
      result[folder] = [1, 2, 3].map(i => `/projects/${folder}/${folder}-${i}.jpg`);
    });
    return result;
  },
  
  // Validate if images exist (for development)
  checkImagePaths: async (imagePaths) => {
    const results = {};
    for (const path of imagePaths) {
      try {
        const response = await fetch(path, { method: 'HEAD' });
        results[path] = response.ok;
      } catch {
        results[path] = false;
      }
    }
    return results;
  }
};

// Common tech stack combinations
export const techStacks = {
  frontend: ['HTML', 'CSS', 'JavaScript'],
  react: ['React', 'JavaScript', 'CSS'],
  reactAdvanced: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
  fullStack: ['React', 'Node.js', 'Express', 'MongoDB'],
  jamstack: ['React', 'Gatsby', 'GraphQL', 'Netlify'],
  ecommerce: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'JWT'],
  cms: ['React', 'Node.js', 'Express', 'MongoDB', 'Cloudinary'],
  api: ['Node.js', 'Express', 'MongoDB', 'JWT', 'REST API'],
  mobile: ['React Native', 'JavaScript', 'AsyncStorage'],
  
  // Backend focused
  backend: ['Node.js', 'Express', 'MongoDB'],
  python: ['Python', 'Django', 'SQLite'],
  
  // Modern stacks
  modern: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
  nextjs: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
  vue: ['Vue.js', 'Nuxt.js', 'TypeScript', 'Tailwind CSS']
};

// Helper for creating full descriptions quickly
export const createFullDescription = ({
  problem = '',
  solution = '',
  techUsed = '',
  challenges = '',
  outcome = ''
}) => ({
  problem,
  solution,
  techUsed,
  challenges,
  outcome
});

// Example usage:
/*
// Easy way to add a new project:
const myNewProject = projectTemplates.reactApp({
  id: 6,
  title: "🎮 Gaming Dashboard",
  description: "A real-time gaming statistics dashboard",
  folder: "gaming-dashboard",
  techStack: techStacks.reactAdvanced,
  liveLink: "https://my-gaming-dashboard.netlify.app",
  codeLink: "https://github.com/myusername/gaming-dashboard",
  featured: true,
  customImages: ['dashboard-main.jpg', 'dashboard-stats.jpg', 'dashboard-mobile.jpg'],
  fullDescription: createFullDescription({
    problem: "Gamers need a centralized place to track their statistics...",
    solution: "Built a real-time dashboard that aggregates data...",
    techUsed: "Used React with hooks for state management...",
    challenges: "The main challenge was handling real-time data...",
    outcome: "Created a dashboard that helps gamers improve..."
  })
});

// Then just add it to projectsData:
export const projectsData = [
  ...existingProjects,
  myNewProject
];
*/
