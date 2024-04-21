import React, { Component, useState, useEffect } from "react";
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const bannerDisplay = [
  {
    image: '/images/david.jpg',
    para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia',
    header: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia.',
    name: 'James Bond',
    date: '20th Feedback, 2024',
  },
  {
    image: '/images/sign-in.jpg',
    para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia',
    header: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia.',
    name: 'James Bond',
    date: '20th Feedback, 2024',
  },
  {
    image: '/images/sign-up.jpg',
    para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia',
    header: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia.',
    name: 'James Bond',
    date: '20th Feedback, 2024',
  },
  {
    image: '/images/music.jpg',
    para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia',
    header: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia.',
    name: 'James Bond',
    date: '20th Feedback, 2024',
  },
  {
    image: '/images/reset.jpg',
    para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia',
    header: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia.',
    name: 'James Bond',
    date: '20th Feedback, 2024',
  },
];

export default class AsNavFor extends Component {

    constructor(props) {
      super(props);
      this.state = {
        nav1: null,
        nav2: null
      };
    }

    componentDidMount() {
        this.setState({
          nav1: this.slider1,
          nav2: this.slider2
        });
      }

render() {

  return (
    <div className="banner-container">
        <Slider
                className="main-slider"
                asNavFor={this.state.nav2}
                ref={slider => (this.slider1 = slider)}
                prevArrow={<></>}
                nextArrow={<></>}
                autoplay={true}
                autoplaySpeed={5000}
                pauseOnHover={false}
        >
          {bannerDisplay.map((b) => (
            <div className="slider-div-container">
              <Link href="" className="banner-slider-link">
                <img src={b.image} alt="" className="banner-img" />
                <div className="banner-link-description">
                    <h2 className="banner-link-header">{b.header}</h2>
                    <p className="banner-link-para">{b.para}</p>
                    <span className="featured-span">
                        <img src={b.image} alt=""  className="featured-author-img"/>
                        <p>{b.name} --- {b.date}</p>
                    </span>
                </div>
              </Link>
            </div>
          ))}
        </Slider>

      <div className="thumbnail-slider">
        {bannerDisplay.map((b) => (
          <Link href="" className='thumbnail-link-container'>
            <img src={b.image} alt="" className="thumbnail-img" style={{ cursor: 'pointer' }} />
            <div className="thumbnail-link-content">
              <h2 className="thumbnail-link-header">{b.header}</h2>
              <span className="latest-span">
                  <p>{b.name} --- {b.date}</p>
              </span>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}
}