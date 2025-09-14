import { useState } from 'react';
import { projectsData } from './data/portfolioData';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Tech stack color mapping (same as ProjectCard component)
  const getTechColor = (tech) => {
    const colors = {
      'React': 'bg-blue-500 text-white',
      'JavaScript': 'bg-yellow-400 text-black',
      'Tailwind CSS': 'bg-cyan-500 text-white',
      'CSS3': 'bg-blue-600 text-white',
      'CSS': 'bg-blue-600 text-white',
      'HTML5': 'bg-orange-500 text-white',
      'HTML': 'bg-orange-500 text-white',
      'Node.js': 'bg-green-600 text-white',
      'Express': 'bg-gray-700 text-white',
      'MongoDB': 'bg-green-500 text-white',
      'PostgreSQL': 'bg-blue-700 text-white',
      'MySQL': 'bg-orange-600 text-white',
      'Python': 'bg-blue-500 text-yellow-300',
      'TypeScript': 'bg-blue-600 text-white',
      'Vue.js': 'bg-green-500 text-white',
      'Angular': 'bg-red-600 text-white',
      'Sass': 'bg-pink-500 text-white',
      'Bootstrap': 'bg-purple-600 text-white',
      'jQuery': 'bg-blue-400 text-white',
      'PHP': 'bg-indigo-600 text-white',
      'Laravel': 'bg-red-500 text-white',
      'Django': 'bg-green-700 text-white',
      'Flask': 'bg-gray-800 text-white',
      'REST API': 'bg-indigo-500 text-white',
      'GraphQL': 'bg-pink-600 text-white',
      'Firebase': 'bg-yellow-500 text-black',
      'Supabase': 'bg-green-400 text-black',
      'Vite': 'bg-purple-500 text-white',
      'Webpack': 'bg-blue-400 text-white',
      'Next.js': 'bg-black text-white',
      'Nuxt.js': 'bg-green-400 text-black',
      'Git': 'bg-orange-600 text-white',
      'Docker': 'bg-blue-600 text-white',
      'AWS': 'bg-orange-500 text-white',
      'Vercel': 'bg-black text-white',
      'Netlify': 'bg-teal-500 text-white',
      'Stripe': 'bg-indigo-600 text-white',
      'Razorpay': 'bg-blue-700 text-white',
      'Cloudinary': 'bg-blue-500 text-white',
      'JWT': 'bg-gray-800 text-white',
      'ESLint': 'bg-purple-600 text-white'
    };
    return colors[tech] || 'bg-gray-500 text-white';
  };

  // Enhanced projects data with video functionality
  const projects = projectsData.map(project => ({
    ...project,
    // Replace with your actual video URLs when available
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnailUrl: project.image
  }));

  // Project Card Component with Video
  const ProjectCard = ({ project }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayClick = () => {
      setIsPlaying(true);
    };

    return (
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 border border-gray-700/50 hover:border-gray-600 transform hover:-translate-y-2 group">
        <div className="relative h-56 bg-gray-900 overflow-hidden">
          {!isPlaying ? (
            // Thumbnail with play button
            <div className="relative w-full h-full">
              <img 
                src={project.thumbnailUrl} 
                alt={`${project.title} thumbnail`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={handlePlayClick}
                  className="bg-white/90 hover:bg-white rounded-full p-4 transition-all duration-200 transform hover:scale-110 shadow-xl"
                >
                  <svg 
                    width="28" 
                    height="28" 
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
        <div className="p-8">
          <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-200">{project.title}</h3>
          <p className="text-gray-300 text-base mb-6 leading-relaxed line-clamp-3">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech, index) => (
              <span 
                key={index} 
                className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 hover:scale-110 shadow-md ${getTechColor(tech)}`}
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            <a 
              href={project.liveLink} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Live Demo
            </a>
            <a 
              href={project.codeLink} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center border-2 border-gray-600 hover:border-blue-400 hover:bg-gray-700 text-gray-300 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              View Code
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm shadow-lg z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <div className="font-bold text-2xl text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Abdelrahman Elgendy
              </span>
            </div>
            <div className="hidden md:flex space-x-10">
              <a href="#home" className="text-gray-300 hover:text-blue-400 font-medium transition-colors duration-200 text-lg">Home</a>
              <a href="#about" className="text-gray-300 hover:text-blue-400 font-medium transition-colors duration-200 text-lg">About</a>
              <a href="#projects" className="text-gray-300 hover:text-blue-400 font-medium transition-colors duration-200 text-lg">Projects</a>
              <a href="#contact" className="text-gray-300 hover:text-blue-400 font-medium transition-colors duration-200 text-lg">Contact</a>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
              >
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                  ) : (
                    <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                  )}
                </svg>
              </button>
            </div>
          </div>
          
          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800/95 backdrop-blur-sm border-t border-gray-700">
                <a 
                  href="#home" 
                  className="block px-3 py-2 text-gray-300 hover:text-blue-400 font-medium transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </a>
                <a 
                  href="#about" 
                  className="block px-3 py-2 text-gray-300 hover:text-blue-400 font-medium transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </a>
                <a 
                  href="#projects" 
                  className="block px-3 py-2 text-gray-300 hover:text-blue-400 font-medium transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Projects
                </a>
                <a 
                  href="#contact" 
                  className="block px-3 py-2 text-gray-300 hover:text-blue-400 font-medium transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
      
      {/* Home Section */}
      <section id="home" className="pt-20 py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Profile Picture */}
          <div className="mb-12">
            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-blue-400 shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img 
                src="/profile-picture.jpg" 
                alt="Abdelrahman Elgendy"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to a placeholder if image doesn't exist
                  e.target.src = "https://via.placeholder.com/160x160/3B82F6/FFFFFF?text=AE";
                }}
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Abdelrahman Elgendy</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Frontend Developer passionate about creating beautiful web experiences 
            with React and modern technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="#projects" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-lg transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="border-2 border-gray-600 hover:border-blue-400 hover:bg-gray-800 text-gray-300 hover:text-white font-semibold py-4 px-8 rounded-lg transform hover:scale-105 transition-all duration-200"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-24 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Me</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Passionate frontend developer with a love for creating seamless user experiences
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a frontend developer who enjoys turning complex problems into simple, beautiful designs. 
                With expertise in React, JavaScript, and modern web technologies, I create responsive and 
                user-friendly applications that deliver exceptional experiences.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or learning about the latest trends in web development.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <span className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full font-semibold">React Enthusiast</span>
                <span className="bg-green-600/20 text-green-400 px-4 py-2 rounded-full font-semibold">Problem Solver</span>
                <span className="bg-purple-600/20 text-purple-400 px-4 py-2 rounded-full font-semibold">UI/UX Focused</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-700/50">
                <h3 className="text-2xl font-bold text-blue-400 mb-2">5+</h3>
                <p className="text-gray-300">Projects Completed</p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-700/50">
                <h3 className="text-2xl font-bold text-green-400 mb-2">10+</h3>
                <p className="text-gray-300">Technologies</p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-700/50">
                <h3 className="text-2xl font-bold text-purple-400 mb-2">2+</h3>
                <p className="text-gray-300">Years Experience</p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-700/50">
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">100%</h3>
                <p className="text-gray-300">Dedication</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Projects</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Here are some of my recent projects showcasing modern web development techniques and creative solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss your next project!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <a 
              href="mailto:elge8132@mylaurier.ca" 
              className="group flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-lg transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <span className="text-2xl">📧</span>
              <span className="text-lg">Email Me</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/abdelrahman-elgendy-cs/" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 border-2 border-gray-600 hover:border-blue-400 hover:bg-gray-800 text-gray-300 hover:text-white font-semibold py-4 px-8 rounded-lg transform hover:scale-105 transition-all duration-200"
            >
              <span className="text-2xl">💼</span>
              <span className="text-lg">LinkedIn</span>
            </a>
            <a 
              href="https://github.com/abdelelgendy" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 border-2 border-gray-600 hover:border-blue-400 hover:bg-gray-800 text-gray-300 hover:text-white font-semibold py-4 px-8 rounded-lg transform hover:scale-105 transition-all duration-200"
            >
              <span className="text-2xl">💻</span>
              <span className="text-lg">GitHub</span>
            </a>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400 mb-4">
            © 2025 Abdelrahman Elgendy. Built with React & Tailwind CSS.
          </p>
          <div className="flex justify-center space-x-6">
            <a 
              href="mailto:elge8132@mylaurier.ca" 
              className="text-gray-500 hover:text-blue-400 transition-colors duration-200"
            >
              Email
            </a>
            <a 
              href="https://www.linkedin.com/in/abdelrahman-elgendy-cs/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-400 transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/abdelelgendy" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-400 transition-colors duration-200"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
