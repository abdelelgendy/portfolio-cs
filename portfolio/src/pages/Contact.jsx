export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Get in touch! I'm always open to discussing new opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
          <div className="space-y-3">
            <div className="flex items-center">
              <span className="text-blue-600 mr-3">📧</span>
              <a href="mailto:elge8132@mylaurier.ca" className="text-gray-600 hover:text-blue-600">
                elge8132@mylaurier.ca
              </a>
            </div>
            <div className="flex items-center">
              <span className="text-blue-600 mr-3">📱</span>
              <span className="text-gray-600">647-994-7375</span>
            </div>
            <div className="flex items-center">
              <span className="text-blue-600 mr-3">💼</span>
              <a href="https://www.linkedin.com/in/abdelrahman-elgendy-cs/" className="text-gray-600 hover:text-blue-600">
                LinkedIn Profile
              </a>
            </div>
            <div className="flex items-center">
              <span className="text-blue-600 mr-3">💻</span>
              <a href="https://github.com/abdelelgendy" className="text-gray-600 hover:text-blue-600">
                GitHub Profile
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Let's Connect</h3>
          <p className="text-gray-600 mb-4">
            I'm currently looking for internship and co-op opportunities in frontend development. 
            Feel free to reach out if you'd like to discuss potential collaborations or just want to chat about web development!
          </p>
          <a 
            href="mailto:kiges1324@mylaurier.ca" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors inline-block"
          >
            Send Email
          </a>
        </div>
      </div>
    </div>
  );
}
