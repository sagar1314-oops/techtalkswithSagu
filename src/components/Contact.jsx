import { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiArrowUpRight } from "react-icons/fi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isSending, setIsSending] = useState(false);

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mvzwwgrd";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all required fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsSending(true);
    setError("");

    try {
      const formPayload = new FormData();
      formPayload.append("name", formData.name);
      formPayload.append("email", formData.email);
      formPayload.append("phone", formData.phone);
      formPayload.append("message", formData.message);

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formPayload,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to send message.");
      }

      setSubmitted(true);
      setFormData({ name: "", phone: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 2500);
    } catch (_err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  const contactInfo = [
    {
      icon: FiMail,
      label: "Email",
      value: "sagartc01@gmail.com",
      link: "mailto:sagartc01@gmail.com",
    },
    {
      icon: FiPhone,
      label: "Phone",
      value: "+91 79755 85413",
      link: "tel:+917975585413",
    },
    {
      icon: FiMapPin,
      label: "Location",
      value: "Bengaluru, India",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="section">
      <div className="text-center mb-14">
        <p className="uppercase tracking-[0.3em] text-xs text-[color:var(--accent)] mb-3">
          Get in touch
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-[color:var(--text)]">
          Let's Connect
        </h2>
        <div className="w-16 h-1 bg-[color:var(--accent)] mx-auto mt-4 rounded-full" />
        <p className="text-[color:var(--muted)] mt-4">
          Have a project in mind? Let's discuss how I can help bring your idea
          to life.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10">
        <div className="space-y-5">
          {contactInfo.map((info) => {
            const Icon = info.icon;
            return (
              <a
                key={info.label}
                href={info.link}
                className="flex items-center gap-4 p-4 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] hover:border-[color:var(--accent)] transition glow-card group"
              >
                <div className="w-12 h-12 rounded-xl bg-[color:var(--accent)]/10 border border-[color:var(--accent)]/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="text-[color:var(--accent)]" size={18} />
                </div>
                <div>
                  <p className="text-xs text-[color:var(--muted)] uppercase tracking-widest">
                    {info.label}
                  </p>
                  <p className="text-[color:var(--text)] font-medium mt-0.5 group-hover:text-[color:var(--accent)] transition">
                    {info.value}
                  </p>
                </div>
              </a>
            );
          })}

          <div className="pt-2">
            <p className="text-xs text-[color:var(--muted)] uppercase tracking-widest mb-3">
              Follow Me
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                {
                  name: "LinkedIn",
                  url: "https://linkedin.com/in/sagar-t-c-514166224",
                },
                { name: "GitHub", url: "https://github.com/sagar1314-oops" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm border border-[color:var(--border)] px-4 py-2 rounded-lg text-[color:var(--muted)] hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] transition"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[color:var(--surface)] border border-[color:var(--border)] rounded-2xl p-8 glow-card">
          <h3 className="text-xl font-bold text-[color:var(--text)] mb-6">
            Send a Message
          </h3>

          {submitted && (
            <div className="mb-6 p-4 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm">
              Thanks! Your message is on its way. I'll get back to you soon.
            </div>
          )}
          {error && (
            <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              {
                id: "name",
                label: "Full Name",
                placeholder: "Your full name",
                type: "text",
                required: true,
              },
              {
                id: "email",
                label: "Email",
                placeholder: "you@example.com",
                type: "email",
                required: true,
              },
              {
                id: "phone",
                label: "Phone (optional)",
                placeholder: "+91 00000 00000",
                type: "tel",
                required: false,
              },
            ].map((field) => (
              <div key={field.id}>
                <label
                  className="block text-xs text-[color:var(--muted)] uppercase tracking-widest mb-2"
                  htmlFor={field.id}
                >
                  {field.label}
                </label>
                <input
                  id={field.id}
                  name={field.id}
                  type={field.type}
                  value={formData[field.id]}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-2)] px-4 py-3 text-[color:var(--text)] text-sm placeholder:text-[color:var(--muted)] focus:outline-none focus:border-[color:var(--accent)] transition"
                  placeholder={field.placeholder}
                  required={field.required}
                />
              </div>
            ))}
            <div>
              <label
                className="block text-xs text-[color:var(--muted)] uppercase tracking-widest mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-2)] px-4 py-3 text-[color:var(--text)] text-sm placeholder:text-[color:var(--muted)] focus:outline-none focus:border-[color:var(--accent)] transition resize-none"
                placeholder="Tell me about your project, goals, and timeline."
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[color:var(--accent)] text-white font-semibold py-3 rounded-xl inline-flex items-center justify-center gap-2 hover:bg-blue-500 transition disabled:opacity-60"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send Message"} <FiArrowUpRight />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
