import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

export default function Slider({ images }) {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {images.map(({ url }) => (
          <SwiperSlide key={url}>
            <Image src={url} layout="fill" alt="Test Image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
