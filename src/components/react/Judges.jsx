import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { MoveRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const JudgeDrawer = ({ judge, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-80">
      <div className="min-h-screen px-4 text-center">
        {/* This is a ghost div to vertically center the modal content */}
        <span className="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>
        
        <div className="inline-block w-full max-w-4xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="relative flex flex-wrap justify-center gap-5 md:flex-nowrap">
            <img
              src={judge.image.src}
              alt={judge.name}
              className="h-[250px] w-[200px] object-cover md:ml-12 md:h-[400px] md:w-[300px] lg:h-[500px] lg:w-[400px]"
            />
            <div className="z-10 my-auto text-center sm:text-black md:ml-20 md:space-y-4 md:p-4 md:text-start md:text-white">
              <h1 className="font-semibold sm:text-lg md:w-[500px] md:text-5xl">
                {judge.name}
              </h1>
              <p className="w-96 font-medium md:text-lg">
                {judge.lastEducation}
              </p>
            </div>
            <div className="absolute -z-10 h-72 w-full transform self-center bg-[#1F1E23] sm:hidden md:inline-block" />
          </div>
          
          <div className="relative z-50 mx-auto mt-10 sm:w-[90%] sm:pt-10 md:w-[80%] md:pt-20">
            <div className="flex flex-wrap">
              <h1 className="w-full text-center text-2xl font-semibold uppercase md:w-1/2 md:text-start">
                summary
              </h1>
              <p className="w-full sm:mt-5 md:w-1/2 md:text-lg">
                {judge.description}
              </p>
            </div>
            
            <div className="flex flex-wrap pt-14">
              <h1 className="w-full text-2xl font-semibold uppercase sm:text-center md:w-1/2 md:text-start">
                Education
              </h1>
              <p className="w-full font-bold sm:mt-5 md:w-1/2 md:text-lg">
                {judge.lastEducation}
              </p>
            </div>
            
            {judge.achievements && judge.achievements.length > 0 && (
              <div className="flex flex-wrap pt-14">
                <h1 className="w-full text-2xl font-semibold uppercase sm:text-center md:w-1/2 md:text-start">
                  honors-award
                </h1>
                <ul className="mt-5 w-full list-inside list-disc md:w-1/2">
                  {judge.achievements.map((achievement, i) => (
                    <li className="sm:mb-2 md:mb-5 md:text-lg" key={i}>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {judge.experience && judge.experience.length > 0 && (
              <div className="flex flex-wrap pt-14">
                <h1 className="w-full text-2xl font-semibold uppercase sm:text-center md:w-1/2 md:text-start">
                  Experience
                </h1>
                <div className="w-full sm:mt-5 md:w-1/2">
                  {judge.experience.map((exp, i) => (
                    <div key={i} className="mb-8">
                      <h3 className="w-full cursor-pointer text-start font-inter text-xl font-semibold sm:py-4 sm:text-lg md:pb-2">
                        {exp.eTitle}
                      </h3>
                      {exp.eTime && (
                        <p className="md:text-xl">
                          {exp.eTime}
                        </p>
                      )}
                      {exp.place && (
                        <p className="pb-2 md:text-xl">
                          {exp.place}
                        </p>
                      )}
                      {exp.eDesc?.dDetail && (
                        <p>{exp.eDesc.dDetail}</p>
                      )}
                      {exp.eDesc?.dPoint && exp.eDesc.dPoint.length > 0 && (
                        <ul className="list-inside list-disc">
                          {exp.eDesc.dPoint.map((point, j) => (
                            <li key={j}>{point}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                  
                  {judge.linkedin && (
                    <a href={judge.linkedin} target="_blank" rel="noopener noreferrer">
                      <div className="my-10 flex w-[80%] cursor-pointer items-center justify-center bg-[#1F1E23] py-1 hover:opacity-90">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                        <p className="pl-5 text-white">
                          {judge.name}
                        </p>
                      </div>
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Judges = ({ judgesData }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedJudge, setSelectedJudge] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = (judge) => {
    setSelectedJudge(judge);
    setIsDrawerOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    document.body.style.overflow = 'auto';
  };

  const swiperConfig = {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
    1440: { slidesPerView: 3 },
  };

  return (
    <div className="relative">
      <Swiper
        breakpoints={swiperConfig}
        slidesPerView={"auto"}
        spaceBetween={10}
        pagination={{
          clickable: true,
          el: ".custom-pagination-judges",
        }}
        navigation={{
          nextEl: ".swiper-button-next-judges",
        }}
        modules={[Pagination, Navigation]}
        className="overflow-hidden pb-5"
      >
        {judgesData.map((judge, index) => (
          <SwiperSlide
            key={index}
            className="h-full w-full"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="card">
              <div className="relative flex flex-col items-center gap-y-4 text-left grayscale hover:filter-none md:filter">
                <div>
                  <img
                    src={judge.image.src}
                    alt={judge.name}
                    className="h-[430px] w-full object-cover md:h-[500px] md:w-[400px] lg:px-4"
                  />
                  <div className="pb-6 font-inter lg:px-4">
                    <h1 className="text-lg font-bold">{judge.name}</h1>
                    <h2 className="w-full text-base">{judge.lastEducation}</h2>
                  </div>
                </div>
                {hoveredIndex === index && (
                  <div
                    className={`absolute top-36 mx-2 w-72 bg-black p-5 text-white md:left-12 md:top-44 md:w-[70%]`}
                  >
                    <div className="h-[200px] md:h-[250px]">
                      <p className="font-semi bold mb-10 line-clamp-9 text-sm md:text-base">
                        {judge.description}
                      </p>
                    </div>
                    <button
                      className="cursor-pointer text-white underline"
                      onClick={() => openDrawer(judge)}
                    >
                      Read More ...
                    </button>
                  </div>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="absolute -bottom-10 left-7 z-10 mb-5 flex h-28 items-center space-x-4 pt-10 lg:hidden">
          <div className="custom-pagination-judges" />
          <div className="swiper-button-next-judges cursor-pointer bg-transparent p-2">
            <MoveRight size={30} className="text-page-black" />
          </div>
        </div>
      </Swiper>
      
      {selectedJudge && (
        <JudgeDrawer 
          judge={selectedJudge} 
          isOpen={isDrawerOpen}
          onClose={closeDrawer}
        />
      )}
    </div>
  );
};

export default Judges;