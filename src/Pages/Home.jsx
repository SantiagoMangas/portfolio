import React from 'react';
import Hero from '../Components/Hero';
import Division from '../Components/Division';
import ProjectsHome from '../Components/ProjectsHome';
import Tecnologias from '../Components/Tecnologias';

const Home = () => {
  return (
    <>
      <Hero />
      <Division />
      <ProjectsHome />
      <Division />
      <Tecnologias />
    </>
  );
};

export default Home;
