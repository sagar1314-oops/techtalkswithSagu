import { Link } from "react-scroll";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 items-start">
        <div className="space-y-6">
          <p className="uppercase tracking-[0.3em] text-xs text-[color:var(--muted)]">
            About
          </p>
          <h2 className="text-xl md:text-2xl font-semibold text-[color:var(--text)]">
            I'm a Software Engineer with 2+ years of experience building web applications with React.js and Angular.
          </h2>
          <p className="text-lg text-[color:var(--muted)]">
            My professional experience includes enterprise monitoring dashboards, role-based applications and data-heavy interfaces.
          </p>
          <p className="text-lg text-[color:var(--muted)]">
            Alongside my professional work, I build full-stack products using Node.js, Express and MySQL.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="bg-[color:var(--accent)] text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition cursor-pointer"
            >
              Contact Me
            </Link>
            <a
              href="/resume.pdf"
              className="border border-[color:var(--border)] text-[color:var(--text)] px-6 py-3 rounded-full font-semibold hover:bg-[color:var(--surface-2)] transition"
              download
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="bg-[color:var(--surface)] border border-[color:var(--border)] rounded-3xl p-6 space-y-4">
          {[
            { title: "Frontend", text: "Design systems, animation, accessibility." },
            { title: "Backend", text: "APIs, auth, databases, infra." },
            { title: "Product", text: "UX, experimentation, analytics." },
            { title: "Collaboration", text: "Agile teams, async-friendly." },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 border-b border-[color:var(--border)] last:border-b-0 pb-4 last:pb-0"
            >
              <div className="w-2 h-2 mt-2 rounded-full bg-[color:var(--accent)]" />
              <div>
                <p className="text-lg font-semibold text-[color:var(--text)]">{item.title}</p>
                <p className="text-[color:var(--muted)]">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
