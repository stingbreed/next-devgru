import React from 'react'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Link from 'next/link';

const featuredCommentsData = [
    {
        image: '/images/api.png',
        name: 'John Snow',
        username: '@strongprince',
        comment: 'The connections you make at Web Summit are unparalleled, we met users all over the world.',
        quote: '"',
    },
    {
        image: '/images/music.jpg',
        name: 'John Snow',
        username: '@strongprince',
        comment: 'The connections you make at Web Summit are unparalleled, we met users all over the world.',
        quote: '"',
    },
    {
        image: '/images/david.jpg',
        name: 'John Snow',
        username: '@strongprince',
        comment: 'The connections you make at Web Summit are unparalleled, we met users all over the world.',
        quote: '"',
    },
];

function featuredComments() {
  return (
    <div className="featured-comment-container">
        <div className="featured-comment-header-container">
            <h2 className="featured-comment-header">FEATURED COMMENTS</h2>
            <h1 className="featured-comment-sub">Some thoughts from our users</h1>
            <p className="featured-comment-para">
                If you’re selected for them you’ll also get three tickets, 
                opportunity to access Investor Office Hours and Mentor Hours and much more all for free.
            </p>
        </div>
        <div className="featured-display-div">
            {featuredCommentsData.map ((c) => (
                <Link href="" className="featured-display-content">
                    <img src={c.image} alt="" className="featured-display-content-img"/>
                    <h1 className="featured-display-content-header">{c.name}</h1>
                    <p className="featured-display-content-user">{c.username}</p>
                    <p className="featured-display-content-comment">{c.comment}</p>
                    <h1 className="featured-display-content-quote"><FormatQuoteIcon style={{ fontSize: '100px' }} /></h1>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default featuredComments