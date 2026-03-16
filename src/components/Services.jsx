import { FiCode, FiServer, FiLayers, FiZap } from "react-icons/fi";

const services = [
  {
    icon: FiCode,
    title: "Frontend Craft",
    description: "Design systems, motion, and crisp UI for product teams.",
  },
  {
    icon: FiServer,
    title: "Backend Systems",
    description: "Reliable APIs, auth, and data layers with clean architecture.",
  },
  {
    icon: FiLayers,
    title: "Full-Stack Delivery",
    description: "End-to-end builds from discovery to deployment.",
  },
  {
    icon: FiZap,
    title: "Performance + SEO",
    description: "Fast, accessible, and search-friendly experiences.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
        <div>
          <p className="uppercase tracking-[0.3em] text-xs text-[color:var(--muted)]">
            Services
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-[color:var(--text)] mt-4">
            What I do best for growing teams.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-[color:var(--surface)] border border-[color:var(--border)] rounded-2xl p-6 space-y-4"
              >
                <div className="w-12 h-12 rounded-full bg-[color:var(--surface-2)] flex items-center justify-center">
                  <Icon className="text-[color:var(--accent)]" size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[color:var(--text)]">
                    {service.title}
                  </h3>
                  <p className="text-[color:var(--muted)]">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
