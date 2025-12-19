import { ArrowRight } from 'lucide-react';
import Button from './ui/Button';

export default function Hero({ onAnalyze }) {
    return (
        <div className="py-24 max-w-5xl mx-auto px-6">
            <div className="max-w-2xl">
                <h1 className="text-5xl font-semibold text-dark-text tracking-tight leading-[1.1] mb-6">
                    Sentinel doesn’t predict markets. <br />
                    <span className="text-dark-muted">It explains them.</span>
                </h1>

                <p className="text-lg text-dark-muted mb-10 leading-relaxed max-w-lg">
                    Institutional-grade analysis without the noise.
                    Clear signals, transparent logic, and confidence-scored insights for serious investors.
                </p>

                <div className="flex items-center gap-4">
                    <Button onClick={() => onAnalyze('AAPL')} variant="primary">
                        Analyze a Stock
                    </Button>
                    <Button variant="secondary" className="group">
                        View Methodology
                        <ArrowRight className="inline ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
