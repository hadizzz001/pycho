'use client';

import { MessageCircle, Ear, Flower } from 'lucide-react';
import React from 'react';

const iconColor = '#ffffff';

const InfoSection = () => {
  return (
    <div className="info-wrapper">
      <div className="info-container">
        {/* Image on the left */}
        <div className="info-left">
          <img
            src="https://res.cloudinary.com/dulttkbil/image/upload/v1750687911/Intersection-1_sjwkxy.webp"
            alt="Example"
            width={600}
            height={400}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '0.75rem',
              objectFit: 'cover',
            }}
          />
        </div>

        {/* Title, Description, and Icons on the right */}
        <div className="info-right">
          <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#1f2937' }}>
            Welcome to Your Holistic Mental Health Journey!
          </h2>
          <p style={{ color: '#696d6f' }}>
            we're here to listen, guide, and empower you on your journey toward mental well-being.
          </p>

          {/* Icon Boxes */}
          <div className="icon-section">
            <div className="icon-box">
              <div className="icon-box-icon">
                <MessageCircle size={40} color={iconColor} />
              </div>
              <div className="icon-box-text">
                <strong  className='infoTitles'>Connect with Us</strong>
                <p style={{ margin: 0, fontSize: '0.875rem', color: '#696d6f' }}>
                  Reach out online or by phone to schedule a session with one of our licensed therapists or counselors.
                </p>
              </div>
            </div>

            <div className="icon-box">
              <div className="icon-box-icon">
                <Ear size={40} color={iconColor} />
              </div>
              <div className="icon-box-text">
                <strong className='infoTitles'>Talk & Be Heard</strong>
                <p style={{ margin: 0, fontSize: '0.875rem', color: '#696d6f' }}>
                  Join a confidential session—whether through messaging, voice, or video—to share your thoughts, feelings, and challenges.
                </p>
              </div>
            </div>

            <div className="icon-box">
              <div className="icon-box-icon">
                <Flower size={40} color={iconColor} />
              </div>
              <div className="icon-box-text">
                <strong className='infoTitles'>Grow & Heal</strong>
                <p style={{ margin: 0, fontSize: '0.875rem', color: '#696d6f' }}>
                  Receive guidance, tools, and support to improve your mental well-being and live a healthier, more balanced life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
