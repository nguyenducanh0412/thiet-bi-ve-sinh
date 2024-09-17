/* eslint-disable @next/next/no-img-element */
import { useCallback, useRef, useState } from "react";

import ProductCard from "@/components/product-card";
// Import Swiper styles
import "swiper/css";
import { Pagination } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

const StantOutProducts = () => {
  const tabList = [
    {
      title: "Sản phẩm mới",
      data: [
        {
          id: 1,
          name: "Máy giặt lồng ngang Malloca MWM-C1903E",
          price: "19,840,000 đ",
          image: "/imgs/may-giat.png",
          showTag: true,
          tagName: "new",
        },
        {
          id: 1,
          name: "Máy giặt lồng ngang Malloca MWM-C1903E",
          price: "19,840,000 đ",
          image: "/imgs/may-giat.png",
          showTag: true,
          tagName: "new",
        },
        {
          id: 3,

          name: "Máy giặt lồng ngang Malloca MWM-C1903E",
          price: "19,840,000 đ",
          image: "/imgs/may-giat.png",
          showTag: true,
          tagName: "new",
        },
        {
          id: 4,

          name: "Máy giặt lồng ngang Malloca MWM-C1903E",
          price: "19,840,000 đ",
          image: "/imgs/may-giat.png",
          showTag: true,
          tagName: "new",
        },
        {
          id: 5,

          name: "Máy giặt lồng ngang Malloca MWM-C1903E",
          price: "19,840,000 đ",
          image: "/imgs/may-giat.png",
          showTag: true,
          tagName: "new",
        },
        {
          id: 6,

          name: "Máy giặt lồng ngang Malloca MWM-C1903E",
          price: "19,840,000 đ",
          image: "/imgs/may-giat.png",
          showTag: true,
          tagName: "new",
        },
      ],
    },
    {
      title: "Sản phẩm bán chạy",
      data: [],
    },
    {
      title: "Đang giảm giá",
      data: [],
    },
  ];

  const sliderRef = useRef<SwiperRef>(null);

  const [tabActive, setTabActive] = useState("Sản phẩm mới");

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className="stand-out-products bg-[#3C3C3C] px-4">
      <div className="container flex mx-auto">
        <div className="tabs py-[4rem] lg:py-[6rem] w-full">
          {/* tab list */}
          <div className="flex flex-col lg:flex-row items-start justify-between">
            <div className="tab-list flex gap-[2rem] md:gap-[3rem] h-[3rem] md:h-[4.5rem] mb-[3rem] md:mb-[4rem] overflow-x-auto">
              {tabList.map((tab) => (
                <div key={tab.title} className="flex flex-col justify-between ">
                  <div
                    className={`${tabActive === tab.title ? "opacity-100 font-semibold" : "opacity-50"} relative  text-[white] transition-opacity ease-out delay-50 text-[1.4rem] w-[max-content] md:text-[1.rem] leading-[2rem] lg:text-[1.8rem] lg:leading-[3rem] cursor-pointer`}
                    onClick={() => setTabActive(tab.title)}
                  >
                    {tab.title}
                  </div>
                  {tabActive === tab.title && (
                    <div className="w-full h-[2px] bg-[white]"></div>
                  )}
                </div>
              ))}
            </div>
            {tabList.find((e) => e.title === tabActive)!.data?.length && (
              <div className="navigator-carousel flex items-center gap-[3rem] mb-[2rem]">
                <div
                  className="prev-arrow cursor-pointer select-none w-[2rem] h-[2rem]"
                  onClick={handlePrev}
                >
                  <img src="/imgs/btn-angle-left.svg" alt="btn-angle-left" />
                </div>
                <div
                  className="next-arrow cursor-pointer select-none w-[2rem] h-[2rem]"
                  onClick={handleNext}
                >
                  <img src="/imgs/btn-angle-right.svg" alt="btn-angle-right" />
                </div>
              </div>
            )}
          </div>
          {/* tab content */}

          <div
            data-aos="fade-right"
            key={tabActive}
            className="flex [&>.swiper]:!w-full gap-[1.2rem] "
          >
            <Swiper
              ref={sliderRef}
              slidesPerView="auto"
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              loop={true}
              className="mySwiper"
            >
              {tabList
                .find((e) => e.title === tabActive)!
                .data.map((e) => (
                  <SwiperSlide key={e.id + Math.random() } className="!w-[max-content]">
                    <ProductCard
                      type="link"
                      productInfo={{
                        name: e.name,
                        image: e.image,
                        price: e.price,
                        showTag: e?.showTag,
                        tagName: e?.tagName,
                      }}
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StantOutProducts;
