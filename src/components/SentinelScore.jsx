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
        if (score >= 70) return 'from-sentiment-bullish to-accent-blue';
        if (score >= 40) return 'from-accent-blue to-accent-violet';
        return 'from-sentiment-cautious to-red-500';
    };

    const percentage = score;

    return (
        <Card className="mt-6">
            <div className="text-center space-y-6">
                <h4 className="text-lg font-semibold text-gray-300">Sentinel Score</h4>

                {/* Circular gauge */}
                <div className="relative w-48 h-48 mx-auto">
                    <svg className="w-full h-full transform -rotate-90">
                        {/* Background circle */}
                        <circle
                            cx="96"
                            cy="96"
                            r="88"
                            fill="none"
                            stroke="rgba(255, 255, 255, 0.1)"
                            strokeWidth="12"
                        />
                        {/* Progress circle */}
                        <circle
                            cx="96"
                            cy="96"
                            r="88"
                            fill="none"
                            stroke="url(#scoreGradient)"
                            strokeWidth="12"
                            strokeLinecap="round"
                            strokeDasharray={`${2 * Math.PI * 88}`}
                            strokeDashoffset={`${2 * Math.PI * 88 * (1 - percentage / 100)}`}
                            className="transition-all duration-1000 ease-out"
                        />
                        <defs>
                            <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" className={`${getScoreColor(score)}-start`} />
                                <stop offset="100%" className={`${getScoreColor(score)}-end`} />
                            </linearGradient>
                        </defs>
                    </svg>

                    {/* Score text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-5xl font-bold text-gradient-blue">{score}</span>
                        <span className="text-sm text-gray-400">/ 100</span>
                    </div>
                </div>

                {/* Stance badge */}
                <div>
                    <Badge variant={getStanceVariant(stance)}>
                        {stance}
                    </Badge>
                </div>
            </div>
        </Card>
    );
}
