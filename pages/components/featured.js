import React from 'react'
import Link from 'next/link';

const featuredPosts = [
    {
        image: '/images/david.jpg',
        cat: 'Work-life Balance',
        date: 'Jan 20, 2024',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        author: [
            {
                image: '/images/david.jpg',
                name: 'Jon Snow',
            },
        ],
    },
    {
        image: '/images/music.jpg',
        cat: 'Work-life Balance',
        date: 'Jan 20, 2024',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        author: [
            {
                image: '/images/david.jpg',
                name: 'Jon Snow',
            },
        ],
    },
    {
        image: '/images/david.jpg',
        cat: 'Work-life Balance',
        date: 'Jan 20, 2024',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        author: [
            {
                image: '/images/david.jpg',
                name: 'Jon Snow',
            },
        ],
    },
    {
        image: '/images/david.jpg',
        cat: 'Work-life Balance',
        date: 'Jan 20, 2024',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        author: [
            {
                image: '/images/david.jpg',
                name: 'Jon Snow',
            },
        ],
    },
    {
        image: '/images/music.jpg',
        cat: 'Work-life Balance',
        date: 'Jan 20, 2024',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        author: [
            {
                image: '/images/david.jpg',
                name: 'Jon Snow',
            },
        ],
    },
    {
        image: '/images/david.jpg',
        cat: 'Work-life Balance',
        date: 'Jan 20, 2024',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        author: [
            {
                image: '/images/david.jpg',
                name: 'Jon Snow',
            },
        ],
    },
    {
        image: '/images/david.jpg',
        cat: 'Work-life Balance',
        date: 'Jan 20, 2024',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        author: [
            {
                image: '/images/david.jpg',
                name: 'Jon Snow',
            },
        ],
    },
    {
        image: '/images/music.jpg',
        cat: 'Work-life Balance',
        date: 'Jan 20, 2024',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        author: [
            {
                image: '/images/david.jpg',
                name: 'Jon Snow',
            },
        ],
    },
    {
        image: '/images/david.jpg',
        cat: 'Work-life Balance',
        date: 'Jan 20, 2024',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        author: [
            {
                image: '/images/david.jpg',
                name: 'Jon Snow',
            },
        ],
    },
    
]

function featured() {
  return (
  <>
    <h1 className="featured-header">FEATURED ARTICLES</h1>
    <div className="featured-container">
        {featuredPosts.map ((feat) => ( 
        <div className="featured-content">
            <Link href=""><img src={feat.image} alt="" className="featured-img" /></Link>
            <div className="featured-cat">
                <Link href="" className="cat-link">{feat.cat}</Link>
                <p className="featured-date">{feat.date}</p>
            </div>
            <Link href="" className="featured-title">{feat.title}</Link>
            {feat.author.map((writer) => (
                <span className="featured-span">
                    <img src={writer.image} alt=""  className="featured-author-img"/>
                    <p>{writer.name}</p>
                </span>
            ))}
        </div>
        ))}
    </div>
</>
  )
}

export default featured