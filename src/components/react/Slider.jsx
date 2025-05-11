import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { MoveRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const RequirementCard = ({ index, detail }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDialog = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <>
      <div 
        className="relative flex h-[279px] w-[285px] flex-shrink-0 flex-col justify-start gap-y-1 rounded-none bg-page-white py-5 text-page-black active:cursor-grabbing md:w-[380px] md:gap-y-6 cursor-pointer"
        onClick={toggleDialog}
      >
        <div className="flex flex-col gap-y-4 text-left p-6">
          <h1 className="font-bungee text-5xl font-semibold">
            0{index}
          </h1>
        </div>
        <div className="p-6 pt-0">
          <p className="line-clamp-4 text-start text-xl font-medium">
            {detail}
          </p>
        </div>
      </div>
      
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-lg max-w-xl w-full">
            <p className="text-start text-base font-medium mb-4">
              {detail}
            </p>
            <button 
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={toggleDialog}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const Slider = ({ requirements }) => {
  return (
    <div className="relative">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        navigation={{
          nextEl: ".swiper-button-next",
        }}
        modules={[Pagination, Navigation]}
        className="overflow-hidden"
      >
        {requirements.map((requirement) => (
          <SwiperSlide
            key={requirement.index}
            className="max-w-[285px] md:max-w-[380px]"
          >
            <RequirementCard 
              index={requirement.index} 
              detail={requirement.detail}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom Pagination and Navigation Container */}
      <div className="absolute -bottom-14 left-0 z-10 flex h-14 items-center space-x-4">
        <div className="custom-pagination" />
        <div className="swiper-button-next cursor-pointer bg-transparent p-2">
          <MoveRight />
        </div>
      </div>
    </div>
  );
};

export default Slider;