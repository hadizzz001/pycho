import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import CarCard1 from './CarCard1'; // Ensure this component can accept 'temp.img'

const YourComponent = () => {
  // Static 4 images
  const allTemp2 = [
    { id: 1, img: ['https://res.cloudinary.com/dulttkbil/image/upload/v1750521263/sharq1_tg84j0.png'] },
    { id: 2, img: ['https://res.cloudinary.com/dulttkbil/image/upload/v1750521263/mtv1_xrlj4u.png'] },
    { id: 3, img: ['https://res.cloudinary.com/dulttkbil/image/upload/v1750521263/skynews1_onxpzf.png'] },
    { id: 4, img: ['https://res.cloudinary.com/dulttkbil/image/upload/v1750521263/mcd1_uybskg.png'] },
  ];

  return (
    <span className="ProvidersIfSelectedProductMatchesFilter">
      <content-block slug="product-page-wssb">
        <style dangerouslySetInnerHTML={{
          __html: `.ProductTile-SliderContainer--YMAL .ProductTile-SliderContainer-Title {
            height: auto;
            text-align: center;
            padding-bottom: 10px;
          }`
        }} />
        <div
          className="ProductTile-SliderContainer ProductTile-SliderContainer--YMAL px-3"
          data-product-list-category="ymal-slider"
        >
<div
  className="ProductTile-SliderContainer-Title br_text-3xl-serif br_text-white myBlack mt-10"
  style={{
    textAlign: "center", // Center the text
    fontSize: "1.3em",
    fontWeight: "bold",
    fontFamily: 'Manrope'
  }}
>
  As Seen On
</div>


          <section style={{ maxWidth: "100%" }}>
            <Swiper
              spaceBetween={50}
              loop
              modules={[Autoplay]}
              autoplay={{
                delay: 2000,
                stopOnLastSlide: false,
                reverseDirection: true
              }}
              breakpoints={{
                150: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 6,
                },
              }}
            >
              <div className='home__cars-wrapper'>
                {allTemp2.map((temp) => (
                  <SwiperSlide key={temp.id}>
                    <CarCard1 temp={temp} />
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </section>
        </div>
      </content-block>
    </span>
  );
};

export default YourComponent;
