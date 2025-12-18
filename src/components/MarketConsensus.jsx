import { TrendingUp, Target, ArrowUpRight, ArrowDownRight, Users } from 'lucide-react';
import Card from './ui/Card';

export default function MarketConsensus({ consensus, divergence }) {
    const { buy, hold, sell, avgPriceTarget, sentiment } = consensus;
    const total = buy + hold + sell;

    return (
        <Card className="h-full flex flex-col">
            <div className="space-y-8 flex-grow">
                {/* Header */}
                <h3 className="text-lg font-semibold flex items-center space-x-2 text-white">
                    <div className="p-1.5 rounded-md bg-accent-violet/10 border border-accent-violet/20">
                        <Users className="text-accent-violet" size={18} />
                    </div>
                    <span>Market Consensus</span>
                </h3>

                {/* Analyst Ratings */}
                <div>
                    <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4">Analyst Ratings</h4>

                    {/* Rating bars */}
                    <div className="space-y-4">
                        <div className="group">
                            <div className="flex justify-between text-sm mb-2">
                                <span className="text-gray-300 font-medium group-hover:text-sentiment-bullish transition-colors">Buy</span>
                                <span className="text-gray-400 group-hover:text-white transition-colors">{buy}</span>
                            </div>
                            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-sentiment-bullish rounded-full opacity-80 shadow-[0_0_8px_rgba(16,185,129,0.3)] group-hover:opacity-100 transition-all duration-500"
                                    style={{ width: `${(buy / total) * 100}%` }}
                                ></div>
                            </div>
                        </div>

                        <div className="group">
                            <div className="flex justify-between text-sm mb-2">
                                <span className="text-gray-300 font-medium group-hover:text-sentiment-neutral transition-colors">Hold</span>
                                <span className="text-gray-400 group-hover:text-white transition-colors">{hold}</span>
                            </div>
                            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-sentiment-neutral rounded-full opacity-80 shadow-[0_0_8px_rgba(148,163,184,0.3)] group-hover:opacity-100 transition-all duration-500"
                                    style={{ width: `${(hold / total) * 100}%` }}
                                ></div>
                            </div>
                        </div>

                        <div className="group">
                            <div className="flex justify-between text-sm mb-2">
                                <span className="text-gray-300 font-medium group-hover:text-red-400 transition-colors">Sell</span>
                                <span className="text-gray-400 group-hover:text-white transition-colors">{sell}</span>
                            </div>
                            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-red-500 rounded-full opacity-80 shadow-[0_0_8px_rgba(239,68,68,0.3)] group-hover:opacity-100 transition-all duration-500"
                                    style={{ width: `${(sell / total) * 100}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 py-6 border-t border-b border-white/5">
                    <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Target</p>
                        <p className="text-xl font-bold text-white">${avgPriceTarget}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Sentiment</p>
                        <p className={`text-xl font-bold ${sentiment === 'Improving' ? 'text-sentiment-bullish' : 'text-gray-300'}`}>
                            {sentiment}
                        </p>
                    </div>
                </div>

                {/* Divergence Indicator */}
                <div className="bg-gradient-to-br from-dark-surface to-dark-elevated rounded-lg p-4 border border-white/5 shadow-inner">
                    <div className="flex items-start space-x-3">
                        <div className={`mt-0.5 p-1 rounded-full ${divergence.direction === 'bullish' ? 'bg-sentiment-bullish/10 text-sentiment-bullish' : 'bg-sentiment-cautious/10 text-sentiment-cautious'}`}>
                            {divergence.direction === 'bullish' ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                        </div>
                        <div>
                            <p className="font-medium text-white text-sm mb-1">
                                Sentinel is {divergence.direction === 'bullish' ? 'more bullish' : 'more cautious'} than street
                            </p>
                            <p className="text-xs text-gray-400 leading-relaxed">{divergence.reason}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
}
