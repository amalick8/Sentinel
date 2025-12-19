import Hero from '../components/Hero';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import ReasoningPanel from '../components/ReasoningPanel';

export default function Home() {
    const signalData = {
        score: 87,
        risk: 'Medium',
        consensus: 'Bullish'
    };

    const reasoningPoints = [
        "Revenue growth outpaces sector average by 15% (YoY)",
        "Operating margins expanded to 32% despite supply chain headwinds",
        "Insider buying activity detected in Q3 (CEO + CFO)",
        "Technical indicators suggest consolidation above 200-day MA"
    ];

    return (
        <div className="pb-24">
            <Hero onAnalyze={(ticker) => console.log(ticker)} />

            <div className="max-w-5xl mx-auto px-6 space-y-8">
                {/* Signal Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card>
                        <div className="text-dark-muted text-sm font-medium mb-2">Sentinel Score</div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-semibold text-dark-text">{signalData.score}</span>
                            <span className="text-dark-muted">/100</span>
                        </div>
                        <div className="mt-4">
                            <Badge variant="blue">Strong Signal</Badge>
                        </div>
                    </Card>

                    <Card>
                        <div className="text-dark-muted text-sm font-medium mb-2">Risk Profile</div>
                        <div className="text-2xl font-semibold text-dark-text mb-4 text-yellow-500">{signalData.risk}</div>
                        <div className="h-1.5 w-full bg-dark-border rounded-full overflow-hidden">
                            <div className="h-full bg-yellow-500/80 w-[60%] rounded-full" />
                        </div>
                        <div className="mt-3 text-xs text-dark-muted">Volatile shifts expected</div>
                    </Card>

                    <Card>
                        <div className="text-dark-muted text-sm font-medium mb-2">Market Consensus</div>
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-2xl font-semibold text-dark-text">{signalData.consensus}</span>
                            <Badge variant="bullish">Buy</Badge>
                        </div>
                        <div className="flex gap-1 h-8 items-end">
                            <div className="bg-green-500/20 h-full w-1/2 rounded-sm" />
                            <div className="bg-dark-border h-1/3 w-1/4 rounded-sm" />
                            <div className="bg-red-500/20 h-1/6 w-1/4 rounded-sm" />
                        </div>
                    </Card>
                </div>

                {/* Reasoning Panel */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 h-full">
                        <ReasoningPanel items={reasoningPoints} />
                    </div>
                    <div className="lg:col-span-1">
                        <Card className="h-full min-h-[200px] flex items-center justify-center text-dark-muted text-sm border-dashed">
                            Chart Placeholder
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
