import React, { useState, useEffect } from "react";

const ImageSlider = ({ images, interval = 8000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, images.length, interval]);

  return (
    <div className="w-full mx-auto">
      <div className="relative w-full h-[400px] ph:h-[450px] overflow-hidden  shadow-lg">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="w-full h-full object-cover bg-cover"
        />
      </div>
    </div>
  );
};

export default ImageSlider;
