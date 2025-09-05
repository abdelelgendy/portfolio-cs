// Sample project data - you can replace with your own projects
export const projectsData = [
  {
    id: 1,
    title: "React Movie Discovery App",
    description: "Responsive movie search application using React.js and Tailwind CSS with real-time API integration.",
    image: "https://via.placeholder.com/400x250/3B82F6/FFFFFF?text=Movie+App",
    techStack: ["React", "Tailwind CSS", "REST API", "JavaScript"],
    liveLink: "https://example.com",
    codeLink: "https://github.com/example/movie-app",
    featured: true
  },
  {
    id: 2,
    title: "MealMind - Meal Planning App",
    description: "Full-stack meal planning application with React, Vite, and Supabase for personalized recommendations.",
    image: "https://via.placeholder.com/400x250/10B981/FFFFFF?text=MealMind",
    techStack: ["React", "Vite", "Supabase", "JavaScript"],
    liveLink: "https://example.com",
    codeLink: "https://github.com/example/mealmind",
    featured: true
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website built with React and Tailwind CSS.",
    image: "https://via.placeholder.com/400x250/8B5CF6/FFFFFF?text=Portfolio",
    techStack: ["React", "Vite", "Tailwind CSS"],
    liveLink: "https://example.com",
    codeLink: "https://github.com/example/portfolio",
    featured: false
  }
];

// Skills data
export const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 90, icon: "⚛️" },
      { name: "JavaScript", level: 95, icon: "🟨" },
      { name: "Tailwind CSS", level: 85, icon: "🎨" },
      { name: "HTML5", level: 95, icon: "🌐" },
      { name: "CSS3", level: 90, icon: "💄" }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 80, icon: "🟢" },
      { name: "Express", level: 75, icon: "🚀" },
      { name: "MongoDB", level: 70, icon: "🍃" },
      { name: "REST APIs", level: 85, icon: "🔗" }
    ]
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", level: 90, icon: "📚" },
      { name: "Vite", level: 80, icon: "⚡" },
      { name: "Figma", level: 75, icon: "🎯" },
      { name: "VS Code", level: 95, icon: "💻" }
    ]
  }
];
