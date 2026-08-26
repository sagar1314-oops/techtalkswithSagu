import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { Link } from "react-scroll";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[color:var(--border)] bg-[color:var(--surface)]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div className="space-y-3">
            <p className="text-xl font-bold text-[color:var(--text)]">
              Sagar<span className="text-[color:var(--accent)]">.</span>
            </p>
            <p className="text-sm text-[color:var(--muted)] leading-relaxed">
              Full-stack developer focused on thoughtful digital products.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold text-[color:var(--text)] uppercase tracking-widest">
              Quick Links
            </p>
            <div className="space-y-2">
              {[
                "home",
                "about",
                "projects",
                "skills",
                "experience",
                "contact",
              ].map((item) => (
                <Link
                  key={item}
                  to={item}
                  smooth={true}
                  duration={500}
                  className="block text-sm text-[color:var(--muted)] hover:text-[color:var(--accent)] transition capitalize cursor-pointer"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold text-[color:var(--text)] uppercase tracking-widest">
              Connect
            </p>
            <div className="flex gap-3">
              {[
                {
                  icon: FiGithub,
                  href: "https://github.com/sagar1314-oops",
                  label: "GitHub",
                },
                {
                  icon: FiLinkedin,
                  href: "https://www.linkedin.com/in/sagar-t-c-514166224",
                  label: "LinkedIn",
                },
                {
                  icon: FiMail,
                  href: "mailto:sagartc01@gmail.com",
                  label: "Email",
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl border border-[color:var(--border)] flex items-center justify-center text-[color:var(--muted)] hover:text-[color:var(--accent)] hover:border-[color:var(--accent)] transition"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <p className="text-xs text-[color:var(--muted)]">
              sagartc01@gmail.com
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-[color:var(--border)] pt-6">
          <p className="text-xs text-[color:var(--muted)]">
            © {currentYear} Sagar T C. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-9 h-9 rounded-xl bg-[color:var(--accent)] text-white flex items-center justify-center hover:bg-blue-500 transition"
            aria-label="Back to top"
          >
            <FiArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
