import React from 'react'
import Link from 'next/link';

const bannerDisplay1 = [
  {
    image1: '/images/david.jpg',
    para1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia',
    header1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia.',
    author: 'John Snow',
    views: '700',
    comments: '70',
  },
]

const bannerDisplay = [
  {
    image: '/images/sign-in.jpg',
    para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia',
    header: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia.',
    author: 'John Snow',
  },
  {
    image: '/images/sign-up.jpg',
    para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia',
    header: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia.',
    author: 'John Snow',
  },
  {
    image: '/images/music.jpg',
    para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia',
    header: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia.',
    author: 'John Snow',
  },
  {
    image: '/images/reset.jpg',
    para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia',
    header: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia.',
    author: 'John Snow',
  },
];

function introduction() {
  return (
    <div className="trending-div">
        <h1>POPULAR ARTICLES</h1>
        <div className="trending-top-div">
          {bannerDisplay1.map((b) => (
            <Link href="" className="trending-top-link">
              <div className="trending-content-div">
                <p className="trending-content-author">{b.author}</p>
                <h2 className="trending-content-header">{b.header1}</h2>
                <p className="trending-content-numbers">Comments: {b.comments}</p>
                <p className="trending-content-numbers">Views: {b.views}</p>
              </div>
              <img src={b.image1} alt="image" className="trending-img-1" />
            </Link>
          ))}
        </div>
      <div className="trending-bottom-div">
      {bannerDisplay.map((b) => (
        <Link href="" className="popular-cards-link">
          <div className="popular-cards">
            <img src={b.image} alt="image" className="trending-img" />
            <h2 className="trending-bottom-header">{b.header}</h2>
            <p className="trending-bottom-author">{b.author}</p>
          </div>
        </Link>
      ))}
      </div>

            {/* <Link href="">
              <img src={bannerDisplay.image1} alt="image" className="trending-img" />
            </Link>
            {bannerDisplay.map((b) => (
                <Link href="" className="trending-div">
                    <img src={b.image} alt="image" className="trending-img" />
                    <div className="trending-div-content">
                        <h2 className="trending-header">{b.header}</h2>
                        <p className="trending-para">{b.para}</p>
                    </div>
                </Link>
            ))} */}
    </div> 
  )
}

export default introduction