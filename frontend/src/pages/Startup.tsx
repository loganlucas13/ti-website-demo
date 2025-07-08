import Header from '../components/Header';
import Button from '../components/Button';
import SlidingImageView from '../components/SlidingImageView';
import AboutSection from '../components/AboutSection';
import { HouseIcon, HammerIcon } from 'lucide-react';

// example 1 and 3 are a bit blurry
import Example2 from '../assets/Example2.jpg';
import Example4 from '../assets/Example4.jpg';
import Example5 from '../assets/Example5.jpg';

const Startup = () => {
    const slidingImages = [
        { src: Example2, alt: 'Second' },
        { src: Example4, alt: 'Fourth' },
        { src: Example5, alt: 'Fifth' },
    ];

    return (
        <>
            <div className="flex flex-col gap-4">
                <Header />

                <div className="flex flex-row">
                    <div className="pl-4 pr-2">
                        <SlidingImageView
                            images={slidingImages}
                            interval={5000}
                        />
                        <div className="flex flex-row justify-between py-4 px-4 bg-stone-800 font-ibm text-stone-100 text-2xl -translate-y-10 rounded-b-xl items-center">
                            <span>Find your perfect home.</span>

                            <Button
                                label="View available properties"
                                variant="outline"
                                icon={<HouseIcon strokeWidth={1} />}
                                className="text-2xl"
                            />
                        </div>
                    </div>

                    <div className="pl-2 pr-4">
                        <SlidingImageView
                            images={slidingImages}
                            interval={5000}
                        />
                        <div className="flex flex-row justify-between py-4 px-4 bg-stone-800 font-ibm text-stone-100 text-2xl -translate-y-10 rounded-b-xl items-center">
                            <span>Bring your space to life.</span>

                            <Button
                                label="View our services"
                                variant="outline"
                                icon={<HammerIcon strokeWidth={1} />}
                                className="text-2xl"
                            />
                        </div>
                    </div>
                </div>

                <div className="px-60 w-full">
                    <AboutSection />
                </div>
            </div>
        </>
    );
};

export default Startup;
