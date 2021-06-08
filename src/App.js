import './App.css';
import Navbar from './components/navbar/Navbar.js';
import Portada from './components/portada/Portada.js';
import Slider from './components/carousel/Slider.js';
import Info from './components/info/Info.js';
import Footer from './components/footer/Footer.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Portada />
      <Slider />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
