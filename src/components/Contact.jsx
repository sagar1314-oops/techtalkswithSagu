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
    } catch (err) {
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
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10">
        <div className="space-y-6">
          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-[color:var(--muted)]">
              Contact
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-[color:var(--text)]">
              Let's build something worth sharing.
            </h2>
            <p className="text-lg text-[color:var(--muted)] mt-4">
              Tell me about your idea, and I will get back with timelines and next
              steps.
            </p>
          </div>

          <div className="space-y-4">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <a
                  key={info.label}
                  href={info.link}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)]"
                >
                  <div className="w-12 h-12 rounded-full bg-[color:var(--surface-2)] flex items-center justify-center">
                    <Icon className="text-[color:var(--accent)]" />
                  </div>
                  <div>
                    <p className="text-sm text-[color:var(--muted)]">{info.label}</p>
                    <p className="text-[color:var(--text)] font-medium">
                      {info.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              { name: "LinkedIn", url: "https://linkedin.com/in/sagar-t-c-514166224" },
              { name: "GitHub", url: "https://github.com/sagar1314-oops" },
              { name: "Portfolio", url: "#home" },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target={social.url.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="text-sm border border-[color:var(--border)] px-4 py-2 rounded-full text-[color:var(--muted)] hover:text-[color:var(--text)] hover:bg-[color:var(--surface-2)] transition"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>

        <div className="bg-[color:var(--surface)] border border-[color:var(--border)] rounded-3xl p-8">
          <h3 className="text-2xl font-semibold text-[color:var(--text)] mb-6">
            Send a message
          </h3>

          {submitted && (
            <div className="mb-6 p-4 rounded-2xl bg-[color:var(--surface-2)] text-[color:var(--text)] text-sm">
              Thanks! Your message is on its way.
            </div>
          )}

          {error && (
            <div className="mb-6 p-4 rounded-2xl border border-[color:var(--border)] text-sm text-[color:var(--muted)]">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm text-[color:var(--muted)] mb-2" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-2xl border border-[color:var(--border)] bg-transparent px-4 py-3 text-[color:var(--text)]"
                placeholder="Your full name"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-[color:var(--muted)] mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-2xl border border-[color:var(--border)] bg-transparent px-4 py-3 text-[color:var(--text)]"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-[color:var(--muted)] mb-2" htmlFor="phone">
                Phone (optional)
              </label>
              <input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-2xl border border-[color:var(--border)] bg-transparent px-4 py-3 text-[color:var(--text)]"
                placeholder="+91 00000 00000"
              />
            </div>
            <div>
              <label className="block text-sm text-[color:var(--muted)] mb-2" htmlFor="message">
                Project details
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full rounded-2xl border border-[color:var(--border)] bg-transparent px-4 py-3 text-[color:var(--text)]"
                placeholder="Tell me about your goals, scope, and timeline."
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[color:var(--accent)] text-white font-semibold py-3 rounded-full inline-flex items-center justify-center gap-2 hover:opacity-90 transition disabled:opacity-60"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send message"} <FiArrowUpRight />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
