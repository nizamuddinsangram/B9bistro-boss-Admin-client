import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import img1 from "../../assets/home/slide1.jpg";
import img2 from "../../assets/home/slide2.jpg";
import img3 from "../../assets/home/slide3.jpg";
import img4 from "../../assets/home/slide4.jpg";
import img5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../../component/SectionTitle";
const Category = () => {
  return (
    <section>
      <SectionTitle
        subHeading={"From 11.00am to 12.00pm"}
        heading={"Order Online"}
      ></SectionTitle>
      <div className="my-10">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={img1} />
            <h3 className="text-4xl uppercase text-center text-white -mt-20">
              Salad
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} />
            <h3 className="text-4xl uppercase text-center text-white -mt-20">
              Salad
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} />
            <h3 className="text-4xl uppercase text-center text-white -mt-20">
              Salad
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img5} />
            <h3 className="text-4xl uppercase text-center text-white -mt-20">
              Salad
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} />
            <h3 className="text-4xl uppercase text-center text-white -mt-20">
              Salad
            </h3>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Category;
