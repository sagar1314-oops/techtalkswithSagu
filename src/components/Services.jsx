import {
  FiCode,
  FiServer,
  FiDatabase,
  FiSmartphone,
  FiCpu,
  FiLink2,
} from "react-icons/fi";

const services = [
  {
    icon: FiCode,
    title: "Frontend Development",
    description:
      "Building beautiful, responsive interfaces with modern frameworks like React, NextJS, and Angular.",
    techs: ["React", "NextJS", "Angular", "Tailwind"],
  },
  {
    icon: FiServer,
    title: "Backend Development",
    description:
      "Creating robust server-side applications with Node.js, Python, and other modern technologies.",
    techs: ["Node.js", "Express", "Python", "Java"],
  },
  {
    icon: FiDatabase,
    title: "Database Solutions",
    description:
      "Designing and implementing efficient database structures with SQL and NoSQL technologies.",
    techs: ["MySQL", "MongoDB", "PostgreSQL"],
  },
  {
    icon: FiSmartphone,
    title: "Mobile App Development",
    description:
      "Developing cross-platform mobile applications using React Native and Flutter.",
    techs: ["React Native", "Flutter", "iOS", "Android"],
  },
  {
    icon: FiCpu,
    title: "DevOps & Deployment",
    description:
      "Setting up CI/CD pipelines and deploying applications to cloud platforms.",
    techs: ["Docker", "AWS", "Azure", "Jenkins"],
  },
  {
    icon: FiLink2,
    title: "API Development & Integration",
    description:
      "Building and integrating RESTful and GraphQL APIs for seamless data exchange.",
    techs: ["REST", "GraphQL", "Swagger", "Postman"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          <span className="text-gray-400 dark:text-gray-500">My</span>{" "}
          <span className="text-blue-600">Services</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg mb-12 max-w-2xl">
          I offer comprehensive development solutions for your web and mobile
          application needs.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105 border-l-4 border-blue-600"
              >
                <Icon className="text-blue-600 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.techs.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
