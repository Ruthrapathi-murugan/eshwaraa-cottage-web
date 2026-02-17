import React from 'react';
import { motion } from 'framer-motion';
import { Check, Phone } from 'lucide-react';

interface RoomCardProps {
    title: string;
    price: number;
    image: string;
    features: string[];
    isAc: boolean;
}

const RoomCard: React.FC<RoomCardProps> = ({ title, price, image, features, isAc }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg border border-zinc-100 group"
        >
            <div className="relative h-64 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-zinc-900 uppercase tracking-widest">
                    {isAc ? 'AC' : 'Non-AC'}
                </div>
            </div>

            <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-serif font-bold text-zinc-900">{title}</h3>
                    <div className="text-right">
                        <p className="text-2xl font-bold text-accent">₹{price}</p>
                        <p className="text-xs text-zinc-500">per night</p>
                    </div>
                </div>

                <div className="space-y-2 mb-6">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-center text-zinc-600 text-sm">
                            <Check size={16} className="text-green-500 mr-2" />
                            {feature}
                        </div>
                    ))}
                </div>

                <button className="w-full bg-zinc-900 text-white py-3 rounded-xl font-medium hover:bg-zinc-800 transition-colors flex justify-center items-center gap-2">
                    <Phone size={18} /> Book via Phone
                </button>
            </div>
        </motion.div>
    );
};
export default RoomCard;
