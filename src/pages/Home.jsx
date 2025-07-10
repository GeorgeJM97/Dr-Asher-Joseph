import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// Use direct Pixabay and Pexels links for hero backgrounds
const HERO_BACKGROUNDS = [
  "https://cdn.pixabay.com/photo/2015/02/26/15/40/doctor-650534_1280.jpg",
  "https://images.pexels.com/photos/20217786/pexels-photo-20217786.jpeg"
];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animateHero, setAnimateHero] = useState(false);
  const [showSlideInfo, setShowSlideInfo] = useState(false);
  const [heroBgIdx, setHeroBgIdx] = useState(0);
  const [panDirection, setPanDirection] = useState("top-bottom");
  const autoSlideTimerRef = useRef(null);

  useEffect(() => {
    setAnimateHero(true);
  }, []);

  // Alternate hero background and pan direction - increased delay for better performance
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroBgIdx((prev) => (prev + 1) % HERO_BACKGROUNDS.length);
      setPanDirection((prev) => (prev === "top-bottom" ? "bottom-top" : "top-bottom"));
    }, 12000); // Increased from 7000ms to 12000ms
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setShowSlideInfo(false);
    const infoTimer = setTimeout(() => setShowSlideInfo(true), 1000); // Increased from 700ms to 1000ms
    return () => clearTimeout(infoTimer);
  }, [currentSlide]);

  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1736325680503-6e0c7d9a45da?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Limited Access Cardiac Surgery",
      description: "Minimally invasive approach with smaller incisions and faster recovery. Specialized in the Otaki Technique for very small aortic root cases."
    },
    {
      id: 2,
      image: "https://plus.unsplash.com/premium_photo-1702598804759-8fb687f774fb?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Heart Transplantation & Mechanical Support",
      description: "Life-saving heart transplantation procedures with advanced mechanical circulatory support including ECMO for end-stage heart failure."
    },
    {
      id: 3,
      image: "https://hips.hearstapps.com/hmg-prod/images/surgical-robot-royalty-free-image-1567788183.jpg?crop=0.66667xw:1xh;center,top&resize=1200:*",
      title: "Robotic Cardiothoracic Surgery",
      description: "Certified first assist in robotic surgery using Intuitive systems for precise, minimally invasive cardiothoracic procedures."
    },
    {
      id: 4,
      image: "https://plus.unsplash.com/premium_photo-1664304442200-71a49a7357ee?q=80&w=2273&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Pediatric Cardiac Surgery",
      description: "Specialized care for congenital heart defects including Tetralogy of Fallot repair and pulmonary valve augmentation techniques."
    },
    {
      id: 5,
      image: "https://alliedhealthed.com/wp-content/uploads/2022/11/ECMO-machine.jpg",
      title: "Advanced ECMO & Mechanical Support",
      description: "Specialized training in ECMO and mechanical circulatory support for patients with severe heart and lung failure."
    }
  ];

  // Auto-slide timer with reset functionality
  useEffect(() => {
    // Clear existing timer
    if (autoSlideTimerRef.current) {
      clearInterval(autoSlideTimerRef.current);
    }
    
    // Start new timer
    autoSlideTimerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    
    return () => {
      if (autoSlideTimerRef.current) {
        clearInterval(autoSlideTimerRef.current);
      }
    };
  }, [slides.length]);

  const resetAutoSlideTimer = () => {
    if (autoSlideTimerRef.current) {
      clearInterval(autoSlideTimerRef.current);
    }
    autoSlideTimerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    resetAutoSlideTimer();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    resetAutoSlideTimer();
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    resetAutoSlideTimer();
  };

  // Pan animation class
  const heroPanClass = panDirection === "top-bottom" ? "hero-pan-top-bottom" : "hero-pan-bottom-top";

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section
        className={`hero-section hero-bg-image-alt ${heroPanClass}`}
        style={{
          backgroundImage: `linear-gradient(rgba(20, 20, 20, 0.7), rgba(20, 20, 20, 0.7)), url('${HERO_BACKGROUNDS[heroBgIdx]}')`
        }}
      >
        <div className="hero-flex-row same-size-row"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '120px', // more horizontal space
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '40px 0',
            height: '600px', // bigger
            minHeight: '400px',
          }}
        >
          <div
            className={`hero-overlay-box left ${animateHero ? "hero-animate" : ""}`}
            style={{
              flex: 1,
              minWidth: '380px', // bigger
              maxWidth: '560px', // bigger
              minHeight: 0,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              boxSizing: 'border-box',
              background: 'rgba(0,0,0,0.0)'
            }}
          >
            <div className="hero-subtitle-ref">CARDIOTHORACIC SURGEON</div>
            <h1 className="hero-title-ref">DR. ASHER GEORGE JOSEPH</h1>
            <div className="hero-desc-ref">
              Senior Cardiothoracic Heart Failure & Transplant Fellow<br />
              Wythenshawe Hospital, Manchester, UK
            </div>
            <div className="hero-buttons-ref">
              <Link to="/profile" className="btn-ref btn-outline">ABOUT</Link>
              <Link to="/contact" className="btn-ref btn-green">GET IN TOUCH NOW →</Link>
            </div>
          </div>
          <div
            className="hero-image-right same-size-box"
            style={{
              flex: 1,
              minWidth: '380px', // bigger
              maxWidth: '560px', // bigger
              minHeight: 0,
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=600&q=80"
              alt="Doctor in surgical gear"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '18px',
                aspectRatio: '4/5',
                maxWidth: '480px', // slightly bigger
                maxHeight: '580px', // slightly bigger
                minHeight: '340px',
                minWidth: '220px',
                boxShadow: '0 4px 32px rgba(0,0,0,0.12)'
              }}
            />
          </div>
        </div>
      </section>

      {/* Full Width Image Slider */}
      <section className="image-slider">
        <div className="slider-container">
          <h2 className="slider-title">Surgical Excellence</h2>
          <p className="slider-subtitle">
            Experience world-class cardiac care with cutting-edge technology and compassionate expertise
          </p>
        </div>
        <div className="full-width-slider">
          <div
            className="slider-track"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, idx) => (
              <div key={slide.id} className="slide">
                <img src={slide.image} alt={slide.title} />
                <div className={`slide-info-box${showSlideInfo && idx === currentSlide ? ' slide-info-visible' : ''}`}>
                  <div className="slide-content slide-content-central">
                    <h3 className="slide-title">{slide.title}</h3>
                    <p className="slide-description">{slide.description}</p>
                    <div className="slide-button">
                      <Link to="/surgeries" className="btn btn-primary">Learn More</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="slider-nav slider-prev" onClick={prevSlide}>
            ‹
          </button>
          <button className="slider-nav slider-next" onClick={nextSlide}>
            ›
          </button>
        </div>
        <div className="slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-number">1000+</div>
            <div className="stat-label">Cardiovascular & Thoracic Surgeries</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">17+</div>
            <div className="stat-label">Years Medical Experience</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">FACS</div>
            <div className="stat-label">American College of Surgeons Fellow</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">MRCS</div>
            <div className="stat-label">Royal College of Surgeons, Edinburgh</div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <div className="container">
          <h2 className="section-title">SPECIALIZED SURGICAL EXPERTISE</h2>
          <p className="section-subtitle">
            Comprehensive cardiothoracic surgical solutions with advanced techniques and cutting-edge technology
          </p>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🫀</div>
              <h3>Limited Access Cardiac Surgery</h3>
              <p>Minimally invasive approach with smaller incisions and faster recovery. Specialized in the Otaki Technique for very small aortic root cases.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🏥</div>
              <h3>Heart Transplantation</h3>
              <p>Life-saving heart transplantation procedures with mechanical circulatory support for end-stage heart failure patients.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🔬</div>
              <h3>Robotic Cardiothoracic Surgery</h3>
              <p>Certified first assist in robotic surgery using Intuitive systems for precise, minimally invasive procedures.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">⚡</div>
              <h3>Mechanical Circulatory Support</h3>
              <p>Advanced ECMO and mechanical support for patients with severe heart and lung failure.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">👶</div>
              <h3>Pediatric Cardiac Surgery</h3>
              <p>Specialized care for congenital heart defects including Tetralogy of Fallot repair and pulmonary valve augmentation.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📊</div>
              <h3>Research & Clinical Trials</h3>
              <p>Active participation in international clinical trials including FIBRINOGEN, ROMA, SENTINEL, and STITCH-3 trials.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home; 