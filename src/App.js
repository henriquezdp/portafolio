import './App.css';
import Navbar from './components/navbar/Navbar.js';
import Portada from './components/portada/Portada.js';
import Slider from './components/carousel/Slider.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Portada />
      <Slider />
    </div>
  );
}

export default App;
