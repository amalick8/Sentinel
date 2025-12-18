import { CheckCircle2, AlertCircle } from 'lucide-react';
import Card from './ui/Card';

export default function ReasoningPanel({ reasoning, assumptions, risks }) {
    return (
        <Card className="h-full">
            <div className="space-y-6">
                {/* Sentinel's Reasoning */}
                <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
                        <CheckCircle2 className="text-accent-blue" size={24} />
                        <span>Sentinel's Reasoning</span>
                    </h3>
                    <ul className="space-y-3">
                        {reasoning.map((point, index) => (
                            <li key={index} className="flex items-start space-x-3">
                                <span className="text-accent-blue mt-1">•</span>
                                <span className="text-gray-300">{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Assumptions */}
                <div className="pt-6 border-t border-white/10">
                    <h4 className="text-lg font-semibold mb-3 text-gray-300">Key Assumptions</h4>
                    <ul className="space-y-2">
                        {assumptions.map((assumption, index) => (
                            <li key={index} className="flex items-start space-x-3">
                                <span className="text-gray-500 text-sm mt-1">→</span>
                                <span className="text-sm text-gray-400">{assumption}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* What Would Break This Thesis */}
                <div className="pt-6 border-t border-white/10">
                    <h4 className="text-lg font-semibold mb-3 flex items-center space-x-2 text-sentiment-cautious">
                        <AlertCircle size={20} />
                        <span>What Would Break This Thesis</span>
                    </h4>
                    <ul className="space-y-2">
                        {risks.map((risk, index) => (
                            <li key={index} className="flex items-start space-x-3">
                                <span className="text-sentiment-cautious text-sm mt-1">!</span>
                                <span className="text-sm text-gray-400">{risk}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Card>
    );
}
