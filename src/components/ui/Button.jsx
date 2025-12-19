import { cn } from "../../lib/utils";

export default function Button({
    children,
    variant = 'primary',
    className = '',
    onClick,
    ...props
}) {
    const variants = {
        primary: 'bg-brand-blue text-white hover:bg-brand-blue/90 shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)] border border-transparent',
        secondary: 'bg-transparent border border-dark-border text-dark-text hover:bg-white/5 hover:border-dark-muted/50 backdrop-blur-sm',
        ghost: 'text-dark-muted hover:text-dark-text hover:bg-white/5',
    };

    return (
        <button
            onClick={onClick}
            className={cn(
                "px-5 py-2.5 rounded-lg text-sm font-medium tracking-wide transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-2",
                variants[variant] || variants.primary,
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
