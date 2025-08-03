import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
        </>
    );
}
export default Home; // In a real app, this would be exported.
