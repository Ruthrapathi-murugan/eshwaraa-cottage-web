import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from './Hero';
import Rooms from './Rooms';
import Amenities from './Amenities';
import Contact from './Contact';

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    return (
        <main>
            <Hero />
            <Rooms />
            <Amenities />
            <Contact />
        </main>
    );
};

export default Home;
