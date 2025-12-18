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
        primary: 'bg-accent-primary text-white shadow-glow hover:bg-accent-primary-glow hover:shadow-glow-lg hover:-translate-y-[1px]',
        secondary: 'bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20',
        ghost: 'text-gray-400 hover:text-white hover:bg-white/5',
        gradient: 'bg-gradient-to-r from-accent-primary to-accent-violet text-white shadow-glow hover:shadow-glow-lg hover:brightness-110',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-sm font-medium',
        lg: 'px-8 py-4 text-base font-medium',
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`
        ${variants[variant]}
        ${sizes[size]}
        rounded-lg
        transition-all duration-300 ease-out
        disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
        active:translate-y-[1px]
        ${className}
      `}
        >
            {children}
        </button>
    );
}
