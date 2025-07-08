import Headshot from '../assets/fake-headshot.jpg';

const AboutSection = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center gap-4">
                <span className="flex text-center font-ibm text-2xl text-stone-100 bg-stone-800 border-2 border-stone-100 rounded-lg px-4 py-2">
                    About Us
                </span>

                <div className="flex flex-row gap-4 items-center">
                    <span className="flex items-center justify-center text-center max-w-[50ch] px-4 py-2 font-ibm bg-stone-100 border-2 border-stone-800 rounded-lg -translate-y-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </span>

                    <span className="flex-shrink-0">
                        <img
                            src={Headshot}
                            alt="Headshot"
                            className="w-60 h-60 object-cover rounded-lg border-2 border-stone-800"
                        />
                        <div className="px-4 py-2 bg-stone-800 text-stone-100 font-ibm -translate-y-8 rounded-b-lg text-center">
                            Mr. Squid
                        </div>
                    </span>
                </div>
            </div>
        </>
    );
};

export default AboutSection;
