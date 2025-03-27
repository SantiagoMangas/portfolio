import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import CardProjects from './CardProjects';
import Division from './Division';

const Home = () => {
  return (
    <div>
      <Hero />
      <Division />
      <CardProjects />
    </div>
  );
};

export default Home;
