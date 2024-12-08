import Image from "next/image";
import { TbTruckDelivery } from "react-icons/tb";
import { CiCircleCheck, CiCreditCard1 } from "react-icons/ci";
import { LuSprout } from "react-icons/lu";

export default function HomePage() {
  return (
    <div>
      {/* Section1 Banner */}
      <section className="container bg-white border-2 border-gray-200 mt-10 mx-auto ">
        {/* Text Box */}
        <div
          id="bg"
          className="flex flex-col lg:flex-row bg-blue-950 text-white"
        >
          <div className="p-9">
            <h1 className="text-3xl lg:text-3xl  mt-6">
              The furniture brand for the <br />
              future, with timeless designs
            </h1>{" "}
            <br />
            <div className="flex space-x-4">
              <button className="px-6 py-2 mb-48 bg-gray-400 bg-opacity-20 text-white rounded hover:bg-gray-800 transition">
                View Collection
              </button>
            </div>
            <p className="pt-9">
              A new era in eco-friendly furniture with Avelon, the French luxury
              retail brand <br />
              with nice fonts, tasteful colors, and a beautiful way to display
              things digitally using modern web technologies.
            </p>
          </div>
          <div className="hidden lg:block">
            <Image
              src="/bannerr.png"
              alt="Furniture Banner"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 2: Features */}
      <section className="bg-gray-50 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-gray-900">
            What makes our brand different
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-xl mx-auto px-9">
          {/* Feature 1 */}
          <div className="flex flex-col bg-white p-7 rounded-lg shadow-md">
            <TbTruckDelivery className="text-gray-900 text-4xl mb-2" />
            <h3 className="text-gray-700 mb-2">Next day as standard</h3>
            <p>Order before 3pm and get your order the next day as standard</p>
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col bg-white p-9 rounded-lg shadow-md">
            <CiCircleCheck className="text-gray-900 text-4xl mb-2" />
            <h3 className="text-gray-700 mb-2">Made by true artisans</h3>
            <p>
              Handmade crafted goods made with real passion and craftsmanship
            </p>
          </div>
          {/* Feature 3 */}
          <div className="flex flex-col bg-white p-9 rounded-lg shadow-md">
            <CiCreditCard1 className="text-gray-900 text-4xl mb-2" />
            <h3 className="text-gray-700 mb-2">Unbeatable prices</h3>
            <p>
              For our materials and quality you wont find better prices
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

      {/* Section 3: New Ceramics */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-black mb-8">New Ceramics</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="overflow-hidden  shadow-md hover:shadow-xl transition-shadow">
              <Image
                src="/product1.png"
                alt="Ceramic 1"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden  shadow-md hover:shadow-xl transition-shadow">
              <Image
                src="/product2.png"
                alt="Ceramic 2"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden  shadow-md hover:shadow-xl transition-shadow">
              <Image
                src="/product3.png"
                alt="Ceramic 3"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden  shadow-md hover:shadow-xl transition-shadow">
              <Image
                src="/product4.png"
                alt="Ceramic 4"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="px-8 py-3 bg-gray-200 text-black  rounded hover:bg-gray-300 transition">
              View Collection
            </button>
          </div>
        </div>
        <h2 className="text-3xl mb-4 px-11">You might also love these</h2>
        <div className="container mx-auto mt-2 flex flex-col items-center">
        
        <div className="flex flex-wrap justify-center gap-4">
          {/* Rectangle Image */}
          <Image
            src="/sp1.png"
            width={600}
            height={600}
            alt="Poplar Sofa"
            className="w-auto h-full object-cover flex-shrink-0"
          />

          {/* Top Right Image */}
          <Image
            src="/sp2.png"
            width={100}
            height={100}
            alt="Dandy Chair"
            className="w-72 h-auto object-cover flex-shrink-0"
          />

          {/* Bottom Right Image */}
          <Image
            src="/sp3.png"
            width={100}
            height={100}
            alt="Dandy Chair"
            className="w-72 h-auto object-cover flex-shrink-0"
          />
        </div>
      </div>
        {/* Section 5: Join the Club */}
        <section id="contact"className="bg-white text-center text-black py-16">
          <h2 className="text-3xl sm:text-4xl mb-4">
            Join the club and get the benefits
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Sign up for our newsletter and receive exclusive offers on new
            ranges, sales, pop-up stores, and more.
          </p>

          <div className="flex justify-center gap-4 mt-6 mb-6">
            <CiCircleCheck className="text-black text-2xl" />
            <span>Exclusive offers</span>
            <CiCircleCheck className="text-black text-2xl" />
            <span>Free events</span>
            <CiCircleCheck className="text-black text-2xl" />
            <span>Large discounts</span>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center ">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-80"
            />
            <button
              id="bg"
              className="px-4 py-2  text-white shadow-md hover:bg-gray-800 transition duration-300"
            >
              Sign Up
            </button>
          </div>
        </section>
        {/* Blog */}
        <section id='blog' className="py-8 px-8 sm:px-12 lg:px-20 flex flex-col lg:flex-row items-center">
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
              live, breathe, and design, so our Chelsea boutique became the
              hotbed for the London interior design community.
            </p>
            <button className="px-6 py-3 text-black bg-white shadow-md hover:bg-gray-800 transition duration-300">
              Get in Touch
            </button>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 mt-8 lg:mt-0 px-8">
            <Image
              src="/about1.png"
              alt="Story Image"
              className="w-full shadow-lg"
              width={400}
              height={200}
            />
          </div>
        </section>
      </section>
    </div>
  );
}
