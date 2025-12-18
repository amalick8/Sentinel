export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    onClick,
    type = 'button',
    disabled = false
}) {
    const variants = {
        primary: 'bg-gradient-to-r from-accent-blue to-accent-violet text-white hover:shadow-glow-blue',
        secondary: 'glass border-2 border-accent-blue/50 hover:border-accent-blue hover:bg-accent-blue/10',
        ghost: 'hover:bg-white/5',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`
        ${variants[variant]} 
        ${sizes[size]} 
        rounded-lg font-medium
        transition-all duration-300
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
        >
            {children}
        </button>
    );
}
