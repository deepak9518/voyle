"use client";
import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("fullname") as string;
    const phone = formData.get("mobile") as string;
    if (!name || !phone) {
      setFormStatus({
        type: "error",
        message: "⚠️ Please enter name and phone number",
      });
      return;
    }
    setIsSubmitting(true);
    setFormStatus({ type: "", message: "" });
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      console.log("Lead submitted", { name, phone });
      setFormStatus({
        type: "success",
        message: "✅ Thank you! Our team will call you within 1 hour.",
      });
      (e.target as HTMLFormElement).reset();
    } catch {
      setFormStatus({
        type: "error",
        message: "❌ Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form">
      <h3>Request a Free Quote</h3>
      <p style={{ marginBottom: "24px", color: "var(--text-gray)" }}>
        Fill the form & get discount on your first order
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="fullname"
            placeholder="Full Name *"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            name="mobile"
            placeholder="Phone Number *"
            required
          />
        </div>
        <div className="form-group">
          <input type="email" name="emailid" placeholder="Email Address" />
        </div>
        <div className="form-group">
          <textarea
            name="requirement"
            rows={3}
            placeholder="Tell us your requirement (Windows, Doors or Mesh)"
          ></textarea>
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <i className="fas fa-spinner fa-pulse"></i>
          ) : (
            <i className="fas fa-arrow-right"></i>
          )}{" "}
          {isSubmitting ? "Sending..." : "Get Best Price"}
        </button>
        {formStatus.message && (
          <p
            className={
              formStatus.type === "success"
                ? "form-status-success"
                : "form-status-error"
            }
          >
            {formStatus.message}
          </p>
        )}
      </form>
    </div>
  );
}
