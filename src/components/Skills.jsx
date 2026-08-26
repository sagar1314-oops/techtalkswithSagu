import { useState } from "react";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiPrisma,
  SiVercel,
  SiGithub,
  SiJavascript,
} from "react-icons/si";

const RADIUS = 28;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function CircularRing({ level, ringColor }) {
  const offset = CIRCUMFERENCE - (level / 100) * CIRCUMFERENCE;
  return (
    <div className="relative w-16 h-16 flex-shrink-0 flex items-center justify-center">
      <svg className="absolute w-16 h-16 -rotate-90" viewBox="0 0 72 72">
        <circle
          cx="36"
          cy="36"
          r={RADIUS}
          fill="none"
          stroke="rgba(100,116,139,0.25)"
          strokeWidth="5"
        />
        <circle
          cx="36"
          cy="36"
          r={RADIUS}
          fill="none"
          stroke={ringColor}
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 1s ease" }}
        />
      </svg>
      <span className="z-10 text-xs font-bold text-[color:var(--text)]">
        {level}%
      </span>
    </div>
  );
}

const allSkills = [
  {
    name: "React.js",
    Icon: SiReact,
    ringColor: "#61DAFB",
    barFrom: "#61DAFB",
    barTo: "#3b82f6",
    level: 90,
    category: "Frontend",
  },
  {
    name: "JavaScript",
    Icon: SiJavascript,
    ringColor: "#F7DF1E",
    barFrom: "#F7DF1E",
    barTo: "#f59e0b",
    level: 85,
    category: "Frontend",
  },
  {
    name: "HTML5",
    Icon: SiHtml5,
    ringColor: "#E34F26",
    barFrom: "#f97316",
    barTo: "#ef4444",
    level: 92,
    category: "Frontend",
  },
  {
    name: "CSS3",
    Icon: SiCss3,
    ringColor: "#9333ea",
    barFrom: "#8b5cf6",
    barTo: "#c026d3",
    level: 88,
    category: "Frontend",
  },
  {
    name: "Tailwind",
    Icon: SiTailwindcss,
    ringColor: "#06B6D4",
    barFrom: "#06B6D4",
    barTo: "#6366f1",
    level: 88,
    category: "Frontend",
  },
  {
    name: "TypeScript",
    Icon: SiTypescript,
    ringColor: "#3178C6",
    barFrom: "#3b82f6",
    barTo: "#8b5cf6",
    level: 75,
    category: "Frontend",
  },
  {
    name: "Node.js",
    Icon: SiNodedotjs,
    ringColor: "#22c55e",
    barFrom: "#22c55e",
    barTo: "#16a34a",
    level: 80,
    category: "Backend",
  },
  {
    name: "Express",
    Icon: SiExpress,
    ringColor: "#94a3b8",
    barFrom: "#94a3b8",
    barTo: "#64748b",
    level: 75,
    category: "Backend",
  },
  {
    name: "MySQL",
    Icon: SiMysql,
    ringColor: "#4479A1",
    barFrom: "#3b82f6",
    barTo: "#06B6D4",
    level: 75,
    category: "Backend",
  },
  {
    name: "Prisma",
    Icon: SiPrisma,
    ringColor: "#818cf8",
    barFrom: "#6366f1",
    barTo: "#8b5cf6",
    level: 70,
    category: "Backend",
  },
  {
    name: "GitHub",
    Icon: SiGithub,
    ringColor: "#94a3b8",
    barFrom: "#94a3b8",
    barTo: "#475569",
    level: 90,
    category: "Tools",
  },
  {
    name: "Vercel",
    Icon: SiVercel,
    ringColor: "#e2e8f0",
    barFrom: "#cbd5e1",
    barTo: "#94a3b8",
    level: 85,
    category: "Tools",
  },
];

const TABS = ["All", "Frontend", "Backend", "Tools"];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("All");

  const filtered =
    activeTab === "All"
      ? allSkills
      : allSkills.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="section">
      <div className="text-center mb-14">
        <p className="uppercase tracking-[0.3em] text-xs text-[color:var(--accent)] mb-3">
          What I know
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-[color:var(--text)]">
          Skills & Expertise
        </h2>
        <div className="w-16 h-1 bg-[color:var(--accent)] mx-auto mt-4 rounded-full" />
        <p className="text-[color:var(--muted)] mt-4">
          Interactive skill overview with proficiency indicators and category
          filters.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-3 mb-10 flex-wrap">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
              activeTab === tab
                ? "bg-[color:var(--accent)] text-white shadow-lg shadow-blue-500/30"
                : "border border-[color:var(--border)] text-[color:var(--muted)] hover:text-[color:var(--text)] hover:border-[color:var(--accent)]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Skill Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map(
          ({ name, Icon, ringColor, barFrom, barTo, level, category }) => (
            <div
              key={name}
              className="bg-[color:var(--surface)] border border-[color:var(--border)] rounded-2xl p-5 hover:border-[color:var(--accent)] transition-all duration-300 glow-card"
            >
              <div className="flex items-center gap-4">
                <CircularRing level={level} ringColor={ringColor} />

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <Icon size={20} style={{ color: ringColor }} />
                      <span className="font-bold text-[color:var(--text)] text-base">
                        {name}
                      </span>
                    </div>
                    <span className="text-xs text-[color:var(--muted)] shrink-0">
                      {category}
                    </span>
                  </div>
                  <div className="mt-3 h-1.5 bg-[color:var(--surface-2)] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${level}%`,
                        background: `linear-gradient(to right, ${barFrom}, ${barTo})`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ),
        )}
      </div>
    </section>
  );
}
