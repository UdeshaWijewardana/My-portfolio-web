"use client";

import { ArrowUpRight, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

const inquiryOptions = [
  "Website Development",
  "Web Application Development",
  "IT Project / Technical Solution",
  "Website Maintenance / Bug Fixing",
  "UI/UX Design",
  "Digital Marketing / Meta Ads",
  "Social Media Management",
  "Graphic Design",
  "Other",
];

const initialData = {
  name: "",
  email: "",
  service: "Website Development",
  otherService: "",
  message: "",
};

export default function Contact() {
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState("");
  const emailAddress = "nimeshudeshawijewardana@gmail.com";

  useEffect(() => {
    const chooseService = (event) => {
      const service = event.detail?.service;
      if (!inquiryOptions.includes(service)) return;
      setData((current) => ({ ...current, service, otherService: "" }));
      setErrors((current) => ({ ...current, service: "", otherService: "" }));
    };
    const resetSubmitting = () => setSubmitting(false);
    window.addEventListener("portfolio:service", chooseService);
    window.addEventListener("focus", resetSubmitting);
    return () => {
      window.removeEventListener("portfolio:service", chooseService);
      window.removeEventListener("focus", resetSubmitting);
    };
  }, []);

  const updateField = (field, value) => {
    setData((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: "" }));
    setStatus("");
  };

  const validate = () => {
    const nextErrors = {};
    if (!data.name.trim()) nextErrors.name = "Please enter your name.";
    if (!data.email.trim()) nextErrors.email = "Please enter your email address.";
    else if (!/^\S+@\S+\.\S+$/.test(data.email)) nextErrors.email = "Please enter a valid email address.";
    if (!data.service) nextErrors.service = "Please choose an inquiry reason.";
    if (data.service === "Other" && !data.otherService.trim()) {
      nextErrors.otherService = "Please briefly describe what you need help with.";
    }
    if (!data.message.trim()) nextErrors.message = "Please enter a message.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const submit = (event) => {
    event.preventDefault();
    if (submitting || !validate()) return;

    setSubmitting(true);
    const selectedService = data.service === "Other"
      ? `Other: ${data.otherService.trim()}`
      : data.service;
    const subject = `Portfolio Inquiry from ${data.name} [${selectedService}]`;
    const body = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Service Interested In: ${selectedService}`,
      "",
      "Message:",
      data.message,
    ].join("\n");

    setStatus("Your email app is opening with the complete inquiry. Please send it there to finish.");
    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="section contact-section" data-reveal>
      <div className="wrap">
        <div className="contact-grid">
          <div className="contact-intro">
            <span className="kicker">Direct Communication</span>
            <h2 className="section-title">Let&apos;s Build Something Impactful</h2>
            <p className="section-copy">
              Have an upcoming brand marketing campaign, social media strategy, or
              website project? Get in touch directly.
            </p>
            <a
              className="whatsapp-primary"
              href="https://wa.me/94750739897?text=Hi%20Danu,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project!"
              target="_blank"
              rel="noreferrer"
              aria-label="Contact Danu via WhatsApp"
            >
              <span className="whatsapp-primary-icon" aria-hidden="true">
                <MessageCircle size={17} />
              </span>
              <span className="whatsapp-primary-copy">
                <small>Fast direct contact</small>
                <strong>Contact via WhatsApp</strong>
              </span>
              <ArrowUpRight className="whatsapp-primary-arrow" size={17} aria-hidden="true" />
            </a>
            <div className="contact-methods">
              <a className="contact-method" href="https://wa.me/94750739897?text=Hi%20Danu,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project!" target="_blank" rel="noreferrer"><small>Fastest response</small><strong>WhatsApp · +94 750739897</strong></a>
              <a className="contact-method" href={`mailto:${emailAddress}`}><small>Email directly</small><strong>{emailAddress}</strong></a>
              <a className="contact-method" href="tel:+94750739897"><small>Direct call</small><strong>+94 750739897</strong></a>
            </div>
          </div>
          <form className="contact-form" onSubmit={submit} noValidate aria-busy={submitting}>
            <div className="form-field">
              <label htmlFor="contact-name">Your Name *</label>
              <input id="contact-name" autoComplete="name" placeholder="Your Name" value={data.name} onChange={(event) => updateField("name", event.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} />
              {errors.name && <span className="field-error" id="name-error">{errors.name}</span>}
            </div>
            <div className="form-field">
              <label htmlFor="contact-email">Your Email *</label>
              <input id="contact-email" type="email" autoComplete="email" placeholder="your@email.com" value={data.email} onChange={(event) => updateField("email", event.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} />
              {errors.email && <span className="field-error" id="email-error">{errors.email}</span>}
            </div>
            <div className="field-wide form-field">
              <label htmlFor="contact-service">Service Needed *</label>
              <select id="contact-service" value={data.service} onChange={(event) => updateField("service", event.target.value)} aria-invalid={Boolean(errors.service)}>
                {inquiryOptions.map((option) => <option key={option} value={option}>{option}</option>)}
              </select>
              {errors.service && <span className="field-error">{errors.service}</span>}
            </div>
            {data.service === "Other" && (
              <div className="field-wide form-field conditional-field">
                <label htmlFor="contact-other">What do you need help with? *</label>
                <input id="contact-other" required placeholder="Briefly describe your request" value={data.otherService} onChange={(event) => updateField("otherService", event.target.value)} aria-invalid={Boolean(errors.otherService)} aria-describedby={errors.otherService ? "other-error" : undefined} />
                {errors.otherService && <span className="field-error" id="other-error">{errors.otherService}</span>}
              </div>
            )}
            <div className="field-wide form-field">
              <label htmlFor="contact-message">Your Message *</label>
              <textarea id="contact-message" rows="6" placeholder="Hi Danu, I'd like to discuss an upcoming project with you..." value={data.message} onChange={(event) => updateField("message", event.target.value)} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} />
              {errors.message && <span className="field-error" id="message-error">{errors.message}</span>}
            </div>
            <div className="field-wide">
              <button className="btn-dark" type="submit" disabled={submitting}>
                {submitting ? "Opening Email App…" : "Send Message to Danu →"}
              </button>
              <p className="form-status" aria-live="polite">{status}</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
