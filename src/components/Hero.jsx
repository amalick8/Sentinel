import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './ui/Button';

export default function Hero({ onAnalyze }) {
    return (
        <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 max-w-5xl mx-auto px-6 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[100px] -z-10 opacity-50" />

            <div className="max-w-3xl relative z-10">
                <motion.h1
                    className="text-5xl md:text-7xl font-semibold text-dark-text tracking-tight leading-[1.05] mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Sentinel doesn’t predict markets. <br />
                    <span className="text-dark-muted">It explains them.</span>
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl text-dark-muted mb-10 leading-relaxed max-w-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    Institutional-grade analysis without the noise.
                    Clear signals, transparent logic, and confidence-scored insights for serious investors.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row items-center gap-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                >
                    <Button onClick={() => onAnalyze('AAPL')} variant="primary" className="w-full sm:w-auto h-12 px-8 text-base">
                        Analyze a Stock
                    </Button>
                    <Button variant="secondary" className="group w-full sm:w-auto h-12 px-8 text-base">
                        View Methodology
                        <ArrowRight className="inline ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </Button>
                </motion.div>
            </div>
        </div>
    );
}
