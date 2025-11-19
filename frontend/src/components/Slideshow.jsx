import { useState, useEffect } from "react";


export default function Slideshow({ images }) {
  const [index, setIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goNext = () => setIndex((index + 1) % images.length);
  const goPrev = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <div className="slideshow">
      <img src={images[index]} alt="slide" className="slide-img" />

      <button className="prev" onClick={goPrev}>❮</button>
      <button className="next" onClick={goNext}>❯</button>
    </div>
  );
}
