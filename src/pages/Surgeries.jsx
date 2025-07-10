import React from "react";

function Surgeries() {
  const surgeries = [
    {
      id: 1,
      title: "Limited Access Cardiac Surgeries",
      description: "Minimally invasive approach for cardiac procedures with smaller incisions and faster recovery times. Specialized in the Otaki Technique for very small aortic root cases.",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=600&q=80",
      features: ["Smaller Incisions", "Faster Recovery", "Reduced Pain", "Better Cosmesis", "Otaki Technique"],
      category: "Minimally Invasive"
    },
    {
      id: 2,
      title: "Heart Transplantation",
      description: "Life-saving heart transplantation procedures for end-stage heart failure patients. Specialized in both adult and pediatric heart transplantation with mechanical circulatory support.",
      image: "https://images.unsplash.com/photo-1511174511562-5f97f4f4e0c8?auto=format&fit=crop&w=600&q=80",
      features: ["Adult Transplantation", "Pediatric Transplantation", "Mechanical Support", "Post-Transplant Care", "Immunosuppression Management"],
      category: "Transplantation"
    },
    {
      id: 3,
      title: "Mechanical Circulatory Support",
      description: "Advanced mechanical circulatory support including ECMO (Extracorporeal Membrane Oxygenation) for patients with severe heart and lung failure.",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=600&q=80",
      features: ["ECMO Support", "VAD Implantation", "Bridge to Transplant", "Destination Therapy", "Advanced Monitoring"],
      category: "Mechanical Support"
    },
    {
      id: 4,
      title: "Robotic Cardiothoracic Surgery",
      description: "Certified first assist in robotic cardiothoracic surgery using Intuitive surgical systems for precise, minimally invasive procedures.",
      image: "https://images.unsplash.com/photo-1511174511562-5f97f4f4e0c8?auto=format&fit=crop&w=600&q=80",
      features: ["Intuitive System", "3D Visualization", "Enhanced Precision", "Reduced Blood Loss", "Faster Recovery"],
      category: "Robotic Surgery"
    },
    {
      id: 5,
      title: "Pediatric Cardiac Surgery",
      description: "Specialized care for congenital heart defects in children, including complex procedures like Tetralogy of Fallot repair and pulmonary valve augmentation.",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=600&q=80",
      features: ["Congenital Defects", "Tetralogy of Fallot", "Pulmonary Valve Surgery", "Pediatric ECMO", "Family Support"],
      category: "Pediatric"
    },
    {
      id: 6,
      title: "Adult Cardiac Surgery",
      description: "Comprehensive adult cardiac surgical procedures including coronary artery bypass grafting, valve replacement, and complex heart failure surgeries.",
      image: "https://images.unsplash.com/photo-1511174511562-5f97f4f4e0c8?auto=format&fit=crop&w=600&q=80",
      features: ["CABG", "Valve Replacement", "Heart Failure Surgery", "Aortic Surgery", "Arrhythmia Surgery"],
      category: "Adult Cardiac"
    },
    {
      id: 7,
      title: "Thoracic Surgery",
      description: "Advanced thoracic surgical procedures including lung transplantation, thoracic oncology, and minimally invasive thoracic techniques.",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=600&q=80",
      features: ["Lung Transplantation", "Thoracic Oncology", "Minimally Invasive", "Chest Wall Surgery", "Mediastinal Surgery"],
      category: "Thoracic"
    },
    {
      id: 8,
      title: "Emergency Cardiac Care",
      description: "24/7 emergency cardiac services including acute coronary syndrome management, cardiac trauma, and emergency mechanical support.",
      image: "https://images.unsplash.com/photo-1511174511562-5f97f4f4e0c8?auto=format&fit=crop&w=600&q=80",
      features: ["Acute Coronary Syndrome", "Cardiac Trauma", "Emergency ECMO", "Rapid Response", "Critical Care"],
      category: "Emergency"
    }
  ];

  return (
    <div className="surgeries-page">
      <section className="surgeries-hero">
        <div className="container">
          <h1 className="page-title">SURGICAL PROCEDURES</h1>
          <h2 className="page-subtitle">Advanced Cardiothoracic Surgical Solutions</h2>
        </div>
      </section>

      <section className="surgeries-content">
        <div className="container">
          <div className="surgery-grid">
            {surgeries.map((surgery) => (
              <div key={surgery.id} className="surgery-card">
                <div className="surgery-image">
                  <img src={surgery.image} alt={surgery.title} />
                </div>
                <div className="surgery-content">
                  <h3>{surgery.title}</h3>
                  <p>{surgery.description}</p>
                  <div className="surgery-features">
                    {surgery.features.map((feature, index) => (
                      <span key={index} className="feature-tag">{feature}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="video-section">
        <div className="container">
          <h3>Educational Videos</h3>
          <p>Watch informative videos about our surgical procedures and techniques</p>
          
          <div className="video-grid">
            <div className="video-placeholder">
              <img src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=600&q=80" alt="Limited Access Cardiac Surgery" />
              <div className="video-overlay">
                <div className="play-button">▶</div>
                <h4>Limited Access Cardiac Surgery</h4>
                <p>Learn about our minimally invasive approach</p>
              </div>
            </div>
            
            <div className="video-placeholder">
              <img src="https://images.unsplash.com/photo-1511174511562-5f97f4f4e0c8?auto=format&fit=crop&w=600&q=80" alt="Heart Transplantation" />
              <div className="video-overlay">
                <div className="play-button">▶</div>
                <h4>Heart Transplantation Process</h4>
                <p>Understanding the transplantation journey</p>
              </div>
            </div>
            
            <div className="video-placeholder">
              <img src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=600&q=80" alt="Robotic Surgery" />
              <div className="video-overlay">
                <div className="play-button">▶</div>
                <h4>Robotic Cardiothoracic Surgery</h4>
                <p>Advanced technology in cardiac care</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="specializations-section">
        <div className="container">
          <h3>Specialized Training & Certifications</h3>
          <div className="specializations-grid">
            <div className="specialization-card">
              <h4>UK NORS Retrieval Masterclass</h4>
              <p>Cambridge, 2024</p>
            </div>
            <div className="specialization-card">
              <h4>Advanced ECMO Course</h4>
              <p>ESICM, 2024</p>
            </div>
            <div className="specialization-card">
              <h4>Masterclass in Cardiothoracic Transplant</h4>
              <p>Cambridge, Heart Research Foundation, 2024</p>
            </div>
            <div className="specialization-card">
              <h4>SCTS Cardiothoracic Transplant Course</h4>
              <p>Harefield, 2024</p>
            </div>
            <div className="specialization-card">
              <h4>Certified First Assist in Robotic Surgery</h4>
              <p>Intuitive, 2024</p>
            </div>
            <div className="specialization-card">
              <h4>Comprehensive Laparoscopic Surgery</h4>
              <p>CEMAST, Mumbai, 2016</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Surgeries; 