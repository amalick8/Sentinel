import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import Card from './ui/Card';

export default function PriceChart({ data }) {
    const [timeframe, setTimeframe] = useState('1M');

    const timeframes = ['1D', '1W', '1M', '3M', '1Y', 'ALL'];

    // Custom tooltip
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="glass p-3 rounded-lg">
                    <p className="text-sm text-gray-400">{payload[0].payload.date}</p>
                    <p className="text-lg font-semibold text-white">
                        ${payload[0].value.toFixed(2)}
                    </p>
                </div>
            );
        }
        return null;
    };

    return (
        <Card className="mt-8">
            <div className="space-y-4">
                {/* Header with toggle */}
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">Price History</h3>

                    {/* Timeframe selector */}
                    <div className="flex space-x-1 glass rounded-lg p-1">
                        {timeframes.map((tf) => (
                            <button
                                key={tf}
                                onClick={() => setTimeframe(tf)}
                                className={`px-3 py-1 rounded text-sm font-medium transition-all ${timeframe === tf
                                        ? 'bg-accent-blue text-white'
                                        : 'text-gray-400 hover:text-white'
                                    }`}
                            >
                                {tf}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Chart */}
                <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data}>
                            <defs>
                                <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                            <XAxis
                                dataKey="date"
                                stroke="#6b7280"
                                tick={{ fill: '#9ca3af', fontSize: 12 }}
                            />
                            <YAxis
                                stroke="#6b7280"
                                tick={{ fill: '#9ca3af', fontSize: 12 }}
                                domain={['auto', 'auto']}
                            />
                            <Tooltip content={<CustomTooltip />} />
                            <Area
                                type="monotone"
                                dataKey="price"
                                stroke="#3b82f6"
                                strokeWidth={2}
                                fillOpacity={1}
                                fill="url(#colorPrice)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </Card>
    );
}
