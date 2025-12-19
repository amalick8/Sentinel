import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Hero from '../components/Hero';
import SignalSnapshot from '../components/SignalSnapshot';
import AnalysisLog from '../components/AnalysisLog';
import ChartSection from '../components/ChartSection';
import Card from '../components/ui/Card';

export default function Home() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <div ref={containerRef} className="relative min-h-screen overflow-hidden selection:bg-brand-blue/30 selection:text-white pb-20">
            {/* Parallax Background Elements */}
            <motion.div style={{ y: y1 }} className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-40">
                <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px]" />
            </motion.div>
            <motion.div style={{ y: y2 }} className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
                <div className="absolute top-[40%] left-[60%] w-[300px] h-[300px] bg-brand-cyan/10 rounded-full blur-[80px]" />
            </motion.div>

            <Hero onAnalyze={(ticker) => console.log(ticker)} />

            <div className="max-w-6xl mx-auto px-6 space-y-8 relative z-10">
                {/* Signal Snapshot Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <SignalSnapshot />
                </motion.div>

                {/* Analysis & Chart Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-20">
                    {/* Analysis Log - Terminal Style */}
                    <div className="lg:col-span-4 h-full min-h-[400px]">
                        <motion.div
                            className="h-full"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <AnalysisLog />
                        </motion.div>
                    </div>

                    {/* Chart Section - Visual Richness */}
                    <div className="lg:col-span-8 h-full min-h-[400px]">
                        <motion.div
                            className="h-full"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <ChartSection />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
