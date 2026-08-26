import { Link } from "react-scroll";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen px-6 relative overflow-hidden flex items-center"
    >
      <div className="absolute inset-0 grain opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-blue-600 opacity-10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-8 w-64 h-64 bg-blue-500 opacity-10 blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10 py-20 w-full">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-[color:var(--surface)] border border-[color:var(--border)] px-4 py-2 rounded-full text-sm text-[color:var(--accent)]">
            <span className="w-2 h-2 rounded-full bg-[color:var(--accent)] animate-pulse" />
            Software Engineer | Full-Stack Development
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-[color:var(--text)]">
            Sagar T C
          </h1>
          <div className="text-xl md:text-2xl font-semibold text-[color:var(--accent)] h-8">
            <TypeAnimation
              sequence={[
                "React.js Developer|",
                2000,
                "Full-Stack Engineer|",
                2000,
                "UI/UX Enthusiast|",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <p className="text-lg text-[color:var(--muted)] max-w-lg leading-relaxed">
            Building responsive and scalable web applications using React.js,
            JavaScript, TypeScript, Node.js and modern backend technologies.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="bg-[color:var(--accent)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 transition cursor-pointer inline-flex items-center gap-2"
            >
              View Projects <FiArrowUpRight />
            </Link>
            <a
              href="/resume.pdf"
              download
              className="border border-[color:var(--border)] text-[color:var(--text)] px-6 py-3 rounded-lg font-semibold hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] transition inline-flex items-center gap-2"
            >
              Download CV <FiDownload size={16} />
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative w-full max-w-sm">
            <div className="absolute inset-0 rounded-3xl bg-blue-600 opacity-15 blur-2xl scale-110" />
            <div className="relative bg-[color:var(--surface)] border border-[color:var(--border)] rounded-3xl p-8 glow-card">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Years Experience", value: "2+" },
                  { label: "Projects Shipped", value: "3" },
                  { label: "Tech Stack", value: "Full-Stack" },
                  { label: "Availability", value: "Open" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-[color:var(--surface-2)] border border-[color:var(--border)] rounded-2xl p-4 text-center"
                  >
                    <p className="text-2xl font-bold text-[color:var(--accent)]">
                      {item.value}
                    </p>
                    <p className="text-xs text-[color:var(--muted)] mt-1">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-[color:var(--border)] text-center">
                <p className="text-sm text-[color:var(--muted)]">
                  Currently based in
                </p>
                <p className="text-[color:var(--text)] font-semibold mt-1">
                  Bengaluru, India 🇮🇳
                </p>
              </div>
              <div className="mt-4 text-center">
                <span className="inline-flex items-center gap-2 text-xs text-[color:var(--muted)] bg-[color:var(--surface-2)] border border-[color:var(--border)] px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Open to Software Engineer · Frontend Engineer roles
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
