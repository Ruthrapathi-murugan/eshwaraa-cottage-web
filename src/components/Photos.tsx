import { motion } from 'framer-motion';

// Dynamically import all images from assets
const images = import.meta.glob('../assets/*.{jpeg,jpg,png,webp}', { eager: true });

const Photos = () => {
    // Extract image URLs from the imported modules
    const imageList = Object.values(images).map((img: any) => img.default);

    return (
        <section className="pt-24 pb-20 bg-zinc-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-zinc-900 mb-4">Photo Gallery</h2>
                    <div className="w-20 h-1 bg-accent mx-auto"></div>
                    <p className="mt-4 text-zinc-600 max-w-2xl mx-auto">
                        Explore our cottage and surroundings.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {imageList.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                        >
                            <img
                                src={src}
                                alt={`Gallery Image ${index + 1}`}
                                className="w-full h-64 object-cover transform hover:scale-110 transition-transform duration-500"
                                loading="lazy"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Photos;
