import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second for that hacker terminal feel
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const navItems = [
    { name: '~/home', href: '#home', cmd: 'cd ~' },
    { name: './about', href: '#about', cmd: 'cat about.txt' },
    { name: './projects', href: '#projects', cmd: 'ls -la projects/' },
    { name: './contact', href: '#contact', cmd: 'ping contact.sh' }
  ];

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 z-50 relative overflow-hidden">
      {/* Animated background lines */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/5 to-transparent animate-pulse"></div>
      
      {/* Terminal header */}
      <div className="bg-gray-800 px-4 py-2 border-b border-gray-600 relative">
        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer relative">
              <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-20"></div>
            </div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer relative">
              <div className="absolute inset-0 bg-yellow-500 rounded-full animate-ping opacity-20 animation-delay-100"></div>
            </div>
            <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors cursor-pointer relative">
              <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20 animation-delay-200"></div>
            </div>
          </div>
          
          <div className="text-xs text-green-400 font-mono ml-4 relative">
            <span className="text-green-500">abdel@portfolio</span>
            <span className="text-gray-500">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-green-500">$</span>
            <span className="ml-1">whoami</span>
            <span className="inline-block w-2 h-4 bg-green-400 ml-1 animate-pulse"></span>
          </div>
          
          {/* System status indicators */}
          <div className="ml-auto flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs font-mono">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400">SYSTEM ONLINE</span>
            </div>
            
            <div className="text-xs font-mono text-blue-400 border border-blue-500/30 px-2 py-1 rounded">
              {formatTime(currentTime)}
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Username */}
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              className="text-lg font-bold text-green-400 hover:text-blue-400 transition-all duration-300 font-mono relative group"
            >
              <span className="text-red-400">[</span>
              <span className="text-green-400 group-hover:text-shadow-glow">root@abdel</span>
              <span className="text-red-400">]</span>
              <span className="text-yellow-400">#</span>
              <span className="cursor inline-block w-2 h-5 bg-green-400 ml-1 animate-pulse"></span>
              
              {/* Glitch effect overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="absolute inset-0 text-red-400 transform translate-x-0.5 -translate-y-0.5 animate-pulse">[root@abdel]#</span>
                <span className="absolute inset-0 text-blue-400 transform -translate-x-0.5 translate-y-0.5 animate-pulse animation-delay-75">[root@abdel]#</span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group relative text-gray-400 hover:text-green-400 px-4 py-2 text-sm font-mono transition-all duration-300 border border-transparent hover:border-green-400/30 rounded-md overflow-hidden"
                  title={item.cmd}
                >
                  {/* Background animation */}
                  <div className="absolute inset-0 bg-green-400/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  
                  {/* Command prompt */}
                  <div className="relative z-10 flex items-center gap-2">
                    <span className="text-green-500 text-xs opacity-60 group-hover:opacity-100 transition-opacity duration-300">$</span>
                    <span>{item.name}</span>
                    
                    {/* Terminal cursor */}
                    <span className="w-1 h-4 bg-green-400 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300"></span>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-400 group-hover:w-full transition-all duration-500"></div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-0 h-0 border-l-[6px] border-l-transparent border-t-[6px] border-t-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-green-400 focus:outline-none focus:text-green-400 transition-colors duration-300 relative group p-2"
            >
              <svg
                className="h-6 w-6 group-hover:rotate-180 transition-transform duration-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
              
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-green-400/20 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Enhanced Terminal Style */}
        {isOpen && (
          <div className="md:hidden relative">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 border-t border-gray-600 relative overflow-hidden">
              {/* Background matrix effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-transparent"></div>
              
              <div className="text-xs text-green-400 font-mono mb-3 flex items-center gap-2 relative z-10">
                <span className="text-green-500">$</span> 
                <span>mobile_menu --list</span>
                <div className="w-1 h-3 bg-green-400 animate-pulse"></div>
              </div>
              
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-green-400 block px-3 py-3 text-sm font-mono transition-all duration-300 border-l-2 border-transparent hover:border-green-400 hover:bg-gray-700/50 relative group/mobile overflow-hidden"
                  onClick={() => setIsOpen(false)}
                >
                  {/* Background slide effect */}
                  <div className="absolute inset-0 bg-green-400/10 transform translate-x-full group-hover/mobile:translate-x-0 transition-transform duration-300"></div>
                  
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-green-500 text-xs">[{index + 1}]</span> 
                      <span>{item.name}</span>
                    </div>
                    <span className="text-gray-500 text-xs opacity-60 group-hover/mobile:opacity-100 transition-opacity duration-300">
                      {item.cmd}
                    </span>
                  </div>
                  
                  {/* Progress indicator */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover/mobile:w-full transition-all duration-500"></div>
                </a>
              ))}
              
              <div className="text-xs text-gray-500 font-mono mt-4 px-3 border-t border-gray-600 pt-3 relative z-10">
                <div className="flex items-center justify-between">
                  <span>
                    <span className="text-yellow-400">exit_code:</span> 0
                  </span>
                  <span className="text-green-400">
                    {navItems.length} items loaded
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
