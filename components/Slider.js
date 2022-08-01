import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const SliderEnd = () => {
  return (
    <div className="absolute left-0 right-0 bottom-0 z-10 w-full">
      <div className="relative overflow-hidden w-screen -mb-2">
        <Image
          src="/end-slider.svg"
          width="100%"
          height="7"
          layout="responsive"
          alt="slider-end"
        />
      </div>
    </div>
  );
};

export default function Slider({ images }) {
  return (
    <div className="w-full relative">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {images.map(({ url }) => (
          <SwiperSlide key={url}>
            <Image src={url} layout="fill" alt="Test Image" />
          </SwiperSlide>
        ))}
      </Swiper>
      <SliderEnd />
    </div>
  );
}
