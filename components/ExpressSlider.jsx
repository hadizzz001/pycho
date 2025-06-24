'use client';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    image: 'https://mindsome.app/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-17-at-2.15.17-PM.jpeg',
    title: 'Nature’s Wonders',
  },
  {
    id: 2,
    image: 'https://mindsome.app/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-17-at-2.15.17-PM.jpeg',
    title: 'Tech Today',
  },
  {
    id: 3,
    image: 'https://mindsome.app/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-17-at-2.15.17-PM.jpeg',
    title: 'Beyond Earth',
  },
];

const BlogList = () => {
  return (
    <div className="w-full px-4 md:px-12 py-8">
      {/* Title and View All */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Our News</h1>
        <Link href="/blog">
          <span className="text-sm font-medium border-b-2 border-[#2c5668] text-[#2c5668] hover:opacity-80 transition cursor-pointer">
            View All
          </span>
        </Link>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Link href="/blog" key={post.id}>
            <div className="relative w-full h-64 rounded-lg overflow-hidden cursor-pointer group">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <h2 className="absolute bottom-4 left-4 text-white text-xl font-semibold z-10">
                {post.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
