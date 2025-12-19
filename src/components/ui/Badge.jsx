import { cn } from "../../lib/utils";

const variants = {
    default: "bg-dark-border text-dark-muted border-transparent",
    blue: "bg-brand-blue/10 text-brand-blue border-brand-blue/20 shadow-[0_0_10px_-3px_rgba(59,130,246,0.3)]",
    cyan: "bg-brand-cyan/10 text-brand-cyan border-brand-cyan/20 shadow-[0_0_10px_-3px_rgba(6,182,212,0.3)]",
    green: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    red: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    outline: "bg-transparent border-dark-border text-dark-muted"
};

export default function Badge({ children, variant = "default", className }) {
    return (
        <span className={cn(
            "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border transition-colors",
            variants[variant] || variants.default,
            className
        )}>
            {children}
        </span>
    );
}
