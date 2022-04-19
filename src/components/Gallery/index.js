import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./GalleryElements";
import "./styles.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Gallery = () => {
  return (
    <>
      <div className="Gallery">
        <Carousel breakPoints={breakPoints}>
          <Item>
            <img src="/Config/images/img1.jpg" alt="img1" />
          </Item>
          <Item>
            <img src="/Config/images/img2.jpg" alt="img2" />
          </Item>
          <Item>
            <img src="/Config/images/img3.jpg" alt="img3" />
          </Item>
          <Item>
            <img src="/Config/images/img4.jpg" alt="img4" />
          </Item>
          <Item>
            <img src="/Config/images/img5.jpg" alt="img5" />
          </Item>
          <Item>
            <img src="/Config/images/img6.jpg" alt="img6" />
          </Item>
          <Item>
            <img src="/Config/images/img7.jpg" alt="img7" />
          </Item>
          <Item>
            <img src="/Config/images/img8.jpg" alt="img8" />
          </Item>
        </Carousel>
      </div>
    </>
  );
};

export default Gallery;
