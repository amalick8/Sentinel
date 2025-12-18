import { CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import Card from './ui/Card';

export default function ReasoningPanel({ reasoning, assumptions, risks }) {
    return (
        <Card className="h-full">
            <div className="space-y-8">
                {/* Sentinel's Reasoning */}
                <div>
                    <h3 className="text-lg font-semibold mb-5 flex items-center space-x-2 text-white">
                        <div className="p-1.5 rounded-md bg-accent-primary/10 border border-accent-primary/20">
                            <CheckCircle2 className="text-accent-primary" size={18} />
                        </div>
                        <span>Sentinel's Reasoning</span>
                    </h3>
                    <ul className="space-y-4">
                        {reasoning.map((point, index) => (
                            <li key={index} className="flex items-start space-x-3 group">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-primary/50 group-hover:bg-accent-primary group-hover:shadow-[0_0_8px_rgba(59,130,246,0.5)] transition-all duration-300"></span>
                                <span className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="w-full h-px bg-white/5"></div>

                {/* Assumptions */}
                <div>
                    <h4 className="text-sm font-semibold mb-4 text-gray-400 uppercase tracking-wider flex items-center">
                        Key Assumptions
                    </h4>
                    <ul className="space-y-3">
                        {assumptions.map((assumption, index) => (
                            <li key={index} className="flex items-start space-x-3 text-sm">
                                <ArrowRight className="text-gray-600 mt-0.5 shrink-0" size={14} />
                                <span className="text-gray-400">{assumption}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="w-full h-px bg-white/5"></div>

                {/* What Would Break This Thesis */}
                <div className="bg-dark-bg/30 rounded-lg p-4 border border-white/5 hover:border-sentiment-cautious/30 transition-colors duration-300">
                    <h4 className="text-sm font-semibold mb-3 flex items-center space-x-2 text-sentiment-cautious">
                        <AlertCircle size={16} />
                        <span>Thesis Risks</span>
                    </h4>
                    <ul className="space-y-2">
                        {risks.map((risk, index) => (
                            <li key={index} className="flex items-start space-x-3">
                                <span className="text-sentiment-cautious/70 text-xs mt-1 shrink-0">•</span>
                                <span className="text-sm text-gray-400">{risk}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Card>
    );
}
