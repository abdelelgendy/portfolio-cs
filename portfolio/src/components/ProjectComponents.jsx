import { useState, useEffect } from 'react';

// Enhanced Project Card Component with professional slide-out panel
export const ProjectCard = ({ 
  project, 
  getTechColor,
  className = "",
  showTechStack = true,
  imageStyle = "object-cover",
  cardVariant = "default" 
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [showDetailsPanel, setShowDetailsPanel] = useState(false);
  
  const images = project.images || [project.image];
  const hasMultipleImages = images.length > 1;

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openDetailsPanel = (e) => {
    e.stopPropagation();
    setShowDetailsPanel(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeDetailsPanel = () => {
    setShowDetailsPanel(false);
    document.body.style.overflow = 'unset';
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(false);
  };

  // Card variants for different layouts
  const cardVariants = {
    default: "bg-gray-800 border border-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300",
    compact: "bg-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-200",
    featured: "bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-blue-500/30 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
  };

  return (
    <>
      <div className={`${cardVariants[cardVariant]} ${className} group`}>
        {/* Image Section with Enhanced Loading States */}
        <div className="relative h-48 md:h-56 bg-gray-700 overflow-hidden">
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 bg-gray-700 animate-pulse flex items-center justify-center">
              <div className="text-gray-400">Loading...</div>
            </div>
          )}
          
          {imageError ? (
            <div className="absolute inset-0 bg-gray-700 flex items-center justify-center flex-col">
              <div className="text-6xl mb-2">🖼️</div>
              <div className="text-gray-400 text-sm">Image not found</div>
              <div className="text-gray-500 text-xs mt-1">{project.title}</div>
            </div>
          ) : (
            <img 
              src={images[currentImageIndex]} 
              alt={`${project.title} screenshot ${currentImageIndex + 1}`}
              className={`w-full h-full ${imageStyle} transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
          )}

          {/* Image Navigation - Only show if multiple images and loaded successfully */}
          {hasMultipleImages && imageLoaded && !imageError && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                aria-label="Previous image"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                </svg>
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                aria-label="Next image"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
                </svg>
              </button>

              {/* Image Indicators */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>

              {/* Image Counter */}
              <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                {currentImageIndex + 1} / {images.length}
              </div>
            </>
          )}

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-3 left-3">
              <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                Featured
              </span>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-200">
            {project.title}
          </h3>
          
          {/* Short Description */}
          <p className="text-gray-300 mb-4 line-clamp-3 leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack */}
          {showTechStack && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.slice(0, 4).map((tech, index) => (
                <span 
                  key={index} 
                  className={`px-3 py-1 text-xs font-semibold rounded-full transition-transform duration-200 hover:scale-105 ${getTechColor(tech)}`}
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 4 && (
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-600 text-gray-300">
                  +{project.techStack.length - 4} more
                </span>
              )}
            </div>
          )}

          {/* Professional Details Button */}
          {project.fullDescription && (
            <button
              onClick={openDetailsPanel}
              className="w-full mb-4 group/btn flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 hover:from-blue-600/30 hover:to-purple-600/30 border border-blue-500/30 hover:border-blue-400/50 text-blue-400 hover:text-blue-300 font-semibold py-3 px-4 rounded-lg transition-all duration-200"
            >
              <span>View Project Details</span>
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                className="group-hover/btn:translate-x-1 transition-transform duration-200"
              >
                <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
              </svg>
            </button>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3">
            <a 
              href={project.liveLink} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-sm"
            >
              Live Demo
            </a>
            <a 
              href={project.codeLink} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center border border-gray-600 hover:border-gray-500 hover:bg-gray-700 text-gray-300 hover:text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-sm"
            >
              View Code
            </a>
          </div>
        </div>
      </div>

      {/* Professional Slide-out Details Panel */}
      {showDetailsPanel && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
            onClick={closeDetailsPanel}
          />
          
          {/* Slide-out Panel - Full Width */}
          <div className="ml-auto w-full bg-gray-900 shadow-2xl transform transition-transform duration-300 ease-out translate-x-0">
            <div className="h-full flex">
              {/* Left Side - Full Size Images */}
              <div className="w-1/2 bg-gray-900/20 backdrop-blur-xl flex flex-col">
                {/* Image Header */}
                <div className="p-4 border-b border-white/10 bg-black/20 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-semibold">Project Gallery</h3>
                    <div className="text-gray-300 text-sm">
                      {currentImageIndex + 1} / {images.length}
                    </div>
                  </div>
                </div>
                
                {/* Full Size Image Display */}
                <div className="flex-1 relative bg-transparent backdrop-blur-sm">
                  <img 
                    src={images[currentImageIndex]} 
                    alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                    className="w-full h-full object-contain"
                  />
                  
                  {/* Image Navigation Controls */}
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 backdrop-blur-md text-white p-3 rounded-full transition-all duration-200 border border-white/20"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                        </svg>
                      </button>
                      
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 backdrop-blur-md text-white p-3 rounded-full transition-all duration-200 border border-white/20"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
                        </svg>
                      </button>
                    </>
                  )}
                </div>
                
                {/* Image Thumbnails */}
                {images.length > 1 && (
                  <div className="p-4 bg-black/20 backdrop-blur-md border-t border-white/10">
                    <div className="flex gap-2 overflow-x-auto">
                      {images.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 backdrop-blur-sm ${
                            index === currentImageIndex 
                              ? 'border-blue-400/80 opacity-100 shadow-lg shadow-blue-400/20' 
                              : 'border-white/20 opacity-70 hover:opacity-100 hover:border-white/40'
                          }`}
                        >
                          <img 
                            src={image} 
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Side - Project Details */}
              <div className="w-1/2 flex flex-col">
                {/* Panel Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-700 bg-gradient-to-r from-gray-800 to-gray-900">
                  <div>
                    <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                    <p className="text-gray-400 mt-1">Project Details & Analysis</p>
                  </div>
                  <button
                    onClick={closeDetailsPanel}
                    className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-all duration-200"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                    </svg>
                  </button>
                </div>

                {/* Panel Content */}
                <div className="flex-1 overflow-y-auto project-details-scroll" style={{ padding: '1.5rem', paddingRight: '1rem' }}>
                  <div className="space-y-6 pr-4">
                    {/* Problem Statement */}
                  <div className="bg-gradient-to-br from-red-500/10 to-pink-500/10 border-l-4 border-red-400 rounded-r-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                        <span className="text-white text-sm">⚡</span>
                      </div>
                      <h3 className="text-red-400 font-bold text-lg">Problem Statement</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{project.fullDescription.problem}</p>
                  </div>

                  {/* Solution Approach */}
                  <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-l-4 border-green-400 rounded-r-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                        <span className="text-white text-sm">💡</span>
                      </div>
                      <h3 className="text-green-400 font-bold text-lg">Solution Approach</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{project.fullDescription.solution}</p>
                  </div>

                  {/* Technical Implementation */}
                  <div className="bg-gradient-to-br from-purple-500/10 to-violet-500/10 border-l-4 border-purple-400 rounded-r-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                        <span className="text-white text-sm">⚙️</span>
                      </div>
                      <h3 className="text-purple-400 font-bold text-lg">Technical Implementation</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{project.fullDescription.techUsed}</p>
                  </div>

                  {/* Challenges & Solutions */}
                  <div className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 border-l-4 border-orange-400 rounded-r-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                        <span className="text-white text-sm">🔧</span>
                      </div>
                      <h3 className="text-orange-400 font-bold text-lg">Challenges & Solutions</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{project.fullDescription.challenges}</p>
                  </div>

                  {/* Outcome & Impact */}
                  <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-l-4 border-cyan-400 rounded-r-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center">
                        <span className="text-white text-sm">🎯</span>
                      </div>
                      <h3 className="text-cyan-400 font-bold text-lg">Outcome & Impact</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{project.fullDescription.outcome}</p>
                  </div>

                  {/* Complete Tech Stack */}
                  <div className="bg-gradient-to-br from-yellow-500/10 to-amber-500/10 border-l-4 border-yellow-400 rounded-r-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                        <span className="text-white text-sm">🛠️</span>
                      </div>
                      <h3 className="text-yellow-400 font-bold text-lg">Technologies Used</h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {project.techStack.map((tech, index) => (
                        <span 
                          key={index} 
                          className={`px-4 py-2 text-sm font-semibold rounded-lg transition-transform duration-200 hover:scale-105 ${getTechColor(tech)}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  </div>
                </div>

                {/* Panel Footer with Actions */}
                <div className="p-6 border-t border-gray-700 bg-gray-800/50">
                  <div className="flex gap-4">
                    <a 
                      href={project.liveLink} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                    >
                      🌐 View Live Demo
                    </a>
                    <a 
                      href={project.codeLink} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center border-2 border-gray-600 hover:border-blue-400 hover:bg-gray-700 text-gray-300 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
                    >
                      💻 View Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Projects Grid Component for different layouts
export const ProjectsGrid = ({ 
  projects, 
  getTechColor,
  layout = "grid",
  showFeatured = true,
  maxProjects = null 
}) => {
  const displayProjects = maxProjects ? projects.slice(0, maxProjects) : projects;
  const featuredProjects = showFeatured ? displayProjects.filter(p => p.featured) : [];
  const regularProjects = showFeatured ? displayProjects.filter(p => !p.featured) : displayProjects;

  const layoutClasses = {
    grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
    masonry: "columns-1 md:columns-2 lg:columns-3 gap-8",
    list: "space-y-6"
  };

  return (
    <div>
      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">Featured Projects</h3>
          <div className={layoutClasses[layout]}>
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                getTechColor={getTechColor}
                cardVariant="featured"
              />
            ))}
          </div>
        </div>
      )}

      {/* Regular Projects */}
      {regularProjects.length > 0 && (
        <div>
          {featuredProjects.length > 0 && (
            <h3 className="text-2xl font-bold text-white mb-6">All Projects</h3>
          )}
          <div className={layoutClasses[layout]}>
            {regularProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                getTechColor={getTechColor}
                cardVariant="default"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
