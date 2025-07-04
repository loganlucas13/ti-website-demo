import Button from './Button';
import { House, BadgeQuestionMarkIcon, BookAlertIcon } from 'lucide-react';

const Header = () => {
    return (
        <>
            <div className="flex flex-row items-center pt-4 pb-6 px-8 w-full bg-stone-800 text-stone-100 justify-between">
                <div className="flex flex-row gap-4 items-center">
                    <House
                        size={32}
                        strokeWidth={1}
                        className="translate-y-1"
                    />
                    <span className="font-ibm text-4xl font-extralight underline underline-offset-8">
                        T.I. Services & Rentals
                    </span>
                </div>

                <div className="flex flex-row gap-4">
                    <Button
                        label="FAQ"
                        variant="outline"
                        icon={<BadgeQuestionMarkIcon strokeWidth={1} />}
                    />
                    <Button
                        label="About"
                        variant="outline"
                        icon={<BookAlertIcon strokeWidth={1} />}
                    />
                </div>
            </div>
        </>
    );
};

export default Header;
