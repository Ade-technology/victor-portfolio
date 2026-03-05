import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { projects } from "@/data/portfolio";

const categories = ["All", "Mobile Apps", "Web dev", "SEO & Content"];

const ProjectsSection = () => {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const categoryPriority = ["Mobile Apps", "Web dev", "SEO & Content", "IT & Automation"];

    // Filter by category or sort all by priority
    let result =
      active === "All"
        ? [...projects].sort(
            (a, b) =>
              categoryPriority.indexOf(a.category) - categoryPriority.indexOf(b.category)
          )
        : projects.filter((p) => p.category === active);

    // Apply search filter
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.techStack.some((t) => t.toLowerCase().includes(q))
      );
    }

    return result;
  }, [active, search]);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold font-heading text-center mb-4"
        >
          Projects
        </motion.h2>

        {/* Search Input */}
        <div className="max-w-md mx-auto mb-6">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              size={18}
            />
            <input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-secondary text-foreground text-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={`/project/${project.id}`}
                className="block group rounded-xl overflow-hidden bg-card border border-border card-hover"
              >
                {/* Project Image */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-4">
                  {/* Project Title */}
                  <h3 className="font-heading font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Project Short Description */}
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>

                  {/* Project Tech Stack */}
                  {project.techStack.length > 0 && (
                    <p className="text-xs text-primary mt-2 font-medium">
                      {project.techStack.slice(0, 4).join(" · ")}
                    </p>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}

          {/* No Results Message */}
          {filtered.length === 0 && (
            <div className="col-span-full text-center py-12 text-muted-foreground">
              No projects found matching your search.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;