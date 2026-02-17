
import RoomCard from './RoomCard';
import roomImage from '../assets/room1.jpg'; // Using the same image for now

const Rooms = () => {
    const rooms = [
        {
            title: "Double Bed AC",
            price: 2500,
            image: roomImage,
            isAc: true,
            features: ["King Size Bed", "Air Conditioning", "Free Wi-Fi", "Attached Bathroom", "LED TV"]
        },
        {
            title: "Double Bed Non-AC",
            price: 1800,
            image: roomImage,
            isAc: false,
            features: ["King Size Bed", "Fan Cooling", "Free Wi-Fi", "Attached Bathroom", "LED TV"]
        }
    ];

    return (
        <section id="rooms" className="py-20 bg-zinc-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-zinc-900 mb-4">Our Rooms</h2>
                    <div className="w-20 h-1 bg-accent mx-auto"></div>
                    <p className="mt-4 text-zinc-600 max-w-2xl mx-auto">
                        Spacious and hygiene rooms designed for your comfort.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {rooms.map((room, index) => (
                        <RoomCard key={index} {...room} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Rooms;
