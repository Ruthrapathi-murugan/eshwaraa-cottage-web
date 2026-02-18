import { motion } from 'framer-motion';
import { X, Volume2, VolumeX } from 'lucide-react';
import { useRef, useState } from 'react';
import videoSource from '../assets/enter video.mp4';

interface IntroVideoProps {
    onComplete: () => void;
}

const IntroVideo = ({ onComplete }: IntroVideoProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isMuted, setIsMuted] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);

    const handleStart = () => {
        setHasStarted(true);
        // We defer the play call slightly to ensure the video element is rendered and ref is attached
        setTimeout(() => {
            if (videoRef.current) {
                videoRef.current.muted = false;
                videoRef.current.currentTime = 0;
                videoRef.current.play().catch(error => {
                    console.log("Play with sound failed:", error);
                });
            }
        }, 100);
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(videoRef.current.muted);
        }
    };

    if (!hasStarted) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[60] bg-black flex flex-col items-center justify-center p-4"
            >
                <div className="text-center space-y-8">
                    <h1 className="text-4xl md:text-6xl font-serif text-white tracking-widest">
                        <span className="text-accent">Eshwaraa</span> Cottage
                    </h1>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleStart}
                        className="px-8 py-4 border border-white/30 text-white text-lg tracking-[0.2em] font-light hover:bg-white/10 transition-colors uppercase"
                    >
                        Click to Enter
                    </motion.button>
                </div>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black flex items-center justify-center p-0 m-0 overflow-hidden"
        >
            <div className="absolute top-8 right-8 z-20 flex items-center gap-4">
                <button
                    onClick={toggleMute}
                    className="text-white/50 hover:text-white transition-colors p-2 rounded-full bg-black/20 backdrop-blur-sm border border-white/10"
                >
                    {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                    <span className="sr-only">{isMuted ? 'Unmute' : 'Mute'}</span>
                </button>
                <button
                    onClick={onComplete}
                    className="text-white/50 hover:text-white transition-colors p-2 rounded-full bg-black/20 backdrop-blur-sm border border-white/10"
                >
                    <X size={24} />
                    <span className="sr-only">Skip Intro</span>
                </button>
            </div>

            <video
                ref={videoRef}
                className="w-full h-full object-contain"
                onEnded={onComplete}
                playsInline
                autoPlay
            >
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="absolute bottom-8 right-8 z-20">
                <button
                    onClick={onComplete}
                    className="text-white/70 text-sm hover:text-white transition-colors uppercase tracking-widest font-light"
                >
                    Skip Intro
                </button>
            </div>
        </motion.div>
    );
};

export default IntroVideo;
