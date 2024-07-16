"use client";
import { useEffect } from 'react';

const NavbarScrollEffect = () => {
  useEffect(() => {
    const navbar = document.querySelector('.inner-nav');

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        navbar.classList.add('nav-scrolled');
      } else {
        navbar.classList.remove('nav-scrolled');
      }
    };

    // Check scroll position on load in case the page is reloaded with an existing scroll
    handleScroll();

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default NavbarScrollEffect;
