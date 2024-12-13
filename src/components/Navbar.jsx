import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants/index';
import {logo,menu,close} from '../assets';
import { li } from 'framer-motion/client';


const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle,setToggle] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className={`${styles.paddingX} w-full flex   top-0 z-20  ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}>

<div className="w-full flex items-center justify-between max-w-7xl mx-auto px-4">
        {/* Left Side: Logo and Name */}
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
            <p className="text-white text-[18px] font-bold cursor-pointer">
              SHIBINSHA <span className="sm:block hidden">| ML Engineer</span>
            </p>
          </Link>
        </div>

        {/* Right Side: Navigation Links */}
        <ul className="list-none hidden sm:flex flex-row gap-10 ml-auto">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <Link to={`#${link.id}`}>{link.title}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="sm:hidden flex items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          {/* Mobile Menu */}
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 black-gradient absolute top-20 right-0 mx-4 min-w-[140px] my-2 z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-2">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(false);
                  }}
                >
                  <Link to={`#${link.id}`}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar