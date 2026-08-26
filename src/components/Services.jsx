import { FiCode, FiServer, FiLayers, FiZap } from "react-icons/fi";

const services = [
  {
    icon: FiCode,
    title: "Frontend Craft",
    description: "Design systems, motion, and crisp UI for product teams.",
    color: "#3b82f6",
  },
  {
    icon: FiServer,
    title: "Backend Systems",
    description:
      "Reliable APIs, auth, and data layers with clean architecture.",
    color: "#8b5cf6",
  },
  {
    icon: FiLayers,
    title: "Full-Stack Delivery",
    description: "End-to-end builds from discovery to deployment.",
    color: "#10b981",
  },
  {
    icon: FiZap,
    title: "Performance + SEO",
    description: "Fast, accessible, and search-friendly experiences.",
    color: "#f59e0b",
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="text-center mb-14">
        <p className="uppercase tracking-[0.3em] text-xs text-[color:var(--accent)] mb-3">
          What I offer
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-[color:var(--text)]">
          Services
        </h2>
        <div className="w-16 h-1 bg-[color:var(--accent)] mx-auto mt-4 rounded-full" />
        <p className="text-[color:var(--muted)] mt-4">
          What I do best for growing teams.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.title}
              className="bg-[color:var(--surface)] border border-[color:var(--border)] rounded-2xl p-6 space-y-4 hover:border-[color:var(--accent)] transition glow-card group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${service.color}22` }}
              >
                <Icon style={{ color: service.color }} size={22} />
              </div>
              <h3 className="text-lg font-bold text-[color:var(--text)] group-hover:text-[color:var(--accent)] transition">
                {service.title}
              </h3>
              <p className="text-sm text-[color:var(--muted)] leading-relaxed">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
