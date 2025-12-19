export default function Badge({ children, variant = 'neutral' }) {
    const variants = {
        bullish: 'bg-green-500/10 text-green-400 border-green-500/20',
        neutral: 'bg-dark-border text-dark-muted border-dark-border',
        bearish: 'bg-red-500/10 text-red-400 border-red-500/20',
        blue: 'bg-accent-blue/10 text-accent-blue border-accent-blue/20',
    };

    return (
        <span className={`
      ${variants[variant]} 
      inline-flex items-center 
      px-2 py-0.5
      rounded 
      text-xs font-mono
      border
    `}>
            {children}
        </span>
    );
}
