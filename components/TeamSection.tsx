'use client';

import { useState } from 'react'; 

const teamData = [
  { id: 1, name: 'Ali Medlej', position: 'CEO', image: 'https://mindsome.app/wp-content/uploads/2025/06/Profile-image-Monica-Garnett-Photoroom.png' },
  { id: 2, name: 'Rana Khalil', position: 'CTO', image: 'https://mindsome.app/wp-content/uploads/2025/06/Profile-image-Monica-Garnett-Photoroom.png' },
  { id: 3, name: 'Ziad Farhat', position: 'Designer', image: 'https://mindsome.app/wp-content/uploads/2025/06/Profile-image-Monica-Garnett-Photoroom.png' },
  { id: 4, name: 'Sara Hachem', position: 'Developer', image: 'https://mindsome.app/wp-content/uploads/2025/06/Profile-image-Monica-Garnett-Photoroom.png' },
  { id: 5, name: 'Omar Raji', position: 'Marketer', image: 'https://mindsome.app/wp-content/uploads/2025/06/Profile-image-Monica-Garnett-Photoroom.png' },
];

const TeamSection = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleTeam = showAll ? teamData : teamData.slice(0, 3);

  return (
    <section className="px-6 py-12 text-center">
      <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {visibleTeam.map((member) => (
          <div key={member.id} className="bg-white shadow-md rounded-xl p-4 w-[250px]">
            <div className="w-full h-48 relative rounded-md overflow-hidden mb-3">
              <img src={member.image} alt={member.name} className="object-cover" />
            </div>
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-500">{member.position}</p>
          </div>
        ))}
      </div>

      {!showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="text-[12px] uppercase font-bold mt-6 px-12 py-3 bg-[#2c5668] text-white rounded-md  "
        >
          View All
        </button>
      )}
    </section>
  );
};

export default TeamSection;
