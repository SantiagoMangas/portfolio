import React from 'react';
import Hero from '../Components/Hero';
import Division from '../Components/Division';
import ProjectsHome from '../Components/ProjectsHome';
import Tecnologias from '../Components/Tecnologias';
import TechnologySlider from '../Components/TechnologySlider';

const Home = () => {
  return (
    <>
      <Hero />
      <Division />
      <ProjectsHome />
      <Division />
      <TechnologySlider />
      <Division />
      <Tecnologias />
    </>
  );
};

export default Home;
