import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group relative flex flex-col glass rounded-3xl p-2 pb-6 hover:-translate-y-2 transition-transform duration-500 will-change-transform"
        >
            <Link to={`/project/${project.id}`} className="block overflow-hidden rounded-2xl mb-6 relative aspect-[4/3] bg-zinc-900">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
            </Link>

            <div className="px-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-3 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-400 transition-all duration-300">
                    <Link to={`/project/${project.id}`} className="focus:outline-none">
                        {project.title}
                    </Link>
                </h3>

                <p className="text-sm text-zinc-400 mb-6 flex-grow line-clamp-2">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map(t => (
                        <span key={t} className="px-2.5 py-1 bg-zinc-800/50 rounded-md text-xs font-medium text-zinc-300 group-hover:bg-zinc-800 transition-colors">
                            {t}
                        </span>
                    ))}
                </div>

                <div className="mt-auto">
                    <Link
                        to={`/project/${project.id}`}
                        className="inline-flex items-center gap-2 text-sm font-medium text-white opacity-80 group-hover:opacity-100 transition-opacity"
                    >
                        View Details
                        <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
