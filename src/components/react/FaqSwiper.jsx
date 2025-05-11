import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { MoveRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function FaqSwiper({ faqs = [], title = "Frequently Asked Questions" }) {
  const [activeIndices, setActiveIndices] = useState({});

  const toggleFaq = (index) => {
    setActiveIndices((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  if (!faqs || faqs.length === 0) {
    return (
      <div className="faq-container">
        <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
        <div className="bg-white p-6 rounded-lg shadow-md mb-4 text-center">
          <p>Belum ada FAQ yang tersedia.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="faq-container">
      <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
      
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        className="faq-swiper"
      >
        {faqs.map((faq, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-6 rounded-lg shadow-md mb-4">
              <div
                className="faq-question flex justify-between items-center cursor-pointer"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-lg font-semibold pr-8">{faq.quetion || faq.question}</h3>
                <div className={`transform transition-transform ${activeIndices[index] ? 'rotate-180' : ''}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
              
              {activeIndices[index] && (
                <div className="faq-answer mt-4 text-gray-700">
                  {Array.isArray(faq.answer) ? (
                    <ul className="list-disc pl-5 space-y-2">
                      {faq.answer.map((item, i) => (
                        <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                      ))}
                    </ul>
                  ) : (
                    <p dangerouslySetInnerHTML={{ __html: faq.answer }} />
                  )}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default FaqSwiper;