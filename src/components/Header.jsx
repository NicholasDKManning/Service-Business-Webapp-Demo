'use client'

import Hamburger from 'hamburger-react';
import { useState } from 'react';
import myLogo from '../assets/images/NDKM-Logo-2.png';

function Header() {
    const [isOpen, setOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800 shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="#home" title="" className="inline-flex">
                            <span className="sr-only">NDKM logo</span>
                            <img className="w-auto h-8" src={myLogo} alt="NDKM Logo" />
                        </a>
                    </div>

                    {/* Page Title */}
                    <div className="absolute left-1/2 transform -translate-x-1/2">
                        <h1 className="text-white text-xl w-auto h-auto font-semibold">
                            Nick's Baby Sitting
                        </h1>
                    </div>

                    {/* PC Nav */}
                    <nav className="hidden lg:flex space-x-6 items-center">
                        <a href="#services" title="" className="text-base font-medium text-gray-400 duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:text-white transition"> Services </a>
                        <a href="#contact" title="" className="text-base font-medium text-gray-400 duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white hover:text-white transition"> Book Now </a>
                    </nav>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div
                        className="fixed inset-0 bg-opacity-50 z-40"
                        onClick={() => setOpen(false)}
                    />
                )}

                {/* Side Button Bar */}
                <div
                    className={`fixed top-0 right-0 h-full w-auto bg-gray-900 z-50 transform transition-transform duration-300 ease-in-out ${
                        isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                >
                    {/* Drawer Header w/ Hamburger Toggle */}
                    <div className="flex justify-end p-4">
                        <Hamburger toggled={isOpen} toggle={setOpen} color="#fff" size={20} />
                    </div>

                    {/* Drawer Links */}
                    <div className="flex flex-col items-start p-6 pt-0 space-y-6">
                        <a
                            href="#services"
                            onClick={() => setOpen(false)}
                            className="text-white text-lg hover:text-gray-300"
                        >
                            Services
                        </a>
                        <a
                            href="#contact"
                            onClick={() => setOpen(false)}
                            className="text-white text-lg hover:text-gray-300"
                        >
                            Book Now
                        </a>
                    </div>
                </div>

                {/* Mobile-only Hamburger (to open the drawer) */}
                <div className="fixed top-4 right-4 sm:hidden z-50">
                    {!isOpen && (
                    <Hamburger toggled={isOpen} toggle={setOpen} color="#fff" size={20} />
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header;