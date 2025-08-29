import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10 space-y-8">
        {/* Top section: logo + nav + social */}
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Logo */}
          <Link to="/" className="shrink-0">
            <img
              src={assets.logo1}
              alt="Richard Enoch Logo"
              className="h-10"
            />
          </Link>

          {/* Navigation */}
          <nav>
            <ul className="flex flex-wrap items-center gap-6 text-sm font-medium text-gray-300">
              <li><NavLink to="/" className="hover:text-white">Home</NavLink></li>
              <li><NavLink to="/project" className="hover:text-white">Projects</NavLink></li>
              <li><NavLink to="/samples" className="hover:text-white">Samples</NavLink></li>
              <li><NavLink to="/about" className="hover:text-white">About</NavLink></li>
              <li><NavLink to="/rateCard" className="hover:text-white">Rate Card</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-white">Contact</NavLink></li>
            </ul>
          </nav>

          {/* Social */}
          <div className="flex items-center gap-3">
            <span className="text-sm mr-2 text-white">Stay Connected</span>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-md border border-white/20 bg-black hover:bg-lime-500 hover:text-black text-lime-500 transition"
            >
              <FaFacebookF size={14} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-md border border-white/20 bg-black hover:bg-lime-500 hover:text-black text-lime-500 transition"
            >
              <FaTwitter size={14} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-md border border-white/20 bg-black hover:bg-lime-500 hover:text-black text-lime-500 transition"
            >
              <FaLinkedinIn size={14} />
            </a>
          </div>
        </div>

        <hr className="border-white/10" />

        {/* Contact row */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-lime-500" />
              <span className="text-sm">des.richardenoch@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-lime-500" />
              <span className="text-sm">+234 903 852 2066</span>
            </div>
          </div>

          <p className="text-sm text-gray-500">
            © 2025 Richard Enoch. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
