import { motion } from "framer-motion";
import Card from "./ui/Card";

export default function ChartSection() {
    return (
        <Card className="h-full min-h-[300px] md:min-h-[400px] relative overflow-hidden group border-dashed border-dark-border/60 bg-dark-surface/50">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_40%,transparent_100%)] pointer-events-none" />

            {/* Center Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-brand-blue/20 rounded-full blur-[60px] opacity-50 group-hover:opacity-80 transition-opacity duration-1000" />

            <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-center relative z-10">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-dark-surface/80 backdrop-blur-md rounded-lg p-6 border border-dark-border shadow-2xl"
                    >
                        <div className="w-12 h-12 mx-auto bg-dark-background rounded-full flex items-center justify-center mb-4 border border-dark-border">
                            <span className="text-2xl">📈</span>
                        </div>
                        <h3 className="text-lg font-medium text-dark-text mb-2">Interactive Charting</h3>
                        <p className="text-dark-muted text-sm max-w-xs mx-auto">
                            Advanced technical analysis tools visualizing signal data points in real-time.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Decorative Lines */}
            <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" preserveAspectRatio="none">
                <motion.path
                    d="M0 300 C 100 280, 200 350, 400 320 S 600 200, 800 250"
                    stroke="url(#gradient-line)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />
                <defs>
                    <linearGradient id="gradient-line" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
                        <stop offset="50%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        </Card>
    );
}
