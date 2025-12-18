import { TrendingUp, TrendingDown, DollarSign, Activity } from 'lucide-react';
import Card from './ui/Card';

export default function StockOverview({ data }) {
    const { company, ticker, price, change, changePercent, marketCap } = data;
    const isPositive = change >= 0;

    return (
        <Card className="h-full flex flex-col justify-between">
            <div>
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <h2 className="text-3xl font-bold text-white tracking-tight">{company}</h2>
                        <div className="flex items-center space-x-2 mt-1">
                            <span className="text-sm font-medium px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-400">
                                {ticker}
                            </span>
                            <span className="text-sm text-gray-500">NasdaqGS</span>
                        </div>
                    </div>
                    <div className="p-2 rounded-full bg-white/5 border border-white/5">
                        <DollarSign size={20} className="text-gray-400" />
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <div className="flex items-baseline space-x-3">
                    <span className="text-5xl font-bold text-white tracking-tighter">
                        ${price.toFixed(2)}
                    </span>
                </div>

                <div className="flex items-center space-x-4 mt-3">
                    <div className={`
            flex items-center space-x-1.5 px-2.5 py-1 rounded-md text-sm font-medium
            ${isPositive
                            ? 'bg-sentiment-bullish/10 text-sentiment-bullish border border-sentiment-bullish/20'
                            : 'bg-red-500/10 text-red-400 border border-red-500/20'
                        }
          `}>
                        {isPositive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                        <span>{isPositive ? '+' : ''}{change.toFixed(2)} ({isPositive ? '+' : ''}{changePercent.toFixed(2)}%)</span>
                    </div>
                    <span className="text-sm text-gray-500 font-medium">Today</span>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/5">
                    <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Market Cap</p>
                        <p className="text-lg font-semibold text-gray-200">{marketCap}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Volume</p>
                        <p className="text-lg font-semibold text-gray-200">52.4M</p>
                    </div>
                </div>
            </div>
        </Card>
    );
}
