import { FiArrowUpRight } from "react-icons/fi";

const projectsData = [
  {
    id: 1,
    title: "KrushiHub",
    category: "E-Commerce Platform",
    description:
      "Modern marketplace with role-based access, product management, and payments.",
    image: "/arecaMart_homePage.png",
    techs: ["Next.js", "Node.js", "MySQL"],
    demoLink: "https://krushihub.in/",
  },
  {
    id: 2,
    title: "Portfolio Experience",
    category: "Personal Brand",
    description:
      "High-converting portfolio with smooth scroll, motion, and content blocks.",
    image: "/myPortFolio.png",
    techs: ["React", "Tailwind"],
    demoLink: "#",
  },
  {
    id: 3,
    title: "Arecamart",
    category: "E-Commerce Platform",
    description:
      "Marketplace experience focused on clean UX, product discovery, and reliable flows.",
    image: "/arecaMart_homePage.png",
    techs: ["React", "Node.js"],
    demoLink: "https://github.com/sagar1314-oops/ArecaMart",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
        <div>
          <p className="uppercase tracking-[0.3em] text-xs text-[color:var(--muted)]">
            Selected Work
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-[color:var(--text)]">
            Recent projects that reflect my focus.
          </h2>
        </div>
        <a
          href="#contact"
          className="text-[color:var(--text)] font-semibold inline-flex items-center gap-2 border border-[color:var(--border)] px-4 py-2 rounded-full hover:bg-[color:var(--surface-2)] transition"
        >
          Start a project <FiArrowUpRight />
        </a>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="group bg-[color:var(--surface)] border border-[color:var(--border)] rounded-3xl overflow-hidden transition hover:-translate-y-1"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute top-4 left-4 bg-[color:var(--accent)] text-white text-xs uppercase tracking-widest px-3 py-1 rounded-full">
                {project.category}
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-2xl font-semibold text-[color:var(--text)]">
                  {project.title}
                </h3>
                <p className="text-[color:var(--muted)]">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs uppercase tracking-widest border border-[color:var(--border)] px-3 py-1 rounded-full text-[color:var(--muted)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.demoLink}
                className="inline-flex items-center gap-2 text-[color:var(--text)] font-semibold hover:text-[color:var(--accent)] transition"
              >
                View Project <FiArrowUpRight />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
