import './App.css';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Formations from './components/Formations/Formations';
import Products from './components/Products/Products';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import Impact from './components/Impact/Impact';
import News from './components/News/News';

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Hero />
        <Impact />
        <About />
        <Formations />
        <Products />
        <Gallery />
        <News />
      </main>
      <Contact />
    </div>
  );
}

export default App;
