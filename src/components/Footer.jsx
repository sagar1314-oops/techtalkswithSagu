import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[color:var(--border)]">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <p className="text-lg font-semibold text-[color:var(--text)]">
            Sagar T C
          </p>
          <p className="text-sm text-[color:var(--muted)]">
            Full-stack developer focused on thoughtful digital products.
          </p>
          <p className="text-xs text-[color:var(--muted)]">
            Copyright {currentYear}. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/sagar1314-oops"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-[color:var(--border)] flex items-center justify-center text-[color:var(--muted)] hover:text-[color:var(--text)]"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sagar-t-c-514166224"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-[color:var(--border)] flex items-center justify-center text-[color:var(--muted)] hover:text-[color:var(--text)]"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>
          <a
            href="mailto:sagartc01@gmail.com"
            className="w-10 h-10 rounded-full border border-[color:var(--border)] flex items-center justify-center text-[color:var(--muted)] hover:text-[color:var(--text)]"
            aria-label="Email"
          >
            <FiMail />
          </a>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-[color:var(--accent)] text-white flex items-center justify-center"
            aria-label="Back to top"
          >
            <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}
