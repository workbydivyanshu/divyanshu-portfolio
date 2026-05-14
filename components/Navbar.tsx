"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Work", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a192f]/90 backdrop-blur-md shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-[70px] flex items-center justify-between">
        <a
          href="#"
          className="text-[#64ffda] font-mono text-lg font-bold tracking-wider hover:text-[#64ffda]/80 transition-colors"
        >
          &lt;/dg&gt;
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-mono text-[#ccd6f6] hover:text-[#64ffda] transition-colors relative group"
            >
              <span className="text-[#64ffda] mr-1">#</span>
              {link.name}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-[#64ffda] text-[#64ffda] rounded text-sm font-mono hover:bg-[#64ffda]/10 transition-colors"
          >
            Resume
          </a>
        </div>

        <button
          className="md:hidden text-[#64ffda]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-[#112240] border-t border-[#233554] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-mono text-[#ccd6f6] hover:text-[#64ffda] transition-colors"
            >
              <span className="text-[#64ffda] mr-1">#</span>
              {link.name}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-[#64fada] text-[#64ffda] rounded text-sm font-mono text-center hover:bg-[#64ffda]/10 transition-colors"
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
}
