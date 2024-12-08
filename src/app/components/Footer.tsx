import React from "react";

// Footer.jsx
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaSkype,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="bg" className=" text-white py-10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          <div>
            <h3 className=" text-lg mb-4">Menu</h3>
            <ul>
              <li>
                <a href="#" className="hover:text-blue-700">
                  New arrivals
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-700">
                  Best seller
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-700">
                  Recently viewed
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-700">
                  Popular this week
                </a>
              </li>
              <li>
                <a href="/product" className="hover:text-blue-700">
                  All products
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className=" text-lg mb-4">Caragories</h3>
            <ul>
              <li>
                <a href="#" className="hover:text-blue-700">
                  Crockery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-700">
                  Furniture
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-700">
                  Homeware
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-700">
                  Plant pots
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-700">
                  Chairs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className=" text-lg mb-4">Our Company</h3>
            <ul>
              <li>
                <a href="/about" className="hover:text-blue-700">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-700">
                  Vacancies
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-700">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-700">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-700">
                  Returns policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg ">Join our mailing list</h3>
            <div className="flex flex-col sm:flex-row items-center ">
              <input
                type="email"
                placeholder="your@email.com"
                className="p-4 bg-gray-400 bg-opacity-20 text-white w-full sm:w-2/3 md:w-3/4 lg:w-1/2"
              />
              <button className="bg-white text-black py-2 px-8 w-full sm:w-auto">
                Sign up
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-8 border-t pt-4">
          <p className="text-sm text-center sm:text-left">
            Copyright 2022 Avion LTD
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-700">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="hover:text-blue-700">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="hover:text-blue-700">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-blue-700">
              <FaSkype size={24} />
            </a>
            <a href="#" className="hover:text-blue-700">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
