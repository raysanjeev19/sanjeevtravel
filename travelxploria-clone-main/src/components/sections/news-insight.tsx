import React from 'react';

const blogPosts = [
  {
    title: 'When Does It Snow In Himachal Pradesh?',
    author: 'Travelxploria',
    date: '21 days ago',
    href: '#',
  },
  {
    title: 'Is Thailand Good For Honeymoon? And Cost Of Honeymoon In Thailand',
    author: 'Travelxploria',
    date: '1 month ago',
    href: '#',
  },
  {
    title: 'Can You Still Do Activities Outside Your Travel Package?',
    author: 'Travelxploria',
    date: '1 month ago',
    href: '#',
  },
];

const NewsInsight = () => {
  return (
    <section className="bg-rose-100 py-16">
      <div className="container">
        <div className="mb-8 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-semibold text-black">News Insight</h2>
            <p className="mt-2 text-gray-600">Trust - lovely guests</p>
          </div>
          <a href="#" className="flex-shrink-0 font-semibold text-gray-800 underline">
            View All
          </a>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <a key={index} href={post.href} className="group block">
              <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-shadow duration-300 group-hover:shadow-lg">
                <div className="relative h-[200px] w-full bg-gray-200">
                  {/* Image placeholder as per design instructions */}
                </div>
                <div className="flex flex-grow flex-col p-6">
                  <h3 className="mb-4 flex-grow font-semibold text-black">
                    {post.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>by {post.author}</span>
                    <span className="mx-2" aria-hidden="true">
                      •
                    </span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsInsight;