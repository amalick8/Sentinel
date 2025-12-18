export default function Badge({ children, variant = 'neutral', className = '' }) {
    const variants = {
        bullish: 'bg-sentiment-bullish/10 text-sentiment-bullish border-sentiment-bullish/20',
        neutral: 'bg-sentiment-neutral/10 text-sentiment-neutral border-sentiment-neutral/20',
        cautious: 'bg-sentiment-cautious/10 text-sentiment-cautious border-sentiment-cautious/20',
        premium: 'bg-accent-primary/10 text-accent-primary border-accent-primary/20',
    };

    return (
        <span className={`
      inline-flex items-center px-2.5 py-0.5
      rounded-md text-xs font-medium border
      ${variants[variant]} ${className}
    `}>
            {children}
        </span>
    );
}
