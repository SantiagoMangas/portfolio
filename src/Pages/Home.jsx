import React from 'react';
import Hero from '../Components/Hero';
import Division from '../Components/Division';
import Projects from './Projects';
import Tecnologias from '../Components/Tecnologias';

const Home = () => {
  return (
    <div>
      <Hero />
      <Division />
      <Projects />
      <Division />
      <Tecnologias />
    </div>
  );
};

export default Home;
