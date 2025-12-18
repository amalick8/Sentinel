import { TrendingUp, Target, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import Card from './ui/Card';

export default function MarketConsensus({ consensus, divergence }) {
    const { buy, hold, sell, avgPriceTarget, sentiment } = consensus;
    const total = buy + hold + sell;

    return (
        <Card className="h-full">
            <div className="space-y-6">
                {/* Header */}
                <h3 className="text-xl font-semibold flex items-center space-x-2">
                    <TrendingUp className="text-accent-violet" size={24} />
                    <span>Market Consensus</span>
                </h3>

                {/* Analyst Ratings */}
                <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-3">Analyst Ratings</h4>

                    {/* Rating bars */}
                    <div className="space-y-3">
                        <div>
                            <div className="flex justify-between text-sm mb-1">
                                <span className="text-sentiment-bullish">Buy</span>
                                <span className="text-gray-400">{buy}</span>
                            </div>
                            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-sentiment-bullish rounded-full transition-all duration-500"
                                    style={{ width: `${(buy / total) * 100}%` }}
                                ></div>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between text-sm mb-1">
                                <span className="text-sentiment-neutral">Hold</span>
                                <span className="text-gray-400">{hold}</span>
                            </div>
                            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-sentiment-neutral rounded-full transition-all duration-500"
                                    style={{ width: `${(hold / total) * 100}%` }}
                                ></div>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between text-sm mb-1">
                                <span className="text-red-500">Sell</span>
                                <span className="text-gray-400">{sell}</span>
                            </div>
                            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-red-500 rounded-full transition-all duration-500"
                                    style={{ width: `${(sell / total) * 100}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Average Price Target */}
                <div className="pt-6 border-t border-white/10">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400 flex items-center space-x-2">
                            <Target size={16} />
                            <span>Avg. Price Target</span>
                        </span>
                        <span className="text-lg font-semibold">${avgPriceTarget}</span>
                    </div>
                </div>

                {/* Sentiment Trend */}
                <div className="pt-6 border-t border-white/10">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">Recent Sentiment</span>
                        <span className={`text-sm font-medium ${sentiment === 'Improving' ? 'text-sentiment-bullish' : 'text-gray-400'
                            }`}>
                            {sentiment}
                        </span>
                    </div>
                </div>

                {/* Divergence Indicator */}
                <div className="pt-6 border-t border-white/10 glass-hover p-4 rounded-lg">
                    <div className="flex items-start space-x-3">
                        <div className={`mt-1 ${divergence.direction === 'bullish' ? 'text-sentiment-bullish' : 'text-sentiment-cautious'}`}>
                            {divergence.direction === 'bullish' ? <ArrowUpRight size={20} /> : <ArrowDownRight size={20} />}
                        </div>
                        <div>
                            <p className="font-medium text-white mb-1">
                                Sentinel is {divergence.direction === 'bullish' ? 'more bullish' : 'more cautious'} than consensus
                            </p>
                            <p className="text-sm text-gray-400">{divergence.reason}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
}
