// app/gallery/page.tsx
"use client";
import Image from "next/image";

export default function GalleryPage() {

  const galleryItems = [
    {
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=500&h=300&fit=crop",
      caption: "Modern UPVC Window Installation",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=500&h=300&fit=crop",
      caption: "Aluminium Sliding Door",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=500&h=300&fit=crop",
      caption: "Pleated Mesh Screen System",
    },
    {
      image:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&h=300&fit=crop",
      caption: "Premium UPVC Finish",
    },
  ];


  return (
    <>
      <section id="gallery" className="gallery" style={{ paddingTop: "100px" }}>
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
    </>
  );
}
