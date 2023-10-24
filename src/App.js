import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import OctCard from './components/OctCard.js';

function App() {
  return (
    <div className="App">
      <Navbar/> 

      <OctCard/>
      <OctCard/>
      <OctCard/>
      <OctCard/>

      <Footer/>
      
    </div>
  );
}

export default App;
