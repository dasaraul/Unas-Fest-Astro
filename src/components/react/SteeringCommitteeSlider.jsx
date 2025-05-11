import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { MoveRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Placeholder image for missing images
const placeholderImg = '/assets/images/about-us/avatar-placeholder.png';

const SteeringCommitteeSlider = ({ committees = [] }) => {
  if (!committees || committees.length === 0) {
    return (
      <div className="text-center p-8">
        <p className="text-xl">Data komite belum tersedia.</p>
      </div>
    );
  }

  return (
    <div className="relative">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        className="overflow-hidden"
        navigation={{
          nextEl: ".swiper-button-next-judges",
        }}
        pagination={{
          clickable: true,
          el: ".custom-pagination-judges",
        }}
        modules={[Pagination, Navigation]}
        key="steering-committee-swiper"
      >
        {committees.map((item, index) => {
          // Ensure image src or fallback
          const imageSrc = item.img?.src || placeholderImg;
          
          return (
            <SwiperSlide
              key={`committee-${item.index || index}`}
              className="h-full max-w-[248px] md:max-w-[440px] mb-6"
            >
              <div className="flex h-full w-full flex-shrink-0 cursor-grab flex-col rounded-none text-page-black">
                <div className="flex flex-col px-0 text-left text-xl">
                  <img
                    src={imageSrc}
                    alt={item.name}
                    width={440}
                    height={576}
                    onError={(e) => { e.target.src = placeholderImg; }}
                    className="object-contain grayscale transition-colors delay-300 hover:grayscale-0 focus:grayscale-0"
                  />
                  <div className="mt-4 flex flex-col items-start">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="capitalize">{item.position}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <div className="absolute -bottom-14 left-7 z-10 mb-5 flex h-32 items-center space-x-4 pt-10">
          <div className="custom-pagination-judges" />
          <div className="swiper-button-next-judges cursor-pointer bg-transparent p-2">
            <MoveRight size={30} className="text-page-black" />
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default SteeringCommitteeSlider;