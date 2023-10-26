import React from 'react';
import OctagonWithImage from './oct';

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
