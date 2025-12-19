import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export default function Card({ children, className, ...props }) {
    return (
        <motion.div
            className={cn(
                "relative overflow-hidden rounded-xl border border-dark-border bg-dark-surface backdrop-blur-md shadow-sm transition-all duration-300 hover:border-dark-muted/30 hover:shadow-md",
                className
            )}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: props.delay || 0 }}
            {...props}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10 p-6 h-full">
                {children}
            </div>
        </motion.div>
    );
}
