import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        setIsOpen(false);
        if (location.pathname !== '/') {
            e.preventDefault();
            navigate('/' + href);
        }
    };

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Rooms', href: '#rooms' },
        { name: 'Amenities', href: '#amenities' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center">
                        <h1 className="text-2xl font-serif font-bold text-zinc-900">
                            <span className="text-accent">Eshwaraa</span> Cottage
                        </h1>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleScroll(e, link.href)}
                                    className="text-zinc-700 hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <Link
                                to="/photos"
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${location.pathname === '/photos' ? 'text-accent' : 'text-zinc-700 hover:text-accent'
                                    }`}
                            >
                                Photos
                            </Link>
                            <a
                                href="tel:+919150921505"
                                className="bg-zinc-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-zinc-800 transition-colors flex items-center gap-2"
                            >
                                <Phone size={16} />
                                Book Now
                            </a>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-zinc-700 hover:text-accent focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-zinc-100"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleScroll(e, link.href)}
                                    className="text-zinc-700 hover:text-accent block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <Link
                                to="/photos"
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === '/photos' ? 'text-accent' : 'text-zinc-700 hover:text-accent'
                                    }`}
                            >
                                Photos
                            </Link>
                            <a
                                href="tel:+919150921505"
                                onClick={() => setIsOpen(false)}
                                className="w-full text-center mt-4 bg-zinc-900 text-white px-4 py-3 rounded-md text-base font-medium hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2"
                            >
                                <Phone size={18} />
                                Call to Book
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
