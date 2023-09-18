import React from 'react';
import "./css/HomePage.css";
import ImageCarousel from './usercomponets/Carousel';
import CategoryList from './usercomponets/Categories';

const HomePage = () => {
  return (
    <div>
      <section id="carousel">
        <div className='md:container md:mx-auto'>
          <ImageCarousel />
        </div>
      </section>
      <section id="category">
        <div className='md:container md:mx-auto'>
          <CategoryList/>
        </div>
      </section>
      <section id="feature">

        <div
          class="relative container flex flex-col max-w-6xl mx-auto my-32 px-6 text-gray-900 md:flex-row md:px-0"
        >

          <img src="images/desktop/image-interactive.jpg" alt="" />


          <div
            class="top-48 pr-0 bg-white md:absolute md:right-0 md:py-20 md:pl-20"
          >
            <h2
              class="max-w-lg mt-10 mb-6 font-sans text-4xl text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left"
            >
              The leader in interactive VR
            </h2>

            <p class="max-w-md text-center md:text-left">
              Founded in 2011, Loopstudios has been producing world-class virtual
              reality projects for some of the best companies around the globe.
              Our award-winning creations have transformed businesses through
              digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </section>
      <section id="creations">

        <div class="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-20">

          <div class="flex justify-center mb-20 md:justify-between">
            <h2 class="text-4xl text-center uppercase md:text-left md:text-5xl">
              Our Creations
            </h2>

            <button class="hidden btn md:block">See All</button>
          </div>


          <div class="item-container">

            <div class="group item">

              <img
                src="images/desktop/image-deep-earth.jpg"
                alt=""
                class="hidden w-full duration-200 md:block group-hover:scale-110"
              />

              <img
                src="images/mobile/image-deep-earth.jpg"
                alt=""
                class="w-full md:hidden"
              />

              <div class="item-gradient"></div>

              <h5>Deep Earth</h5>
            </div>


            <div class="group item">

              <img
                src="images/desktop/image-night-arcade.jpg"
                alt=""
                class="hidden w-full duration-200 md:block group-hover:scale-110"
              />

              <img
                src="images/mobile/image-night-arcade.jpg"
                alt=""
                class="w-full md:hidden"
              />

              <div class="item-gradient"></div>

              <h5>Night Arcade</h5>
            </div>


            <div class="group item">

              <img
                src="images/desktop/image-soccer-team.jpg"
                alt=""
                class="hidden w-full duration-200 md:block group-hover:scale-110"
              />

              <img
                src="images/mobile/image-soccer-team.jpg"
                alt=""
                class="w-full md:hidden"
              />

              <div class="item-gradient"></div>

              <h5>Soccer Team VR</h5>
            </div>


            <div class="group item">

              <img
                src="images/desktop/image-grid.jpg"
                alt=""
                class="hidden w-full duration-200 md:block group-hover:scale-110"
              />

              <img
                src="images/mobile/image-grid.jpg"
                alt=""
                class="w-full md:hidden"
              />

              <div class="item-gradient"></div>

              <h5>The Grid</h5>
            </div>
          </div>


          <div class="item-container mt-10">

            <div class="group item">

              <img
                src="images/desktop/image-from-above.jpg"
                alt=""
                class="hidden w-full duration-200 md:block group-hover:scale-110"
              />

              <img
                src="images/mobile/image-from-above.jpg"
                alt=""
                class="w-full md:hidden"
              />

              <div class="item-gradient"></div>

              <h5>From Up Above VR</h5>
            </div>


            <div class="group item">

              <img
                src="images/desktop/image-pocket-borealis.jpg"
                alt=""
                class="hidden w-full duration-200 md:block group-hover:scale-110"
              />

              <img
                src="images/mobile/image-pocket-borealis.jpg"
                alt=""
                class="w-full md:hidden"
              />

              <div class="item-gradient"></div>

              <h5>Pocket Borealis</h5>
            </div>


            <div class="group item">

              <img
                src="images/desktop/image-curiosity.jpg"
                alt=""
                class="hidden w-full duration-200 md:block group-hover:scale-110"
              />

              <img
                src="images/mobile/image-curiosity.jpg"
                alt=""
                class="w-full md:hidden"
              />
              <div class="item-gradient"></div>

              <h5>The Curiosity</h5>
            </div>

            <div class="group item">

              <img
                src="images/desktop/image-fisheye.jpg"
                alt=""
                class="hidden w-full duration-200 md:block group-hover:scale-110"
              />

              <img
                src="images/mobile/image-fisheye.jpg"
                alt=""
                class="w-full md:hidden"
              />

              <div class="item-gradient"></div>

              <h5>Make It Fisheye</h5>
            </div>
          </div>

        </div>
      </section>

    </div>


  );
};

export default HomePage;
