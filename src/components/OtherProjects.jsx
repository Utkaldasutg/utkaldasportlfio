import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const OtherProjects = () => {
    return (
        <section id="other-projects" className="container max-w-5xl mx-auto px-6 py-10 scroll-mt-24">
            <div className="mb-12">
                <h2 className="text-3xl font-bold tracking-tight mb-4">Other Projects</h2>
                <div className="w-12 h-1 bg-zinc-600 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {projects.slice(3).map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index + 3} />
                ))}
            </div>
        </section>
    );
};

export default OtherProjects;
