import Card from './ui/Card';
import Badge from './ui/Badge';

export default function SentinelScore({ score, stance }) {
    const getStanceVariant = (stance) => {
        const lowerStance = stance.toLowerCase();
        if (lowerStance === 'bullish') return 'bullish';
        if (lowerStance === 'cautious') return 'cautious';
        return 'neutral';
    };

    const getScoreColor = (score) => {
        if (score >= 70) return 'from-sentiment-bullish to-accent-primary';
        if (score >= 40) return 'from-accent-primary to-accent-violet';
        return 'from-sentiment-cautious to-red-500';
    };

    const percentage = score;

    return (
        <Card className="mt-6 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-primary/5 rounded-bl-[100px] -z-0"></div>

            <div className="relative z-10 text-center space-y-6">
                <div className="flex justify-between items-center mb-2">
                    <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider">Sentinel Score</h4>
                    <Badge variant={getStanceVariant(stance)}>{stance}</Badge>
                </div>

                {/* Circular gauge */}
                <div className="relative w-48 h-48 mx-auto my-4 scale-110">
                    <svg className="w-full h-full transform -rotate-90">
                        {/* Background circle */}
                        <circle
                            cx="96"
                            cy="96"
                            r="88"
                            fill="none"
                            stroke="rgba(255, 255, 255, 0.03)"
                            strokeWidth="8"
                        />
                        {/* Progress circle */}
                        <circle
                            cx="96"
                            cy="96"
                            r="88"
                            fill="none"
                            stroke="url(#scoreGradient)"
                            strokeWidth="8"
                            strokeLinecap="round"
                            strokeDasharray={`${2 * Math.PI * 88}`}
                            strokeDashoffset={`${2 * Math.PI * 88 * (1 - percentage / 100)}`}
                            className="transition-all duration-1500 ease-out"
                            style={{ filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.3))' }}
                        />
                        <defs>
                            <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" className={`${getScoreColor(score)}-start`} stopColor={score >= 70 ? '#10B981' : score >= 40 ? '#3B82F6' : '#F59E0B'} />
                                <stop offset="100%" className={`${getScoreColor(score)}-end`} stopColor={score >= 70 ? '#3B82F6' : score >= 40 ? '#8B5CF6' : '#EF4444'} />
                            </linearGradient>
                        </defs>
                    </svg>

                    {/* Score text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-6xl font-bold text-white tracking-tighter">{score}</span>
                        <span className="text-xs text-gray-500 font-medium uppercase mt-1 tracking-widest">Confidence {score > 80 ? 'High' : score > 50 ? 'Med' : 'Low'}</span>
                    </div>
                </div>

                <p className="text-sm text-gray-400 leading-relaxed px-4">
                    Analysis based on <span className="text-gray-300 font-medium">14 fundamental factors</span> and recent market consensus.
                </p>
            </div>
        </Card>
    );
}
