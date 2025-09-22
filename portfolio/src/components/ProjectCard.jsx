import PropTypes from 'prop-types';

const ProjectCard = ({ project }) => {
  // Tech stack color mapping with cyberpunk theme
  const getTechColor = (tech) => {
    const colors = {
      'React': 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
      'JavaScript': 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30',
      'Tailwind CSS': 'bg-green-500/20 text-green-400 border border-green-500/30',
      'CSS3': 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
      'CSS': 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
      'HTML5': 'bg-red-500/20 text-red-400 border border-red-500/30',
      'HTML': 'bg-red-500/20 text-red-400 border border-red-500/30',
      'Node.js': 'bg-green-500/20 text-green-400 border border-green-500/30',
      'Express': 'bg-gray-500/20 text-gray-400 border border-gray-500/30',
      'MongoDB': 'bg-green-500/20 text-green-400 border border-green-500/30',
      'PostgreSQL': 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
      'MySQL': 'bg-red-500/20 text-red-400 border border-red-500/30',
      'Python': 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
      'TypeScript': 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
      'Vue.js': 'bg-green-500/20 text-green-400 border border-green-500/30',
      'Angular': 'bg-red-500/20 text-red-400 border border-red-500/30',
      'Sass': 'bg-red-500/20 text-red-400 border border-red-500/30',
      'Bootstrap': 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
      'jQuery': 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
      'PHP': 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
      'Laravel': 'bg-red-500/20 text-red-400 border border-red-500/30',
      'Django': 'bg-green-500/20 text-green-400 border border-green-500/30',
      'Flask': 'bg-gray-500/20 text-gray-400 border border-gray-500/30',
      'REST API': 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
      'GraphQL': 'bg-red-500/20 text-red-400 border border-red-500/30',
      'Firebase': 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30',
      'Supabase': 'bg-green-500/20 text-green-400 border border-green-500/30',
      'Vite': 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
      'Webpack': 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
      'Next.js': 'bg-white/20 text-white border border-white/30',
      'Nuxt.js': 'bg-green-500/20 text-green-400 border border-green-500/30',
      'Git': 'bg-red-500/20 text-red-400 border border-red-500/30',
      'Docker': 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
      'AWS': 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30',
      'Vercel': 'bg-white/20 text-white border border-white/30',
      'Netlify': 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
      'Stripe': 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
      'Razorpay': 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
      'Cloudinary': 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
      'JWT': 'bg-gray-500/20 text-gray-400 border border-gray-500/30',
      'ESLint': 'bg-red-500/20 text-red-400 border border-red-500/30'
    };
    return colors[tech] || 'bg-gray-500/20 text-gray-400 border border-gray-500/30';
  };

  return (
    <div className="relative bg-gray-900 border border-gray-700 rounded-lg shadow-lg hover:shadow-green-500/20 transition-all duration-700 hover:scale-[1.03] group overflow-hidden">
      {/* Scan lines overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div>
      
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-green-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative overflow-hidden rounded-t-lg">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover filter grayscale-[0.7] hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
        <div className="absolute inset-0 bg-green-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Status indicator */}
        <div className="absolute top-3 right-3 flex items-center gap-2 bg-gray-900/80 backdrop-blur-sm rounded-full px-3 py-1 border border-green-500/30">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-xs font-mono text-green-400">[ONLINE]</span>
        </div>
        
        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800">
          <div className="h-full bg-gradient-to-r from-green-400 to-blue-400 w-0 group-hover:w-full transition-all duration-1000 ease-out"></div>
        </div>
      </div>

      <div className="p-6 relative">
        {/* Terminal prompt style title */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-green-500 font-mono text-sm">root@portfolio:~$</span>
          <span className="text-gray-500 font-mono text-sm">cat</span>
        </div>
        
        <h3 className="text-xl font-semibold text-white mb-3 font-mono group-hover:text-green-400 transition-colors duration-300 relative">
          <span className="text-green-500">&gt;</span> {project.title}
          <span className="absolute -right-2 top-0 w-0.5 h-6 bg-green-400 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></span>
        </h3>
        
        <div className="relative">
          <span className="absolute -left-4 top-0 text-yellow-400 font-mono text-sm opacity-60">//</span>
          <p className="text-gray-400 mb-5 text-sm font-mono leading-relaxed pl-2 border-l border-gray-700 group-hover:border-green-500/50 transition-colors duration-300">
            {project.description}
          </p>
        </div>

        {/* Tech stack with enhanced styling */}
        <div className="mb-6">
          <div className="text-xs font-mono text-gray-500 mb-2">
            <span className="text-blue-400">dependencies:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <span 
                key={index}
                className={`px-3 py-1.5 text-xs font-mono rounded border transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-current/25 relative overflow-hidden group/tech ${getTechColor(tech)}`}
              >
                <span className="relative z-10">[{tech}]</span>
                <div className="absolute inset-0 bg-current opacity-0 group-hover/tech:opacity-10 transition-opacity duration-300"></div>
              </span>
            ))}
          </div>
        </div>

        {/* Enhanced action buttons */}
        <div className="flex gap-3 border-t border-gray-700 pt-4">
          {project.liveLink && (
            <a 
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative bg-gray-800 border border-green-500 text-green-500 hover:bg-green-500 hover:text-gray-900 px-4 py-2.5 text-sm font-mono rounded transition-all duration-300 flex items-center gap-2 overflow-hidden group/btn"
            >
              <div className="absolute inset-0 bg-green-500 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></div>
              <span className="relative z-10 text-green-400 group-hover/btn:text-gray-900">$</span>
              <span className="relative z-10">./deploy.sh</span>
              <div className="absolute top-0 right-0 w-1 h-full bg-green-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
            </a>
          )}
          
          {project.codeLink && (
            <a 
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-gray-400 hover:text-green-400 text-sm font-mono transition-all duration-300 flex items-center gap-2 border border-gray-600 hover:border-green-500 px-4 py-2.5 rounded group/git overflow-hidden"
            >
              <div className="absolute inset-0 bg-green-500/10 transform scale-y-0 group-hover/git:scale-y-100 transition-transform duration-300 origin-bottom"></div>
              <span className="relative z-10 text-blue-400">git</span>
              <span className="relative z-10">clone</span>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-400 transform scale-x-0 group-hover/git:scale-x-100 transition-transform duration-300"></div>
            </a>
          )}
        </div>
        
        {/* Corner grid pattern */}
        <div className="absolute bottom-2 right-2 w-4 h-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
          <div className="grid grid-cols-2 gap-0.5 w-full h-full">
            <div className="bg-green-400 w-1 h-1"></div>
            <div className="bg-blue-400 w-1 h-1"></div>
            <div className="bg-red-400 w-1 h-1"></div>
            <div className="bg-yellow-400 w-1 h-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
    liveLink: PropTypes.string,
    codeLink: PropTypes.string,
  }).isRequired,
};

export default ProjectCard;
