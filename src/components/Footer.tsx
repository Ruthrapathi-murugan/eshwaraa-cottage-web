

const Footer = () => {
    return (
        <footer className="bg-zinc-900 text-white py-8 border-t border-zinc-800">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <p className="font-serif text-xl mb-4"><span className="text-accent">Eshwaraa</span> Cottage</p>
                <p className="text-zinc-500 text-sm">
                    &copy; {new Date().getFullYear()} Eshwaraa Cottage. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
