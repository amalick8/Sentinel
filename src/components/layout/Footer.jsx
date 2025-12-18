import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="mt-20 border-t border-white/10 bg-dark-card/50">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Disclaimer */}
                    <div className="md:col-span-2">
                        <p className="text-sm text-gray-400 leading-relaxed">
                            <strong className="text-gray-300">Disclaimer:</strong> Sentinel provides educational analysis only.
                            This is not financial advice. All investment decisions should be made based on your own research
                            and risk tolerance. Past performance does not guarantee future results.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col space-y-2">
                        <h4 className="text-sm font-semibold text-gray-300 mb-2">Learn More</h4>
                        <Link to="/methodology" className="text-sm text-gray-400 hover:text-accent-blue transition-colors">
                            Methodology
                        </Link>
                        <Link to="/about" className="text-sm text-gray-400 hover:text-accent-blue transition-colors">
                            About
                        </Link>
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-gray-400 hover:text-accent-blue transition-colors"
                        >
                            GitHub
                        </a>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/5 text-center">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} Sentinel. Built for analysts, engineers, and serious investors.
                    </p>
                </div>
            </div>
        </footer>
    );
}
