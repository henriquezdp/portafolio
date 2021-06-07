import React from 'react';
import './Slider.css';

const slidesInfo = [
  {
    src: 'https://cdn.pixabay.com/photo/2016/12/19/08/39/mobile-phone-1917737_960_720.jpg',
    alt: 'Protecto 1',
    desc: 'lorem ipsum',
  },
  {
    src: 'https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg',
    alt: 'Protecto 2',
    desc: 'lorem ipsum',
  },
  {
    src: 'https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_960_720.jpg',
    alt: 'Protecto 3',
    desc: 'lorem ipsum',
  },
];

const slides = slidesInfo.map(slide => (
  <div className="slide-container">
    <img src={slide.src} alt={slide.alt} />
    <div className="slide-desc">
      <span>{slide.desc}</span>
    </div>
  </div>
));

export default slides;
