import { FiMapPin, FiCalendar } from "react-icons/fi";

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
      "Optimized large datasets using pagination and virtualization.",
      "Implemented RBAC interfaces, dynamic forms and reusable components.",
      "Reduced application bundle size from 20 MB to 6 MB, improving load performance by approximately 50%.",
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
      <div className="flex items-center justify-between flex-wrap gap-6 mb-12">
        <div>
          <p className="uppercase tracking-[0.3em] text-xs text-[color:var(--muted)]">
            Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-[color:var(--text)]">
            Roles focused on impact and velocity.
          </h2>
        </div>
      </div>

      <div className="space-y-6">
        {experienceData.map((role) => (
          <div
            key={role.company}
            className="bg-[color:var(--surface)] border border-[color:var(--border)] rounded-3xl p-6"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold text-[color:var(--text)]">
                  {role.position}
                </h3>
                <p className="text-[color:var(--muted)] font-medium">
                  {role.company}
                </p>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-[color:var(--muted)]">
                <span className="inline-flex items-center gap-2">
                  <FiMapPin /> {role.location}
                </span>
                <span className="inline-flex items-center gap-2">
                  <FiCalendar /> {role.period}
                </span>
              </div>
            </div>
            <p className="mt-4 text-[color:var(--muted)]">{role.summary}</p>
            <div className="mt-4 grid md:grid-cols-3 gap-4">
              {role.highlights.map((item) => (
                <div
                  key={item}
                  className="border border-[color:var(--border)] rounded-2xl p-4 text-sm text-[color:var(--muted)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
