export default function Badge({ children, variant = 'neutral', className = '' }) {
    const variants = {
        bullish: 'bg-sentiment-bullish/20 text-sentiment-bullish border-sentiment-bullish/30',
        neutral: 'bg-sentiment-neutral/20 text-sentiment-neutral border-sentiment-neutral/30',
        cautious: 'bg-sentiment-cautious/20 text-sentiment-cautious border-sentiment-cautious/30',
    };

    return (
        <span className={`
      inline-flex items-center px-3 py-1
      rounded-full text-sm font-medium
      border ${variants[variant]} ${className}
    `}>
            {children}
        </span>
    );
}
