import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import OtherProjects from '../components/OtherProjects';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <div className="flex flex-col gap-16 pb-16">
            <Hero />
            <Projects />
            <OtherProjects />
            <Skills />
            <Contact />
        </div>
    );
};

export default Home;
