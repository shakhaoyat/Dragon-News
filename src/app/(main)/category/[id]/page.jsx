import LeftSidebar from '@/components/homepage/news/LeftSidebar';
import RightSidebar from '@/components/homepage/news/RightSidebar';
import { getCategories, getNewsCategoryId } from '@/lib/data';
import React from 'react';




const NewsCategoryPage = async ({ params }) => {
      const { id } = await params;
      console.log(id, "paramsRas")

      const categories = await getCategories();


      const news = await getNewsCategoryId(id);
      return (
            <div className="container mx-auto grid grid-cols-12 gap-4 my-[60px]">
                  <div className=" col-span-3 ">
                        <LeftSidebar categories={categories} activeId={id} />
                  </div>
                  <div className="font-bold text-3xl bg-green-100 col-span-6 ">All News
                        <div className="space-y-4">
                              {news.length > 0 ? news.map((n) => {
                                    return <div key={n._id} className="p-6 rounded-md border">{n.title}</div>
                              }) : <h2 className='font-bold text-4xl text-center my-7'>no news found</h2>}

                        </div>
                  </div>
                  <div className="font-bold text-3xl col-span-3 "><RightSidebar /></div>
            </div>
      );
};

export default NewsCategoryPage;