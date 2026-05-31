import Link from 'next/link';
import React from 'react';

const NotFound = () => {
      return (
            <div className='h-[80vh] flex items-center justify-center flex-col'>
                  <h2 className="font-bold text-5xl text-purple-500 gap-4">This page is not found</h2>
                  <Link href="/" ><button className='btn bg-purple-500 text-white'>Back to Home</button></Link>
            </div>
      );
};

export default NotFound;