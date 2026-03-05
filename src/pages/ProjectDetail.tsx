import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/portfolio";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const relatedProjects = projects.filter((p) => p.id !== id).slice(0, 3);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Project not found.</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <Link to="/#projects" className="inline-flex items-center gap-2 text-sm text-primary mb-8 hover:underline">
            <ArrowLeft size={16} /> Back to Projects
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl md:text-4xl font-bold font-heading mb-4">{project.title}</h1>

            <div className="rounded-xl overflow-hidden mb-8 border border-border">
              <img src={project.image} alt={project.title} className="w-full object-cover max-h-[500px]" />
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              <div className="lg:col-span-2">
                <h2 className="text-xl font-heading font-bold mb-3">About the Project</h2>
                <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-sm rounded-md bg-secondary text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="space-y-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity w-full justify-center"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-primary text-primary text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors w-full justify-center"
                    >
                      <Github size={16} /> Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Related Projects */}
            <div>
              <h2 className="text-2xl font-heading font-bold mb-6">Related Projects</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProjects.map((rp) => (
                  <Link
                    key={rp.id}
                    to={`/project/${rp.id}`}
                    className="group rounded-xl overflow-hidden bg-card border border-border card-hover block"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={rp.image}
                        alt={rp.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-heading font-bold group-hover:text-primary transition-colors">
                        {rp.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">{rp.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default ProjectDetail;
