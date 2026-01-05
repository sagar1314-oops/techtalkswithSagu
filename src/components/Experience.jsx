import { FiBriefcase, FiMapPin, FiCalendar } from "react-icons/fi";

const experienceData = [
  {
    period: "2024 - Present",
    position: "Software Engineer",
    company: "Invendis Technologies India Pvt. Ltd.",
    location: "Bengaluru",
    description:
      "Full-stack development for enterprise clients across various industries, architecting scalable web applications with modern technologies.",
    responsibilities: [
      "Architected and developed full-stack solutions using React, Node.js, and PostgreSQL",
      "Implemented CI/CD pipelines with GitHub Actions and AWS",
      "Mentored junior developers and conducted code reviews",
      "Optimized application performance and implemented security best practices",
    ],
    techs: ["React", "Node.js", "MySQL", "AWS", "TypeScript", "Tailwind CSS"],
  },
  {
    period: "2022 - 2023",
    position: "Front End Developer Intern",
    company: "Pratian Technologies",
    location: "Bengaluru",
    description:
      "Developed and maintained multiple web applications for various clients, focusing on responsive design and performance optimization.",
    responsibilities: [
      "Built responsive web applications using React and Vue.js",
      "Designed and implemented RESTful APIs using Node.js and Express",
      "Managed databases and optimized queries for better performance",
      "Collaborated with UI/UX designers to implement pixel-perfect designs",
    ],
    techs: ["React", "Node.js", "MySQL", "AWS", "Tailwind CSS"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          <span className="text-gray-400 dark:text-gray-500">Work</span>{" "}
          <span className="text-blue-600">Experience</span>
        </h2>

        <p className="text-gray-600 dark:text-gray-400 text-lg mb-12 max-w-2xl">
          My professional journey as a full-stack developer across various
          projects and companies.
        </p>

        {/* Timeline */}
        <div className="space-y-8">
          {experienceData.map((experience, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md hover:shadow-lg transition border-l-4 border-blue-600"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {experience.position}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mt-1">
                    {experience.company}
                  </p>
                </div>
                <span className="text-gray-600 dark:text-gray-400 font-semibold text-sm mt-3 md:mt-0">
                  {experience.period}
                </span>
              </div>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <FiMapPin size={16} />
                  {experience.location}
                </div>
                <div className="flex items-center gap-2">
                  <FiCalendar size={16} />
                  {experience.period}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {experience.description}
              </p>

              {/* Responsibilities */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Key Responsibilities:
                </h4>
                <ul className="space-y-2">
                  {experience.responsibilities.map((responsibility, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-gray-600 dark:text-gray-400"
                    >
                      <span className="text-blue-600 font-bold">•</span>
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {experience.techs.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
