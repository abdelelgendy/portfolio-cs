import { useState } from 'react';

// Enhanced Project Card Component with better props handling
export const ProjectCard = ({ 
  project, 
  onProjectClick, 
  getTechColor,
  className = "",
  showTechStack = true,
  imageStyle = "object-cover",
  cardVariant = "default" 
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
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

  const openModal = () => {
    onProjectClick(project, currentImageIndex);
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
    default: "bg-gray-800 border border-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105",
    compact: "bg-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-200",
    featured: "bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-blue-500/30 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
  };

  return (
    <div className={`${cardVariants[cardVariant]} ${className} cursor-pointer group`} onClick={openModal}>
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

        {/* Click Overlay */}
        <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-200 flex items-center justify-center">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-200">
          {project.title}
        </h3>
        
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

        {/* Action Buttons */}
        <div className="flex gap-3">
          <a 
            href={project.liveLink} 
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-sm"
            onClick={(e) => e.stopPropagation()}
          >
            Live Demo
          </a>
          <a 
            href={project.codeLink} 
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center border border-gray-600 hover:border-gray-500 hover:bg-gray-700 text-gray-300 hover:text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-sm"
            onClick={(e) => e.stopPropagation()}
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

// Enhanced Project Modal Component
export const ProjectModal = ({ 
  project, 
  onClose, 
  initialImageIndex = 0,
  getTechColor,
  modalVariant = "default" 
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(initialImageIndex);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isFullscreenImage, setIsFullscreenImage] = useState(false);
  
  const images = project.images || [project.image];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
    setImageLoaded(false);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    setImageLoaded(false);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(false);
  };

  // Keyboard navigation
  useState(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape') {
        if (isFullscreenImage) {
          setIsFullscreenImage(false);
        } else {
          onClose();
        }
      }
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'f' || e.key === 'F') setIsFullscreenImage(!isFullscreenImage);
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [isFullscreenImage]);

  const modalVariants = {
    default: "bg-gray-800 rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto w-full",
    fullscreen: "bg-gray-800 rounded-2xl max-w-6xl max-h-[95vh] overflow-y-auto w-full",
    compact: "bg-gray-800 rounded-xl max-w-3xl max-h-[85vh] overflow-y-auto w-full"
  };

  return (
    <div>
      {/* Fullscreen Image Viewer */}
      {isFullscreenImage && (
        <div className="fixed inset-0 bg-black z-[60] flex items-center justify-center">
          {/* Fullscreen Controls */}
          <div className="absolute top-4 right-4 flex gap-2 z-10">
            <button
              onClick={() => setIsFullscreenImage(false)}
              className="bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors duration-200"
              title="Exit Fullscreen (ESC)"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
          </div>

          {/* Fullscreen Image */}
          <div className="relative w-full h-full flex items-center justify-center p-8">
            {!imageLoaded && !imageError && (
              <div className="absolute inset-0 bg-black flex items-center justify-center">
                <div className="text-white text-xl">Loading fullscreen image...</div>
              </div>
            )}

            {imageError ? (
              <div className="text-center text-white">
                <div className="text-6xl mb-4">🖼️</div>
                <div className="text-xl">Image not available</div>
                <div className="text-gray-400 mt-2">{images[currentImageIndex]}</div>
              </div>
            ) : (
              <img 
                src={images[currentImageIndex]} 
                alt={`${project.title} screenshot ${currentImageIndex + 1} - Fullscreen`}
                className={`max-w-full max-h-full object-contain transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={handleImageLoad}
                onError={handleImageError}
                onClick={() => setIsFullscreenImage(false)}
              />
            )}

            {/* Fullscreen Navigation */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-colors duration-200"
                  title="Previous Image (←)"
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                  </svg>
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-colors duration-200"
                  title="Next Image (→)"
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
                  </svg>
                </button>

                {/* Fullscreen Image Indicators */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentImageIndex(index);
                        setImageLoaded(false);
                      }}
                      className={`w-4 h-4 rounded-full transition-colors duration-200 ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                      title={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}

            {/* Image Info */}
            <div className="absolute bottom-8 right-8 bg-black/50 text-white px-4 py-2 rounded-lg">
              <div className="text-sm font-medium">{project.title}</div>
              <div className="text-xs text-gray-300">
                {currentImageIndex + 1} of {images.length}
              </div>
            </div>

            {/* Help Text */}
            <div className="absolute top-8 left-8 bg-black/50 text-white px-4 py-2 rounded-lg text-sm">
              Press <kbd className="bg-gray-700 px-2 py-1 rounded">ESC</kbd> to exit • 
              <kbd className="bg-gray-700 px-2 py-1 rounded ml-1">F</kbd> for fullscreen
            </div>
          </div>
        </div>
      )}

      {/* Main Modal */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
        onClick={handleBackdropClick}
      >
      <div className={modalVariants[modalVariant]}>
        {/* Modal Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <h2 className="text-2xl font-bold text-white">{project.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl transition-colors duration-200"
          >
            ×
          </button>
        </div>

        {/* Image Slideshow */}
        <div className="relative h-64 md:h-80 bg-gray-900">
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 bg-gray-700 animate-pulse flex items-center justify-center">
              <div className="text-gray-400">Loading image...</div>
            </div>
          )}

          {imageError ? (
            <div className="absolute inset-0 bg-gray-700 flex items-center justify-center flex-col">
              <div className="text-6xl mb-4">🖼️</div>
              <div className="text-gray-400">Image not available</div>
              <div className="text-gray-500 text-sm mt-2">{images[currentImageIndex]}</div>
            </div>
          ) : (
            <img 
              src={images[currentImageIndex]} 
              alt={`${project.title} screenshot ${currentImageIndex + 1}`}
              className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
          )}
          
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors duration-200"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                </svg>
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors duration-200"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
                </svg>
              </button>

              {/* Fullscreen Button */}
              <button
                onClick={() => setIsFullscreenImage(true)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors duration-200"
                title="View Fullscreen (F)"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
                </svg>
              </button>

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentImageIndex(index);
                      setImageLoaded(false);
                    }}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Project Details */}
        <div className="p-6">
          {/* Tech Stack */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <span 
                  key={index} 
                  className={`px-3 py-1 text-sm font-semibold rounded-full ${getTechColor(tech)}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Detailed Description */}
          {project.fullDescription && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Problem Statement</h3>
                <p className="text-gray-300 leading-relaxed">{project.fullDescription.problem}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-green-400 mb-2">Solution Approach</h3>
                <p className="text-gray-300 leading-relaxed">{project.fullDescription.solution}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">Technical Implementation</h3>
                <p className="text-gray-300 leading-relaxed">{project.fullDescription.techUsed}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-orange-400 mb-2">Challenges & Solutions</h3>
                <p className="text-gray-300 leading-relaxed">{project.fullDescription.challenges}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">Outcome & Impact</h3>
                <p className="text-gray-300 leading-relaxed">{project.fullDescription.outcome}</p>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4 mt-8">
            <a 
              href={project.liveLink} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View Live Demo
            </a>
            <a 
              href={project.codeLink} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center border-2 border-gray-600 hover:border-blue-400 hover:bg-gray-700 text-gray-300 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              View Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Projects Grid Component for different layouts
export const ProjectsGrid = ({ 
  projects, 
  onProjectClick, 
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
                onProjectClick={onProjectClick}
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
                onProjectClick={onProjectClick}
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
