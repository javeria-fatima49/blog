import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export default function CustomFooter() {
  return (
    <footer className="bg-teal-800 text-white p-4 py-12 px-6 sm:px-16 md:px-32">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        <div>
          <h1 className="text-3xl font-bold ">
            <span className="text-teal-400">Javeria&apos;s</span>{" "}
            <span className="text-gray-300">Blog</span>
          </h1>
          <p className="mt-4 text-sm text-gray-400">
            Innovating the future with tech insights and blogs.
          </p>
          <Link href="/contact" className="hover:text-teal-400">
                Contact Us
              </Link>
          <div className="flex gap-4">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
            >
             <FaGithub className="w-6 h-6"/>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-0 hover:text-blue-600 transition-colors"
            >
            <FaLinkedin className="w-6 h-6"/>
            </Link>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold ">Stay Updated</h4>
          <p className="mt-4 text-sm text-gray-400">
            Get the latest news, blogs, and updates directly to your inbox.
          </p>
          <form className="mt-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-60 px-4 py-2 text-black border border-gray-300 rounded focus:outline-teal-700 focus:border-teal-700"
            />
            <button
              type="submit"
              className=" w-60 bg-teal-800 text-white py-2 rounded hover:bg-teal-900"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mt-4 text-center text-sm text-gray-400">
        © 2024 Javeria&apos;s Blog. All Rights Reserved.
      </div>
    </footer>
  );
}
