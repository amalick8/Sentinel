import { useState } from 'react';
import Hero from '../components/Hero';
import StockOverview from '../components/StockOverview';
import SentinelScore from '../components/SentinelScore';
import ReasoningPanel from '../components/ReasoningPanel';
import MarketConsensus from '../components/MarketConsensus';
import PriceChart from '../components/PriceChart';

// Mock data (same as before but ensured to be available)
const mockAnalysisData = {
    AAPL: {
        stock: {
            company: 'Apple Inc.',
            ticker: 'AAPL',
            price: 185.92,
            change: 2.45,
            changePercent: 1.34,
            marketCap: '$2.89T'
        },
        sentinel: {
            score: 76,
            stance: 'Bullish'
        },
        reasoning: {
            reasoning: [
                'Strong ecosystem lock-in with 2B+ active devices driving recurring services revenue',
                'Vision Pro represents credible entry into spatial computing with $3,499 price point indicating premium positioning',
                'Services segment (22% of revenue) maintains 70%+ gross margins vs 36% for products',
                'India manufacturing expansion reduces China concentration risk while accessing growth market'
            ],
            assumptions: [
                'iPhone replacement cycles remain stable at 3-4 years',
                'Services attach rate continues growth trajectory at current pace',
                'No major regulatory action forces App Store commission changes',
                'Vision Pro achieves 1M+ units in first year'
            ],
            risks: [
                'EU Digital Markets Act forcing sideloading could reduce App Store revenue by 15-20%',
                'China sales (<20% of revenue) face geopolitical headwinds',
                'Vision Pro adoption slower than Meta Quest, questioning spatial computing thesis',
                'Warren Buffett reducing stake signals valuation concerns'
            ]
        },
        consensus: {
            buy: 28,
            hold: 9,
            sell: 3,
            avgPriceTarget: 195,
            sentiment: 'Improving'
        },
        divergence: {
            direction: 'bullish',
            reason: 'Sentinel weights services growth and ecosystem moat more heavily than Street consensus, which focuses primarily on iPhone unit volumes.'
        },
        priceHistory: [
            { date: 'Nov 1', price: 171.10 },
            { date: 'Nov 8', price: 176.65 },
            { date: 'Nov 15', price: 182.40 },
            { date: 'Nov 22', price: 179.05 },
            { date: 'Nov 29', price: 183.90 },
            { date: 'Dec 4', price: 186.40 },
            { date: 'Dec 11', price: 193.18 },
            { date: 'Dec 18', price: 195.89 },
            { date: 'Dec 25', price: 193.05 },
            { date: 'Jan 1', price: 185.64 },
            { date: 'Jan 8', price: 185.56 },
            { date: 'Jan 15', price: 182.68 },
        ]
    },
    NVDA: {
        stock: {
            company: 'NVIDIA Corporation',
            ticker: 'NVDA',
            price: 495.22,
            change: -8.15,
            changePercent: -1.62,
            marketCap: '$1.22T'
        },
        sentinel: {
            score: 72,
            stance: 'Bullish'
        },
        reasoning: {
            reasoning: [
                'Dominant 95% market share in AI training chips with H100/H200 GPU architecture',
                'CUDA software moat creates vendor lock-in for AI developers',
                'Data center revenue grew 279% YoY reaching $14.5B in Q3',
                'Next-gen Blackwell architecture maintains 2-year lead over AMD/Intel'
            ],
            assumptions: [
                'Enterprise AI adoption continues at current exponential pace',
                'Cloud providers maintain capex spending on AI infrastructure',
                'No significant breakthrough by competitors in GPU architecture',
                'Export restrictions to China remain manageable'
            ],
            risks: [
                'AMD MI300X gaining traction with lower prices could erode margins',
                'Custom AI chips from Google/Amazon reduce dependency on NVIDIA',
                'Tightening export controls to China (10% of revenue)',
                'GPU supply constraints limiting revenue potential in high-demand environment'
            ]
        },
        consensus: {
            buy: 42,
            hold: 6,
            sell: 1,
            avgPriceTarget: 520,
            sentiment: 'Strong Buy'
        },
        divergence: {
            direction: 'cautious',
            reason: 'Sentinel is more concerned about competitive threats from custom AI chips and export restrictions than consensus, which remains heavily bullish on AI tailwinds.'
        },
        priceHistory: [
            { date: 'Nov 1', price: 445.20 },
            { date: 'Nov 8', price: 468.35 },
            { date: 'Nov 15', price: 482.10 },
            { date: 'Nov 22', price: 503.45 },
            { date: 'Nov 29', price: 498.80 },
            { date: 'Dec 6', price: 495.22 },
        ]
    },
    TSLA: {
        stock: {
            company: 'Tesla, Inc.',
            ticker: 'TSLA',
            price: 242.84,
            change: 5.67,
            changePercent: 2.39,
            marketCap: '$771B'
        },
        sentinel: {
            score: 52,
            stance: 'Neutral'
        },
        reasoning: {
            reasoning: [
                'Leading EV market share in US (55%) despite growing competition',
                'Cybertruck production ramping with 125k+ reservations',
                'Energy storage business (Megapack) growing 40% YoY with improving margins',
                'FSD beta showing progress with 12.1 update reducing interventions'
            ],
            assumptions: [
                'Cybertruck achieves profitability by Q4 2024',
                'FSD reaches Level 4 autonomy by 2025',
                'EV tax credits remain available for Model 3/Y',
                'No major quality issues with 4680 battery cells'
            ],
            risks: [
                'Price cuts compressing automotive gross margins below 20%',
                'Competition from BYD, Hyundai eroding market share faster than expected',
                'FSD regulatory approval delays pushing robotaxi timeline',
                'Elon Musk distraction with X/Twitter affecting operational focus'
            ]
        },
        consensus: {
            buy: 18,
            hold: 16,
            sell: 8,
            avgPriceTarget: 250,
            sentiment: 'Mixed'
        },
        divergence: {
            direction: 'cautious',
            reason: 'Sentinel is skeptical of the full autonomy timeline and values Tesla more as an EV manufacturer than a tech platform, while consensus is split between bulls betting on FSD and bears concerned about competition.'
        },
        priceHistory: [
            { date: 'Nov 1', price: 220.15 },
            { date: 'Nov 8', price: 228.40 },
            { date: 'Nov 15', price: 234.75 },
            { date: 'Nov 22', price: 237.20 },
            { date: 'Nov 29', price: 240.50 },
            { date: 'Dec 6', price: 242.84 },
        ]
    }
};

export default function Home() {
    const [showAnalysis, setShowAnalysis] = useState(false);
    const [currentTicker, setCurrentTicker] = useState(null);
    const [analysisData, setAnalysisData] = useState(null);

    const handleAnalyze = (ticker) => {
        const data = mockAnalysisData[ticker];
        if (data) {
            setCurrentTicker(ticker);
            setAnalysisData(data);
            setShowAnalysis(true);

            // Smooth scroll to analysis
            setTimeout(() => {
                window.scrollTo({ top: window.innerHeight * 0.9, behavior: 'smooth' });
            }, 100);
        } else {
            alert(`Analysis not available for ${ticker}. Try AAPL, NVDA, or TSLA.`);
        }
    };

    return (
        <div className="pb-20"> {/* Added padding bottom for space after content */}
            {/* Hero Section */}
            <Hero onAnalyze={handleAnalyze} />

            {/* Analysis Dashboard */}
            {showAnalysis && analysisData && (
                <div id="analysis-section" className="max-w-7xl mx-auto px-6 py-12 animate-slide-up opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>

                    {/* Dashboard Header */}
                    <div className="mb-8 flex items-end justify-between">
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-2">Analysis Report</h2>
                            <div className="flex items-center space-x-2 text-sm text-gray-400">
                                <span>Generated just now</span>
                                <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                                <span>Live data</span>
                            </div>
                        </div>

                        <button
                            onClick={() => {
                                setShowAnalysis(false);
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className="text-sm text-accent-primary hover:text-white transition-colors"
                        >
                            Start New Analysis
                        </button>
                    </div>

                    {/* 3-column grid */}
                    <div className="grid lg:grid-cols-3 gap-6 mb-8">
                        {/* Left Panel - Overview */}
                        <div className="space-y-6 lg:col-span-1">
                            <StockOverview data={analysisData.stock} />
                            <SentinelScore
                                score={analysisData.sentinel.score}
                                stance={analysisData.sentinel.stance}
                            />
                        </div>

                        {/* Center Panel - Reasoning */}
                        <div className="lg:col-span-1">
                            <ReasoningPanel
                                reasoning={analysisData.reasoning.reasoning}
                                assumptions={analysisData.reasoning.assumptions}
                                risks={analysisData.reasoning.risks}
                            />
                        </div>

                        {/* Right Panel - Consensus */}
                        <div className="lg:col-span-1">
                            <MarketConsensus
                                consensus={analysisData.consensus}
                                divergence={analysisData.divergence}
                            />
                        </div>
                    </div>

                    {/* Charts Section - Full Width */}
                    <div className="w-full">
                        <PriceChart data={analysisData.priceHistory} />
                    </div>

                </div>
            )}
        </div>
    );
}
