// app/page.tsx - Complete Voyle Screen Landing Page
'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const slideIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&h=1000&fit=crop',
      title: 'Elevate Your Space with Elegance',
      description: 'Premium UPVC windows & aluminium doors — custom-fit, energy-efficient, and built to last.',
      ctaText: 'Get Free Quote',
      ctaLink: '#contact',
    },
    {
      image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1920&h=1000&fit=crop',
      title: 'Sleek Aluminium Doors',
      description: 'Weather-resistant, rust-free, and designed for modern Indian homes.',
      ctaText: 'Explore Now',
      ctaLink: '#contact',
    },
    {
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1920&h=1000&fit=crop',
      title: 'Let the Breeze In, Keep Bugs Out',
      description: 'Pleated mesh screens — seamless fold, insect protection, and unobstructed views.',
      ctaText: 'Get Free Consultation',
      ctaLink: '#contact',
    },
    {
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&h=1000&fit=crop',
      title: 'Customized Just for You',
      description: 'Fully customizable UPVC & aluminium solutions — tailored to your space and style.',
      ctaText: 'Call +91-99144-20443',
      ctaLink: 'tel:+919914420443',
    },
  ];

  const services = [
    { icon: 'fa-window-maximize', title: 'UPVC Windows', description: 'Energy-efficient, noise insulation, rust-proof — perfect for all seasons.' },
    { icon: 'fa-door-open', title: 'Aluminium Doors', description: 'Sleek sliding & swing doors, weather-resistant, zero maintenance.' },
    { icon: 'fa-bug', title: 'Pleated Mesh Screens', description: 'Let the breeze in, keep bugs out. Folds seamlessly, unobstructed view.' },
    { icon: 'fa-drafting-compass', title: 'Honeycomb Mesh', description: 'Modern ventilation + insect protection, durable design.' },
  ];

  const galleryItems = [
    { image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=500&h=300&fit=crop', caption: 'Modern UPVC Window Installation' },
    { image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=500&h=300&fit=crop', caption: 'Aluminium Sliding Door' },
    { image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=500&h=300&fit=crop', caption: 'Pleated Mesh Screen System' },
    { image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&h=300&fit=crop', caption: 'Premium UPVC Finish' },
  ];

  const features = [
    { icon: 'fa-hand-sparkles', title: 'Insect-Proof + Fresh Air', description: 'Pleated mesh keeps bugs out without blocking ventilation.' },
    { icon: 'fa-cogs', title: 'Fully Customizable', description: 'Tailored dimensions, colors, and finish for your home or office.' },
    { icon: 'fa-temperature-low', title: 'Weather-Resistant', description: 'Rust-free aluminium & durable UPVC withstand harsh sun & rain.' },
    { icon: 'fa-leaf', title: 'Sustainable & Strong', description: 'Eco-friendly materials, energy-saving designs, 10+ yrs durability.' },
  ];

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('tel:')) return;
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('fullname') as string;
    const phone = formData.get('mobile') as string;
    const email = formData.get('emailid') as string;
    const requirement = formData.get('requirement') as string;

    if (!name || !phone) {
      setFormStatus({ type: 'error', message: '⚠️ Please enter name and phone number' });
      return;
    }

    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    // Simulate API call - Replace with your actual API endpoint
    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      console.log('Lead submitted:', { name, phone, email, requirement });
      setFormStatus({ type: 'success', message: '✅ Thank you! Our team will call you within 1 hour.' });
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      setFormStatus({ type: 'error', message: '❌ Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>


      {/* Font Awesome and Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;14..32,400;14..32,500;14..32,600;14..32,700;14..32,800&family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />

      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img
              src="/image.png"
              alt="Voyle Screen Logo"
              className="logo-img"
            />
          </div>
          <div className="mobile-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </div>
          <div className="nav-links">
            <a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')}>Home</a>
            <a href="#products" onClick={(e) => handleSmoothScroll(e, '#products')}>Products</a>
            <a href="#gallery" onClick={(e) => handleSmoothScroll(e, '#gallery')}>Gallery</a>
            <a href="#whyus" onClick={(e) => handleSmoothScroll(e, '#whyus')}>Why Us</a>
            <a href="#contact" className="btn-nav" onClick={(e) => handleSmoothScroll(e, '#contact')}>
              Get Quote <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </nav>
      <section id="home" className="hero">
        <div className="container hero-grid">
          <div className="hero-content" >
            <div className="hero-badge"><i className="fas fa-award"></i> India's Premium Fittings</div>
            <h1>Elevate Your Space with <span className="highlight">Elegance & Durability</span></h1>
            <p>Premium UPVC & Aluminium doors, windows, and pleated mesh screens — custom-fit, insect-proof, and built to withstand time.</p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary"><i className="fas fa-calendar-check"></i> Free Consultation</a>
              <a href="#products" className="btn btn-outline">Explore Solutions</a>
            </div>
            <div className="trust-badge">
              <div className="trust-item"><i className="fas fa-check-circle" style={{ color: "var(--primary);" }}></i> <span>10+ Years Expertise</span></div>
              <div className="trust-item"><i className="fas fa-home"></i> <span>500+ Projects</span></div>
              <div className="trust-item"><i className="fas fa-shield-alt"></i> <span>5 Year Warranty</span></div>
            </div>
          </div>
          <div className="hero-image" >
            <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=500&fit=crop" alt="Modern UPVC Windows and Doors" />
          </div>
        </div>
      </section>
      {/* Hero Slider */}
      <section id="home" className="hero-slider">
        <div className="slider-container" ref={sliderRef}>
          {slides.map((slide, index) => (
            <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
              <img src={slide.image} alt={slide.title} className="slide-bg" />
              <div className="slide-content">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                <a
                  href={slide.ctaLink}
                  className="btn btn-primary"
                  onClick={(e) => handleSmoothScroll(e, slide.ctaLink)}
                >
                  <i className="fas fa-calendar-check"></i> {slide.ctaText}
                </a>
              </div>
            </div>
          ))}
          <div className="slider-arrow slider-arrow-left" onClick={prevSlide}>
            <i className="fas fa-chevron-left"></i>
          </div>
          <div className="slider-arrow slider-arrow-right" onClick={nextSlide}>
            <i className="fas fa-chevron-right"></i>
          </div>
          <div className="slider-nav">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="products" className="services">
        <div className="container">
          <div className="section-header">
            <h2>Premium <span>Solutions</span> For Modern Living</h2>
            <p>Custom-designed UPVC, Aluminium & Mesh systems — blend of strength, style, and comfort</p>
          </div>
          <div className="cards-grid">
            {services.map((service, idx) => (
              <div key={service.title} className="service-card">
                <div className="service-icon"><i className={`fas ${service.icon}`}></i></div>
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
            <h2>Our <span>Recent Projects</span></h2>
            <p>See the transformation — real installations, real quality</p>
          </div>
          <div className="gallery-grid">
            {galleryItems.map((item, idx) => (
              <div key={item.caption} className="gallery-item">
                <img src={item.image} alt={item.caption} />
                <div className="caption">{item.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="whyus" className="features">
        <div className="container">
          <div className="section-header">
            <h2>Why <span>Voyle Screen?</span></h2>
            <p>Built to fit your lifestyle, made to last for generations</p>
          </div>
          <div className="features-grid">
            {features.map((feature, idx) => (
              <div key={feature.title} className="feature-card">
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
            <p>Get a free site evaluation & quote from our experts. We serve Dera Bassi, Chandigarh & nearby locations.</p>
            <div className="contact-detail">
              <i className="fas fa-map-marker-alt"></i> <span>Shop No. 1094, Barwala Road, Dera Bassi</span>
            </div>
            <div className="contact-detail">
              <i className="fas fa-phone-alt"></i> <span>+91-99144-20443 (Pinki Sharma, 8AM-8PM)</span>
            </div>
            <div className="contact-detail">
              <i className="fas fa-envelope"></i> <span>info.voylescreen@gmail.com</span>
            </div>
            <div className="social-icons">
              <a href="https://www.instagram.com/voyle_screen/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://x.com/Voyle_Screen" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
              <a href="https://www.facebook.com/people/Voyle-Screen/61578886791160/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
              <a href="https://www.pinterest.com/Voyle_Screen/" target="_blank" rel="noopener noreferrer"><i className="fab fa-pinterest"></i></a>
            </div>
          </div>
          <div className="contact-form">
            <h3>Request a Free Quote</h3>
            <p style={{ marginBottom: '24px', color: 'var(--text-gray)' }}>Fill the form & get discount on your first order</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" name="fullname" placeholder="Full Name *" required />
              </div>
              <div className="form-group">
                <input type="tel" name="mobile" placeholder="Phone Number *" required />
              </div>
              <div className="form-group">
                <input type="email" name="emailid" placeholder="Email Address" />
              </div>
              <div className="form-group">
                <textarea name="requirement" rows={3} placeholder="Tell us your requirement (Windows, Doors or Mesh)"></textarea>
              </div>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? <i className="fas fa-spinner fa-pulse"></i> : <i className="fas fa-arrow-right"></i>}
                {' '}{isSubmitting ? 'Sending...' : 'Get Best Price'}
              </button>
              {formStatus.message && (
                <p className={formStatus.type === 'success' ? 'form-status-success' : 'form-status-error'}>
                  {formStatus.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <p>© 2025 Voyle Screen — Built to Fit. Made to Last. | UPVC Windows | Aluminium Doors | Pleated Mesh Systems</p>
          <p style={{ marginTop: '12px' }}><i className="fas fa-shield-heart"></i> Trusted by homeowners & architects across North India</p>
        </div>
      </footer>

      {/* Floating WhatsApp CTA */}
      <a
        href="https://wa.me/919914420443?text=Hi%20Voyle%20Screen%2C%20I'm%20interested%20in%20your%20UPVC%20windows%20and%20doors.%20Please%20share%20more%20details."
        className="floating-cta"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </>
  );
}