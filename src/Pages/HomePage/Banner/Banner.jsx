import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import slide1 from "../../../assets/banner/slide1.jpg";
import slide2 from "../../../assets/banner/slide2.jpg";
import slide3 from "../../../assets/banner/slide3.jpg";
import slide4 from "../../../assets/banner/slide4.jpg";
import slide5 from "../../../assets/banner/slide5.jpg";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img src={slide1} alt="" />
        </div>
        <div>
          <img src={slide2} alt="" />
        </div>
        <div>
          <img src={slide3} alt="" />
        </div>
        <div>
          <img src={slide4} alt="" />
        </div>
        <div>
          <img src={slide5} alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
