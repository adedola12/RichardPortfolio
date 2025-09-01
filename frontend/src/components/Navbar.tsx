import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const linkClass = ({ isActive }) =>
  [
    "block px-2 py-1 text-sm transition-colors",
    isActive ? "text-white" : "text-gray-300 hover:text-white",
  ].join(" ");

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        {/* glossy/gradient bar */}
        <div className="relative mt-4 flex h-16 items-center justify-between rounded-xl border border-white/10 bg-gradient-to-b from-neutral-900 to-black/70 px-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
          {/* left: logo */}
          <Link to="/" className="shrink-0" onClick={() => setOpen(false)}>
            <img
              src={assets.logo1}
              alt="Richard Enoch"
              className="w-28 h-auto"
            />
          </Link>

          {/* center: nav links (desktop only) */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 md:block">
            <ul className="flex items-center gap-10">
              <li>
                <NavLink to="/products" className={linkClass}>
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/company" className={linkClass}>
                  Company
                </NavLink>
              </li>
              <li>
                <NavLink to="/pricing" className={linkClass}>
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={linkClass}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* right: buttons (desktop only) */}
          <div className="ml-auto hidden items-center gap-3 md:flex">
            <Link
              to="/pricing"
              className="rounded-lg px-4 py-2 text-sm text-lime-400 ring-1 ring-lime-500/60 hover:bg-lime-500/10 transition-colors"
            >
              Rate Card
            </Link>
            <Link
              to="/contact"
              className="rounded-lg px-4 py-2 text-sm text-black bg-gradient-to-b from-lime-400 to-lime-600 ring-1 ring-lime-500/60 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] hover:brightness-110 transition"
            >
              Contact
            </Link>
          </div>

          {/* mobile: hamburger */}
          <button
            type="button"
            className="ml-2 inline-flex items-center justify-center rounded-lg p-2 text-gray-300 hover:text-white hover:bg-white/5 md:hidden transition"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {/* hamburger icon */}
            <svg
              className={`h-6 w-6 ${
                open ? "opacity-0 scale-90 absolute" : "opacity-100 scale-100"
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
            {/* close icon */}
            <svg
              className={`h-6 w-6 ${
                open ? "opacity-100 scale-100" : "opacity-0 scale-90 absolute"
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* mobile dropdown panel */}
        <div
          className={[
            "md:hidden overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-neutral-900 to-black/70",
            "transition-[max-height,opacity] duration-300 ease-out",
            open ? "mt-2 max-h-[420px] opacity-100" : "max-h-0 opacity-0",
          ].join(" ")}
        >
          <nav className="px-4 pt-3 pb-2">
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/products"
                  className={linkClass}
                  onClick={() => setOpen(false)}
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/company"
                  className={linkClass}
                  onClick={() => setOpen(false)}
                >
                  Company
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/pricing"
                  className={linkClass}
                  onClick={() => setOpen(false)}
                >
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={linkClass}
                  onClick={() => setOpen(false)}
                >
                  Contact
                </NavLink>
              </li>
            </ul>

            {/* buttons stacked */}
            <div className="mt-4 flex flex-col gap-2 pb-4">
              <Link
                to="/pricing"
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-2 text-center text-sm text-lime-400 ring-1 ring-lime-500/60 hover:bg-lime-500/10 transition-colors"
              >
                Rate Card
              </Link>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-2 text-center text-sm text-black bg-gradient-to-b from-lime-400 to-lime-600 ring-1 ring-lime-500/60 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] hover:brightness-110 transition"
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
