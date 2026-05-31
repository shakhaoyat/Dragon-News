import React from 'react';
import Marquee from 'react-fast-marquee';

const news = [
      {
            _id: "1",
            title: "Breaking News 1",
      },
      {
            _id: "2",
            title: "Breaking News 2",
      },
      {
            _id: "3",
            title: "Breaking News 3",
      },
];

const BreakingNews = () => {
      return (
            <div className='flex justify-center gap-4 items-center bg-gray-200 py-2 px-2 container mx-auto'>
                  <button className='btn bg-red-500 text-white'>Latest News</button>
                  <Marquee pauseOnHover={true} speed={100}>
                        {news.map(n => {
                              return <span key={n._id}>{n.title}</span>
                        })}
                  </Marquee>
            </div>
      );
};

export default BreakingNews;