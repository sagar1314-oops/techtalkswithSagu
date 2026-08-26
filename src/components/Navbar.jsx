import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";

export default function Navbar({ isDark, setIsDark }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = [
    "home",
    "about",
    "projects",
    "services",
    "skills",
    "experience",
    "contact",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll progress bar — fixed at very top of viewport */}
      <div className="fixed top-0 left-0 w-full z-[100] h-[3px] bg-transparent pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-blue-700 via-blue-500 to-blue-300"
          style={{
            width: `${scrollProgress}%`,
            transition: "width 80ms linear",
          }}
        />
      </div>

      {/* Announcement bar */}
      <div className="bg-[color:var(--accent)] text-white text-center text-xs py-2 font-medium tracking-wide">
        👋 Welcome to my portfolio — Open to new opportunities!
      </div>

      <nav className="sticky top-0 w-full bg-[color:var(--bg)]/90 backdrop-blur-md z-50 border-b border-[color:var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="text-xl font-bold tracking-tight">
              <span className="text-[color:var(--text)]">Sagar</span>
              <span className="text-[color:var(--accent)]">.</span>
            </div>

            {/* Desktop nav — pill highlight on active */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item}
                  to={item}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="!text-[color:var(--accent)] !bg-[color:var(--accent)]/10 !border-[color:var(--accent)]/30"
                  className="capitalize cursor-pointer transition-all font-medium text-[color:var(--muted)] hover:text-[color:var(--accent)] text-base px-3 py-1.5 rounded-lg border border-transparent hover:bg-[color:var(--accent)]/10"
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* Right controls */}
            <div className="flex items-center gap-3">
              {/* Theme toggle */}
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-lg border border-[color:var(--border)] text-[color:var(--muted)] hover:text-[color:var(--accent)] hover:border-[color:var(--accent)] transition"
                aria-label="Toggle theme"
              >
                {isDark ? <FiSun size={16} /> : <FiMoon size={16} />}
              </button>

              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="hidden md:block bg-[color:var(--accent)] text-white px-5 py-2 rounded-lg text-base font-semibold hover:bg-blue-500 transition cursor-pointer"
              >
                Hire Me
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-[color:var(--text)]"
              >
                {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <div className="md:hidden pb-4 space-y-1 border-t border-[color:var(--border)] pt-3">
              {navItems.map((item) => (
                <Link
                  key={item}
                  to={item}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="!text-[color:var(--accent)] !bg-[color:var(--accent)]/10"
                  className="capitalize cursor-pointer block font-medium text-[color:var(--muted)] hover:text-[color:var(--accent)] py-2 px-3 rounded-lg text-base border border-transparent"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
