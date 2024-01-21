import React, { Component } from "react";
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const bannerDisplay = [
  {
    image: '/images/david.jpg',
    para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia',
    header: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    image: '/images/sign-in.jpg',
    para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia',
    header: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    image: '/images/sign-up.jpg',
    para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia',
    header: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    image: '/images/music.jpg',
    para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia',
    header: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    image: '/images/reset.jpg',
    para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia',
    header: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
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
      <div className="banner-left-div">
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
                </div>
              </Link>
            </div>
          ))}
        </Slider>
        <Slider  
                className="thumbnail-slider"
                asNavFor={this.state.nav1}
                ref={slider => (this.slider2 = slider)}
                slidesToShow={5}
                swipeToSlide={true}
                focusOnSelect={true}
        >
          {bannerDisplay.map((b) => (
            <div className='thumbnail-div-container'
            >
              <img src={b.image} alt="" className="thumbnail-img" style={{ cursor: 'pointer' }} />
            </div>
          ))}
        </Slider>
      </div>

      <div className="banner-right-div">
            <p className="banner-right-div-header">TRENDING ARTICLES</p>
            {bannerDisplay.map((b) => (
                <Link href="" className="trending-div">
                    <img src={b.image} alt="image" className="trending-img" />
                    <div className="trending-div-content">
                        <h2 className="trending-header">{b.header}</h2>
                        <p className="trending-para">{b.para}</p>
                    </div>
                </Link>
            ))}
        </div>

    </div>
  );
}
}