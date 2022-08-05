import React from "react";
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  <Carousel autoPlay infiniteLoop='true'>
    <div>
      <img src="http://example.com/image/32.png" />
      <p className="legend">Image 1</p>
    </div>
    <div>
      <img src="http://example.com/image/34.png" />
      <p className="legend">Image 2</p>
    </div>
    <div>
      <img src="http://example.com/mockups/image/9.png" />
      <p className="legend">Image 3</p>
    </div>
    <div>
      <img src="http://example.com/image/32.png" />
      <p className="legend">Image 4</p>
    </div>
    <div>
      <img src="http://example.com/image/34.png" />
      <p className="legend">Image 5</p>
    </div>
  </Carousel>
};
export default Slider;