import { useState } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projectsData = [
  {
    id: 1,
    title: "KrushiHub - E-Commerce Platform",
    category: "Full Stack",
    description:
      "Complete e-commerce solution with product management, authentication, shopping cart, and payment processing.",
    image: "../../public/KrushiHub_homePage.png",
    techs: ["NextJS", "Node.js", "MySQL"],
    demoLink: "https://krushi-hub.vercel.app/",
    githubLink: "https://github.com/sagar1314-oops/KrushiHub",
  },
  {
    id: 2,
    title: "My Portfolio Application",
    category: "Frontend",
    description:
      "Feature-rich chat platform with real-time messaging, file sharing, and user presence indicators.",
    image: "../../public/myPortFolio.png",
    techs: ["React"],
    demoLink: "#",
    githubLink: "https://github.com/sagar1314-oops/techtalkswithSagu",
  },
  // {
  //   id: 3,
  //   title: "Task Management System",
  //   category: "Full Stack",
  //   description:
  //     "Project management platform with Kanban boards, time tracking, and team collaboration features.",
  //   image: "https://via.placeholder.com/500x300?text=Task+Manager",
  //   techs: ["Vue.js", "Django", "PostgreSQL", "Redis"],
  //   demoLink: "#",
  //   githubLink: "#",
  // },
  // {
  //   id: 4,
  //   title: "Weather Dashboard",
  //   category: "Frontend",
  //   description:
  //     "Interactive weather application with real-time data, location tracking, and beautiful visualizations.",
  //   image: "https://via.placeholder.com/500x300?text=Weather+App",
  //   techs: ["React", "Axios", "Tailwind", "OpenWeather API"],
  //   demoLink: "#",
  //   githubLink: "#",
  // },
  // {
  //   id: 5,
  //   title: "Blog Management CMS",
  //   category: "Backend",
  //   description:
  //     "Headless CMS with REST API for managing blog content, users, and comments.",
  //   image: "https://via.placeholder.com/500x300?text=Blog+CMS",
  //   techs: ["Node.js", "Express", "MongoDB", "JWT"],
  //   demoLink: "#",
  //   githubLink: "#",
  // },
  // {
  //   id: 6,
  //   title: "Analytics Dashboard",
  //   category: "Frontend",
  //   description:
  //     "Data visualization dashboard with charts, graphs, and real-time analytics.",
  //   image: "https://via.placeholder.com/500x300?text=Analytics",
  //   techs: ["React", "Chart.js", "D3.js", "Tailwind"],
  //   demoLink: "#",
  //   githubLink: "#",
  // },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Frontend", "Backend", "Full Stack"];

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          <span className="text-gray-400 dark:text-gray-500">Featured</span>{" "}
          <span className="text-blue-600">Projects</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg mb-12 max-w-2xl">
          Showcasing my expertise in full-stack development with real-world
          applications.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                filter === category
                  ? "bg-blue-600 text-white"
                  : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-2 border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition transform hover:scale-105"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48 bg-gradient-to-br from-blue-400 to-blue-600">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded text-xs font-semibold">
                  {project.category}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techs.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.demoLink}
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 font-semibold text-sm transition"
                  >
                    <FiExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 font-semibold text-sm transition"
                  >
                    <FiGithub size={16} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition inline-flex items-center gap-2">
            View All Projects
            <FiExternalLink />
          </button>
        </div>
      </div>
    </section>
  );
}
