import HeroAbout from '../Components/HeroAbout';
import TechnologySlider from '../Components/TechnologySlider';
import ServicesSection from '../Components/ServicesSection';
import Division from '../Components/Division';

function About () {
  return (
    <>
        <HeroAbout />
        <Division />
        <TechnologySlider />
        <Division />
        <ServicesSection />
    </>
  );
}

export default About;