import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const MemberDrawer = ({ member, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
      <div className="h-full w-full overflow-y-auto bg-white md:h-[90%] md:max-w-4xl md:rounded-lg">
        <div className="sticky top-0 flex justify-end bg-white p-4">
          <button onClick={onClose} className="text-xl font-bold">×</button>
        </div>
        <div className="p-6">
          <div className="bg-[#1F1E23] p-14">
            <div className="w-full text-center md:text-start md:w-1/2 text-white">
              <p className="mb-5 font-semibold sm:text-3xl md:text-5xl uppercase">
                {member.role}
              </p>
              <p className="md:w-[80%] font-normal">
                {member.description}
              </p>
            </div>
          </div>
          
          {member.member && member.member.length > 0 && (
            <div className="mx-5 md:mx-44 mt-14 md:flex md:gap-4 z-50">
              <div className="font-bold text-2xl mb-5 md:text-3xl md:mr-28 text-black uppercase">
                Member List
              </div>
              <div className="flex flex-col gap-2 text-start w-full">
                {member.member.map((m, idx) => (
                  <div key={idx} className="relative">
                    <div className="flex gap-10 md:gap-20 pb-3">
                      <p className="md:text-xl text-black font-semibold">{m}</p>
                      <p className="md:text-xl font-normal">
                        {member.position && member.position[idx]}
                      </p>
                    </div>
                    <hr className="border-t border-gray-500" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const SliderCommittee = ({ members, maxWidth = 400, isDPM = true, responsivePagination = false, hovered = true }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (member) => {
    setSelectedMember(member);
    setIsOpen(true);
  };

  return (
    <div className="relative">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        pagination={{
          clickable: true,
          el: ".custom-pagination-committee",
        }}
        navigation={{
          nextEl: ".swiper-button-next",
        }}
        modules={[Pagination, Navigation]}
        className="overflow-hidden"
      >
        {members.map((member, index) => (
          <SwiperSlide
            key={member.id}
            className={`mx-auto`}
            style={{ maxWidth: `${maxWidth}px` }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div>
              <div className="-mt-5 flex flex-shrink-0 flex-col justify-center rounded-none text-page-black">
                <div className="relative flex flex-col text-left">
                  <div
                    className="relative -mb-5 flex aspect-[4/6] w-full items-end bg-cover bg-center"
                    style={{ backgroundImage: `url(${member.image.src})` }}
                  >
                    <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[rgba(0,0,0,1)] to-[rgba(0,0,0,0)]"></div>

                    {/* Overlay text for APM */}
                    {!isDPM && (
                      <>
                        <div className="relative z-10 flex flex-col p-4 text-white">
                          <h1 className="font-inter text-lg font-semibold">{member.name}</h1>
                          <p className="text-base font-normal">{member.role}</p>
                        </div>
                        {hovered && hoveredIndex === index && member.description && (
                          <div className="absolute inset-0 z-20 flex items-center justify-center pt-10">
                            <div className="w-[80%] rounded bg-white bg-opacity-85 p-4">
                              <p className="font-semi bold mb-10 line-clamp-9 text-sm text-black md:text-base">
                                {member.description}
                              </p>
                              <button 
                                className="cursor-pointer text-black underline"
                                onClick={() => handleToggle(member)}
                              >
                                Open...
                              </button>
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
                {/* Text container below the image for DPM */}
                {isDPM && (
                  <div className="-pt-10 flex flex-col px-6 text-start text-black">
                    <h1 className="font-inter text-xl">{member.name}</h1>
                    <p className="font-lg text-base">{member.role}</p>
                  </div>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {selectedMember && (
        <MemberDrawer 
          member={selectedMember}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default SliderCommittee;