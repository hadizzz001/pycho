'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const blogPosts = [
  {
    id: 1,
    image: 'https://mindsome.app/wp-content/uploads/2025/06/Untitled-design-10.png',
    title: 'Nature’s Wonders',
    desc: 'Explore the beautiful scenery and biodiversity around the globe.',
  },
  {
    id: 2,
    image: 'https://mindsome.app/wp-content/uploads/2025/06/Untitled-design-10.png',
    title: 'Tech Today',
    desc: 'The latest trends and innovations in modern technology.',
  },
  {
    id: 3,
    image: 'https://mindsome.app/wp-content/uploads/2025/06/Untitled-design-10.png',
    title: 'Beyond Earth',
    desc: 'Discover the mysteries of the universe and space exploration.',
  },
];

const BlogSlider = () => {
  return (
    <div className="w-full px-4 md:px-12 py-8">
      {/* Title and View All */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Our Blogs</h1>
        <button className="text-sm font-medium border-b-2 border-[#2c5668] text-[#2c5668] hover:opacity-80 transition myBlack" >
          View All
        </button>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={20}
        navigation
        loop
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
        }}
      >
        {blogPosts.map((post) => (
          <SwiperSlide key={post.id}>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full flex flex-col">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                  <p className="text-gray-600 text-sm">{post.desc}</p>
                </div>
                <button className="mt-4 myBlack self-start">
                  View More →
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BlogSlider;
