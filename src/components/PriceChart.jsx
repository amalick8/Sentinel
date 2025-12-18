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
                <div className="bg-dark-elevated/90 backdrop-blur-xl border border-white/10 p-3 rounded-lg shadow-xl">
                    <p className="text-xs text-gray-400 mb-1">{payload[0].payload.date}</p>
                    <p className="text-lg font-bold text-white tracking-tight">
                        ${payload[0].value.toFixed(2)}
                    </p>
                </div>
            );
        }
        return null;
    };

    return (
        <Card className="mt-8 overflow-hidden">
            <div className="space-y-6">
                {/* Header with toggle */}
                <div className="flex items-center justify-between px-2">
                    <div className="flex items-center space-x-4">
                        <h3 className="text-lg font-semibold text-white">Price History</h3>
                        <div className="h-4 w-px bg-white/10"></div>
                        <span className="text-sm text-gray-400">AAPL</span>
                    </div>

                    {/* Timeframe selector */}
                    <div className="flex space-x-1 bg-white/5 rounded-lg p-1 border border-white/5">
                        {timeframes.map((tf) => (
                            <button
                                key={tf}
                                onClick={() => setTimeframe(tf)}
                                className={`
                  px-3 py-1 rounded-md text-xs font-medium transition-all duration-300
                  ${timeframe === tf
                                        ? 'bg-accent-primary text-white shadow-sm'
                                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                                    }
                `}
                            >
                                {tf}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Chart */}
                <div className="h-[400px] w-full -ml-2">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data}>
                            <defs>
                                <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" vertical={false} />
                            <XAxis
                                dataKey="date"
                                stroke="#4B5563"
                                tick={{ fill: '#6B7280', fontSize: 11, fontFamily: 'Inter' }}
                                tickLine={false}
                                axisLine={false}
                                dy={10}
                            />
                            <YAxis
                                stroke="#4B5563"
                                tick={{ fill: '#6B7280', fontSize: 11, fontFamily: 'Inter' }}
                                domain={['auto', 'auto']}
                                tickLine={false}
                                axisLine={false}
                                tickFormatter={(value) => `$${value}`}
                                dx={-10}
                            />
                            <Tooltip
                                content={<CustomTooltip />}
                                cursor={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 1, strokeDasharray: '4 4' }}
                            />
                            <Area
                                type="monotone"
                                dataKey="price"
                                stroke="#3B82F6"
                                strokeWidth={2}
                                fillOpacity={1}
                                fill="url(#colorPrice)"
                                animationDuration={1500}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </Card>
    );
}
