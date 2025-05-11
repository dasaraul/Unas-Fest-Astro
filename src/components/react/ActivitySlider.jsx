import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { MoveRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function ActivitySlider({ posters }) {
  return (
    <div className="container mx-auto px-4 md:px-0">
      <div className="mb-6 text-center md:mb-10">
        <h2 className="text-3xl font-bold md:text-4xl">Our Activities</h2>
        <p className="mt-2 text-gray-600">
          Explore our lineup of exciting competitions and activities
        </p>
      </div>

      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 }
        }}
        className="activity-swiper"
      >
        {posters.map((poster) => (
          <SwiperSlide key={poster.id}>
            <div className="flex h-full flex-col rounded-lg bg-white p-4 shadow-md transition-transform duration-300 hover:scale-[1.02]">
              <div className="relative mb-4 aspect-[3/4] w-full overflow-hidden rounded-lg">
                <img
                  src={poster.image.src}
                  alt={poster.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold">{poster.title}</h3>
              <p className="mb-4 flex-grow text-sm text-gray-600">
                {poster.description}
              </p>
              <a
                href={poster.link}
                className="group mt-auto flex items-center text-primary hover:text-primary-dark"
              >
                <span className="font-medium">Learn More</span>
                <MoveRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ActivitySlider;