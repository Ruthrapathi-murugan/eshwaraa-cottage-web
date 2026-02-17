import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

import roomImage from '../assets/room1.jpg';
import img1 from '../assets/WhatsApp Image 2026-02-14 at 1.02.15 PM.jpeg';
import img2 from '../assets/WhatsApp Image 2026-02-14 at 1.02.24 PM.jpeg';
import img3 from '../assets/WhatsApp Image 2026-02-14 at 1.02.30 PM.jpeg';
import img4 from '../assets/WhatsApp Image 2026-02-14 at 1.02.46 PM.jpeg';
import img5 from '../assets/WhatsApp Image 2026-02-14 at 1.02.47 PM.jpeg';
import img6 from '../assets/WhatsApp Image 2026-02-16 at 4.26.24 PM.jpeg';
import img7 from '../assets/WhatsApp Image 2026-02-16 at 4.26.25 PM.jpeg';

const images = [roomImage, img1, img2, img3, img4, img5, img6, img7];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence>
                    <motion.img
                        key={currentIndex}
                        src={images[currentIndex]}
                        alt="Eshwaraa Cottage Room"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </AnimatePresence>
                <div className="absolute inset-0 bg-black/40 z-10" />
            </div>

            {/* Content */}
            <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="block text-accent text-lg md:text-xl font-medium mb-4 tracking-wider uppercase"
                >
                    Welcome to Palani
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight"
                >
                    Eshwaraa Cottage
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-gray-200 text-lg md:text-xl mb-8 max-w-2xl mx-auto"
                >
                    Experience comfort and serenity near Idumban Malai. The perfect stay for your spiritual journey.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <a
                        href="#rooms"
                        className="px-8 py-3 bg-accent hover:bg-yellow-600 text-white rounded-md font-medium transition-colors duration-300 transform hover:scale-105"
                    >
                        View Rooms
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-md font-medium transition-all duration-300"
                    >
                        Contact Us
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/70"
            >
                <ArrowDown size={32} />
            </motion.div>
        </section>
    );
};

export default Hero;
