import React from 'react'

export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" src="data:image/jpeg;base64,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" alt="product_image1" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        4.0
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    <a
                        href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    );
}
