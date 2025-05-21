'use client';

import { useState, useEffect } from 'react';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.mobile-menu-container')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  // Close menu when a menu item is clicked
  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <div className="mobile-menu-container md:hidden">
      <button 
        className="p-2" 
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background dark:bg-gray-900 pt-20">
          <div className="flex flex-col items-center gap-8 text-xl">
            <a href="#about" onClick={handleMenuItemClick} className="hover:text-gray-600 transition-colors">About</a>
            <a href="#services" onClick={handleMenuItemClick} className="hover:text-gray-600 transition-colors">Services</a>
            <a href="#portfolio" onClick={handleMenuItemClick} className="hover:text-gray-600 transition-colors">Work</a>
            <a href="#process" onClick={handleMenuItemClick} className="hover:text-gray-600 transition-colors">Process</a>
            <a href="#contact" onClick={handleMenuItemClick} className="hover:text-gray-600 transition-colors">Contact</a>
          </div>
        </div>
      )}
    </div>
  );
} 