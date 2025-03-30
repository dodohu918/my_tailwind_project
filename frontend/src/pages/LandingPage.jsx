import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../LandingPage.css'; // Optional, if you want to split styles
import heroImage from './face_in_jungle.png';
import leaves from './leaves.png';
import leaves_1 from './leaves_1.png';

const LandingPage = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/q1");
  };

  return (
    <div style={{ backgroundColor: '#f5f2ea', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section
        className="hero"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '80vh',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <div className="hero-content" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '2rem', borderRadius: '10px' }}>
          <h1>Enhance Your Confidence</h1>
          <p>Welcome to PlastiCare, your trusted partner for all aesthetic and reconstructive procedures.</p>
          <button className="cta-btn" onClick={handleClick}>Book an Appointment</button>
        </div>
      </section>

      {/* Services Section */}
      <section className="services text-blue-900">
        <h2>Our Procedures</h2>
        <div className="service-items text-blue-900">
          {[
            {
              title: 'Facelift',
              desc: 'Rejuvenate your appearance with our advanced facelift solutions.',
              img: leaves,
            },
            {
              title: 'Rhinoplasty',
              desc: 'Refine your nose shape and enhance facial harmony.',
              img: leaves_1,
            },
            {
              title: 'Breast Augmentation',
              desc: 'Restore or enhance your natural silhouette with our expert team.',
              img: leaves,
            },
            // {
            //   title: 'Liposuction',
            //   desc: 'Target stubborn fat pockets to achieve a more contoured figure.',
            //   img: 'https://via.placeholder.com/400x250?text=Liposuction',
            // },
          ].map((service, index) => (
            <div className="service-item" key={index}>
            <img
              src={service.img}
              alt={service.title}
              className="w-15 h-15 object-contain mb-2 ml-2"
            />              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="about-img">
        <img src={leaves_1} alt="Our Clinic" className="w-15 h-15" />
        </div>
        <div className="about-text text-blue-900">
          <h2>Meet Our Experts</h2>
          <p>
            At PlastiCare, our board-certified surgeons bring decades of experience in the art of plastic surgery. Our modern facilities are equipped with the latest technology to ensure safety and excellence in every procedure.
          </p>
          <p>
            From your first consultation to post-op care, we ensure a smooth, reassuring experience. We believe in enhancing your natural beauty, guided by a patient-first approach.
          </p>
          <button className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700 transition" onClick={() => alert('Redirect to About page!')}>
            Learn More
          </button>
        </div>
      </section>

      {/* Call to Action */}
      <section className="appointment-cta">
        <h2>Ready to Transform Your Look?</h2>
        <p>Schedule an appointment now and take the first step toward a more confident you.</p>
        <button className="cta-btn" onClick={() => alert('Redirect to booking form!')}>Book an Appointment</button>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 PlastiCare. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
