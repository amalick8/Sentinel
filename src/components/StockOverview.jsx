import { TrendingUp, TrendingDown } from 'lucide-react';
import Card from './ui/Card';

export default function StockOverview({ data }) {
    const { company, ticker, price, change, changePercent, marketCap } = data;
    const isPositive = change >= 0;

    return (
        <Card>
            <div className="space-y-4">
                <div>
                    <h3 className="text-2xl font-bold">{company}</h3>
                    <p className="text-gray-400 text-sm">{ticker}</p>
                </div>

                <div className="space-y-2">
                    <div className="flex items-baseline space-x-2">
                        <span className="text-4xl font-bold">${price.toFixed(2)}</span>
                        <div className={`flex items-center space-x-1 ${isPositive ? 'text-sentiment-bullish' : 'text-red-500'}`}>
                            {isPositive ? <TrendingUp size={20} /> : <TrendingDown size={20} />}
                            <span className="text-lg font-medium">
                                {isPositive ? '+' : ''}{change.toFixed(2)} ({isPositive ? '+' : ''}{changePercent.toFixed(2)}%)
                            </span>
                        </div>
                    </div>

                    <div className="pt-4 border-t border-white/10">
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-400">Market Cap</span>
                            <span className="text-sm font-medium">{marketCap}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
}
