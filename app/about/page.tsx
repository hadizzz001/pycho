'use client';
import { FaUsers, FaClock } from 'react-icons/fa';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="px-6 py-12 space-y-16">
      {/* Section 1: Intro */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2em', marginTop: '7em' }} className='mt-[8em]'>
        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
            gap: '2em',
          }}
        >
          {/* Title and Subtitle */}
          <div style={{ textAlign: 'left' }}>
            <h1 style={{ fontSize: '3.5em', fontWeight: 'bold', color: '#2c5668' }}>
              About Us
            </h1>
            <h2 style={{ fontSize: '2.25em', color: '#4b5563' }}>
              Our mission is to make online psychotherapy available, and accessible, to Arabic, English, and French speakers around the world with therapists who share the same cultural background.
            </h2>
          </div>

          {/* Content (Paragraph and Image) */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'left',
              justifyContent: 'space-between',
              width: '100%',
              gap: '2em',
            }}
          >
            <div style={{ flex: '1', minWidth: '300px', textAlign: 'left' }}>
              <p style={{ color: '#4b5563', lineHeight: '1.6', fontSize: '1em' }}>
                At Psychocounseling, we offer expert psychological support and guidance
                to help individuals lead healthier, more balanced lives. Our services
                focus on emotional well-being, growth, and resilience.
              </p>
            </div>

            <div
              style={{
                flex: '1',
                minWidth: '300px',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <img
                src="https://res.cloudinary.com/dulttkbil/image/upload/v1750781177/b69222ef-1392-44e9-ad36-e1cd1f31c10f-removebg-preview_qehrgy.webp"
                width={700}
                height={700}
                alt="Counseling Image"
                style={{ width: '100%', maxWidth: '600px' }}
              />
            </div>
          </div>
        </section>
      </div>




      {/* Section 2: Right Image + Counters */}
      <section
        className="grid grid-cols-2 gap-6 justify-items-center items-center text-center"
        style={{ marginTop: "2em" }}
      >
        {/* Clients */}
        <div className="flex flex-col items-center space-y-2">
          <FaUsers className="text-[#2c5668]" size={40} />
          <span className="text-[#2c5668] font-semibold text-sm">More than</span>
          <span className="text-2xl font-bold text-black">500+</span>
          <span className="text-sm text-gray-500">Clients</span>
        </div>

        {/* Sessions */}
        <div className="flex flex-col items-center space-y-2">
          <FaClock className="text-[#2c5668]" size={40} />
          <span className="text-[#2c5668] font-semibold text-sm">More than</span>
          <span className="text-2xl font-bold text-black">1000+</span>
          <span className="text-sm text-gray-500">Sessions</span>
        </div>

        {/* Start Now Button (spanning full width) */}
        <div className="col-span-2 flex justify-center">
          <Link href="/contact">
            <button
              className="mt-6 bg-[#2c5668] text-white px-8 py-3 rounded-md hover:opacity-90"
            >
              Start Now
            </button>
          </Link>
        </div>
      </section>

      {/* Section 3: Left Image + Text */}
<section
  style={{
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2em 1em',
    display: 'flex',
    flexDirection: 'column',
    gap: '2em',
    alignItems: 'center',
    justifyContent: 'space-between',
  }}
>
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '2em',
      alignItems: 'center',
    }}
  >
    <div
      style={{
        display: 'flex',
        flexDirection: window.innerWidth >= 1024 ? 'row' : 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '2em',
      }}
    >
      <img
        src="https://res.cloudinary.com/dulttkbil/image/upload/v1750781297/378203d5-cc58-4b32-81fe-0f41bc10c1b4-removebg-preview_kj4s9w.webp"
        width={500}
        height={500}
        alt="Helping Hands"
        style={{
          maxWidth: '100%',
          width: '100%',
          maxHeight: '500px',
          objectFit: 'contain',
        }}
      />
      <div
        style={{
          maxWidth: '600px',
          textAlign: 'left',
        }}
      >
        <h3 style={{ fontSize: '1.75rem', fontWeight: '600', color: '#2c5668', marginBottom: '1em' }}>
          Our Commitment
        </h3>
        <p style={{ color: '#4a4a4a', fontSize: '1rem', lineHeight: '1.6' }}>
          We believe in a personalized approach to therapy and counseling that recognizes each individual’s
          unique journey. Our team works closely with clients to set goals, foster growth, and achieve results.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Section 4: Full Width Quote with Background */}
      <section className="relative w-full">
        <img
          src="https://res.cloudinary.com/dulttkbil/image/upload/v1750781470/b9910d42-0129-4b96-b4bd-5679fb1a03ea_cjvdyy.webp"
          alt="Quote Background"
          width={1200}
          height={500}
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center px-4">
          <blockquote className="text-white text-xl md:text-2xl font-semibold max-w-3xl">
            “If you change the way you look at things, the things you look at change.”<br />
            <span className="text-sm font-light">– Wayne Dyer</span>
          </blockquote>
        </div>
      </section>

      {/* Section 5: Image in Container */}
      <section className="container mx-auto">
        <img
          src="https://res.cloudinary.com/dulttkbil/image/upload/v1750781555/cf258918-e8d7-42f5-a551-a3b4426a032f_wa98pl.webp"
          alt="Support Image"
          width={1000}
          height={500}
          className="w-full rounded-lg shadow-lg"
        />
      </section>

      {/* Section 6: List of Points + Button */}
<section className="max-w-3xl mx-auto space-y-6 text-center">
  <div style={{ padding: '1em', textAlign: 'left' }}>
    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5em' }} className='myBul'>
      <li style={{ color: '#2c5668', marginBottom: '0.5em' }}>
        Certified and experienced therapists
      </li>
      <li style={{ color: '#2c5668', marginBottom: '0.5em' }}>
        Customized sessions for personal growth
      </li>
      <li style={{ color: '#2c5668', marginBottom: '0.5em' }}>
        Safe and confidential environment
      </li>
      <li style={{ color: '#2c5668', marginBottom: '0.5em' }}>
        Proven techniques backed by science
      </li>
    </ul>

        <div className="col-span-2 flex justify-center">
          <Link href="/contact">
            <button
              className="mt-6 bg-[#2c5668] text-white px-8 py-3 rounded-md hover:opacity-90"
            >
              Get Therapist Now!
            </button>
          </Link>
        </div>
  </div>
</section>


    </div>
  );
}
