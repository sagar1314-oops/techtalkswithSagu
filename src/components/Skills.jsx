import { FiCode, FiUsers, FiServer, FiDatabase, FiTool } from "react-icons/fi";

export default function Skills() {
  const developmentSkills = [
    {
      name: "Frontend Development",
      percentage: 95,
      color: "blue",
      tech: [
        "HTML5/CSS3",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Angular",
      ],
    },
    {
      name: "Backend Development",
      percentage: 90,
      color: "green",
      tech: ["Node.js", "Express", "Python", "Java"],
    },
    {
      name: "Database Management",
      percentage: 85,
      color: "orange",
      tech: ["MySQL", "MongoDB", "PostgreSQL"],
    },
  ];

  const professionalSkills = [
    { name: "Communication", percentage: 90, color: "blue" },
    { name: "Teamwork", percentage: 85, color: "blue" },
    { name: "Problem Solving", percentage: 95, color: "blue" },
  ];

  const SkillBar = ({ name, percentage, color, tech }) => {
    const colorMap = {
      blue: "from-blue-500 to-blue-600",
      green: "from-green-500 to-green-600",
      orange: "from-orange-500 to-orange-600",
    };

    return (
      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-bold text-gray-900 dark:text-white">{name}</h3>
          <span
            className={`bg-gradient-to-r ${colorMap[color]} text-white px-3 py-1 rounded-full text-sm font-bold`}
          >
            {percentage}%
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-4 overflow-hidden">
          <div
            className={`bg-gradient-to-r ${colorMap[color]} h-2 rounded-full transition-all duration-500`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>

        {/* Technology Tags */}
        {tech && (
          <div className="flex flex-wrap gap-2">
            {tech.map((t) => (
              <span
                key={t}
                className={`bg-gradient-to-r ${colorMap[color]} text-white px-3 py-1 rounded-full text-xs font-semibold`}
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 px-6 max-w-7xl mx-auto">
      {/* Section Title */}
      <div className="text-center mb-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Skills &amp; <span className="text-blue-600">Expertise</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          As a full-stack developer, I've mastered a wide range of technologies
          across the entire development stack.
        </p>
      </div>
      {/* Technology Stack Section */}
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Technology Stack
        </h4>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            {
              category: "Frontend",
              icon: "💻",
              items: ["React", "Vue.js", "Angular", "TypeScript", "Tailwind"],
            },
            {
              category: "Backend",
              icon: "🛠",
              items: ["Node.js", "Python", "Express", "Django"],
            },
            {
              category: "Database",
              icon: "🗄",
              items: ["MongoDB", "MySQL", "PostgreSQL"],
            },
            {
              category: "DevOps",
              icon: "⚙️",
              items: ["Docker", "AWS", "GitHub Actions"],
            },
            {
              category: "Mobile",
              icon: "📱",
              items: ["React Native", "Flutter"],
            },
            {
              category: "Tools",
              icon: "🧰",
              items: ["Git", "Webpack", "Vite", "Postman"],
            },
          ].map((stack) => (
            <div
              key={stack.category}
              className="bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-md flex flex-col items-center"
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-3 bg-indigo-50 text-2xl">
                {stack.icon}
              </div>
              <h5 className="font-semibold text-gray-900 dark:text-white mb-3 text-center">
                {stack.category}
              </h5>
              {/* <div className="space-y-2 w-full">
                {stack.items.map((item) => (
                  <div
                    key={item}
                    className="text-xs md:text-sm text-gray-600 dark:text-gray-400 text-center py-1.5 px-2 bg-gray-50 dark:bg-gray-700 rounded"
                  >
                    {item}
                  </div>
                ))}
              </div> */}
            </div>
          ))}
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-2 gap-12 mt-8 pt-4">
        {/* Left Column - Development Skills with Icons */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
              <FiCode className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Development Skills
            </h3>
          </div>

          <div className="space-y-4">
            {developmentSkills.map((skill) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
                color={skill.color}
                tech={skill.tech}
              />
            ))}
          </div>
        </div>

        {/* Right Column - Professional Skills with Icons */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
              <FiUsers className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Professional Skills
            </h3>
          </div>

          <div className="space-y-4">
            {professionalSkills.map((skill) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
                color={skill.color}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
