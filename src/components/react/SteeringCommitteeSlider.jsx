import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function SteeringCommitteeSlider({ committees }) {
  return (
    <div className="container mx-auto py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Steering Committee</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Meet our dedicated steering committee who guide the UNAS FEST vision and mission
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
          768: { slidesPerView: 3 }
        }}
        className="steering-committee-swiper"
      >
        {committees.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center p-4">
              <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
                <img 
                  src={member.image.src} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-center">{member.name}</h3>
              <p className="text-gray-600 text-center">{member.role}</p>
              
              {member.description && (
                <p className="mt-3 text-sm text-gray-600 text-center max-w-xs">
                  {member.description}
                </p>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SteeringCommitteeSlider;