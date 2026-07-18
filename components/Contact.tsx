"use client";

import { FormEvent, useState } from "react";
import { profile } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import MagneticButton from "./MagneticButton";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      form.subject || `Portfolio inquiry from ${form.name || "a visitor"}`
    );
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const fieldClass =
    "peer w-full border-b border-bone-100/20 bg-transparent py-3 text-bone-100 outline-none transition-colors duration-300 ease-editorial focus:border-signal placeholder:text-transparent";
  const labelClass =
    "pointer-events-none absolute left-0 top-3 coord-label text-bone-500 transition-all duration-300 ease-editorial peer-focus:-translate-y-5 peer-focus:text-signal peer-[:not(:placeholder-shown)]:-translate-y-5";

  return (
    <section
      id="contact"
      className="border-b border-bone-100/10 py-28 md:py-36"
    >
      <div className="mx-auto max-w-content px-6 md:px-10">
        <SectionHeading index="08" label="Get in touch" title="Contact" />

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="max-w-md text-fluid-body leading-relaxed text-bone-300">
              I&apos;m always open to collaborating on ambitious AI, machine
              learning, and software engineering projects — whether that&apos;s
              a production ML system, a RAG-powered product, or an idea that
              still needs its first architecture diagram. Reach out and
              let&apos;s build something real.
            </p>

            <dl className="mt-10 space-y-6">
              <div>
                <dt className="coord-label text-bone-500">Email</dt>
                <dd>
                  <a
                    href={`mailto:${profile.email}`}
                    className="font-display text-lg text-bone-100 transition-colors hover:text-signal"
                    data-cursor-label="EMAIL"
                  >
                    {profile.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="coord-label text-bone-500">Phone</dt>
                <dd>
                  <a
                    href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                    className="font-display text-lg text-bone-100 transition-colors hover:text-signal"
                    data-cursor-label="CALL"
                  >
                    {profile.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="coord-label text-bone-500">Location</dt>
                <dd className="font-display text-lg text-bone-100">
                  {profile.location}
                </dd>
              </div>
            </dl>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-8 lg:col-span-7"
            aria-label="Contact form"
          >
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="relative">
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Name"
                  value={form.name}
                  onChange={handleChange("name")}
                  className={fieldClass}
                />
                <label htmlFor="name" className={labelClass}>
                  Name
                </label>
              </div>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange("email")}
                  className={fieldClass}
                />
                <label htmlFor="email" className={labelClass}>
                  Email
                </label>
              </div>
            </div>

            <div className="relative">
              <input
                id="subject"
                type="text"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange("subject")}
                className={fieldClass}
              />
              <label htmlFor="subject" className={labelClass}>
                Subject
              </label>
            </div>

            <div className="relative">
              <textarea
                id="message"
                required
                rows={4}
                placeholder="Message"
                value={form.message}
                onChange={handleChange("message")}
                className={`${fieldClass} resize-none`}
              />
              <label htmlFor="message" className={labelClass}>
                Message
              </label>
            </div>

            <MagneticButton type="submit" cursorLabel="SEND">
              Send Message
            </MagneticButton>
          </form>
        </div>
      </div>
    </section>
  );
}
