import { FiArrowUpRight, FiGithub, FiExternalLink } from "react-icons/fi";

const projectsData = [
  {
    id: 1,
    title: "PawsZone",
    category: "Pet-Commerce",
    description:
      "Full-stack pet-commerce platform with product management, cart & checkout, orders, grooming and veterinary services.",
    image: "/pawsZone_homePage.png",
    techs: ["React.js", "Node.js", "Express.js", "MySQL"],
    demoLink: "https://pawszone.in/",
    githubLink: null,
    badgeColor: "#3b82f6",
  },
  {
    id: 2,
    title: "KrushiHub",
    category: "E-Commerce",
    description:
      "Modern marketplace with role-based access, product management, and payments.",
    image: "/arecaMart_homePage.png",
    techs: ["Next.js", "Node.js", "MySQL"],
    demoLink: "https://krushihub.in/",
    githubLink: null,
    badgeColor: "#8b5cf6",
  },
  {
    id: 3,
    title: "Arecamart",
    category: "E-Commerce",
    description:
      "Marketplace experience focused on clean UX, product discovery, and reliable flows.",
    image: "/arecaMart_homePage.png",
    techs: ["React", "Node.js"],
    demoLink: "https://github.com/sagar1314-oops/ArecaMart",
    githubLink: "https://github.com/sagar1314-oops/ArecaMart",
    badgeColor: "#10b981",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="text-center mb-14">
        <p className="uppercase tracking-[0.3em] text-xs text-[color:var(--accent)] mb-3">
          My Work
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-[color:var(--text)]">
          Featured Projects
        </h2>
        <div className="w-16 h-1 bg-[color:var(--accent)] mx-auto mt-4 rounded-full" />
        <p className="text-[color:var(--muted)] mt-4">
          Projects demonstrating frontend finesse and full-stack skills.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="group bg-[color:var(--surface)] border border-[color:var(--border)] rounded-2xl overflow-hidden hover:border-[color:var(--accent)] transition-all duration-300 glow-card"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div
                className="absolute top-3 left-3 text-white text-xs uppercase tracking-widest px-3 py-1 rounded-full font-semibold"
                style={{ backgroundColor: project.badgeColor }}
              >
                {project.category}
              </div>
              <div className="absolute top-3 right-3 flex gap-2">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-black/60 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-[color:var(--accent)] transition"
                  >
                    <FiGithub size={13} />
                  </a>
                )}
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-black/60 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-[color:var(--accent)] transition"
                >
                  <FiExternalLink size={13} />
                </a>
              </div>
            </div>
            <div className="p-5 space-y-3">
              <h3 className="text-xl font-bold text-[color:var(--text)] group-hover:text-[color:var(--accent)] transition">
                {project.title}
              </h3>
              <p className="text-sm text-[color:var(--muted)] leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-[color:var(--surface-2)] border border-[color:var(--border)] px-3 py-1 rounded-full text-[color:var(--muted)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[color:var(--accent)] font-semibold hover:gap-3 transition-all pt-1"
              >
                View Project <FiArrowUpRight size={15} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
