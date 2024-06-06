"use client";

import { useEffect } from 'react';
import Image from "next/image";

const carouselDisplay = [
  {
    image: '/images/david.jpg',
    para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia',
    header: 'You can combine these into a single array of objects where each object contains the names.',
    name: 'James Bond',
    date: '20th Feedback, 2024',
  },
  {
    image: '/images/sign-in.jpg',
    para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia',
    header2: 'You can combine these into a single array of objects where each.',
    name2: 'Zubi Ozo',
    date: '20th Feedback, 2024',
  },
  {
    image: '/images/sign-up.jpg',
    para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia',
    header3: 'You can array of objects where each object contains the names .',
    name3: 'Jon Snow',
    date: '20th Feedback, 2024',
  },
  {
    image: '/images/music.jpg',
    para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia',
    header4: 'You can combine these into a single array of objects where each object contains the names .',
    name4: 'Jane Bond',
    date: '20th Feedback, 2024',
  },
  {
    image: '/images/reset.jpg',
    para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia',
    header5: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem.',
    name5: 'Andriy Shevchenko',
    date: '20th Feedback, 2024',
  },
];

const name = carouselDisplay.map((caro) => (caro.name))
const name2 = carouselDisplay.map((caro) => (caro.name2))
const name3 = carouselDisplay.map((caro) => (caro.name3))
const name4 = carouselDisplay.map((caro) => (caro.name4))
const name5 = carouselDisplay.map((caro) => (caro.name5))

const header = carouselDisplay.map((caro) => (caro.header))
const header2 = carouselDisplay.map((caro) => (caro.header2))
const header3 = carouselDisplay.map((caro) => (caro.header3))
const header4 = carouselDisplay.map((caro) => (caro.header4))
const header5 = carouselDisplay.map((caro) => (caro.header5))

const Carousel = () => {
  useEffect(() => {
    const nextDom = document.getElementById('next');
    const prevDom = document.getElementById('prev');

    const carouselDom = document.querySelector('.carousel');
    const SliderDom = carouselDom.querySelector('.carousel .list');
    const thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
    const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
    const timeDom = document.querySelector('.carousel .time');

    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    const timeRunning = 3000;
    const timeAutoNext = 7000;

    const showSlider = (type) => {
      const SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
      const thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
      
      if (type === 'next') {
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
      } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
      }
      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
      }, timeRunning);

      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        nextDom.click();
      }, timeAutoNext);
    };

    let runTimeOut;
    let runNextAuto = setTimeout(() => {
      nextDom.click();
    }, timeAutoNext);

    nextDom.onclick = () => {
      showSlider('next');
    };

    prevDom.onclick = () => {
      showSlider('prev');
    };
  }, []);

  return (
    <div className="carousel">
      <div className="list">
        <div className="item">
          <Image src="/images/img1.jpg" alt="Image 1" width={500} height={500} />
          <div className="content">
            <div className="author">{name}</div>
            <div className="title">{header}</div>
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
            </div>
            <div className="topic">{name}</div>
            <div className="buttons">
              <button>SEE MORE</button>
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className="item">
          <Image src="/images/music.jpg" alt="Image 1" width={500} height={500} />
          <div className="content">
            <div className="author">{name2}</div>
            <div className="title">{header2}</div>
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
            </div>
            <div className="topic">{name2}</div>
            <div className="buttons">
              <button>SEE MORE</button>
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className="item">
          <Image src="/images/img2.jpg" alt="Image 1" width={500} height={500} />
          <div className="content">
            <div className="author">{name3}</div>
            <div className="title">{header3}</div>
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
            </div>
            <div className="topic">{name3}</div>
            <div className="buttons">
              <button>SEE MORE</button>
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className="item">
          <Image src="/images/img3.jpg" alt="Image 1" width={500} height={500} />
          <div className="content">
            <div className="author">{name4}</div>
            <div className="title">{header4}</div>
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
            </div>
            <div className="topic">{name4}</div>
            <div className="buttons">
              <button>SEE MORE</button>
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className="item">
          <Image src="/images/img4.jpg" alt="Image 1" width={500} height={500} />
          <div className="content">
            <div className="author">{name5}</div>
            <div className="title">{header5}</div>
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
            </div>
            <div className="topic">{name5}</div>
            <div className="buttons">
              <button>SEE MORE</button>
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>
      <div className="thumbnail">
        <div className="item">
          <Image src="/images/img1.jpg" alt="Thumbnail 1" width={100} height={100} />
          <div className="content">
            <div className="title">Name Slider</div>
            <div className="description">Description</div>
          </div>
        </div>
        <div className="item">
          <Image src="/images/music.jpg" alt="Thumbnail 1" width={100} height={100} />
          <div className="content">
            <div className="title">Name Slider</div>
            <div className="description">Description</div>
          </div>
        </div>
        <div className="item">
          <Image src="/images/img2.jpg" alt="Thumbnail 1" width={100} height={100} />
          <div className="content">
            <div className="title">Name Slider</div>
            <div className="description">Description</div>
          </div>
        </div>
        <div className="item">
          <Image src="/images/img3.jpg" alt="Thumbnail 1" width={100} height={100} />
          <div className="content">
            <div className="title">Name Slider</div>
            <div className="description">Description</div>
          </div>
        </div>
        <div className="item">
          <Image src="/images/img4.jpg" alt="Thumbnail 1" width={100} height={100} />
          <div className="content">
            <div className="title">Name Slider</div>
            <div className="description">Description</div>
          </div>
        </div>
      </div>
      <div className="arrows">
        <button id="prev">&lt;</button>
        <button id="next">&gt;</button>
      </div>
      <div className="time"></div>
    </div>
  );
};

export default Carousel;