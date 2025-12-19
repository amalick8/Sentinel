export default function Card({ children, className = '' }) {
    return (
        <div className={`
      bg-dark-surface 
      border border-dark-border 
      rounded-xl 
      p-6 
      transition-transform duration-200 ease-out
      hover:-translate-y-0.5
      ${className}
    `}>
            {children}
        </div>
    );
}
