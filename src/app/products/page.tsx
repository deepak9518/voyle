import { services } from "@/lib/siteData";

export default function ProductsPage() {
  return (
    <section className="services" style={{ paddingTop: "100px" }}>
      <div className="container">
        <div className="section-header">
          <h2>
            Premium <span>Solutions</span> For Modern Living
          </h2>
          <p>
            Custom-designed UPVC, Aluminium & Mesh systems — blend of strength,
            style, and comfort
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
  );
}
