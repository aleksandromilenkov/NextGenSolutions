import { useEffect, useState } from "react";
import { navLinks } from "../constants";
import { HiOutlineMenu, HiX } from "react-icons/hi"; // Optional: heroicons

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner flex items-center justify-between px-4 py-3 md:px-10">
        <div style={{ width: "10rem" }}>
          <a href="#hero" className="logo">
            <img
              style={{ width: "100%", height: "100%" }}
              src="/images/logos/nextGenLogo2.png"
              alt="Logo"
            />
          </a>
        </div>
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link} className="relative">
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#contact" className="hidden md:block contact-btn group">
          <div className="inner">
            <span>Contact us</span>
          </div>
        </a>
        <button
          className="md:hidden z-50 text-white text-3xl hover:cursor-pointer"
          onClick={() => setMenuOpen(true)}
          aria-label="Open Menu"
        >
          <HiOutlineMenu />
        </button>
      </div>
      {menuOpen && (
        <div className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center h-screen w-screen">
          <button
            className="absolute top-6 right-6 text-white text-3xl hover:cursor-pointer"
            onClick={() => setMenuOpen(false)}
            aria-label="Close Menu"
          >
            <HiX />
          </button>
          <ul className="space-y-6 text-white text-2xl font-semibold text-center">
            {navLinks.map(({ link, name }) => (
              <li key={name}>
                <a
                  href={link}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-gray-300 transition"
                >
                  {name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="inline-block mt-6 px-6 py-2 border border-white rounded hover:bg-white hover:text-black transition"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
