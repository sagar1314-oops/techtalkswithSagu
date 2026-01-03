import { Link } from "react-scroll";
import { FiArrowRight } from "react-icons/fi";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden"
    >
      {/* Background gradient blobs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-8 left-10 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left side - Text */}
        <div className="space-y-6">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              <span className="text-gray-400 dark:text-gray-500">Hi, I'm</span>
              <br />
              <span className="text-blue-600">Sagar T C</span>
            </h1>
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
            I'm a <span className="text-blue-600">Full-Stack Developer</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-lg">
            Crafting beautiful and functional web applications with a passion
            for clean code, modern technologies, and interactive experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-6">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition cursor-pointer inline-flex items-center gap-2 group"
            >
              View Projects
              <FiArrowRight className="group-hover:translate-x-1 transition" />
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition cursor-pointer inline-block"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Right side - Animation */}
        <div className="hidden md:flex items-center justify-center">
          <div className="relative w-80 h-80">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
            <div
              className="absolute inset-10 bg-gradient-to-tr from-purple-400 to-blue-400 rounded-full opacity-10 blur-2xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
