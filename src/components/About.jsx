import { Link } from "react-scroll";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="text-center mb-14">
        <p className="uppercase tracking-[0.3em] text-xs text-[color:var(--accent)] mb-3">
          Get to know me
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-[color:var(--text)]">
          About Me
        </h2>
        <div className="w-16 h-1 bg-[color:var(--accent)] mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid md:grid-cols-[1.3fr_1fr] gap-10 items-start">
        <div className="space-y-6">
          <div className="bg-[color:var(--surface)] border border-[color:var(--border)] rounded-2xl p-8 glow-card space-y-4">
            <h3 className="text-2xl font-bold text-[color:var(--text)]">
              Software Developer & React Specialist
            </h3>
            <p className="text-[color:var(--muted)] leading-relaxed">
              Full-stack developer with 2+ years of hands-on experience in
              crafting modern web applications. Specialized in React.js, with a
              passion for clean code and user-centric design.
            </p>
            <p className="text-[color:var(--muted)] leading-relaxed">
              Expert in building responsive web applications with modern stacks.
              Passionate about solving complex problems and delivering
              exceptional digital experiences.
            </p>
            <div className="flex gap-10 pt-4 border-t border-[color:var(--border)]">
              <div>
                <p className="text-3xl font-bold text-[color:var(--accent)]">
                  2+
                </p>
                <p className="text-xs text-[color:var(--muted)] mt-1">
                  Years Experience
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[color:var(--accent)]">
                  3
                </p>
                <p className="text-xs text-[color:var(--muted)] mt-1">
                  Projects Shipped
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[color:var(--accent)]">
                  100%
                </p>
                <p className="text-xs text-[color:var(--muted)] mt-1">
                  Commitment
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="bg-[color:var(--accent)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 transition cursor-pointer"
            >
              Contact Me
            </Link>
            <a
              href="/resume.pdf"
              className="border border-[color:var(--border)] text-[color:var(--text)] px-6 py-3 rounded-lg font-semibold hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] transition"
              download
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="bg-[color:var(--surface)] border border-[color:var(--border)] rounded-2xl p-6 glow-card space-y-1">
          <p className="text-xs text-[color:var(--accent)] uppercase tracking-widest font-semibold mb-5">
            Core Technologies
          </p>
          {[
            {
              title: "Frontend",
              text: "React.js, Next.js, TypeScript, Tailwind CSS, HTML5, CSS3",
            },
            {
              title: "Backend",
              text: "Node.js, Express, REST APIs, Authentication, Sequelize",
            },
            { title: "Database", text: "MySQL, Prisma ORM" },
            { title: "Deployment", text: "AWS, Vercel, GitHub, Railway" },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 border-b border-[color:var(--border)] last:border-b-0 py-4 first:pt-0 last:pb-0"
            >
              <div className="w-2 h-2 mt-1.5 rounded-full bg-[color:var(--accent)] flex-shrink-0" />
              <div>
                <p className="font-semibold text-[color:var(--text)] text-sm">
                  {item.title}
                </p>
                <p className="text-xs text-[color:var(--muted)] mt-1 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
