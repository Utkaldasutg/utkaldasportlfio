import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

const Navbar = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
            <div className="bg-[#1a1a1a] border border-zinc-800 rounded-full flex items-center p-1.5 shadow-2xl">
                <a href="/#home" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:scale-105 transition-transform shrink-0">
                    <Globe size={18} strokeWidth={2.5} />
                </a>

                <div className="flex items-center gap-4 md:gap-6 px-4 md:px-6 text-[13px] md:text-sm font-medium text-zinc-400">
                    <a href="/#home" className="hover:text-white transition-colors">Home</a>
                    <a href="/#projects" className="hover:text-white transition-colors">Projects</a>
                    <a href="/#skills" className="hover:text-white transition-colors hidden sm:block">Skills</a>
                </div>

                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=utkaldas234@gmail.com" target="_blank" rel="noopener noreferrer" className="h-8 md:h-10 px-3 md:px-5 bg-white text-black rounded-full flex items-center text-[13px] md:text-sm font-semibold hover:bg-zinc-200 transition-colors shrink-0">
                    <span className="hidden sm:inline">utkaldas234@gmail.com</span>
                    <span className="inline sm:hidden">Email</span>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
