
import { motion } from 'framer-motion';
import { Wifi, Car, Coffee, Tv, Wind, Shield } from 'lucide-react';

const amenities = [
    { icon: <Wind size={32} />, title: 'Air Conditioning', desc: 'Climate control in AC rooms' },
    { icon: <Car size={32} />, title: 'Ample Parking', desc: 'Secure parking space available' },
    { icon: <Wifi size={32} />, title: 'Free Wi-Fi', desc: 'High-speed internet access' },
    { icon: <Tv size={32} />, title: 'LED TV', desc: 'Entertainment in every room' },
    { icon: <Shield size={32} />, title: '24/7 Security', desc: 'Safe and secure environment' },
    { icon: <Coffee size={32} />, title: 'Room Service', desc: 'Service at your doorstep' },
];

const Amenities = () => {
    return (
        <section id="amenities" className="py-20 bg-zinc-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-zinc-900 mb-4">Our Amenities</h2>
                    <div className="w-20 h-1 bg-accent mx-auto"></div>
                    <p className="mt-4 text-zinc-600 max-w-2xl mx-auto">
                        We provide essential comforts to make your stay pleasant and hassle-free.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {amenities.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-6 rounded-xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow"
                        >
                            <div className="text-accent mb-4">{item.icon}</div>
                            <h3 className="text-lg font-bold text-zinc-900 mb-2">{item.title}</h3>
                            <p className="text-zinc-600 text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Amenities;
