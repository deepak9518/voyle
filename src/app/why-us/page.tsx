// app/why-us/page.tsx
import { features } from '@/lib/siteData';

export default function WhyUsPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="why-us-hero">
        <div className="container">
          <h1>Why Voyle Screen?</h1>
          <p>Built to fit your lifestyle, engineered to last for generations</p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2><span>7 Reasons</span> Homeowners Trust Us</h2>
            <p>Every detail matters – from material selection to installation</p>
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