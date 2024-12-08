import Image from "next/image";
import { CiCircleCheck, CiCreditCard1 } from "react-icons/ci";
import { LuSprout } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Product Section */}
      <div className="container mx-auto p-4 lg:flex lg:space-x-10">
        {/* Product Image */}
        <div className="lg:w-1/2">
          <Image
            src="/chair.png"
            width={400}
            height={200}
            alt="The Dandy Chair"
            className="w-full object-cover rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="lg:w-1/2 mt-4 lg:mt-0">
          <h1 className="text-3xl  text-gray-600">The Dandy Chair</h1>
          <p className="text-2xl text-gray-600 mt-2">£250</p>

          <h1 className="text-2x1   text-gray-500">Product description</h1>
          <p className="mt-4 text-gray-500">
            <br />A timeless design, with premium materials features as one of
            our most popular and iconic pieces. The dandy chair is perfect for
            any stylish living space with beech legs and lambskin leather
            upholstery.
          </p>
          {/* Dimensions */}
          <div className="mt-6">
            <h2 className="text-lg">Dimensions</h2>
            <table className="text-gray-500 mt-2">
              <thead>
                <tr>
                  <th className="p-4">Height</th>
                  <th className="p-4">Width</th>
                  <th className="p-4">Depth</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4">110cm</td>
                  <td className="p-4">75cm</td>
                  <td className="p-4">50cm</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Quantity & Buttons */}
          <div className="mt-6 mb-5 flex items-center ">
            <h3>Quantity</h3>
          </div>

          <div>
            <input
              type="number"
              min="1"
              defaultValue="1"
              className="border p-2  rounded w-20"
            />
          </div>
          <div className="space-x-4 py-28">
            <button
              id="bg"
              className=" text-white px-4 py-2  hover:bg-gray-700"
            >
              Add to cart
            </button>
            <button className="border border-gray-500 px-4 py-2  hover:bg-gray-800 hover:text-white">
              Save to favorites
            </button>
          </div>
        </div>
      </div>

      {/* Suggested Items */}
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

      {/* Section 3: New Ceramics */}
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
      {/* section last */}
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
    </div>
  );
}
