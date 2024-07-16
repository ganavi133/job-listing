import React from 'react';

const Hero = () => {
  const customPaddingStyle = {
    
    backgroundColor: '#074d2a', // Tailwind's indigo-700 color hex code
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '30vh',
    border: '2px solid grey',

  };

  return (
    <div style={customPaddingStyle}>
      <h1 className="text-white text-4xl font-bold mb-4">Become a React Developer</h1>
      <p className="text-white text-lg">Find the React job that will be a perfect fit for you</p>
    </div>
  );
}

export default Hero;
