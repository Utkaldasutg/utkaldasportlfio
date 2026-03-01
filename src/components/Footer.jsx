import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="border-t border-zinc-900 mt-12 pt-8 pb-8">
            <div className="container max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <p className="text-zinc-500 text-sm">
                    © {new Date().getFullYear()} Utkal Das. All rights reserved.
                </p>
                <div className="flex items-center gap-6 text-zinc-500">
                    <a href="#" className="hover:text-white transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="#" className="hover:text-white transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href="#" className="hover:text-white transition-colors">
                        <Twitter size={20} />
                    </a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=utkaldas234@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect width="20" height="16" x="2" y="4" rx="2" />
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
