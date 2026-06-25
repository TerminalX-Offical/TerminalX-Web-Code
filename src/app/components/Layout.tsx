import { Link, Outlet, useLocation } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logoImage from "../../imports/image.png";
import gridBackground from "../../imports/image-1.png";
import FuturisticBackground from "./FuturisticBackground";
import { Menu, X, Github, Youtube } from "lucide-react";
import { useState } from "react";

export default function Layout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Troubleshoot", path: "/troubleshoot" },
    { name: "Download", path: "/download" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-black relative">
      {/* Grid Background */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${gridBackground})`,
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Futuristic Animated Background */}
      <FuturisticBackground />

      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 h-[70px] bg-black/90 backdrop-blur-sm border-b border-[#1A1A1A] flex items-center px-4 sm:px-8 z-50">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity" onClick={() => setMobileMenuOpen(false)}>
            <ImageWithFallback
              src={logoImage}
              alt="TerminalX Logo"
              className="w-8 h-8 sm:w-10 sm:h-10 brightness-150 contrast-125"
            />
            <span className="text-[#C0C0C0] text-lg sm:text-xl" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              TerminalX
            </span>
          </Link>

          {/* Desktop Navigation Links - Centered */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-[#C0C0C0] hover:bg-[#2A2A2A] px-3 py-2 rounded transition-colors ${
                  location.pathname === item.path ? 'bg-[#1A1A1A]' : ''
                }`}
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#C0C0C0] p-2 hover:bg-[#2A2A2A] rounded transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-[70px] left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-[#1A1A1A] z-40">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-[#C0C0C0] hover:bg-[#2A2A2A] px-4 py-3 rounded transition-colors ${
                  location.pathname === item.path ? 'bg-[#1A1A1A]' : ''
                }`}
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="relative z-0 pt-[70px]">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] border-t border-[#1A1A1A] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 sm:py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
            {/* Left Section - Copyright */}
            <div className="text-[#808080] text-sm sm:text-base text-center md:text-left" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              © 2026 TerminalX. All rights reserved.
            </div>

            {/* Center Section - Links */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <Link
                to="/troubleshoot"
                className="text-[#C0C0C0] hover:text-[#E0E0E0] transition-colors text-sm sm:text-base"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                Troubleshoot
              </Link>
              <Link
                to="/download"
                className="text-[#C0C0C0] hover:text-[#E0E0E0] transition-colors text-sm sm:text-base"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                Download
              </Link>
              <Link
                to="/contact"
                className="text-[#C0C0C0] hover:text-[#E0E0E0] transition-colors text-sm sm:text-base"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                Contact
              </Link>
            </div>

            {/* Right Section - Social Media */}
            <div className="flex gap-4 items-center">
              <a
                href="https://github.com/Mr-Erco"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C0C0C0] hover:text-[#E0E0E0] transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://x.com/OfficalMrErco"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C0C0C0] hover:text-[#E0E0E0] transition-colors"
                aria-label="X (Twitter)"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@Offical-Mr-Erco"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C0C0C0] hover:text-[#E0E0E0] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
