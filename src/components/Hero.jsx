import { useState } from 'react';
import { Search } from 'lucide-react';
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
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Subtle animated background */}
            <div className="absolute inset-0 animated-gradient-bg opacity-50"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-bg/50 to-dark-bg"></div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                {/* Headline */}
                <h1 className="mb-6 animate-float">
                    Sentinel watches the markets<br />
                    <span className="text-gradient-blue">so you don't have to.</span>
                </h1>

                {/* Subheadline */}
                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                    Explainable investment analysis with transparent logic and clear assumptions.
                </p>

                {/* Ticker Input */}
                <div className="max-w-2xl mx-auto mb-8">
                    <Input
                        large
                        placeholder="Enter ticker symbol (e.g., AAPL, NVDA, TSLA)"
                        value={ticker}
                        onChange={(e) => setTicker(e.target.value.toUpperCase())}
                        onKeyPress={handleKeyPress}
                        icon={Search}
                    />
                </div>

                {/* CTA Button */}
                <Button
                    size="lg"
                    onClick={handleAnalyze}
                    className="shadow-glow-blue"
                >
                    Analyze with Sentinel
                </Button>

                {/* Subtle hint */}
                <p className="mt-8 text-sm text-gray-500">
                    No predictions. No hype. Just transparent analysis.
                </p>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-blue/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent-violet/10 rounded-full blur-3xl"></div>
        </div>
    );
}
