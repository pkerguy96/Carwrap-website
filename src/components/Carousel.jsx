import React, { useEffect, useState } from "react";
import { styles } from "../styles";

export const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel-item " style={{ width: width }}>
      {children}
    </div>
  );
};
const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };
  /* useEffect(() => {
    const interval = setInterval(() => {
      updateIndex(activeIndex + 1);
    }, 2000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }); */
  return (
    <>
      <span className="hash-span" id="Gallery"></span>
      <div>
        <p className={`${styles.sectionSubText} sm:px-16 px-6 text-[#915eff] `}>
          Notre
        </p>
        <h2 className={`${styles.sectionHeadText} sm:px-16 px-6  `}>
          Portfolio.
        </h2>
      </div>
      <div className="carousel mb-2 sm:mb-12 mt-12 min-w-[350px] mx-[10%] sm:mx-[15%]">
        <div>
          <div
            className="inner"
            style={{
              transform: `translateX(-${activeIndex * 100}%)`,
            }}
          >
            {React.Children.map(children, (child, index) => {
              return React.cloneElement(child, { width: "100%" });
            })}
          </div>
          <div className="indicators pagination ">
            <button
              onClick={() => {
                updateIndex(activeIndex - 1);
              }}
            >
              Prev
            </button>
            {React.Children.map(children, (child, index) => {
              return (
                <button
                  className={`pagination-btns ${
                    index === activeIndex ? "active-pagination" : ""
                  }`}
                  onClick={() => updateIndex(index)}
                >
                  {index + 1}
                </button>
              );
            })}
            <button
              onClick={() => {
                updateIndex(activeIndex + 1);
              }}
            >
              next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
