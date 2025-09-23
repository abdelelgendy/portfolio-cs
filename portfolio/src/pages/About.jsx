export default function About() {
  return (
  <div className="max-w-4xl mx-auto ui-scale-90">
      <div className="text-center mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">About Me</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm">
          Computer Science student passionate about frontend development and creating 
          exceptional user experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Background</h3>
          <p className="text-gray-600 mb-4">
            I'm studying Computer Science at Wilfrid Laurier University, with a focus on 
            web development and modern JavaScript frameworks.
          </p>
          <p className="text-gray-600">
            I enjoy building responsive, user-friendly applications and am always 
            learning new technologies to improve my craft.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Interests</h3>
          <ul className="text-gray-600 space-y-2">
            <li>• Frontend Development</li>
            <li>• React & Modern JavaScript</li>
            <li>• User Experience Design</li>
            <li>• Open Source Contributing</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">Frontend</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>⚛️ React</span>
                <span className="text-sm text-gray-500">90%</span>
              </div>
              <div className="flex justify-between">
                <span>🟨 JavaScript</span>
                <span className="text-sm text-gray-500">95%</span>
              </div>
              <div className="flex justify-between">
                <span>🎨 Tailwind CSS</span>
                <span className="text-sm text-gray-500">85%</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">Backend</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>🟢 Node.js</span>
                <span className="text-sm text-gray-500">80%</span>
              </div>
              <div className="flex justify-between">
                <span>🚀 Express</span>
                <span className="text-sm text-gray-500">75%</span>
              </div>
              <div className="flex justify-between">
                <span>🍃 MongoDB</span>
                <span className="text-sm text-gray-500">70%</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">Tools</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>📚 Git</span>
                <span className="text-sm text-gray-500">90%</span>
              </div>
              <div className="flex justify-between">
                <span>⚡ Vite</span>
                <span className="text-sm text-gray-500">80%</span>
              </div>
              <div className="flex justify-between">
                <span>💻 VS Code</span>
                <span className="text-sm text-gray-500">95%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
