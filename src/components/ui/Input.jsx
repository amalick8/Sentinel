export default function Input({
    type = 'text',
    placeholder,
    value,
    onChange,
    className = '',
    icon: Icon,
    large = false,
    autoFocus = false,
    onKeyPress
}) {
    const sizeClass = large
        ? 'text-lg py-4 px-6 h-14'
        : 'text-sm py-2.5 px-4 h-10';

    return (
        <div className="relative group">
            {Icon && (
                <div className={`
          absolute left-4 top-1/2 -translate-y-1/2
          text-gray-500 group-focus-within:text-accent-primary
          transition-colors duration-300
        `}>
                    <Icon size={large ? 20 : 16} />
                </div>
            )}
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onKeyPress={onKeyPress}
                autoFocus={autoFocus}
                className={`
          w-full input-premium
          ${sizeClass}
          ${Icon ? 'pl-11' : ''}
          ${className}
        `}
            />
        </div>
    );
}
