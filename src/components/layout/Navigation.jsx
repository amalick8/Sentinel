import { Github, Sun, Activity } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
            {/* Glass backdrop with subtle border */}
            <div className="absolute inset-0 bg-dark-bg/80 backdrop-blur-md border-b border-white/5 shadow-sm"></div>

            <div className="relative max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-3 group animate-fade-in relative z-10">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-primary to-accent-violet flex items-center justify-center shadow-glow group-hover:shadow-glow-lg transition-all duration-300">
                        <Activity className="text-white w-5 h-5" />
                    </div>
                    <span className="text-lg font-bold tracking-tight text-white group-hover:text-gray-200 transition-colors">
                        Sentinel
                    </span>
                </Link>

                {/* Navigation Tabs - Centered */}
                <div className="hidden md:flex items-center space-x-1 absolute left-1/2 -translate-x-1/2 z-10">
                    {['Analyze', 'Markets', 'Compare', 'Research'].map((tab) => {
                        const path = tab === 'Analyze' ? '/' : `/${tab.toLowerCase()}`;
                        const active = isActive(path);

                        return (
                            <Link
                                key={tab}
                                to={path}
                                className={`
                  px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300
                  ${active
                                        ? 'text-white bg-white/10 shadow-glass'
                                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                                    }
                `}
                            >
                                {tab}
                            </Link>
                        );
                    })}
                </div>

                {/* Right side controls */}
                <div className="flex items-center space-x-4 animate-fade-in relative z-10">
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        <Github size={20} />
                    </a>

                    <div className="w-px h-4 bg-white/10 mx-2"></div>

                    <button className="text-gray-400 hover:text-white transition-colors">
                        <Sun size={20} />
                    </button>

                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-600 border border-white/10 shadow-inner"></div>
                </div>
            </div>
        </nav>
    );
}
