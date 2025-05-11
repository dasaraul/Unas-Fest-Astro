import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { MoveRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Slider({ requirements }) {
  return (
    <div className="container mx-auto py-16">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{requirements.title}</h2>
        {requirements.description && (
          <p className="text-gray-600 max-w-3xl mx-auto">{requirements.description}</p>
        )}
      </div>
      
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        className="requirements-slider"
      >
        {requirements.items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md h-full flex flex-col">
              <div className="mb-4">
                {item.icon && (
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <img src={item.icon.src} alt={item.title} className="w-6 h-6" />
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
              
              {item.list && (
                <ul className="mt-4 space-y-2 flex-grow">
                  {item.list.map((listItem, listIndex) => (
                    <li key={listIndex} className="flex items-start">
                      <span className="mr-2 text-green-500">✓</span>
                      <span>{listItem}</span>
                    </li>
                  ))}
                </ul>
              )}
              
              {item.link && (
                <div className="mt-6">
                  <a 
                    href={item.link} 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    {item.linkText || "Learn More"} 
                    <MoveRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;