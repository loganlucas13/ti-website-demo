type Variant = 'primary' | 'secondary' | 'outline';

type ButtonProps = {
    label: string;
    onClick?: () => void;
    variant?: Variant;
    className?: string;
    icon?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    variant = 'primary',
    className,
    icon,
}) => {
    const defaultStyling =
        'hover:cursor-pointer font-ibm font-light text-lg flex items-center gap-2';

    const variantStyling = {
        primary: '',
        secondary: '',
        outline:
            'px-4 py-2 border-stone-50 border-1 rounded-md transition ease-in-out hover:bg-stone-700 hover:underline underline-offset-4',
    };
    const selectedStyle = variantStyling[variant];

    return (
        <div className="flex flex-row items-center">
            <button
                onClick={onClick}
                className={`${defaultStyling} ${selectedStyle} ${
                    className ?? ''
                }`}
            >
                {icon && <span className="px-0">{icon}</span>}
                {label}
            </button>
        </div>
    );
};

export default Button;
