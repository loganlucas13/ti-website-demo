import { useState, useEffect } from 'react';

type SlidingImageViewProps = {
    images: { src: string; alt?: string }[];
    interval?: number; // time between transitions
};

const SlidingImageView: React.FC<SlidingImageViewProps> = ({
    images,
    interval = 3000,
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, interval);

        return () => clearInterval(timer);
    }, [images.length, interval]);

    return (
        <>
            <div className="relative w-full h-[400px] overflow-hidden border-2 border-stone-800 rounded-lg">
                <div
                    className="flex transition-transform duration-700 ease-in-out h-full"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((img, index) => (
                        <SlidingImage key={index} src={img.src} alt={img.alt} />
                    ))}
                </div>
            </div>
        </>
    );
};

type SlidingImageProps = {
    src: string;
    alt?: string;
};

const SlidingImage: React.FC<SlidingImageProps> = ({ src, alt = '' }) => {
    return (
        <>
            <div className="flex-shrink-0 w-full h-full">
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover"
                />
            </div>
        </>
    );
};

export default SlidingImageView;
