import { FiMapPin, FiCalendar, FiCheck } from "react-icons/fi";

const experienceData = [
  {
    period: "2024 - Present",
    position: "Software Engineer",
    company: "Invendis Technologies India Pvt. Ltd.",
    location: "Bengaluru",
    summary:
      "Developed React-based enterprise monitoring applications for telecom and energy domains.",
    highlights: [
      "Built real-time dashboards using AG Grid and Highcharts",
      "Optimized large datasets using pagination and virtualization",
      "Implemented RBAC interfaces, dynamic forms and reusable components",
      "Reduced application bundle size from 20 MB to 6 MB, improving load performance by ~50%",
    ],
  },
  {
    period: "2022 - 2023",
    position: "Frontend Developer Intern",
    company: "Pratian Technologies",
    location: "Bengaluru",
    summary:
      "Shipped responsive web apps and dashboards with a focus on UX and velocity.",
    highlights: [
      "Implemented UI components and pages",
      "Collaborated on API integration",
      "Improved core web vitals",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="text-center mb-14">
        <p className="uppercase tracking-[0.3em] text-xs text-[color:var(--accent)] mb-3">
          Work History
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-[color:var(--text)]">
          Professional Experience
        </h2>
        <div className="w-16 h-1 bg-[color:var(--accent)] mx-auto mt-4 rounded-full" />
      </div>

      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[color:var(--accent)] via-[color:var(--border)] to-transparent hidden md:block" />

        <div className="space-y-8">
          {experienceData.map((role) => (
            <div key={role.company} className="relative md:pl-16">
              <div className="absolute left-[18px] top-7 w-4 h-4 rounded-full border-2 border-[color:var(--accent)] bg-[color:var(--bg)] hidden md:block z-10" />

              <div className="bg-[color:var(--surface)] border border-[color:var(--border)] border-l-4 border-l-[color:var(--accent)] rounded-2xl p-6 glow-card">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[color:var(--text)]">
                      {role.position}
                    </h3>
                    <p className="text-[color:var(--accent)] font-medium mt-1">
                      {role.company}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs text-[color:var(--muted)]">
                    <span className="inline-flex items-center gap-1.5 bg-[color:var(--surface-2)] px-3 py-1.5 rounded-full border border-[color:var(--border)]">
                      <FiMapPin size={11} /> {role.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5 bg-[color:var(--surface-2)] px-3 py-1.5 rounded-full border border-[color:var(--border)]">
                      <FiCalendar size={11} /> {role.period}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-[color:var(--muted)] mb-4 leading-relaxed">
                  {role.summary}
                </p>
                <div className="space-y-2">
                  {role.highlights.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 text-sm text-[color:var(--muted)]"
                    >
                      <FiCheck
                        className="text-[color:var(--accent)] mt-0.5 flex-shrink-0"
                        size={13}
                      />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
