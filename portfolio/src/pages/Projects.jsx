import { projectsData } from '../data/portfolioData';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  return (
  <div className="max-w-6xl mx-auto ui-scale-90">
      <div className="text-center mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Projects</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm">
          Here are some of the projects I've worked on recently.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
