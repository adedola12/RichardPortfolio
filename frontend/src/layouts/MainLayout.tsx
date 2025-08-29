import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

// MainLayout.jsx
export default function MainLayout() {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[8vw]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
