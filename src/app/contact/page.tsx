// app/contact/page.tsx
"use client";

import { useState, useEffect, FormEvent } from "react";
import Image from "next/image";

export default function ContactPage() {
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
      console.log("Lead submitted:", { name, phone });
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
    <>
      <section id="contact" className="contact" style={{ paddingTop: "100px" }}>
        <div className="container contact-grid">
          <div className="contact-info">
            <h2>Ready to Transform Your Space?</h2>
            <p>
              Get a free site evaluation & quote from our experts. We serve Dera
              Bassi, Chandigarh & nearby locations.
            </p>
            <div className="contact-detail">
              <i className="fas fa-map-marker-alt"></i>{" "}
              <span>Shop No. 1094, Barwala Road, Dera Bassi</span>
            </div>
            <div className="contact-detail">
              <i className="fas fa-phone-alt"></i>{" "}
              <span>+91-99144-20443 (Pinki Sharma, 8AM-8PM)</span>
            </div>
            <div className="contact-detail">
              <i className="fas fa-envelope"></i>{" "}
              <span>info.voylescreen@gmail.com</span>
            </div>
            <div className="social-icons">
              <a
                href="https://www.instagram.com/voyle_screen/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://x.com/Voyle_Screen"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.facebook.com/people/Voyle-Screen/61578886791160/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.pinterest.com/Voyle_Screen/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
          </div>
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
                <input
                  type="email"
                  name="emailid"
                  placeholder="Email Address"
                />
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
        </div>
      </section>
    </>
  );
}
