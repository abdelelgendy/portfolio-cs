
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Home Section */}
      <section id="home" className="section-padding bg-white">
        <div className="container">
          <Home />
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="section-padding bg-gray-50">
        <div className="container">
          <About />
        </div>
      </section>
    </div>
  );
}

export default App;
