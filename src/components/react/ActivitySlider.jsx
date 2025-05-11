import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { MoveRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

function ActivitySlider({ posters }) {
  return (
    <div className="relative">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
          el: ".custom-pagination-home",
        }}
        navigation={{
          nextEl: ".swiper-button-next",
        }}
        modules={[Pagination, Navigation]}
        className="overflow-hidden"
      >
        {posters.map((poster) => (
          <SwiperSlide
            key={poster.index}
            className="h-auto w-full max-w-[249px] md:max-w-[320px]"
          >
            <a href={poster.path} className="">
              <div className="flex h-full w-fit flex-shrink-0 cursor-pointer flex-col justify-between rounded-none p-0 text-page-white active:cursor-grabbing">
                <div className="relative flex flex-col p-0">
                  <img
                    src={poster.image.src}
                    alt={poster.name}
                    width={366}
                    height={483}
                    className="relative h-auto w-[249px] object-contain md:w-[320px] lg:w-[366px]"
                  />
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom Pagination and Navigation Container */}
      <div className="absolute -bottom-16 left-0 z-10 flex items-center space-x-4 lg:hidden">
        <div className="custom-pagination-home" />
        <div className="swiper-button-next cursor-pointer bg-transparent p-2">
          <MoveRight size={40} className="text-page-black" />
        </div>
      </div>
    </div>
  );
}

export default ActivitySlider;