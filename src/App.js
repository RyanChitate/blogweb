import React from 'react';
import OctagonWithImage from './components/oct';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar/> 
      <OctagonWithImage
        title="Card 1 Title"
        descriptionText="Content for Card 1"
        author="Card 1 Author"
      />
      <OctagonWithImage
        title="Card 2 Title"
        descriptionText="Content for Card 2"
        author="Card 2 Author"
      />
      {/* You can create more cards with different content */}
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Footer/>

    </div>
  );
}

export default App;
