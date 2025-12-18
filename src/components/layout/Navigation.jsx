import { Github, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-accent-blue to-accent-violet rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform">
                            <div className="w-6 h-6 border-2 border-white rounded-md"></div>
                        </div>
                        <span className="text-xl font-bold text-gradient-blue">Sentinel</span>
                    </Link>

                    {/* Navigation Tabs */}
                    <div className="hidden md:flex items-center space-x-1">
                        {['Analyze', 'Markets', 'Compare', 'Research'].map((tab) => (
                            <Link
                                key={tab}
                                to={tab === 'Analyze' ? '/' : `/${tab.toLowerCase()}`}
                                className="px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200"
                            >
                                {tab}
                            </Link>
                        ))}
                    </div>

                    {/* Right side icons */}
                    <div className="flex items-center space-x-3">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                            aria-label="GitHub"
                        >
                            <Github size={20} />
                        </a>
                        <button
                            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                            aria-label="Toggle theme"
                        >
                            <Sun size={20} />
                        </button>
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-blue to-accent-violet"></div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
