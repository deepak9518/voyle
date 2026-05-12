// app/why-us/page.tsx
"use client";

import Image from "next/image";

export default function WhyUsPage() {
  const features = [
    {
      icon: "fa-hand-sparkles",
      title: "Insect-Proof + Fresh Air",
      description: "Pleated mesh keeps bugs out without blocking ventilation.",
    },
    {
      icon: "fa-cogs",
      title: "Fully Customizable",
      description:
        "Tailored dimensions, colors, and finish for your home or office.",
    },
    {
      icon: "fa-temperature-low",
      title: "Weather-Resistant",
      description:
        "Rust-free aluminium & durable UPVC withstand harsh sun & rain.",
    },
    {
      icon: "fa-leaf",
      title: "Sustainable & Strong",
      description:
        "Eco-friendly materials, energy-saving designs, 10+ yrs durability.",
    },
  ];



  return (
    <>
      <section id="whyus" className="features" style={{ paddingTop: "100px" }}>
        <div className="container">
          <div className="section-header">
            <h2>
              Why <span>Voyle Screen?</span>
            </h2>
            <p>Built to fit your lifestyle, made to last for generations</p>
          </div>
          <div className="features-grid">
            {features.map((feature, idx) => (
              <div key={idx} className="feature-card">
                <i className={`fas ${feature.icon}`}></i>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
