"use client" 

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight, Menu, X } from "lucide-react"
import Image from "next/image"
import AboutDropdown from "./Grid/about"
import FocusDropdown from "./Grid/focus"
import IndustryDropdown from "./Grid/industry"
import ServicesDropdown from "./Grid/services"
import MethodologyDropdown from "./Grid/methodology"

export default function Header() {
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [hoveredLink, setHoveredLink] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const dropdownRef = useRef(null)
  const hoverTimeoutRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setShow(false)
        } else if (window.scrollY < lastScrollY || window.scrollY <= 100) {
          setShow(true)
        }
        setLastScrollY(window.scrollY)
      }
    }

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setHoveredLink(null)
      }
    }

    window.addEventListener("scroll", handleScroll)
    document.addEventListener("mousedown", handleClickOutside)
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside)
      // Clear any pending timeouts on unmount
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current)
      }
    }
  }, [lastScrollY])

  const handleMouseEnter = (link) => {
    // Clear any existing timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
    setHoveredLink(link)
  }

  const handleMouseLeave = () => {
    // Add small delay before closing dropdown to prevent flickering
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredLink(null)
    }, 100)
  }

  const navLinks = ['About', 'Focus', 'Industries', 'Services', 'Methodology', 'Work', 'Blogs']

  return (
    <header
      className={`w-full py-5 px-8 flex items-center justify-between bg-white  shadow-sm fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/logo.webp"
            alt="Optimum Tech Logo"
            width={160}
            height={45}
            className="mr-5"
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-6 md:px-10">
        {navLinks.map((link, index) => (
          <div 
            key={index}
            className="relative"
            onMouseEnter={() => handleMouseEnter(link)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href={`/${link.toLowerCase()}`}
              className="font-bold text-sm text-gray-700 hover:text-[#0D7A8A] transition-colors "
            >
              {link}
            </Link>

            {/* Dropdown for About section */}
            {link === 'About' && hoveredLink === 'About' && (
              <div 
                ref={dropdownRef}
                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 overflow-hidden w-120 max-w-4xl h-50  bg-white shadow-lg rounded-lg z-50 border border-gray-100"
                onMouseEnter={() => {
                  if (hoverTimeoutRef.current) {
                    clearTimeout(hoverTimeoutRef.current)
                  }
                  setHoveredLink('About')
                }}
                onMouseLeave={handleMouseLeave}
              >
                <div className="p-6">
                  <AboutDropdown />
                </div>
              </div>
            )}

            {/* Dropdown for Focus section */}
            {link === 'Focus' && hoveredLink === 'Focus' && (
              <div 
                ref={dropdownRef}
                className="w-120 max-w-4xl h-70 absolute top-full left-1/2 transform -translate-x-1/2 mt-4 overflow-hidden   bg-white shadow-lg rounded-lg z-50 border border-gray-100"
                onMouseEnter={() => {
                  if (hoverTimeoutRef.current) {
                    clearTimeout(hoverTimeoutRef.current)
                  }
                  setHoveredLink('Focus')
                }}
                onMouseLeave={handleMouseLeave}
              >
                <div className="p-6">
                  <FocusDropdown />
                </div>
              </div>
            )}

            {/* Dropdown for Industries section */}
            {link === 'Industries' && hoveredLink === 'Industries' && (
              <div 
                ref={dropdownRef}
                className="w-75 max-w-4xl h-65 absolute top-full left-1/2 transform -translate-x-1/2 mt-4 overflow-hidden   bg-white shadow-lg rounded-lg z-50 border border-gray-100"
                onMouseEnter={() => {
                  if (hoverTimeoutRef.current) {
                    clearTimeout(hoverTimeoutRef.current)
                  }
                  setHoveredLink('Industries')
                }}
                onMouseLeave={handleMouseLeave}
              >
                <div className="p-6">
                  <IndustryDropdown />
                </div>
              </div>
            )}

            {/* Dropdown for Services section */}
          {link === 'Services' && hoveredLink === 'Services' && (
              <div 
                ref={dropdownRef}
                className="w-110 max-w-4xl h-58 absolute top-full left-1/2 transform -translate-x-1/2  overflow-hidden   bg-white shadow-lg rounded-lg z-50 border border-gray-100"
                onMouseEnter={() => {
                  if (hoverTimeoutRef.current) {
                    clearTimeout(hoverTimeoutRef.current)
                  }
                  setHoveredLink('Services')
                }}
                onMouseLeave={handleMouseLeave}
              >
                <div className="p-6">
                  <ServicesDropdown />
                </div>
              </div>
            )}     


            {/* Dropdown for Services section */}
          {link === 'Methodology' && hoveredLink === 'Methodology' && (
              <div 
                ref={dropdownRef}
                className="w-110 max-w-4xl h-35 absolute top-full left-1/2 transform -translate-x-1/2  overflow-hidden   bg-white shadow-lg rounded-lg z-50 border border-gray-100"
                onMouseEnter={() => {
                  if (hoverTimeoutRef.current) {
                    clearTimeout(hoverTimeoutRef.current)
                  }
                  setHoveredLink('Methodology')
                }}
                onMouseLeave={handleMouseLeave}
              >
                <div className="p-6">
                  <MethodologyDropdown />
                </div>
              </div>
            )}     
          </div>
        ))}
      </nav>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 focus:outline-none"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-gray-700" />
          ) : (
            <Menu className="h-6 w-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50">
          <div className="flex flex-col p-4">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={`/${link.toLowerCase()}`}
                className="py-3 border-b border-gray-100 font-medium text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-4 bg-[#0D7A8A]  transition-colors text-white text-xs md:text-[9px] px-3 md:px-2 py-1 md:py-0.5 rounded-full flex items-center justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      )}

      {/* Contact Button - Desktop */}
      <div className="hidden md:block">
        <Link
          href="/contact"
          className="bg-[#0D7A8A] text-white px-3 py-2 rounded-full flex items-center transition-all hover:bg-[#0A6A78]"
        >
          Contact Us
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </header>
  )
}