import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Início', href: '#' },
        { name: 'Serviços', href: '#services' },
        { name: 'Sobre', href: '#about' },
        { name: 'FAQ', href: '#faq' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-slate-950/80 backdrop-blur-md border-b border-slate-800' : 'py-6 bg-transparent'
                }`}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                {/* Logo */}
                <a href="#" className="block hover:opacity-90 transition-opacity">
                    <img
                        src="/LogoFullHd.png"
                        alt="LT Cloud"
                        className="h-12 w-auto object-contain rounded-lg bg-white p-1"
                    />
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 after:transition-all hover:after:w-full"
                        >
                            {link.name}
                        </a>
                    ))}

                    <a
                        href="#contact"
                        className="px-5 py-2.5 rounded-full bg-slate-100 text-slate-900 font-semibold text-sm hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 flex items-center gap-2"
                    >
                        Fale Conosco
                        <ChevronRight size={16} />
                    </a>
                </nav>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-slate-800 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-4 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-base font-medium text-slate-300 hover:text-blue-400 p-2 rounded-lg hover:bg-slate-900 transition-all"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="w-full py-3 rounded-lg bg-blue-600 text-white font-bold text-center shadow-lg shadow-blue-900/20"
                    >
                        Começar Agora
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
