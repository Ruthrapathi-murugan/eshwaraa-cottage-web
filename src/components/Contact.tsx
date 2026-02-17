
import { MapPin, Phone, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-zinc-900 mb-4">Contact Us</h2>
                    <div className="w-20 h-1 bg-accent mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-start"
                        >
                            <div className="bg-zinc-100 p-3 rounded-full mr-4 text-accent">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-zinc-900 mb-2">Our Location</h3>
                                <p className="text-zinc-600">
                                    Near Idumban Malai, South Anna Nagar,<br />
                                    Palani, Sivagiripatti,<br />
                                    Tamil Nadu 624601
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex items-start"
                        >
                            <div className="bg-zinc-100 p-3 rounded-full mr-4 text-accent">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-zinc-900 mb-2">Phone Number</h3>
                                <p className="text-zinc-600">
                                    <a href="tel:+919150921505" className="hover:text-accent transition-colors">
                                        +91 91509 21505
                                    </a>
                                    <br />
                                    <a href="tel:+917806995499" className="hover:text-accent transition-colors">
                                        +91 78069 95499
                                    </a>
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="flex items-start"
                        >
                            <div className="bg-zinc-100 p-3 rounded-full mr-4 text-accent">
                                <Clock size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-zinc-900 mb-2">Check-in / Check-out</h3>
                                <p className="text-zinc-600">
                                    24 Hours Front Desk<br />
                                    Daily Housekeeping
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Map */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="h-80 md:h-full bg-zinc-200 rounded-2xl overflow-hidden"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5549.007839976494!2d77.52123401918827!3d10.442109688189662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9df95ff86eb75%3A0x2528b7889bc27abf!2sEshwaraa%20cottage!5e0!3m2!1sen!2sin!4v1771315221851!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            title="Eshwaraa Cottage Location"
                        ></iframe>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;



 