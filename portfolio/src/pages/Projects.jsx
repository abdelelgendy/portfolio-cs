export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "React Movie Discovery App",
      description: "Responsive movie search application using React.js and Tailwind CSS with real-time API integration.",
      image: "https://via.placeholder.com/400x250/3B82F6/FFFFFF?text=Movie+App",
      techStack: ["React", "Tailwind CSS", "REST API", "JavaScript"],
      liveLink: "https://example.com",
      codeLink: "https://github.com/example/movie-app"
    },
    {
      id: 2,
      title: "MealMind - Meal Planning App",
      description: "Full-stack meal planning application with React, Vite, and Supabase for personalized recommendations.",
      image: "https://via.placeholder.com/400x250/10B981/FFFFFF?text=MealMind",
      techStack: ["React", "Vite", "Supabase", "JavaScript"],
      liveLink: "https://example.com",
      codeLink: "https://github.com/example/mealmind"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website built with React and Tailwind CSS.",
      image: "https://via.placeholder.com/400x250/8B5CF6/FFFFFF?text=Portfolio",
      techStack: ["React", "Vite", "Tailwind CSS"],
      liveLink: "https://example.com",
      codeLink: "https://github.com/example/portfolio"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Projects</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Here are some of the projects I've worked on recently.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {project.title}
              </h3>
              
              <p className="text-gray-600 mb-4 text-sm">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a 
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  Live Demo
                </a>
                
                <a 
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-700 text-sm font-medium"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
