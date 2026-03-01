import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { projects } from '../data/projects';

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === id);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className="container max-w-4xl mx-auto px-6 py-10 text-center">
                <h1 className="text-3xl font-bold mb-6">Project not found</h1>
                <Link to="/" className="text-zinc-400 hover:text-white flex items-center justify-center gap-2">
                    <ArrowLeft size={16} /> Back to Home
                </Link>
            </div>
        );
    }

    return (
        <article className="container max-w-4xl mx-auto px-6 py-8 pb-16">
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white mb-8 transition-colors">
                <ArrowLeft size={16} /> Back to Projects
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="mb-8 flex flex-wrap gap-2">
                    {project.tech.map(t => (
                        <span key={t} className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs font-medium text-zinc-300">
                            {t}
                        </span>
                    ))}
                </div>

                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                    {project.title}
                </h1>

                <p className="text-xl text-zinc-400 mb-12 max-w-2xl leading-relaxed">
                    {project.description}
                </p>

                <div className="flex items-center gap-4 mb-16">
                    <button className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full font-medium text-sm hover:bg-zinc-200 transition-colors">
                        <ExternalLink size={16} /> Live Demo
                    </button>
                    <button className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 text-white px-5 py-2.5 rounded-full font-medium text-sm hover:bg-zinc-800 transition-colors">
                        <Github size={16} /> Source Code
                    </button>
                </div>

                <motion.div
                    className="aspect-video w-full rounded-2xl overflow-hidden bg-zinc-900 mb-16 border border-zinc-800"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                {project.gallery && project.gallery.length > 0 && (
                    <div className="mb-16">
                        <h3 className="text-xl font-bold mb-6 tracking-tight">Project Gallery</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {project.gallery.map((imgUrl, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + (i * 0.1) }}
                                    className="aspect-square md:aspect-[4/3] rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 cursor-pointer"
                                    onClick={() => setSelectedImage(imgUrl)}
                                >
                                    <img src={imgUrl} alt={`${project.title} gallery image ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="max-w-none">
                    <ReactMarkdown
                        components={{
                            h2: ({ node, ...props }) => <h2 className="text-2xl font-bold mt-16 mb-6 border-b border-zinc-800 pb-4 text-white" {...props} />,
                            h3: ({ node, ...props }) => <h3 className="text-xl font-bold mt-10 mb-4 text-zinc-100" {...props} />,
                            p: ({ node, ...props }) => {
                                // Check if paragraph only contains images and whitespace
                                let isOnlyImages = false;
                                if (node && node.children) {
                                    isOnlyImages = node.children.length > 0 && node.children.every(child =>
                                        (child.type === 'element' && child.tagName === 'img') ||
                                        (child.type === 'text' && child.value.trim() === '') ||
                                        (child.type === 'element' && child.tagName === 'br')
                                    );
                                }

                                if (isOnlyImages) {
                                    return <div className="flex flex-col md:flex-row justify-center gap-6 my-8 w-full items-center">{props.children}</div>;
                                }
                                return <p className="text-zinc-400 leading-relaxed mb-6 text-lg" {...props} />;
                            },
                            ul: ({ node, ...props }) => <ul className="list-none text-zinc-400 mb-8 space-y-3" {...props} />,
                            li: ({ node, ...props }) => <li className="leading-relaxed flex gap-3"><span className="text-emerald-500 mt-1.5 align-middle text-[10px]">■</span> <span>{props.children}</span></li>,
                            strong: ({ node, ...props }) => <strong className="font-semibold text-zinc-200" {...props} />,
                            code: ({ node, inline, ...props }) =>
                                inline ?
                                    <code className="bg-zinc-800/80 border border-zinc-700 text-emerald-300 font-mono px-1.5 py-0.5 rounded-md text-sm mx-1" {...props} /> :
                                    <pre className="bg-[#0d1117]/80 backdrop-blur-sm border border-zinc-800/80 p-6 rounded-2xl overflow-x-auto mb-10 text-sm font-mono text-zinc-300 shadow-2xl">
                                        <code {...props} />
                                    </pre>
                            ,
                            img: ({ node, ...props }) => (
                                <img
                                    className="max-h-[350px] object-contain rounded-xl border border-zinc-800 cursor-pointer hover:opacity-80 transition-opacity bg-zinc-900/50"
                                    onClick={() => setSelectedImage(props.src)}
                                    {...props}
                                />
                            ),
                        }}
                    >
                        {project.content}
                    </ReactMarkdown>
                </div>
            </motion.div>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-10 backdrop-blur-sm"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            src={selectedImage}
                            alt="Enlarged view"
                            className="max-w-full max-h-full rounded-lg object-contain"
                            onClick={(e) => e.stopPropagation()}
                        />
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-6 right-6 text-zinc-400 hover:text-white bg-zinc-900/50 p-2 rounded-full border border-zinc-800 hover:bg-zinc-800 transition-colors"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </article>
    );
};

export default ProjectDetails;
