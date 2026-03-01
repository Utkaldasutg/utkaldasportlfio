import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Code2, Cpu, Database, Blocks, Wifi } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative w-full min-h-[85vh] flex items-center justify-center container mx-auto px-6 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-zinc-800/30 blur-[120px] rounded-full pointer-events-none" />

            {/* Scattered Doodles / Illustrations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.25]">
                <motion.div animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[15%] left-[10%] text-emerald-500">
                    <Code2 size={40} />
                </motion.div>
                <motion.div animate={{ y: [0, 25, 0], rotate: [0, -15, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute top-[20%] right-[15%] text-blue-500">
                    <Cpu size={48} />
                </motion.div>
                <motion.div animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute bottom-[25%] left-[15%] text-purple-500">
                    <Database size={32} />
                </motion.div>
                <motion.div animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} className="absolute bottom-[30%] right-[10%] text-orange-500">
                    <Blocks size={44} />
                </motion.div>
                <motion.div animate={{ y: [0, -30, 0], rotate: [0, 20, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }} className="absolute top-[45%] left-[5%] text-emerald-300">
                    <Wifi size={24} />
                </motion.div>
                <motion.div animate={{ y: [0, 30, 0], rotate: [0, -20, 0] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute top-[55%] right-[5%] text-zinc-400">
                    <Terminal size={28} />
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-4xl w-full flex flex-col items-center text-center mt-16"
            >
                <div className="relative flex flex-col items-center justify-center mb-8 w-full max-w-2xl mx-auto">
                    {/* Centered Text Block */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm mb-5 shadow-sm"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-xs font-semibold text-emerald-400 tracking-wide uppercase">Available for work</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-3 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 text-center">
                        Utkal Das.
                    </h1>

                    <h2 className="text-sm md:text-base text-zinc-400 font-medium tracking-tight flex items-center justify-center gap-2 md:gap-3 text-center">
                        <span className="flex items-center gap-1.5 text-white"><Terminal size={14} className="text-zinc-500" /> Full Stack Dev</span>
                        <span className="text-zinc-700">•</span>
                        <span>Embedded Systems</span>
                    </h2>

                    {/* Animated grid/circuit illustration (shifted to left for symmetry) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="absolute -left-2 md:left-0 lg:left-4 top-1/2 -translate-y-1/2 hidden sm:flex items-center justify-center w-24 h-24 group"
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 opacity-20 border border-zinc-700/50 rounded-full border-dashed"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-3 opacity-40 border border-zinc-700 rounded-full border-dotted"
                        />
                        <div className="relative w-14 h-14 bg-zinc-900/80 backdrop-blur-md border border-zinc-700/50 rounded-2xl flex items-center justify-center shadow-2xl rotate-12 group-hover:rotate-0 transition-transform duration-500">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500">
                                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                                <circle cx="12" cy="12" r="4" />
                            </svg>
                        </div>
                    </motion.div>

                    {/* User Profile Image on Right */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="absolute -right-2 md:right-0 lg:right-4 top-0 bottom-0 hidden sm:flex items-center"
                    >
                        <div className="h-[95%] aspect-[3.5/4] rounded-2xl border-2 border-zinc-600/80 p-0.5 shadow-[0_0_30px_rgba(255,255,255,0.05)] overflow-hidden relative group bg-zinc-800">
                            <div className="w-full h-full rounded-[14px] overflow-hidden relative">
                                <img
                                    src="/imges/utkal das.jpeg"
                                    alt="Utkal Das"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900/60 via-transparent to-transparent pointer-events-none"></div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-3xl p-4 sm:p-5 md:p-8 backdrop-blur-md shadow-2xl w-full max-w-4xl mb-8 group hover:border-zinc-700/80 transition-colors duration-500 text-left">
                    <div className="text-[14px] md:text-[15.5px] text-zinc-400/95 leading-[1.7] space-y-4 font-medium">
                        <p>
                            I am currently working as an <span className="text-zinc-200">Instrumentation Engineer</span>, where I am actively involved in field instrumentation, industrial automation, and control system operations within complex engineering environments. My role includes working with real-time monitoring systems, sensor integration, PLC configurations, and industrial communication networks, which has strengthened my practical understanding of applied electronics and intelligent systems.
                        </p>
                        <p>
                            Alongside my professional responsibilities, my academic schedule is presently being conducted in online mode, allowing me the flexibility to actively prepare for and contribute to the <span className="text-zinc-200">AWaDH Internship project</span>. With hands-on experience in embedded systems, AI-enabled IoT integration, and industrial instrumentation, I will be able to dedicate approximately 40 hours per week to the project. I am also willing to invest additional time and effort whenever required to ensure meaningful technical contributions and successful project execution.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                    <a
                        href="#projects"
                        className="group flex items-center justify-center gap-2 bg-white text-black px-6 py-2.5 rounded-full font-semibold text-sm hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                    >
                        View Projects
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=utkaldas234@gmail.com"
                        target="_blank" rel="noopener noreferrer"
                        className="flex items-center justify-center px-6 py-2.5 rounded-full font-semibold text-sm border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800/80 hover:text-white transition-all duration-300 w-full sm:w-auto shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                    >
                        Contact Me
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
