import { useState } from 'react';
import { Search, ArrowRight, TrendingUp, ShieldCheck } from 'lucide-react';
import Input from './ui/Input';
import Button from './ui/Button';

export default function Hero({ onAnalyze }) {
    const [ticker, setTicker] = useState('');

    const handleAnalyze = () => {
        if (ticker.trim()) {
            onAnalyze(ticker.toUpperCase());
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAnalyze();
        }
    };

    return (
        <div className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 overflow-hidden">

            {/* Main Content Container */}
            <div className="relative z-10 w-full max-w-4xl mx-auto text-center animate-fade-in">

                {/* Badge / Pill */}
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 animate-slide-up opacity-0 shadow-lg backdrop-blur-sm" style={{ animationDelay: '0.1s' }}>
                    <span className="flex h-2 w-2 rounded-full bg-accent-primary animate-pulse"></span>
                    <span className="text-xs font-semibold text-gray-300 tracking-wider uppercase">Live Market Analysis</span>
                </div>

                {/* Headline */}
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1] animate-slide-up opacity-0" style={{ animationDelay: '0.2s' }}>
                    Sentinel watches the markets <br className="hidden md:block" />
                    <span className="text-gradient-accent">so you don't have to.</span>
                </h1>

                {/* Subheadline */}
                <p className="text-lg md:text-xl text-gray-400 mb-14 max-w-2xl mx-auto leading-relaxed animate-slide-up opacity-0" style={{ animationDelay: '0.3s' }}>
                    Explainable investment analysis with transparent logic and clear assumptions.
                    No black boxes, just data.
                </p>

                {/* Input Section */}
                <div className="w-full max-w-xl mx-auto mb-20 animate-slide-up opacity-0" style={{ animationDelay: '0.4s' }}>
                    <div className="relative group">
                        {/* Ambient glow behind input */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-accent-primary via-accent-violet to-accent-primary rounded-xl opacity-20 group-hover:opacity-40 blur-xl transition duration-1000 group-hover:duration-200"></div>

                        <div className="relative flex items-center">
                            <Input
                                large
                                placeholder="Enter ticker (e.g. AAPL, NVDA, TSLA)"
                                value={ticker}
                                onChange={(e) => setTicker(e.target.value.toUpperCase())}
                                onKeyPress={handleKeyPress}
                                icon={Search}
                                className="shadow-2xl bg-dark-elevated/90 backdrop-blur-xl border-white/10 pr-36 text-lg tracking-wide placeholder:text-gray-500/80"
                                autoFocus
                            />
                            <div className="absolute right-2 top-2 bottom-2">
                                <Button
                                    onClick={handleAnalyze}
                                    className="h-full shadow-none hover:shadow-glow-lg px-8 font-semibold tracking-wide"
                                >
                                    Analyze
                                </Button>
                            </div>
                        </div>

                        {/* Quick Suggestions */}
                        <div className="flex justify-center items-center space-x-6 mt-6 text-sm text-gray-500">
                            <span className="text-gray-600">Try:</span>
                            {['AAPL', 'NVDA', 'TSLA', 'MSFT'].map(sym => (
                                <button
                                    key={sym}
                                    onClick={() => { setTicker(sym); onAnalyze(sym); }}
                                    className="hover:text-accent-primary transition-colors cursor-pointer font-medium tracking-wide"
                                >
                                    {sym}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer / Trust indicators */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-y-4 md:gap-x-12 animate-slide-up opacity-0" style={{ animationDelay: '0.5s' }}>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <TrendingUp size={16} className="text-gray-400" />
                        <span>No predictions</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <ArrowRight size={16} className="text-gray-400" />
                        <span>Transparent logic</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <ShieldCheck size={16} className="text-gray-400" />
                        <span>Institutional grade</span>
                    </div>
                </div>

            </div>
        </div>
    );
}
