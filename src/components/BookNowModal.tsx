import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Tag, Phone } from 'lucide-react';

const bookingOptions = [
    {
        name: 'Booking.com',
        link: 'https://www.booking.com/Share-nvdFoNC',
        color: '#003580'
    },
    {
        name: 'Agoda',
        link: 'https://www.agoda.com/en-in/eshwaraa-cottage/hotel/all/palani-in.html?countryId=35&finalPriceView=1&isShowMobileAppPrice=false&cid=1922885&numberOfBedrooms=&familyMode=false&adults=2&children=0&rooms=1&maxRooms=0&checkIn=2026-03-8&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=1&showReviewSubmissionEntry=false&currencyCode=INR&isFreeOccSearch=false&tag=6f147157-60b8-459f-af1a-9935d44970e9&flightSearchCriteria=%5Bobject+Object%5D&los=1&searchrequestid=b21872b9-ead5-4a71-9717-6f27f4998ff9&ds=J8gki4Zh%2BlUCLf3V',
        color: '#5392F9'
    },
    {
        name: 'MakeMyTrip',
        link: 'https://www.makemytrip.com/hotels/hotel-details?hotelId=202602221159164037&_uCurrency=INR&checkin=03092026&checkout=03102026&city=CTANI&country=IN&filterData=PROPERTY_TYPE%7CHomestay&lat=10.44296&lng=77.52602&locusId=CTANI&locusType=city&rank=1&roomStayQualifier=2e0e&rsc=1e2e0e&searchText=Palani&mtkeys=undefined',
        color: '#d0021b'
    },
    {
        name: 'Goibibo',
        link: 'https://www.goibibo.com/hotels/hotel-details/?checkin=20260311&checkout=20260312&roomString=1-2-0&searchText=Eshwaraa%20Cottage&locusId=CTANI&locusType=city&cityCode=CTANI&cc=IN&_uCurrency=INR&vcid=532717094883918055&giHotelId=3230164198697746930&mmtId=202602221159164037&sType=city',
        color: '#2276E3'
    }
];

const BookNowModal: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleOpen = () => setIsOpen(true);
        window.addEventListener('open-book-modal', handleOpen);
        return () => window.removeEventListener('open-book-modal', handleOpen);
    }, []);

    const onClose = () => setIsOpen(false);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={onClose}
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="bg-white rounded-2xl shadow-xl w-full max-w-4xl overflow-hidden relative z-10 flex flex-col max-h-[90vh]"
                    >
                        <div className="p-4 border-b flex justify-between items-center bg-zinc-50 relative">
                            <h2 className="text-xl md:text-2xl font-serif font-bold text-zinc-900 w-full text-center pr-8">
                                <span className="text-accent">Choose Your</span> Booking Partner
                            </h2>
                            <button
                                onClick={onClose}
                                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-zinc-500 hover:text-zinc-800 hover:bg-zinc-200 rounded-full transition-colors focus:outline-none"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="p-6 overflow-y-auto">
                            <p className="text-center mb-8 text-zinc-500 text-sm md:text-base">
                                Select an option below to secure your reservation at Eshwaraa Cottage.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                                {bookingOptions.map((option, index) => (
                                    <a
                                        key={index}
                                        href={option.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block group h-full"
                                    >
                                        <div className="bg-white border rounded-xl p-6 h-full flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-all duration-300 border-zinc-100 hover:border-zinc-300 group-hover:-translate-y-1">
                                            <h4
                                                className="font-bold text-xl mb-4 transition-transform duration-300 group-hover:scale-105"
                                                style={{ color: option.color }}
                                            >
                                                {option.name}
                                            </h4>
                                            <span className="flex items-center text-sm font-semibold text-zinc-700 mt-auto group-hover:text-black transition-colors">
                                                Book Here <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                                            </span>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            <div className="bg-zinc-50 rounded-xl p-6 border border-zinc-100 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">
                                <div>
                                    <h5 className="text-lg font-bold text-zinc-900 mb-2">Prefer to book directly?</h5>
                                    <p className="text-zinc-500 text-sm mb-3">Call us for the best rates and instant confirmation.</p>
                                    <div className="inline-flex items-center bg-green-100 text-green-700 px-3 py-1.5 rounded-full text-sm font-bold">
                                        <Tag size={16} className="mr-1.5" /> Get 10% Off Direct Booking!
                                    </div>
                                </div>
                                <a
                                    href="tel:+919150921505"
                                    className="bg-accent text-white px-6 py-3 rounded-full font-bold shadow-md hover:shadow-lg hover:bg-accent/90 transition-all flex items-center justify-center gap-2 whitespace-nowrap animate-pulse"
                                >
                                    <Phone size={20} />
                                    +91 91509 21505
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default BookNowModal;
