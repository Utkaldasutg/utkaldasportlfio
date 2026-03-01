import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const Projects = () => {
    return (
        <section id="projects" className="container max-w-5xl mx-auto px-6 py-10 scroll-mt-24">
            <div className="mb-12">
                <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Work</h2>
                <div className="w-12 h-1 bg-white rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {projects.slice(0, 3).map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
