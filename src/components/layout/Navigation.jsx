import { Github, Sun, Activity } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-dark-border bg-dark-background/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-2 group">
                    <div className="w-6 h-6 rounded bg-accent-blue flex items-center justify-center">
                        <Activity className="text-white w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm font-semibold tracking-wide text-dark-text">
                        Sentinel
                    </span>
                </Link>

                {/* Navigation Tabs */}
                <div className="hidden md:flex items-center space-x-6 absolute left-1/2 -translate-x-1/2">
                    {['Analyze', 'Markets', 'Compare', 'Research'].map((tab) => {
                        const path = tab === 'Analyze' ? '/' : `/${tab.toLowerCase()}`;
                        const active = isActive(path);

                        return (
                            <Link
                                key={tab}
                                to={path}
                                className={`
                  text-sm font-medium transition-colors duration-200
                  ${active
                                        ? 'text-dark-text'
                                        : 'text-dark-muted hover:text-dark-text'
                                    }
                `}
                            >
                                {tab}
                            </Link>
                        );
                    })}
                </div>

                {/* Right side controls */}
                <div className="flex items-center space-x-4">
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-dark-muted hover:text-dark-text transition-colors"
                    >
                        <Github size={18} />
                    </a>

                    <button className="text-dark-muted hover:text-dark-text transition-colors">
                        <Sun size={18} />
                    </button>

                    <div className="w-6 h-6 rounded-full bg-dark-surface border border-dark-border"></div>
                </div>
            </div>
        </nav>
    );
}
