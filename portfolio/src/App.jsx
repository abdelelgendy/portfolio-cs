import { useState } from 'react';
import { projectsData, skillsData } from './data/portfolioData';
import { ProjectCard, ProjectsGrid } from './components/ProjectComponents';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Calculate dynamic stats from portfolio data
  const projectCount = projectsData.length;
  const allTechStacks = projectsData.flatMap(project => project.techStack);
  const uniqueTechnologies = [...new Set(allTechStacks)];
  const technologiesCount = uniqueTechnologies.length;
  
  // Calculate years of experience (you can adjust this based on when you started)
  const startYear = 2023; // Adjust this to when you started coding
  const currentYear = new Date().getFullYear();
  const yearsExperience = currentYear - startYear;
  
  // Calculate HR-focused stats
  const reactProjects = projectsData.filter(project => 
    project.techStack.includes('React')
  ).length;
  
  const fullStackProjects = projectsData.filter(project => 
    project.techStack.some(tech => ['Express', 'Node.js', 'MongoDB', 'Supabase', 'Appwrite'].includes(tech))
  ).length;
  
  // Frontend tech stack proficiency
  const frontendTechs = ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite'];
  const frontendCount = frontendTechs.filter(tech => uniqueTechnologies.includes(tech)).length;
  
  // Backend/Database experience
  const backendTechs = ['Node.js', 'Express', 'MongoDB', 'Supabase', 'REST API', 'Appwrite'];
  const backendCount = backendTechs.filter(tech => uniqueTechnologies.includes(tech)).length;
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
      'Express': 'bg-gray-400 text-white',
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
      'ESLint': 'bg-purple-600 text-white',
      'Appwrite': 'bg-pink-600 text-white',
      'TMDB API': 'bg-red-600 text-white',
      'React-use': 'bg-teal-600 text-white'
    };
    return colors[tech] || 'bg-gray-500 text-white';
  };

  // Enhanced projects data with image gallery functionality
  const projects = projectsData.map(project => ({
    ...project,
    // Use multiple images if available, otherwise fallback to single image
    images: project.images || [project.image],
    thumbnailUrl: project.image
  }));

  // Project Card Component with Image Slideshow
  const ProjectCard = ({ project }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = project.images || [project.image];

    const nextImage = () => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const openModal = () => {
      setSelectedProject(project);
      setModalImageIndex(0);
    };

    return (
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 group">
        <div 
          className="relative h-56 bg-gray-900 overflow-hidden cursor-pointer"
          onClick={openModal}
        >
          {/* Project Image Slideshow */}
          <img 
            src={images[currentImageIndex]} 
            alt={`${project.title} screenshot ${currentImageIndex + 1}`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Slideshow Controls - Only show if multiple images */}
          {images.length > 1 && (
            <>
              {/* Previous Button */}
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                </svg>
              </button>
              
              {/* Next Button */}
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
                </svg>
              </button>
              
              {/* Image Indicators */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </>
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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black via-gray-800 to-black text-white">
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md shadow-2xl z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <div className="font-bold text-2xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                Abdelrahman Elgendy
              </span>
            </div>
            <div className="hidden md:flex space-x-10">
              <a href="#home" className="text-gray-300 hover:text-cyan-400 font-medium transition-all duration-300 text-lg hover:shadow-[0_0_8px_rgba(0,255,231,0.3)]">Home</a>
              <a href="#about" className="text-gray-300 hover:text-cyan-400 font-medium transition-all duration-300 text-lg hover:shadow-[0_0_8px_rgba(0,255,231,0.3)]">About</a>
              <a href="#projects" className="text-gray-300 hover:text-cyan-400 font-medium transition-all duration-300 text-lg hover:shadow-[0_0_8px_rgba(0,255,231,0.3)]">Projects</a>
              <a href="#contact" className="text-gray-300 hover:text-cyan-400 font-medium transition-all duration-300 text-lg hover:shadow-[0_0_8px_rgba(0,255,231,0.3)]">Contact</a>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-cyan-400 focus:outline-none focus:text-cyan-400"
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
              <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 backdrop-blur-sm">
                <a 
                  href="#home" 
                  className="block px-3 py-2 text-gray-300 hover:text-cyan-400 font-medium transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </a>
                <a 
                  href="#about" 
                  className="block px-3 py-2 text-gray-300 hover:text-cyan-400 font-medium transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </a>
                <a 
                  href="#projects" 
                  className="block px-3 py-2 text-gray-300 hover:text-cyan-400 font-medium transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Projects
                </a>
                <a 
                  href="#contact" 
                  className="block px-3 py-2 text-gray-300 hover:text-cyan-400 font-medium transition-colors duration-200"
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
      <section id="home" className="pt-20 py-32 bg-transparent relative">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Profile Picture */}
          <div className="mb-12">
            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-cyan-400/60 shadow-[0_0_30px_rgba(0,255,231,0.3)] transform hover:scale-105 hover:shadow-[0_0_40px_rgba(0,255,231,0.5)] transition-all duration-300">
              <img 
                src="/profile-picture.jpg" 
                alt="Abdelrahman Elgendy"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/160x160/0D1117/00FFE7?text=AE";
                }}
              />
            </div>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">Abdelrahman Elgendy</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Frontend Developer passionate about creating beautiful web experiences 
            with React and modern technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="#projects" 
              className="bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="border-2 border-cyan-400/50 hover:border-cyan-400 hover:bg-cyan-400/10 text-gray-300 hover:text-white font-semibold py-4 px-8 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,231,0.3)]"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-16 bg-transparent relative">
        
        <div className="max-w-6xl mx-auto px-6 relative z-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Me</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
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
              <div className="bg-black/30 p-6 rounded-2xl transition-all duration-300 hover:bg-black/40 hover:shadow-[0_0_15px_rgba(0,255,231,0.1)]">
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">Frontend Tech Used</h3>
                <div className="flex flex-wrap gap-2 mb-2">
                  {frontendTechs.filter(tech => uniqueTechnologies.includes(tech)).map(tech => (
                    <span key={tech} className="px-2 py-1 text-xs font-semibold rounded bg-cyan-700/80 text-white">{tech}</span>
                  ))}
                </div>
                <p className="text-gray-400 text-xs">({frontendCount} technologies)</p>
              </div>
              <div className="bg-black/30 p-6 rounded-2xl transition-all duration-300 hover:bg-black/40 hover:shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                <h3 className="text-2xl font-bold text-emerald-400 mb-2">Backend Tech Used</h3>
                <div className="flex flex-wrap gap-2 mb-2">
                  {backendTechs.filter(tech => uniqueTechnologies.includes(tech)).map(tech => (
                    <span key={tech} className="px-2 py-1 text-xs font-semibold rounded bg-emerald-700/80 text-white">{tech}</span>
                  ))}
                </div>
                <p className="text-gray-400 text-xs">({backendCount} technologies)</p>
              </div>
              <div className="bg-black/30 p-6 rounded-2xl transition-all duration-300 hover:bg-black/40 hover:shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                <h3 className="text-2xl font-bold text-purple-400 mb-2">React Projects</h3>
                <p className="text-gray-300 text-lg font-bold">{reactProjects} / {projectCount}</p>
                <p className="text-gray-400 text-xs mt-1">Built with React.js</p>
              </div>
              <div className="bg-black/30 p-6 rounded-2xl transition-all duration-300 hover:bg-black/40 hover:shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                <h3 className="text-2xl font-bold text-blue-400 mb-2">Full-Stack Projects</h3>
                <p className="text-gray-300 text-lg font-bold">{fullStackProjects}</p>
                <p className="text-gray-400 text-xs mt-1">End-to-end development</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="py-16 bg-transparent relative">
        
        <div className="max-w-7xl mx-auto px-6 relative z-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Projects</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Here are some of my recent projects showcasing modern web development techniques and creative solutions
            </p>
          </div>
          
          {/* Dynamic Projects Grid with Enhanced Components */}
          <ProjectsGrid 
            projects={projectsData}
            getTechColor={getTechColor}
            layout="grid"
            showFeatured={true}
          />
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-16 bg-transparent relative">
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Connect</span>
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
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
      <footer className="bg-transparent py-8 relative">
        
        <div className="max-w-6xl mx-auto px-6 text-center relative z-20">
          <p className="text-gray-400 mb-4">
            © 2025 Abdelrahman Elgendy. Built with React & Tailwind CSS.
          </p>
          <div className="flex justify-center space-x-6">
            <a 
              href="mailto:elge8132@mylaurier.ca" 
              className="text-gray-500 hover:text-cyan-400 transition-colors duration-200"
            >
              Email
            </a>
            <a 
              href="https://www.linkedin.com/in/abdelrahman-elgendy-cs/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-cyan-400 transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/abdelelgendy" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-cyan-400 transition-colors duration-200"
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
