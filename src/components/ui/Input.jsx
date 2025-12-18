export default function Input({
    type = 'text',
    placeholder,
    value,
    onChange,
    className = '',
    icon: Icon,
    large = false
}) {
    const sizeClass = large
        ? 'text-2xl py-5 px-6'
        : 'text-base py-3 px-4';

    return (
        <div className="relative">
            {Icon && (
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <Icon size={large ? 28 : 20} />
                </div>
            )}
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`
          w-full ${sizeClass} ${Icon ? (large ? 'pl-14' : 'pl-12') : ''}
          glass rounded-xl
          text-white placeholder-gray-500
          focus:outline-none focus:ring-2 focus:ring-accent-blue/50
          transition-all duration-300
          ${className}
        `}
            />
        </div>
    );
}
