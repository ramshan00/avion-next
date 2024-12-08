"use client";

import Image from "next/image"; // Import Image from next/image
import React from "react";

export default function Products() {
  return (
    <div className="space-y-6">
      {/* Banner Section */}
      <div
        className="relative bg-cover bg-center h-72"
        style={{ backgroundImage: "url('/aprobanner.avif')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute bottom-0 left-0 text-white p-6">
          <h1 className="text-4xl ">All Products</h1>
        </div>
      </div>

      {/* Filters and Sorting */}
      <div className="flex flex-wrap justify-between p-4">
        <div className="flex flex-wrap space-x-4 w-full sm:w-auto">
          <div className="w-full sm:w-auto">
            <label className="block text-sm font-semibold">Category</label>
            <select className="mt-2 p-2 border rounded-md w-full sm:w-auto">
              <option value="all">All</option>
              <option value="cat1">Category 1</option>
              <option value="cat2">Category 2</option>
            </select>
          </div>
          <div className="w-full sm:w-auto">
            <label className="block text-sm font-semibold">Product Type</label>
            <select className="mt-2 p-2 border rounded-md w-full sm:w-auto">
              <option value="all">All</option>
              <option value="type1">Type 1</option>
              <option value="type2">Type 2</option>
            </select>
          </div>
          <div className="w-full sm:w-auto">
            <label className="block text-sm font-semibold">Price</label>
            <select className="mt-2 p-2 border rounded-md w-full sm:w-auto">
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
          </div>
          <div className="w-full sm:w-auto">
            <label className="block text-sm font-semibold">Brand</label>
            <select className="mt-2 p-2 border rounded-md w-full sm:w-auto">
              <option value="all">All</option>
              <option value="brand1">Brand 1</option>
              <option value="brand2">Brand 2</option>
            </select>
          </div>
        </div>

        {/* Sorting Dropdown */}
        <div className="flex items-center mt-4 sm:mt-0 sm:flex-wrap">
          <label className="text-sm font-semibold mr-2">Sorting by:</label>
          <select className="p-2 border rounded-md">
            <option value="date-added">Date Added</option>
            <option value="popularity">Popularity</option>
          </select>
        </div>
      </div>

      {/* Image Grid Section */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        <div className="col-span-1">
          <a href="/single-product">
            <Image
              className="w-full h-full object-cover"
              src="/pc1.png"
              alt="Product 1"
              width={300}
              height={300}
              priority
            />
          </a>
        </div>
        <div className="col-span-1">
          <a href="/single-product">
            <Image
              className="w-full h-full object-cover"
              src="/pc2.png"
              alt="Product 2"
              width={300}
              height={300}
            />
          </a>
        </div>
        <div className="col-span-1">
          <a href="/single-product">
            <Image
              className="w-full h-full object-cover"
              src="/pc3.png"
              alt="Product 3"
              width={300}
              height={300}
            />
          </a>
        </div>
        <div className="col-span-1">
          <a href="/single-product">
            <Image
              className="w-full h-full object-cover"
              src="/pc4.png"
              alt="Product 4"
              width={400}
              height={400}
            />
          </a>
        </div>
        <div className="col-span-1">
          <a href="/single-product">
            <Image
              className="w-full h-full object-cover"
              src="/pc5.png"
              alt="Product 5"
              width={400}
              height={400}
              priority
            />
          </a>
        </div>
        <div className="col-span-1">
          <a href="/single-product">
            <Image
              className="w-full h-full object-cover"
              src="/pc6.png"
              alt="Product 6"
              width={400}
              height={400}
            />
          </a>
        </div>
        <div className="col-span-1">
          <a href="/single-product">
            <Image
              className="w-full h-full object-cover"
              src="/pc7.png"
              alt="Product 7"
              width={400}
              height={400}
            />
          </a>
        </div>
        <div className="col-span-1">
          <a href="/single-product">
            <Image
              className="w-full h-full object-cover"
              src="/pc8.png"
              alt="Product 8"
              width={400}
              height={400}
            />
          </a>
        </div>
        <div className="col-span-1">
          <a href="/single-product">
            <Image
              className="w-full h-full object-cover"
              src="/pc1.png"
              alt="Product 9"
              width={400}
              height={400}
              priority
            />
          </a>
        </div>
        <div className="col-span-1">
          <a href="/single-product">
            <Image
              className="w-full h-full object-cover"
              src="/pc2.png"
              alt="Product 10"
              width={400}
              height={400}
            />
          </a>
        </div>
        <div className="col-span-1">
          <a href="/single-product">
            <Image
              className="w-full h-full object-cover"
              src="/pc3.png"
              alt="Product 11"
              width={400}
              height={400}
            />
          </a>
        </div>
        <div className="col-span-1">
          <a href="/single-product">
            <Image
              className="w-full h-full object-cover"
              src="/pc4.png"
              alt="Product 12"
              width={400}
              height={400}
            />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        <div className="col-span-1">
          <Image
            className="w-full h-full object-cover"
            src="/pc1.png"
            alt="Product 1"
            width={300}
            height={300}
            priority
          />
        </div>
        <div className="col-span-1">
          <Image
            className="w-full h-full object-cover"
            src="/pc2.png"
            alt="Product 2"
            width={300}
            height={300}
          />
        </div>
        <div className="col-span-1">
          <Image
            className="w-full h-full object-cover"
            src="/pc3.png"
            alt="Product 3"
            width={300}
            height={300}
          />
        </div>
        <div className="col-span-1">
          <Image
            className="w-full h-full object-cover"
            src="/pc4.png"
            alt="Product 4"
            width={400}
            height={400}
          />
        </div>
        <div className="col-span-1">
          <Image
            className="w-full h-full object-cover"
            src="/pc5.png"
            alt="Product 5"
            width={400}
            height={400}
            priority
          />
        </div>
        <div className="col-span-1">
          <Image
            className="w-full h-full object-cover"
            src="/pc6.png"
            alt="Product 6"
            width={400}
            height={400}
          />
        </div>
        <div className="col-span-1">
          <Image
            className="w-full h-full object-cover"
            src="/pc7.png"
            alt="Product 7"
            width={400}
            height={400}
          />
        </div>
        <div className="col-span-1">
          <Image
            className="w-full h-full object-cover"
            src="/pc8.png"
            alt="Product 8"
            width={400}
            height={400}
          />
        </div>
        <div className="col-span-1">
          <Image
            className="w-full h-full object-cover"
            src="/pc1.png"
            alt="Product 9"
            width={400}
            height={400}
            priority
          />
        </div>
        <div className="col-span-1">
          <Image
            className="w-full h-full object-cover"
            src="/pc2.png"
            alt="Product 10"
            width={400}
            height={400}
          />
        </div>
        <div className="col-span-1">
          <Image
            className="w-full h-full object-cover"
            src="/pc3.png"
            alt="Product 11"
            width={400}
            height={400}
          />
        </div>
        <div className="col-span-1">
          <Image
            className="w-full h-full object-cover"
            src="/pc4.png"
            alt="Product 12"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}
