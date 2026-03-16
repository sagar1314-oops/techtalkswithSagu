import { Link } from "react-scroll";
import { FiArrowUpRight } from "react-icons/fi";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen pt-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 grain opacity-40 pointer-events-none" />
      <div className="absolute -top-24 right-10 w-80 h-80 bg-[color:var(--accent)] opacity-10 blur-3xl rounded-full" />
      <div className="absolute bottom-10 left-8 w-64 h-64 bg-[color:var(--accent)] opacity-10 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6">
          <p className="uppercase tracking-[0.3em] text-xs text-[color:var(--muted)]">
            Full-Stack Developer
          </p>
          <h1 className="text-5xl md:text-7xl font-semibold leading-tight text-[color:var(--text)]">
            Building digital
            <span className="block font-display italic text-[color:var(--accent)]">
              products with edge.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-[color:var(--muted)] max-w-lg">
            I design and build crisp web experiences, blending product thinking
            with scalable engineering.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="bg-[color:var(--accent)] text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition cursor-pointer inline-flex items-center gap-2"
            >
              View Work
              <FiArrowUpRight />
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="border border-[color:var(--border)] text-[color:var(--text)] px-6 py-3 rounded-full font-semibold hover:bg-[color:var(--surface-2)] transition cursor-pointer inline-flex items-center gap-2"
            >
              Let's Talk
            </Link>
          </div>
        </div>

        <div className="bg-[color:var(--surface)] border border-[color:var(--border)] rounded-3xl p-8 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.6)]">
          <div className="flex items-center justify-between text-sm text-[color:var(--muted)]">
            <span>Currently based in</span>
            <span className="text-[color:var(--text)] font-medium">Bengaluru, IN</span>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {[
              { label: "Years Experience", value: "2+" },
              { label: "Projects Shipped", value: "7" },
              { label: "Tech Stack", value: "Full-Stack" },
              { label: "Availability", value: "Open" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-[color:var(--border)] p-4 bg-[color:var(--surface-2)]"
              >
                <p className="text-sm text-[color:var(--muted)]">{item.label}</p>
                <p className="text-2xl font-semibold text-[color:var(--text)]">{item.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-between border-t border-[color:var(--border)] pt-6 text-sm text-[color:var(--muted)]">
            <span>Selected clients</span>
            <span className="text-[color:var(--text)] font-medium">Startups, SaaS, Agencies</span>
          </div>
        </div>
      </div>
    </section>
  );
}
