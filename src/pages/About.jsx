import React from "react";
import "./About.css";
import Card from "../card/Card";
const About = () => {
  const milestones = [
    {
      year: "2018",
      title: "The Beginning",
      description: "Started with a vision to bring authentic Bihar makhana to every Indian household"
    },
    {
      year: "2019",
      title: "Farmer Partnership",
      description: "Established direct partnerships with 25+ local farmers in Bihar"
    },
    {
      year: "2020",
      title: "Quality Certification",
      description: "Achieved organic certification and quality assurance standards"
    },
    {
      year: "2021",
      title: "National Expansion",
      description: "Expanded delivery network across 15 major Indian cities"
    },
    {
      year: "2022",
      title: "Product Innovation",
      description: "Launched premium gift packs and new flavor varieties"
    },
    {
      year: "2023",
      title: "Digital Platform",
      description: "Launched our online platform for seamless customer experience"
    },
    {
      year: "2024",
      title: "Growing Strong",
      description: "Serving 1000+ happy customers with 50+ farmer partners"
    }
  ];

  const values = [
    {
      icon: "🌾",
      title: "Traditional Farming",
      description: "We preserve age-old farming techniques passed down through generations, ensuring authentic taste and quality."
    },
    {
      icon: "🤝",
      title: "Fair Trade",
      description: "Direct partnerships with farmers ensure fair prices and sustainable livelihoods for farming communities."
    },
    {
      icon: "🌿",
      title: "100% Organic",
      description: "No pesticides, no chemicals - just pure, natural makhana grown in the fertile lands of Bihar."
    },
    {
      icon: "💝",
      title: "Quality First",
      description: "Every batch undergoes rigorous quality checks to ensure you receive only the finest makhana."
    }
  ];

  const team = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      image: "👨‍💼",
      description: "Born and raised in Bihar, Rajesh has dedicated his life to promoting local farmers and authentic makhana."
    },
    {
      name: "Priya Sharma",
      role: "Quality Manager",
      image: "👩‍🔬",
      description: "With 8 years in food quality assurance, Priya ensures every product meets our high standards."
    },
    {
      name: "Amit Singh",
      role: "Farmer Relations",
      image: "👨‍🌾",
      description: "Amit bridges the gap between our company and farming communities, ensuring fair partnerships."
    },
    {
      name: "Sneha Patel",
      role: "Customer Experience",
      image: "👩‍💻",
      description: "Sneha leads our customer service team, ensuring every customer has an exceptional experience."
    }
  ];

  return (

    <>


      <div className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="container">
            <div className="hero-content">
              <h1>Our Story: From Bihar to Your Table</h1>
              <Card />

              <p className="hero-subtitle">
                Magadh Makhana represents more than just premium fox nuts - it's a story
                of tradition, community, and quality that spans generations.
              </p>
            </div>
          </div>
        </section>

        {/* Origin Story */}
        <section className="origin-story">
          <div className="container">
            <div className="story-content">
              <div className="story-text">
                <h2>The Land of Magadh</h2>
                <p>
                  Bihar, the ancient land of Magadh, has been cultivating makhana (fox nuts)
                  for over 2000 years. This sacred tradition has been passed down through
                  generations of farmers who have perfected the art of growing and processing
                  these precious aquatic seeds.
                </p>
                <p>
                  The unique climate and soil conditions of Bihar, particularly around
                  the regions of Darbhanga, Madhubani, and Saharsa, create the perfect
                  environment for growing the finest quality makhana. Our farmers have
                  maintained these traditional methods while embracing sustainable practices
                  that respect both the environment and the community.
                </p>
                <div className="story-highlights">
                  <div className="highlight">
                    <span className="highlight-number">2000+</span>
                    <span className="highlight-text">Years of Tradition</span>
                  </div>
                  <div className="highlight">
                    <span className="highlight-number">50+</span>
                    <span className="highlight-text">Farmer Partners</span>
                  </div>
                  <div className="highlight">
                    <span className="highlight-number">1000+</span>
                    <span className="highlight-text">Happy Customers</span>
                  </div>
                </div>
              </div>
              <div className="story-image">
                <div className="story-img-placeholder">
                  🏞️ Bihar Fields & Farmers
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="our-values">
          <div className="container">
            <div className="section-header">
              <h2>Our Core Values</h2>
              <p>The principles that guide everything we do</p>
            </div>
            <div className="values-grid">
              {values.map((value, index) => (
                <div key={index} className="value-card">
                  <div className="value-icon">{value.icon}</div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="journey-timeline">
          <div className="container">
            <div className="section-header">
              <h2>Our Journey</h2>
              <p>From humble beginnings to serving customers nationwide</p>
            </div>
            <div className="timeline">
              {milestones.map((milestone, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-year">{milestone.year}</div>
                  <div className="timeline-content">
                    <h3>{milestone.title}</h3>
                    <p>{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="our-team">
          <div className="container">
            <div className="section-header">
              <h2>Meet Our Team</h2>
              <p>The passionate people behind Magadh Makhana</p>
            </div>
            <div className="team-grid">
              {team.map((member, index) => (
                <div key={index} className="team-card">
                  <div className="member-image">
                    <span className="member-emoji">{member.image}</span>
                  </div>
                  <div className="member-info">
                    <h3>{member.name}</h3>
                    <p className="member-role">{member.role}</p>
                    <p className="member-description">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Farmer Support */}
        <section className="farmer-support">
          <div className="container">
            <div className="support-content">
              <div className="support-text">
                <h2>Supporting Local Farmers</h2>
                <p>
                  At Magadh Makhana, we believe in the power of community. Our direct
                  partnerships with local farmers ensure that they receive fair prices
                  for their hard work, while you get the freshest, highest-quality makhana.
                </p>
                <div className="support-benefits">
                  <div className="benefit">
                    <span className="benefit-icon">💰</span>
                    <span className="benefit-text">Fair pricing for farmers</span>
                  </div>
                  <div className="benefit">
                    <span className="benefit-icon">📚</span>
                    <span className="benefit-text">Training and support programs</span>
                  </div>
                  <div className="benefit">
                    <span className="benefit-icon">🌱</span>
                    <span className="benefit-text">Sustainable farming practices</span>
                  </div>
                  <div className="benefit">
                    <span className="benefit-icon">🤝</span>
                    <span className="benefit-text">Long-term partnerships</span>
                  </div>
                </div>
              </div>
              <div className="support-image">
                <div className="support-img-placeholder">
                  👨‍🌾 Farmer Partners
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="about-cta">
          <div className="container">
            <div className="cta-content">
              <h2>Join Our Journey</h2>
              <p>Be a part of our mission to bring authentic Bihar makhana to every home</p>
              <div className="cta-buttons">
                <a href="/products" className="btn btn-primary">Shop Our Products</a>
                <a href="/contact" className="btn btn-secondary">Get in Touch</a>
              </div>
            </div>
          </div>

        </section>
      </div>
    </>
  );
};

export default About;

