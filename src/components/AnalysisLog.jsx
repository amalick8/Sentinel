import { motion } from "framer-motion";

const logs = [
    { id: 1, timestamp: "14:02:12", level: "INFO", message: "Revenue growth outpaces sector average by 15% (YoY)" },
    { id: 2, timestamp: "14:02:15", level: "SUCCESS", message: "Operating margins expanded to 32% despite supply chain headwinds" },
    { id: 3, timestamp: "14:02:44", level: "WARN", message: "Insider buying activity detected in Q3 (CEO + CFO)" },
    { id: 4, timestamp: "14:03:01", level: "INFO", message: "Technical indicators suggest consolidation above 200-day MA" },
    { id: 5, timestamp: "14:03:05", level: "INFO", message: "Sentiment analysis running... complete." },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.5
        }
    }
};

const item = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0 }
};

export default function AnalysisLog() {
    return (
        <section className="h-full flex flex-col">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-dark-muted font-mono uppercase tracking-wider flex items-center gap-2">
                    <span className="text-brand-blue">❯</span> Analysis Log
                </h3>
                <div className="text-xs text-dark-border font-mono">LIVE FEED</div>
            </div>

            <div className="flex-1 bg-black/40 backdrop-blur-sm rounded-xl border border-dark-border/50 p-6 font-mono text-sm overflow-hidden relative group">
                {/* Scanline effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-blue/5 to-transparent opacity-0 group-hover:opacity-100 animate-scan pointer-events-none z-10 h-32 w-full" />

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="space-y-3 relative z-20"
                >
                    {logs.map((log) => (
                        <motion.div key={log.id} variants={item} className="flex gap-3">
                            <span className="text-dark-border select-none">[{log.timestamp}]</span>
                            <span className={
                                log.level === "INFO" ? "text-blue-400" :
                                    log.level === "SUCCESS" ? "text-green-400" :
                                        log.level === "WARN" ? "text-yellow-400" : "text-dark-text"
                            }>{log.level}</span>
                            <span className="text-dark-muted">{log.message}</span>
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ duration: 0.8, repeat: Infinity }}
                                className="inline-block w-1.5 h-4 bg-brand-blue/50 ml-1 align-middle"
                            />
                        </motion.div>
                    ))}
                    <motion.div variants={item} className="flex gap-2 text-brand-blue animate-pulse mt-4">
                        <span>_</span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
