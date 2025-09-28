import PropTypes from 'prop-types';

const ProjectCard = ({ project }) => {
  // Tech stack color mapping
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
      'ESLint': 'bg-purple-600 text-white',
      'Appwrite': 'bg-pink-600 text-white',
      'TMDB API': 'bg-red-600 text-white',
      'React-use': 'bg-teal-600 text-white'
    };
    return colors[tech] || 'bg-gray-500 text-white';
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
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
              className={`px-3 py-1 text-xs font-medium rounded-full transition-transform hover:scale-105 ${getTechColor(tech)}`}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {project.liveLink && (
            <a 
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              Live Demo
            </a>
          )}
          
          {project.codeLink && (
            <a 
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-700 text-sm font-medium"
            >
              View Code
            </a>
          )}
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
