import React from "react";
import Image from "next/image";
import { TbTruckDelivery } from "react-icons/tb";
import { CiCircleCheck, CiCreditCard1 } from "react-icons/ci";
import { LuSprout } from "react-icons/lu";

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Section 1: Banner */}
      <section className="relative z-10 bg-gray-100 p-32 text-center">
        <h1 className="text-3xl sm:text-4xl max-w-3xl mx-auto">
          A brand built on the love of craftsmanship, quality, and outstanding
          customer service
        </h1>
      </section>

      {/* Section 2: Story */}
      <section className="py-6 px-6 sm:px-12 lg:px-20 flex flex-col lg:flex-row items-center">
        {/* Text Section */}
        <div className="lg:w-1/2">
          <h1 className="text-2xl mb-6">
            From a studio in London to a global brand with over 400 outlets
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            When we started Avion, the idea was simple: make high-quality
            furniture affordable and available for the mass market.
            <br />
            <br />
            Handmade and lovingly crafted furniture and homeware is what we
            live, breathe, and design, so our Chelsea boutique became the hotbed
            for the London interior design community.
          </p>
          <button className="px-6 py-3 text-black bg-white shadow-md hover:bg-gray-800 transition duration-300">
            Get in Touch
          </button>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <Image
            src="/about1.png"
            alt="Story Image"
            className="w-full shadow-lg"
            width={400}
            height={200}
          />
        </div>
      </section>

      {/* Section 3: Service */}
      <section className="py-0 px-6 sm:px-12 lg:px-20 flex flex-col lg:flex-row items-center bg-gray-50">
        <div className="lg:w-1/2">
          <Image
            src="/about2.png"
            alt="Service Image"
            className="w-full shadow-lg"
            width={400}
            height={200}
          />
        </div>
        <div className="lg:w-1/2 p-20">
          <h1 className="text-2xl mb-6">
            Our service isnt just personal; its actually hyper-personally
            exquisite
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-20">
            When we started Avion, the idea was simple. Make high-quality
            furniture affordable and available for the mass market. <br />
            <br />
            Handmade, and lovingly crafted furniture and homeware is what we
            live, breathe, and design, so our Chelsea boutique became the hotbed
            for the London interior design community.
          </p>
          <button className="px-6 py-3 text-black bg-white shadow-md hover:bg-gray-800 transition duration-300">
            Get in Touch
          </button>
        </div>
      </section>

      {/* Section 4: Features */}
      <section className="bg-gray-50 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            What makes our brand different
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-xl mx-auto px-9">
          {/* Feature 1 */}
          <div className="flex flex-col bg-white p-7 rounded-lg shadow-md">
            <TbTruckDelivery className="text-gray-900 text-4xl mb-2" />
            <h3 className="text-gray-700 mb-2">Next day as standard</h3>
            <p>Order before 3pm and get your order the next day as standard.</p>
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col bg-white p-9 rounded-lg shadow-md">
            <CiCircleCheck className="text-gray-900 text-4xl mb-2" />
            <h3 className="text-gray-700 mb-2">Made by true artisans</h3>
            <p>
              Handmade crafted goods made with real passion and craftsmanship.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="flex flex-col bg-white p-9 rounded-lg shadow-md">
            <CiCreditCard1 className="text-gray-900 text-4xl mb-2" />
            <h3 className="text-gray-700 mb-2">Unbeatable prices</h3>
            <p>
              For our materials and quality, you wont find better prices
              anywhere.
            </p>
          </div>
          {/* Feature 4 */}
          <div className="flex flex-col bg-white p-9 rounded-lg shadow-md">
            <LuSprout className="text-gray-900 text-4xl mb-2" />
            <h3 className="text-gray-700 mb-2">Recycled packaging</h3>
            <p>
              We use 100% recycled materials to ensure our footprint is more
              manageable.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Join the Club */}
      <section
        className="bg-cover bg-center text-center text-white py-16"
        style={{ backgroundImage: "url('/about3.png')" }}
      >
        <h2 className="text-3xl sm:text-4xl mb-4">
          Join the club and get the benefits
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Sign up for our newsletter and receive exclusive offers on new ranges,
          sales, pop-up stores, and more.
        </p>

        <div className="flex justify-center gap-4 mt-6 mb-6">
          <CiCircleCheck className="text-white text-2xl" />
          <span>Exclusive offers</span>
          <CiCircleCheck className="text-white text-2xl" />
          <span>Free events</span>
          <CiCircleCheck className="text-white text-2xl" />
          <span>Large discounts</span>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center ">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 w-80"
          />
          <button id='bg' className="px-4 py-2  text-white shadow-md hover:bg-gray-800 transition duration-300">
            Sign Up
          </button>
        </div>
      </section>
    </div>
  );
}
