import React, { useState } from 'react';
import './Header.css'; 
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link, useNavigate } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

const Header = () => {
  const navigate = useNavigate();
  const [{ basket, user }, dispatch] = useStateValue();
  const [searchTerm, setSearchTerm] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const handleAuthentication = () => {
    setIsMenuOpen(false); 
    if (user) {
      auth.signOut()
        .then(() => {
          dispatch({
            type: 'EMPTY_BASKET',
          });
        })
        .catch((error) => {
         
          console.error('Sign out error:', error);
        })
        .finally(() => {
          navigate('/');
        });
    } else {
      navigate('/login');
    }
  };
  

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for:  ${searchTerm}`);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); 
  };

  return (
    <nav className="navbar navbar-expand-md  header">
      <div className="container-fluid  bg-black  ">

        <Link className="navbar-brand " to="/">
          <img
            className="header_logo img-fluid"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="Amazon Logo"
          />
        </Link>

        <form className="header_search me-2  " onSubmit={handleSearch}>
          <div className="header_search_wrapper">
            <input
              className="header_searchinp form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="header_searchicon p-2" type="submit">
              <SearchIcon className="" />
            </button>
          </div>
        </form>

        
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu} 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon bg-white"></span>
        </button>

        
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto"> 
            <li className="nav-item">
              <Link to={!user && '/login'} className="nav-link" >
                <div className="header_option">
                  <span className="header_optionlineone">Hello {user ? user.email : 'Guest'}</span>
                  <span className="header_optionlinetwo"onClick={handleAuthentication}>{user ? 'Sign Out' : 'Sign In'}</span>
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/orders" className="nav-link" onClick={handleLinkClick}>
                <div className="header_option">
                  <span className="header_optionlineone">Returns</span>
                  <span className="header_optionlinetwo">& Orders</span>
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={handleLinkClick}>
                <div className="header_option">
                  <span className="header_optionlineone">Your</span>
                  <span className="header_optionlinetwo">Prime</span>
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/checkout" className="nav-link" onClick={handleLinkClick}>
                <div className="header_optionbasket">
                  <ShoppingBasketIcon />
                  <span className="basket_count">{basket?.length}</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
