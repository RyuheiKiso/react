import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

type CarouselProps = {
  items: React.ReactNode[];
};

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + items.length) % items.length);
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(autoSlide);
  }, [items.length]);

  return (
    <div>
      <Button variant="contained" onClick={prevSlide}>Previous</Button>
      <div>{items[currentIndex]}</div>
      <Button variant="contained" onClick={nextSlide}>Next</Button>
    </div>
  );
};

export default Carousel;
