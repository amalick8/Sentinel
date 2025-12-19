export default function Button({
    children,
    variant = 'primary',
    className = '',
    onClick
}) {
    const variants = {
        primary: 'bg-accent-blue text-white hover:opacity-90',
        secondary: 'bg-transparent border border-dark-border text-dark-text hover:bg-dark-border/50',
        ghost: 'text-dark-muted hover:text-dark-text',
    };

    return (
        <button
            onClick={onClick}
            className={`
        ${variants[variant]} 
        px-4 py-2 
        rounded-md 
        text-sm font-medium 
        tracking-wide
        transition-all duration-200
        active:scale-[0.98]
        ${className}
      `}
        >
            {children}
        </button>
    );
}
