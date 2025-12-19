import Card from './ui/Card';
import Badge from './ui/Badge';

export default function SignalSnapshot() {
    const signalData = {
        score: 87,
        risk: 'Medium',
        consensus: 'Bullish'
    };

    return (
        <section className="space-y-6">
            <h2 className="text-xl font-medium text-dark-text tracking-tight flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
                Signal Snapshot
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card delay={0.1} className="flex flex-col justify-between">
                    <div className="text-dark-muted text-sm font-medium mb-2">Sentinel Score</div>
                    <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-5xl font-bold bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
                            {signalData.score}
                        </span>
                        <span className="text-dark-muted font-light">/100</span>
                    </div>
                    <div>
                        <Badge variant="blue">Strong Signal</Badge>
                    </div>
                </Card>

                <Card delay={0.2} className="flex flex-col justify-between">
                    <div className="text-dark-muted text-sm font-medium mb-2">Risk Profile</div>
                    <div className="text-2xl font-semibold text-dark-text mb-4 flex items-center gap-2">
                        {signalData.risk}
                        <span className="text-yellow-500 text-sm">⚠️</span>
                    </div>
                    <div className="h-1.5 w-full bg-dark-border rounded-full overflow-hidden mb-2">
                        <div className="h-full bg-gradient-to-r from-yellow-600 to-yellow-400 w-[60%] rounded-full relative">
                            <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]" />
                        </div>
                    </div>
                    <div className="text-xs text-dark-muted font-mono">Volatile shifts expected</div>
                </Card>

                <Card delay={0.3} className="flex flex-col justify-between">
                    <div className="text-dark-muted text-sm font-medium mb-2">Market Consensus</div>
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-semibold text-dark-text">{signalData.consensus}</span>
                        <Badge variant="green">Buy</Badge>
                    </div>
                    <div className="flex gap-1 h-8 items-end">
                        <div className="bg-emerald-500/20 hover:bg-emerald-500/30 transition-colors h-full w-1/2 rounded-sm" />
                        <div className="bg-dark-border h-1/3 w-1/4 rounded-sm" />
                        <div className="bg-rose-500/20 h-1/6 w-1/4 rounded-sm" />
                    </div>
                </Card>
            </div>
        </section>
    );
}
