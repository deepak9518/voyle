// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsapp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Voyle Screen | Premium UPVC Windows & Aluminium Doors",
  description:
    "Voyle Screen - Built to Fit. Made to Last. Premium UPVC windows, aluminium doors, and pleated mesh screens. Custom-fit, insect-proof, weather-resistant. Get free quote!",
  icons: [
    { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
  ],
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=yes"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;14..32,400;14..32,500;14..32,600;14..32,700;14..32,800&family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
        <style>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font-family: 'Inter', sans-serif;
            background: var(--bg);
            color: var(--text-gray);
            line-height: 1.5;
            scroll-behavior: smooth;
            overflow-x: hidden;
          }

          /* ===== PREMIUM THEME COLOR VARIABLES ===== */
          :root {
            --primary: #F97316;
            --primary-hover: #EA580C;
            --secondary: #2F4F4F;
            --bg: #F9FAFB;
            --white: #FFFFFF;
            --text-dark: #111827;
            --text-gray: #374151;
            --border: #E5E7EB;
            --accent: #FBBF24;
            --whatsapp: #25D366;
            --shadow-sm: 0 8px 20px rgba(0,0,0,0.04);
            --shadow-md: 0 16px 32px rgba(0,0,0,0.06);
            --shadow-hover: 0 24px 40px rgba(0,0,0,0.1);
          }

          .container {
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 32px;
          }

          h1, h2, h3, .logo-text h1 {
            font-family: 'Poppins', sans-serif;
            font-weight: 700;
            letter-spacing: -0.02em;
          }

          .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding: 14px 32px;
            font-weight: 600;
            border-radius: 48px;
            transition: all 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1);
            cursor: pointer;
            border: none;
            font-size: 1rem;
            text-decoration: none;
          }

          .btn-primary {
            background: var(--primary);
            color: white;
            box-shadow: 0 4px 12px rgba(249,115,22,0.25);
          }

          .btn-primary:hover {
            background: var(--primary-hover);
            transform: translateY(-3px);
            box-shadow: 0 12px 24px rgba(249,115,22,0.35);
          }

          .btn-secondary {
            background: var(--secondary);
            color: white;
          }

          .btn-secondary:hover {
            background: #1F3A3A;
            transform: translateY(-3px);
          }

          .btn-outline {
            border: 2px solid var(--primary);
            background: transparent;
            color: var(--primary);
          }

          .btn-outline:hover {
            background: var(--primary);
            color: white;
            transform: translateY(-3px);
          }

          .navbar {
            background: var(--white);
            padding: 16px 0;
            position: sticky;
            top: 0;
            z-index: 1000;
            box-shadow: 0 1px 0 rgba(0,0,0,0.05);
          }

          .nav-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .logo {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-left: 10px;
          }

          .logo-img {
            height: 52px;
            width: auto;
            object-fit: contain;
          }

          .logo-text h1 {
            font-size: 1.4rem;
            font-weight: 800;
            color: var(--secondary);
            line-height: 1.2;
          }

          .logo-text p {
            font-size: 0.65rem;
            letter-spacing: 1px;
            font-weight: 600;
            color: var(--primary);
          }

          .nav-links {
            display: flex;
            gap: 36px;
            align-items: center;
          }

          .nav-links a {
            font-weight: 500;
            color: var(--text-gray);
            transition: 0.2s;
            text-decoration: none;
          }

          .nav-links a:hover {
            color: var(--primary);
          }

          .btn-nav {
            background: var(--secondary);
            color: white !important;
            padding: 8px 20px;
            border-radius: 40px;
            margin-right: 10px;
          }

          .mobile-menu {
            display: none;
            font-size: 1.8rem;
            cursor: pointer;
            color: var(--secondary);
            margin-right: 10px;
          }

          /* Hero */
          .hero {
            // padding: 80px 0 80px;
            background: var(--white);
          }

          .hero-grid {
            display: flex;
            align-items: center;
            gap: 56px;
            flex-wrap: wrap;
          }

          .hero-content {
            flex: 1.2;
          }

          .hero-badge {
            background: rgba(249,115,22,0.08);
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 6px 18px;
            border-radius: 40px;
            font-weight: 600;
            color: var(--primary);
            margin-bottom: 24px;
          }

          .hero-content h1 {
            font-size: 3.8rem;
            line-height: 1.2;
            margin-bottom: 20px;
            color: var(--secondary);
          }

          .highlight {
            color: var(--primary);
            border-bottom: 3px solid var(--primary);
          }

          .nav-links.open {
            display: flex;
          }

          .hero-content p {
            font-size: 1.15rem;
            color: var(--text-gray);
            margin-bottom: 32px;
            max-width: 90%;
          }

          .hero-buttons {
            display: flex;
            gap: 18px;
            flex-wrap: wrap;
            margin-bottom: 40px;
          }

          .trust-badge {
            display: flex;
            gap: 28px;
            border-top: 1px solid var(--border);
            padding-top: 28px;
          }

          .trust-item {
            display: flex;
            align-items: center;
            gap: 10px;
          }

          .hero-image {
            flex: 1;
            border-radius: 24px;
            text-align: center;
          }

          .hero-image img {
            width: 100%;
            max-width: 500px;
            border-radius: 24px;
            box-shadow: var(--shadow-md);
            object-fit: cover;
          }

          /* Services */
          .services {
            padding: 90px 0;
            background: var(--bg);
          }

          .section-header {
            text-align: center;
            margin-bottom: 56px;
          }

          .section-header h2 {
            font-size: 2.6rem;
            color: var(--secondary);
          }

          .section-header span {
            color: var(--primary);
          }

          .section-header p {
            color: var(--text-gray);
            max-width: 600px;
            margin: 12px auto 0;
          }

          .cards-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
            gap: 32px;
          }

          .service-card {
            background: var(--white);
            border-radius: 20px;
            padding: 36px 24px;
            transition: all 0.3s;
            border: 1px solid var(--border);
            text-align: center;
            box-shadow: var(--shadow-sm);
          }

          .service-card:hover {
            transform: translateY(-8px);
            box-shadow: var(--shadow-hover);
            border-color: var(--primary);
          }

          .service-icon {
            width: 80px;
            height: 80px;
            background: rgba(249,115,22,0.08);
            border-radius: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px;
          }

          .service-icon i {
            font-size: 2.2rem;
            color: var(--primary);
          }

          .service-card h3 {
            font-size: 1.4rem;
            margin-bottom: 12px;
            color: var(--secondary);
          }

          /* Gallery */
          .gallery {
            padding: 80px 0;
            background: var(--white);
          }

          .gallery-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 24px;
            margin-top: 48px;
          }

          .gallery-item {
            border-radius: 20px;
            overflow: hidden;
            box-shadow: var(--shadow-sm);
            transition: all 0.3s;
            cursor: pointer;
            background: var(--white);
          }

          .gallery-item:hover {
            transform: scale(1.02);
            box-shadow: var(--shadow-md);
          }

          .gallery-item img {
            width: 100%;
            height: 260px;
            object-fit: cover;
            display: block;
          }

          .gallery-item .caption {
            padding: 16px;
            background: var(--white);
            text-align: center;
            font-weight: 500;
            color: var(--secondary);
          }

          /* Hero Slider */
          .hero-slider {
            width: 100%;
            height: 100vh;
            min-height: 700px;
            max-height: 1000px;
            position: relative;
            overflow: hidden;
          }

          .slider-container {
            width: 100%;
            height: 100%;
            position: relative;
          }

          .slide {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            transition: opacity 1s ease-in-out;
            z-index: 1;
          }

          .slide.active {
            opacity: 1;
            z-index: 2;
          }

          .slide-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: brightness(0.45);
          }

          .slide-content {
            position: absolute;
            bottom: 20%;
            left: 0;
            right: 0;
            text-align: center;
            color: white;
            z-index: 3;
            padding: 0 20px;
            animation: fadeInUp 0.8s ease-out;
          }

          .slide-content h2 {
            font-size: 3.5rem;
            font-weight: 800;
            margin-bottom: 20px;
            text-shadow: 2px 2px 8px rgba(0,0,0,0.3);
          }

          .slide-content p {
            font-size: 1.2rem;
            max-width: 700px;
            margin: 0 auto 30px;
            opacity: 0.95;
          }

          .slider-nav {
            position: absolute;
            bottom: 30px;
            left: 0;
            right: 0;
            display: flex;
            justify-content: center;
            gap: 12px;
            z-index: 10;
          }

          .slider-dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: rgba(255,255,255,0.5);
            cursor: pointer;
            transition: all 0.3s;
          }

          .slider-dot.active {
            background: var(--primary);
            width: 30px;
            border-radius: 20px;
          }

          .slider-arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 50px;
            height: 50px;
            background: rgba(0,0,0,0.4);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 10;
            transition: all 0.3s;
            color: white;
            font-size: 1.5rem;
            backdrop-filter: blur(4px);
          }

          .slider-arrow:hover {
            background: var(--primary);
            transform: translateY(-50%) scale(1.1);
          }

          .slider-arrow-left { left: 30px; }
          .slider-arrow-right { right: 30px; }

          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }

          /* Features */
          .features {
            padding: 80px 0;
            background: var(--bg);
          }

          .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 40px;
          }

          .feature-card {
            text-align: center;
            padding: 24px;
            background: var(--white);
            border-radius: 20px;
            box-shadow: var(--shadow-sm);
          }

          .feature-card i {
            font-size: 2.5rem;
            color: var(--primary);
            margin-bottom: 16px;
          }

          .feature-card h3 {
            color: var(--secondary);
            margin-bottom: 8px;
          }

          /* Contact */
          .contact {
            padding: 90px 0;
            background: var(--secondary);
            color: white;
          }

          .contact-grid {
            display: flex;
            gap: 56px;
            flex-wrap: wrap;
          }

          .contact-info { flex: 1; }
          .contact-info h2 {
            font-size: 2rem;
            margin-bottom: 20px;
          }

          .contact-detail {
            display: flex;
            align-items: center;
            gap: 16px;
            margin: 24px 0;
          }
          .contact-detail i {
            width: 40px;
            font-size: 1.4rem;
            color: var(--primary);
          }

          .social-icons {
            display: flex;
            gap: 16px;
            margin-top: 32px;
          }
          .social-icons a {
            background: rgba(255,255,255,0.1);
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            font-size: 1.4rem;
            color: white;
            text-decoration: none;
            transition: 0.2s;
          }
          .social-icons a:hover {
            background: var(--primary);
            transform: translateY(-3px);
          }

          .contact-form {
            flex: 1;
            background: var(--white);
            padding: 40px;
            border-radius: 24px;
            color: var(--text-dark);
          }
          .contact-form h3 {
            color: var(--secondary);
            margin-bottom: 8px;
          }

          .form-group { margin-bottom: 20px; }
          .form-group input, .form-group textarea {
            width: 100%;
            padding: 14px 18px;
            border-radius: 12px;
            border: 1px solid var(--border);
            font-family: inherit;
            font-size: 1rem;
            background: white;
            transition: 0.2s;
          }
          .form-group input:focus, .form-group textarea:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(249,115,22,0.1);
          }

          button[type="submit"] {
            background: var(--primary);
            width: 100%;
            padding: 14px;
            border-radius: 48px;
            font-weight: 700;
            font-size: 1rem;
            border: none;
            color: white;
            cursor: pointer;
            transition: 0.2s;
          }
          button[type="submit"]:hover {
            background: var(--primary-hover);
            transform: translateY(-2px);
          }

          footer {
            background: var(--secondary);
            padding: 40px 0;
            text-align: center;
            color: rgba(255,255,255,0.7);
            border-top: 1px solid rgba(255,255,255,0.1);
          }

          .floating-cta {
            position: fixed;
            bottom: 30px;
            right: 30px;
            background: var(--whatsapp);
            color: white;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.8rem;
            box-shadow: 0 8px 20px rgba(0,0,0,0.2);
            cursor: pointer;
            transition: all 0.3s;
            z-index: 999;
            text-decoration: none;
          }
          .floating-cta:hover {
            transform: scale(1.1);
            background: #128C7E;
          }

          /* Responsive */
          @media (max-width: 768px) {
            .nav-links {
              display: none;
              flex-direction: column;
              width: 100%;
              background: var(--white);
              padding: 24px;
              gap: 20px;
            }
            .nav-links.open {
              display: flex;
            }
            .mobile-menu {
              display: block;
            }
            .hero-content h1 {
              font-size: 2.3rem;
            }
            .hero-content p {
              max-width: 100%;
            }
            .container {
              padding: 0 20px;
            }
            .hero-grid {
              flex-direction: column;
            }
            .logo-img {
              height: 45px;
            }
            .hero-slider {
              height: 60vh;
              min-height: 400px;
            }
            .slide-content h2 {
              font-size: 2.2rem;
            }
            .slide-content p {
              font-size: 1rem;
            }
            .slider-arrow {
              width: 40px;
              height: 40px;
              font-size: 1.2rem;
            }
            .slider-arrow-left { left: 10px; }
            .slider-arrow-right { right: 10px; }
          }
            /* ===== Full‑screen Mobile Menu ===== */
.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(6px);
  z-index: 2000;
  display: flex;
  justify-content: flex-end;   /* slide from right */
}

.mobile-menu-content {
  width: 85%;
  max-width: 400px;
  height: 100%;
  background: var(--white);
  box-shadow: -10px 0 30px rgba(0,0,0,0.1);
  padding: 24px;
  display: flex;
  flex-direction: column;
  animation: slideInRight 0.3s ease-out;
}

@keyframes slideInRight {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}

.mobile-menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}

.mobile-close-btn {
  background: none;
  border: none;
  font-size: 2rem;
  color: var(--text-gray);
  cursor: pointer;
  padding: 8px;
}

.mobile-nav-links {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.mobile-nav-links a {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-dark);
  text-decoration: none;
  padding: 12px 0;
  border-bottom: 1px solid var(--border);
  transition: color 0.2s;
}

.mobile-nav-links a:hover {
  color: var(--primary);
}

.btn-nav-mobile {
  background: var(--primary);
  color: white !important;
  text-align: center;
  padding: 14px 24px !important;
  border-radius: 48px;
  border: none !important;
  margin-top: 8px;
}

/* Hide desktop nav on mobile, show hamburger */
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  .mobile-menu {
    display: block;
  }
}
  /* Why Us hero */
.why-us-hero {
  background: linear-gradient(135deg, var(--primary) 0%, #e65c00 100%);
  padding: 80px 0 60px;
  text-align: center;
  color: white;
}
.why-us-hero h1 {
  font-size: 3.2rem;
  margin-bottom: 16px;
  font-family: 'Poppins', sans-serif;
}
.why-us-hero p {
  font-size: 1.2rem;
  opacity: 0.95;
  max-width: 600px;
  margin: 0 auto;
}
        `}</style>
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
