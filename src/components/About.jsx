import { Link } from "react-scroll";
import {
  FiCode,
  FiServer,
  FiDatabase,
  FiZap,
  FiGitBranch,
} from "react-icons/fi";

export default function About() {
  const specialties = [
    { icon: FiCode, text: "Frontend Development" },
    { icon: FiServer, text: "Backend Architecture" },
    { icon: FiDatabase, text: "Database Management" },
    { icon: FiZap, text: "API Development" },
    { icon: FiGitBranch, text: "DevOps & Deployment" },
    { icon: FiCode, text: "UI/UX Design" },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900 dark:text-white">
          <span className="text-gray-400 dark:text-gray-500">About</span>{" "}
          <span className="text-blue-600">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="space-y-6">
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              I'm a passionate Full-Stack Developer with 2+ years of experience
              building robust web applications from front-end interfaces to
              back-end systems.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              My journey in tech began with a deep curiosity about how websites
              work. Now, I specialize in creating efficient, scalable solutions
              using modern technologies across the entire development stack.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {specialties.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition transform hover:scale-105"
                >
                  <Icon className="text-blue-600 flex-shrink-0" size={24} />
                  <span className="font-medium text-gray-700 dark:text-gray-300 text-sm">
                    {item.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition cursor-pointer inline-block"
          >
            Contact Me
          </Link>
          <a
            href="/resume.pdf"
            className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition inline-block"
            download
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
