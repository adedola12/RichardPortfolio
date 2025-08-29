// src/components/Navbar.jsx
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const linkClass = ({ isActive }) =>
  [
    "text-sm transition-colors",
    isActive ? "text-white" : "text-gray-300 hover:text-white",
  ].join(" ");

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        {/* glossy/gradient bar */}
        <div className="relative mt-4 flex h-16 items-center justify-between rounded-xl border border-white/10 bg-gradient-to-b from-neutral-900 to-black/70 px-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
          {/* left: logo */}
          <Link to="/" className="shrink-0">
            <img
              src={assets.logo1}
              alt="Richard Enoch"
              className="w-28 h-auto"
            />
          </Link>

          {/* center: nav links (absolute centered) */}
          <nav className="absolute left-1/2 -translate-x-1/2">
            <ul className="flex items-center gap-10">
              <li><NavLink to="/products" className={linkClass}>Products</NavLink></li>
              <li><NavLink to="/company"  className={linkClass}>Company</NavLink></li>
              <li><NavLink to="/pricing"  className={linkClass}>Pricing</NavLink></li>
              <li><NavLink to="/contact"  className={linkClass}>Contact</NavLink></li>
            </ul>
          </nav>

          {/* right: buttons */}
          <div className="ml-auto flex items-center gap-3">
            {/* outline green */}
            <Link
              to="/pricing"
              className="rounded-lg px-4 py-2 text-sm text-lime-400 ring-1 ring-lime-500/60 hover:bg-lime-500/10 transition-colors"
            >
              Rate Card
            </Link>

            {/* filled green */}
            <Link
              to="/contact"
              className="rounded-lg px-4 py-2 text-sm text-black bg-gradient-to-b from-lime-400 to-lime-600 ring-1 ring-lime-500/60 shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset] hover:brightness-110 transition"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
