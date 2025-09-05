import { useState } from 'react';

function App() {
  // Projects data
  const projects = [
    {
      id: 1,
      title: "React Movie Discovery App",
      description: "Responsive movie search application using React.js and Tailwind CSS with real-time API integration.",
      techStack: ["React", "Tailwind CSS", "REST API", "JavaScript"],
      // Replace with your actual video: "/videos/movie-app-demo.mp4"
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      // Replace with your actual thumbnail: "/thumbnails/movie-app-thumb.jpg"
      thumbnailUrl: "https://via.placeholder.com/400x250/3B82F6/FFFFFF?text=Movie+Demo",
      liveLink: "https://your-movie-app.vercel.app", // Your deployed app
      codeLink: "https://github.com/yourusername/movie-app" // Your GitHub repo
    },
    {
      id: 2,
      title: "MealMind - Meal Planning App",
      description: "Full-stack meal planning application with React, Vite, and Supabase for personalized recommendations.",
      techStack: ["React", "Vite", "Supabase", "JavaScript"],
      // Replace with your actual video: "/videos/mealmind-demo.mp4"
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      // Replace with your actual thumbnail: "/thumbnails/mealmind-thumb.jpg"
      thumbnailUrl: "https://via.placeholder.com/400x250/10B981/FFFFFF?text=MealMind+Demo",
      liveLink: "https://your-mealmind-app.vercel.app", // Your deployed app
      codeLink: "https://github.com/yourusername/mealmind" // Your GitHub repo
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website built with React and Tailwind CSS.",
      techStack: ["React", "Vite", "Tailwind CSS"],
      // Replace with your actual video: "/videos/portfolio-demo.mp4"
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      // Replace with your actual thumbnail: "/thumbnails/portfolio-thumb.jpg"
      thumbnailUrl: "https://via.placeholder.com/400x250/8B5CF6/FFFFFF?text=Portfolio+Demo",
      liveLink: "https://your-portfolio.vercel.app", // Your deployed portfolio
      codeLink: "https://github.com/yourusername/portfolio" // Your GitHub repo
    }
  ];

  // Project Card Component with Video
  const ProjectCard = ({ project }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayClick = () => {
      setIsPlaying(true);
    };

    return (
      <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-700">
        <div className="relative h-48 bg-gray-900">
          {!isPlaying ? (
            // Thumbnail with play button
            <div className="relative w-full h-full">
              <img 
                src={project.thumbnailUrl} 
                alt={`${project.title} thumbnail`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <button
                  onClick={handlePlayClick}
                  className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-4 transition-all duration-200 transform hover:scale-110"
                >
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    className="text-gray-800"
                  >
                    <path 
                      d="M8 5v14l11-7z" 
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ) : (
            // Video player
            <video
              controls
              autoPlay
              className="w-full h-full object-cover"
              onEnded={() => setIsPlaying(false)}
            >
              <source src={project.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
          <p className="text-gray-300 text-sm mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech, index) => (
              <span key={index} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            <a href={project.liveLink} className="text-blue-400 hover:text-blue-300 text-sm font-medium">
              Live Demo
            </a>
            <a href={project.codeLink} className="text-gray-400 hover:text-gray-300 text-sm font-medium">
              View Code
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <nav className="fixed top-0 w-full bg-gray-800 shadow-lg z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-white">Abdelrahman Elgendy</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-300 hover:text-blue-400">Home</a>
              <a href="#about" className="text-gray-300 hover:text-blue-400">About</a>
              <a href="#projects" className="text-gray-300 hover:text-blue-400">Projects</a>
              <a href="#contact" className="text-gray-300 hover:text-blue-400">Contact</a>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Home Section */}
      <section id="home" className="pt-20 py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Hi, I'm <span className="text-blue-400">Abdelrahman Elgendy</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Frontend Developer passionate about creating beautiful web experiences 
            with React and modern technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg">
              View Projects
            </a>
            <a href="#contact" className="border border-gray-600 hover:bg-gray-700 text-gray-300 font-medium py-3 px-6 rounded-lg">
              Contact Me
            </a>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Projects</h2>
            <p className="text-gray-300">Here are some of my recent projects with video demos</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Contact</h2>
          <p className="text-gray-300 mb-8">Get in touch!</p>
          <div className="flex justify-center gap-8">
            <a href="mailto:elge8132@mylaurier.ca" className="text-blue-400 hover:text-blue-300">
              📧 Email
            </a>
            <a href="https://www.linkedin.com/in/abdelrahman-elgendy-cs/" className="text-blue-400 hover:text-blue-300">
              💼 LinkedIn
            </a>
            <a href="https://github.com/abdelelgendy" className="text-blue-400 hover:text-blue-300">
              💻 GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
