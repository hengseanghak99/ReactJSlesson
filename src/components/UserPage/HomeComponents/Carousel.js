import { Carousel } from "@material-tailwind/react";
 
 function ImageCarousel() {
  return (
    <Carousel
      className="rounded-ml"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src="https://as2.ftcdn.net/v2/jpg/02/74/38/31/1000_F_274383102_YLcXvmM5CIuTzhkBp9rLoTMvjoFD5zrT.jpg"
        alt="image 1"
        className="object-cover w-full h-80"
      />
      <img
        src="https://as1.ftcdn.net/v2/jpg/02/43/40/98/1000_F_243409810_C2rWCXa7xa6FPvjZ7jmgBaTuAMH0djuf.jpg"
        alt="image 2"
        className="object-cover w-full h-80"
      />
      <img
        src="https://as2.ftcdn.net/v2/jpg/04/42/21/53/1000_F_442215355_AjiR6ogucq3vPzjFAAEfwbPXYGqYVAap.jpg"
        alt="image 3"
        className="object-cover w-full h-80"
      />
    </Carousel>
  );
};
export default ImageCarousel;