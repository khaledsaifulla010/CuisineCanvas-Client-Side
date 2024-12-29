import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

import image1 from "../../../assets/onlineFood/image1.jpg";
import image2 from "../../../assets/onlineFood/image2.jpg";
import image3 from "../../../assets/onlineFood/image3.jpg";
import image4 from "../../../assets/onlineFood/image4.jpg";

const OnlineOrder = () => {
  return (
    <div className="mt-36 border mb-24 rounded-xl">
      <Swiper
        slidesPerView={5}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <img src={image1} alt="" className="w-full" />
            <div className="absolute bottom-4 left-0 right-0 bg-black bg-opacity-50 py-4">
              <h4 className="text-center text-white text-xl font-bold">
                Pizza
              </h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={image2} alt="" className="w-full" />
            <div className="absolute bottom-4 left-0 right-0 bg-black bg-opacity-50 py-4">
              <h4 className="text-center text-white text-xl font-bold">Soup</h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={image3} alt="" className="w-full" />
            <div className="absolute bottom-4 left-0 right-0 bg-black bg-opacity-50 py-4">
              <h4 className="text-center text-white text-xl font-bold">
                Dessert
              </h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={image4} alt="" className="w-full" />
            <div className="absolute bottom-4 left-0 right-0 bg-black bg-opacity-50 py-4">
              <h4 className="text-center text-white text-xl font-bold">
                Salad
              </h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={image1} alt="" className="w-full" />
            <div className="absolute bottom-4 left-0 right-0 bg-black bg-opacity-50 py-4">
              <h4 className="text-center text-white text-xl font-bold">
                Pizza
              </h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={image2} alt="" className="w-full" />
            <div className="absolute bottom-4 left-0 right-0 bg-black bg-opacity-50 py-4">
              <h4 className="text-center text-white text-xl font-bold">Soup</h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={image3} alt="" className="w-full" />
            <div className="absolute bottom-4 left-0 right-0 bg-black bg-opacity-50 py-4">
              <h4 className="text-center text-white text-xl font-bold">
                Dessert
              </h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={image4} alt="" className="w-full" />
            <div className="absolute bottom-4 left-0 right-0 bg-black bg-opacity-50 py-4">
              <h4 className="text-center text-white text-xl font-bold">
                Salad
              </h4>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OnlineOrder;
