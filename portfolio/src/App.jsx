
function App() {
  // Projects data
  const projects = [
    {
      id: 1,
      title: "React Movie Discovery App",
      description: "Responsive movie search application using React.js and Tailwind CSS with real-time API integration.",
      techStack: ["React", "Tailwind CSS", "REST API", "JavaScript"],
      color: "bg-blue-500",
      liveLink: "https://example.com",
      codeLink: "https://github.com/example/movie-app"
    },
    {
      id: 2,
      title: "MealMind - Meal Planning App",
      description: "Full-stack meal planning application with React, Vite, and Supabase for personalized recommendations.",
      techStack: ["React", "Vite", "Supabase", "JavaScript"],
      color: "bg-green-500",
      liveLink: "https://example.com",
      codeLink: "https://github.com/example/mealmind"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website built with React and Tailwind CSS.",
      techStack: ["React", "Vite", "Tailwind CSS"],
      color: "bg-purple-500",
      liveLink: "https://example.com",
      codeLink: "https://github.com/example/portfolio"
    }
  ];

  // Project Card Component
  const ProjectCard = ({ project }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className={`h-48 ${project.color} flex items-center justify-center`}>
        <span className="text-white text-xl font-bold">{project.title.split(' ')[0]}</span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, index) => (
            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <a href={project.liveLink} className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            Live Demo
          </a>
          <a href={project.codeLink} className="text-gray-600 hover:text-gray-700 text-sm font-medium">
            View Code
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-gray-900">Abdelrahman Elgendy</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-600 hover:text-blue-600">Home</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
              <a href="#projects" className="text-gray-600 hover:text-blue-600">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Home Section */}
      <section id="home" className="pt-20 py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-blue-600">Abdelrahman Elgendy</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Frontend Developer passionate about creating beautiful web experiences 
            with React and modern technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg">
              View Projects
            </a>
            <a href="#contact" className="border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-3 px-6 rounded-lg">
              Contact Me
            </a>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Projects</h2>
            <p className="text-gray-600">Here are some of my recent projects</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact</h2>
          <p className="text-gray-600 mb-8">Get in touch!</p>
          <div className="flex justify-center gap-8">
            <a href="mailto:kiges1324@mylaurier.ca" className="text-blue-600 hover:text-blue-700">
              📧 Email
            </a>
            <a href="https://linkedin.com/in/abdelrahman-elgendy" className="text-blue-600 hover:text-blue-700">
              💼 LinkedIn
            </a>
            <a href="https://github.com/abdelrahmanelgendy" className="text-blue-600 hover:text-blue-700">
              💻 GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
