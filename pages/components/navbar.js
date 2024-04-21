import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import { Fade } from "react-awesome-reveal";
import { Zoom } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";

const logo = [
    {
        image: '/images/logo2.jpg',
    },
]

const categories = [
    'Career Advancement',
    'Daily Devotionals and Reading Plans',
    'Employment Laws',
    'Etiquette and Personal Care',
    'Government Announcements',
    'Human Resource Management',
    'Leadership',
    'Legal',
    'Personal Finance',
    'Personal Health',
    'Personal Income Tax',
    'Pension Contribution',
    'Questions and Answers',
    'Relationships',
    'Safety and Security',
    'Wholeness',
    'Work-Life Balance',
  ];

function navbar() {
    const [isInputVisible, setIsInputVisible] = useState(false);
    const [linksVisible, setLinksVisible] = useState(true);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [isSupport, setIsSupport] = useState(false);
    const [scrolling, setScrolling] = useState(false);  // Navbar scrolled


    const handleSearch = () => {
        handleInput();
        handleIconClick();
    }

    // Search icon

  const handleInput = () => {
    setIsInputVisible(!isInputVisible);
  };

  const handleCancel = () => {
    setIsInputVisible(false);
    setLinksVisible(true);
  };

  // Hide links on search click

  const handleIconClick = () => {
    setLinksVisible(!linksVisible);
    setIsDropdownVisible(false);
    setIsMenuVisible(false)
    setIsSupport(false)
  };

  // Account click

  const handleAccountClick = () => {
    setIsDropdownVisible(!isDropdownVisible);
    setIsInputVisible(false);
    setLinksVisible(true);
    setIsMenuVisible(false)
    setIsSupport(false)
  };

  // Menu Click

  const handleMenuClick = () => {
    setIsMenuVisible(!isMenuVisible);
    setIsInputVisible(false);
    setLinksVisible(true);
    setIsDropdownVisible(false)
    setIsSupport(false)
  };

  // Support Link

  const handleSupportClick = () => {
    setIsSupport(!isSupport);
    setIsInputVisible(false);
    setLinksVisible(true);
    setIsMenuVisible(false)
    setIsDropdownVisible(false)
  };

  // Navbar scrolled

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarStyle = {
    marginTop: scrolling ? '0' : '4px',
    transition: 'margin-top 0.3s ease',
    top: '0',
    left: '0',
  }

  return (
    <div className="navbar" style={navbarStyle}>
        <div className="navbar-left-container">
            {logo.map ((l) => (
                <Link href="/">
                    <img src={l.image} alt="site logo" className="site-logo" />
                </Link>
            ))}
            <div className="navbar-left-links">
            {linksVisible && (
              <div className="navbar-left-links">
                <Link href="/faculty" className="nav-left-links nav-links">
                  FACULTY
                </Link>
                <Link href="/training" className="nav-left-links nav-links">
                  TRAINING
                </Link>
                <Link href="/jobs" className="nav-left-links nav-links">
                  JOBS
                </Link>
                <Link href="/about" className="nav-left-links nav-links">
                  ABOUT
                </Link>
                {!isSupport ? (
                    <Link 
                        href="" 
                        className="nav-left-links nav-links"
                        onClick={handleSupportClick}
                        >
                        SUPPORT
                    </Link>
                ) : (
                    <CloseTwoToneIcon
                        style={{ fontSize: '36px', color: 'red', background: 'white', padding: '0', fontWeight: 'bold', cursor: 'pointer' }}
                        onClick={handleSupportClick}
                    />
                )}
                {isSupport && (
                    <Zoom duration={200} className="slide-support-style">
                        <div className="support-dropdown">
                            <Link href="/contact" className="support-links">CONTACT US</Link>
                            <Link href="/help" className="support-links">HELP CENTER</Link>
                            <Link href="/FAQ" className="support-links">FAQ</Link>
                            <Link href="/privacy" className="support-links">PRIVACY</Link>
                        </div>
                    </Zoom>
                )}
             </div>
            )}
            </div>
        </div>
        <div className="navbar-right-container">
            {isInputVisible ? (
                <Fade>
                    <div className="searchInputDiv">
                        <input
                        type="text"
                        placeholder="Type your search..."
                        className="searchInput"
                        />
                        <button className="search-cancel-btn" onClick={handleCancel}>
                            <CloseTwoToneIcon 
                                style={{fontSize: '36px', color: 'red', background: 'white', padding: '0'}}
                            />
                        </button>
                    </div>
                </Fade>
            ) : (
                <Link href="" className="nav-right-links nav-links" title="search">
                    <SearchTwoToneIcon 
                        style={{fontSize: '36px', color: 'rgb(0, 65, 65)', background: 'white', padding: '0'}}
                        onClick={handleSearch}
                    />
                </Link>
            )}
            {!isDropdownVisible ? (
                <Link href="" className="nav-right-links nav-links" title="account">
                    <AccountCircleTwoToneIcon 
                        style={{fontSize: '36px', color: 'rgb(0, 65, 65)', background: 'white', padding: '0'}}
                        onClick={handleAccountClick}
                    />
                </Link>
            ) : (
                <CloseTwoToneIcon
                    style={{ fontSize: '36px', color: 'red', background: 'white', padding: '0', fontWeight: 'bold', cursor: 'pointer' }}
                    onClick={handleAccountClick}
                />
            )}
            {isDropdownVisible && (
                <Zoom duration={200} className="slide-custom-style">
                    <div className="account-dropdown">
                        <Link href="/sign-in" className="account-links">Sign In</Link>
                        <Link href="/sign-up" className="account-links">Sign Up</Link>
                        <Link href="/change-password" className="account-links">Password Reset</Link>
                    </div>
                </Zoom>
            )}

            <Link href="" className="nav-right-links nav-links" title="menu">
                {isMenuVisible  ? (
                    <CloseTwoToneIcon
                        style={{ fontSize: '46px', color: 'red', background: 'white', padding: '0', fontWeight: 'bold', cursor: 'pointer' }}
                        onClick={handleMenuClick}
                    />
                ) : (
                    <MenuTwoToneIcon 
                        style={{fontSize: '46px', color: 'rgb(0, 65, 65)', background: 'white', padding: '0', fontWeight: 'bold'}}
                        onClick={handleMenuClick}
                    />
                )}
            </Link>
            {isMenuVisible && (
                <Slide direction="right" duration={200} className="slide-menu-style">
                    <div className="nav-menu-div">
                    <h1 className="category-header">CATEGORIES</h1>
                        {categories.map((category, index) => (
                            <li key={index} className="category-list">
                                <Link href="#" className="category-links">
                                    {category}
                                </Link>
                            </li>
                        ))}
                    </div>
                </Slide>
            )}
        </div>
    </div>
  )
}

export default navbar;
export { categories };