import { motion } from 'framer-motion';
import { Layout, Server, Cpu, Wrench } from 'lucide-react';

const skills = [
    {
        category: "Frontend",
        icon: <Layout className="text-emerald-400" size={24} />,
        items: ["React", "Tailwind CSS", "JavaScript (ES6+)", "Framer Motion", "HTML5", "CSS3"]
    },
    {
        category: "Backend",
        icon: <Server className="text-blue-400" size={24} />,
        items: ["Node.js", "Express", "MongoDB", "RESTful APIs", "Mongoose"]
    },
    {
        category: "Embedded Systems",
        icon: <Cpu className="text-orange-400" size={24} />,
        items: ["Arduino", "ESP8266", "IoT Architecture", "Sensors", "C/C++"]
    },
    {
        category: "Tools & Others",
        icon: <Wrench className="text-purple-400" size={24} />,
        items: ["Git", "GitHub", "Vite", "Python", "Matplotlib"]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24 }
    }
};

const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.3 }
    }
};

const Skills = () => {
    return (
        <section id="skills" className="container max-w-5xl mx-auto px-6 py-16 scroll-mt-24">
            <div className="mb-14">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">Technical Arsenal</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-emerald-200 rounded-full"></div>
            </div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {skills.map((skillGroup, idx) => (
                    <motion.div
                        key={idx}
                        variants={itemVariants}
                        className="relative group p-5 md:p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 backdrop-blur-sm overflow-hidden hover:border-zinc-700/80 transition-all duration-500 flex flex-col justify-center"
                    >
                        {/* Subtle background glow effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/0 via-zinc-800/0 to-zinc-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="relative z-10 w-full">
                            <h3 className="text-lg font-bold mb-4 flex items-center gap-3 text-zinc-100">
                                <div className="p-2 bg-zinc-900 rounded-lg shadow-inner border border-zinc-800/80">
                                    {skillGroup.icon}
                                </div>
                                {skillGroup.category}
                            </h3>
                            <motion.div
                                className="flex flex-wrap gap-2"
                                variants={containerVariants}
                            >
                                {skillGroup.items.map((item, itemIdx) => (
                                    <motion.span
                                        key={item}
                                        variants={badgeVariants}
                                        className="px-3 py-1.5 bg-[#0d1117] border border-zinc-800/80 rounded-lg text-[13px] font-medium text-zinc-400 group-hover:border-zinc-700 hover:text-white hover:bg-zinc-800 transition-all cursor-default shadow-sm hover:shadow-md"
                                    >
                                        {item}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Skills;
