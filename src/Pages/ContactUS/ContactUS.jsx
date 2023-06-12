import React from 'react';
import { Fade } from 'react-reveal';

const ContactUS = () => {
    return (
        <div className="py-10 px-6">
        <Fade bottom cascade>
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
  
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full p-2 border border-gray-300 rounded-md"
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
  
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full p-2 border border-gray-300 rounded-md"
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
  
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-md"
                  id="message"
                  placeholder="Enter your message"
                ></textarea>
              </div>
  
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
                type="submit"
              >
                Submit
              </button>
            </form>
  
            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4">Contact Information</h2>
              <ul>
                <li>
                  <span className="font-bold">Email:</span> info@example.com
                </li>
                <li>
                  <span className="font-bold">Phone:</span> +1 123 456 7890
                </li>
                <li>
                  <span className="font-bold">Address:</span> 123 Main St, City, Country
                </li>
              </ul>
            </div>
          </div>
        </Fade>
        <div className="py-10 px-6 bg-gray-100">
      <div className="max-w-3xl mx-auto">
        <Fade bottom>
          <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
        </Fade>
        <div className="flex flex-col md:flex-row">
          <Fade bottom cascade>
            <div className="md:w-1/2 md:mr-6">
              <div className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4c3.93 0 7 3.07 7 7v4c0 3.93-3.07 7-7 7s-7-3.07-7-7V11c0-3.93 3.07-7 7-7z"
                  />
                </svg>
                <div>
                  <h4 className="text-lg font-bold mb-1">Address</h4>
                  <p className="text-gray-600">123 Main St, City, Country</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <div>
                  <h4 className="text-lg font-bold mb-1">Phone</h4>
                  <p className="text-gray-600">+1 123 456 7890</p>
                </div>
              </div>
            </div>
          </Fade>

          <Fade bottom cascade>
            <div className="md:w-1/2 md:ml-6 mt-6 md:mt-0">
              <div className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <div>
                  <h4 className="text-lg font-bold mb-1">Email</h4>
                  <p className="text-gray-600">info@example.com</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 2a2 2 0 100-4 2 2 0 000 4z"
                  />
                </svg>
                <div>
                  <h4 className="text-lg font-bold mb-1">Social Media</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="text-blue-500 hover:text-blue-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                    <a href="#" className="text-blue-500 hover:text-blue-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </a>
                    <a href="#" className="text-blue-500 hover:text-blue-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
      </div>
    );
};

export default ContactUS;