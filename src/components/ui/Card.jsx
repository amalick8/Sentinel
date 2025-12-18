export default function Card({ children, className = '', variant = 'default', hover = false }) {
    const variants = {
        default: 'glass',
        bordered: 'glass border-2 border-accent-blue/20',
    };

    const hoverClass = hover ? 'glass-hover' : '';

    return (
        <div className={`${variants[variant]} ${hoverClass} rounded-xl p-6 ${className}`}>
            {children}
        </div>
    );
}
