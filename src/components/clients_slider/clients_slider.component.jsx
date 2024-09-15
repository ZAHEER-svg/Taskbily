// styles
import './clients_slider.styles.css';
import '../../styles/lod_styles.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay } from 'swiper/modules';
// imgs
import ClientOne from '../../assets/client-1.png';
import ClientTwo from '../../assets/client-2.png';
import ClientThree from '../../assets/client-3.png';
import ClientFour from '../../assets/client-4.png';

const clientImgs = [
    ClientOne,
    ClientTwo,
    ClientThree,
    ClientFour
]

const ClientSlider = () => {
    return(
        <>
      <Swiper
        spaceBetween={30}
        slidesPerView={'auto'}
        breakpoints={
            {
                575: {
                    slidesPerView: 1,
                  },
                  640: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                  1280: {
                    slidesPerView: 4,
                  }
            }
        }
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {
            clientImgs.map((clientImg, index) => {
                return(
                    <SwiperSlide key={index}>
                        <img src={clientImg} alt={`Client ${index}`} />
                    </SwiperSlide>
                )
            })
        }
        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
    )
}

export default ClientSlider;