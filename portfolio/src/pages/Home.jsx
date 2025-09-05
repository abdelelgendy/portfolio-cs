export default function Home() {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
        Hi, I'm{' '}
        <span className="text-blue-600">
          Abdelrahman Elgendy
        </span>
      </h1>
      
      <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Frontend Developer passionate about creating beautiful web experiences 
        with React and modern technologies.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#projects"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
        >
          View Projects
        </a>
        
        <a
          href="#contact"
          className="border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-3 px-6 rounded-lg transition-colors"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}
