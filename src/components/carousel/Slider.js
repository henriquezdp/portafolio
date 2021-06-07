import React from 'react';
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Slides from './Slides';
import './Slider.css';

const Slider = () => {
  return (
    <section id="carousel-container">
      <div className="carousel-tittle">
        <h2>Portafolio</h2>
      </div>

      <Carousel
        plugins={[
          'arrows',
          'centered',
          'infinite',
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 3,
            },
          },
        ]}
        animationSpeed={400}
        offset={40}
        itemWidth={400}
        slides={Slides}
        breakpoints={{
          480: {
            offset: 20,
            itemWidth: 200,
            plugins: [
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 1,
                },
              },
            ],
          },
          640: {
            itemWidth: 250,
            plugins: [
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 1,
                },
              },
            ],
          },
          960: {
            itemWidth: 250,
            plugins: [
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 2,
                },
              },
            ],
          },
        }}
      />
    </section>
  );
};
export default Slider;
