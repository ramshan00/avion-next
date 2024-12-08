"use client";
import Link from "next/link";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { RiAccountCircleLine } from "react-icons/ri";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState<number>(0); // State to track cart items

  // Function to handle adding an item to the cart
  const handleAddToCart = () => {
    setCartItems(cartItems + 1);
  };

  return (
    <header className="border-b">
      {/* Part 1: Free delivery notice */}
      <div
        id="headline"
        className="bg-gray-800 text-white text-center py-2 text-sm"
      >
        Free delivery on all orders over £50 with code EASTER at checkout
      </div>

      {/* Part 2: Logo and main navigation */}
      <div className="flex justify-between items-center px-4 py-3 md:px-8">
        {/* Logo */}
        <Link href="/" passHref>
          <div id="icon" className="text-blue-950 text-3xl">
            Avion
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-gray-500">
          <a href="/about" className="hover:text-gray-500">
            About Us
          </a>
          <a href="#contact" className="hover:text-gray-500">
            Contact
          </a>
          <a href="#blog" className="hover:text-gray-500">
            Blog
          </a>
          <div className="flex items-center text-2xl space-x-4">
            <FiSearch className="cursor-pointer  hover:text-gray-500" />
            {/* Cart Icon */}
            <a href="/cart">
              <div className="relative">
                <IoCartOutline className="cursor-pointer  hover:text-gray-500" />
                {cartItems > 0 && (
                  <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-1">
                    {cartItems}
                  </span>
                )}
              </div>
            </a>

            <RiAccountCircleLine className="cursor-pointer hover:text-gray-500" />
          </div>
        </nav>

        {/* Mobile Hamburger Menu */}
        <button
          className=" block md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="space-y-1">
            <div className="w-5 h-0.5 bg-blue-950"></div>
            <div className="w-5 h-0.5 bg-blue-950"></div>
            <div className="w-5 h-0.5 bg-blue-950"></div>
            <div className="w-5 h-0.5 bg-blue-950"></div>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-100 text-gray-500 px-4 py-2 space-y-2">
          <a href="/about" className="block hover:text-gray-700">
            About Us
          </a>
          <a href="#contact" className="block hover:text-gray-700">
            Contact
          </a>
          <a href="#blog" className="block hover:text-gray-700">
            Blog
          </a>
          <div className="flex space-x-4 mt-2  hover:text-gray-500">
            <FiSearch />
            <div className="relative">
              <IoCartOutline onClick={handleAddToCart} />
              {cartItems > 0 && (
                <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-1">
                  {cartItems}
                </span>
              )}
            </div>
            <RiAccountCircleLine />
          </div>
        </div>
      )}

      {/* Desktop/Sticky Category Menu */}
      <nav className="bg-gray-50 text-gray-500 py-4">
        <ul className="flex justify-center flex-wrap space-x-6 ">
          <li>
            <a href="/product" className="hover:text-gray-700">
              All Products
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-700">
              Plant Pots
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-700">
              Ceramics
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-700">
              Tables
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-700">
              Chairs
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-700">
              Crockery
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-700">
              Tablesware
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-700">
              Cutlery
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
