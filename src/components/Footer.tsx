

const Footer = () => {
    return (
        <footer className="bg-zinc-900 text-white py-8 border-t border-zinc-800">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <p className="font-serif text-xl mb-4"><span className="text-accent">Eshwaraa</span> Cottage</p>
                <p className="text-zinc-500 text-sm mb-2">
                    &copy; {new Date().getFullYear()} Eshwaraa Cottage. All rights reserved.
                </p>
                <p className="text-bold--zinc-600 text-xs">
                    Created by <a href="https://www.ruthradigitalsolutions.com" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400 transition-colors">Ruthra Digital Solutions</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
