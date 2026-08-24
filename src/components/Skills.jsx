export default function Skills() {
  const stacks = [
    {
      title: "Frontend",
      items: ["React.js", "Next.js", "TypeScript", "Tailwind", "HTML5", "CSS3"],
    },
    {
      title: "Backend",
      items: ["Node.js", "Express", "REST APIs", "Authentication", "Sequelize"],
    },
    {
      title: "Database",
      items: ["MySQL", "Prisma"],
    },
    {
      title: "Deployment",
      items: ["AWS", "Vercel", "GitHub", "Railway"],
    },
  ];

  return (
    <section id="skills" className="section">
      <div className="flex items-center justify-between flex-wrap gap-6 mb-12">
        <div>
          <p className="uppercase tracking-[0.3em] text-xs text-[color:var(--muted)]">
            Toolbox
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-[color:var(--text)]">
            The stack I ship with.
          </h2>
        </div>
        <div className="bg-[color:var(--surface)] border border-[color:var(--border)] px-6 py-3 rounded-full text-sm text-[color:var(--muted)]">
          Available for full-stack projects
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {stacks.map((stack) => (
          <div
            key={stack.title}
            className="bg-[color:var(--surface)] border border-[color:var(--border)] rounded-3xl p-6"
          >
            <h3 className="text-2xl font-semibold text-[color:var(--text)] mb-4">
              {stack.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {stack.items.map((item) => (
                <span
                  key={item}
                  className="text-sm border border-[color:var(--border)] px-4 py-2 rounded-full text-[color:var(--muted)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
