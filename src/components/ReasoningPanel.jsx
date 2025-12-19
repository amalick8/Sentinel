import Card from './ui/Card';

export default function ReasoningPanel({ items }) {
    return (
        <Card className="h-full">
            <div className="flex items-center gap-3 mb-6 border-b border-dark-border pb-4">
                <span className="w-2 h-2 rounded-full bg-accent-purple" />
                <h3 className="text-sm font-mono text-dark-muted uppercase tracking-wider">Analysis Log</h3>
            </div>

            <div className="space-y-4">
                {items.map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                        <span className="text-dark-muted font-mono text-xs pt-1 opacity-50">
                            0{idx + 1}
                        </span>
                        <p className="text-dark-text text-sm leading-relaxed font-mono">
                            {item}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mt-6 pt-4 border-t border-dark-border">
                <div className="text-xs text-dark-muted font-mono opacity-50">
                    {'>'} END OF LINE
                </div>
            </div>
        </Card>
    );
}
