export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto bg-gray-900 min-h-screen py-20">
      <div className="text-center mb-12">
        {/* Profile Picture */}
        <div className="mb-6">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-blue-400 shadow-lg">
            <img 
              src="/profile-picture.jpg" 
              alt="Abdelrahman Elgendy"
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to a placeholder if image doesn't exist
                e.target.src = "https://via.placeholder.com/128x128/3B82F6/FFFFFF?text=AE";
              }}
            />
          </div>
        </div>
        
        <h2 className="text-3xl font-bold text-white mb-4">Contact</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Get in touch! I'm always open to discussing new opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
          <div className="space-y-3">
            <div className="flex items-center">
              <span className="text-blue-400 mr-3">📧</span>
              <a href="mailto:elge8132@mylaurier.ca" className="text-gray-300 hover:text-blue-400">
                elge8132@mylaurier.ca
              </a>
            </div>
            <div className="flex items-center">
              <span className="text-blue-400 mr-3">📱</span>
              <span className="text-gray-300">647-994-7375</span>
            </div>
            <div className="flex items-center">
              <span className="text-blue-400 mr-3">💼</span>
              <a 
                href="https://www.linkedin.com/in/abdelrahman-elgendy-cs/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400"
              >
                LinkedIn Profile
              </a>
            </div>
            <div className="flex items-center">
              <span className="text-blue-400 mr-3">💻</span>
              <a 
                href="https://github.com/abdelelgendy" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400"
              >
                GitHub Profile
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h3 className="text-xl font-semibold text-white mb-4">Let's Connect</h3>
          <p className="text-gray-300 mb-4">
            I'm currently looking for internship and co-op opportunities in frontend development. 
            Feel free to reach out if you'd like to discuss potential collaborations or just want to chat about web development!
          </p>
          <a 
            href="mailto:elge8132@mylaurier.ca" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors inline-block"
          >
            Send Email
          </a>
        </div>
      </div>
    </div>
  );
}
