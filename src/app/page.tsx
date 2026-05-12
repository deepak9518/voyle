"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { slides, services, galleryItems, features } from "@/lib/siteData";
import ContactForm from "@/components/ContactForm";

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    slideIntervalRef.current = setInterval(nextSlide, 5000);
    return () => {
      if (slideIntervalRef.current) clearInterval(slideIntervalRef.current);
    };
  }, [nextSlide]);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith("tel:")) return;
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="hero">
        {/* hero content ... (unchanged) */}
      </section>

      {/* Hero Slider */}
      <section className="hero-slider">
        <div className="slider-container" ref={sliderRef}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? "active" : ""}`}
            >
              <img src={slide.image} alt={slide.title} className="slide-bg" />
              <div className="slide-content">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                <Link href={slide.ctaLink} className="btn btn-primary">
                  <i className="fas fa-calendar-check"></i> {slide.ctaText}
                </Link>
              </div>
            </div>
          ))}
          {/* slider arrows & dots (unchanged) */}
        </div>
      </section>

      {/* Services Section */}
      <section id="products" className="services">
        <div className="container">
          <div className="section-header">
            <h2>
              Premium <span>Solutions</span> For Modern Living
            </h2>
            <p>
              Custom-designed UPVC, Aluminium & Mesh systems — blend of
              strength, style, and comfort
            </p>
          </div>
          <div className="cards-grid">
            {services.map((service, idx) => (
              <div key={idx} className="service-card">
                <div className="service-icon">
                  <i className={`fas ${service.icon}`}></i>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery">
        <div className="container">
          <div className="section-header">
            <h2>
              Our <span>Recent Projects</span>
            </h2>
            <p>See the transformation — real installations, real quality</p>
          </div>
          <div className="gallery-grid">
            {galleryItems.map((item, idx) => (
              <div key={idx} className="gallery-item">
                <img src={item.image} alt={item.caption} />
                <div className="caption">{item.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="whyus" className="features">
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

      {/* Contact Section */}
      <section id="contact" className="contact">
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
            <div className="social-icons">{/* social icons unchanged */}</div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
