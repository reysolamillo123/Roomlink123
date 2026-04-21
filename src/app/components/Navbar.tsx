import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import roomlinkLogo from "../../assets/roomlink1.png";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "For Tenants", href: "#for-tenants" },
  { label: "For Landlords", href: "#for-landlords" },
  { label: "Trust & Safety", href: "#trust" },
];

function scrollTo(href: string, closeMenu?: () => void) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  closeMenu?.();
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group cursor-pointer">
            <div>
              <img src={roomlinkLogo} alt="RoomLink Logo" className="w-11 h-11 object-contain drop-shadow-sm rounded-md" />
            </div>
            <span className="text-lg font-bold text-slate-900 bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-sky-500 group-hover:from-sky-700 group-hover:to-sky-600 transition-all duration-200">
              RoomLink
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
                className="text-slate-500 hover:text-slate-900 transition-colors duration-200 cursor-pointer"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem", fontWeight: 500 }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#"
              className="text-slate-600 hover:text-slate-900 transition-colors duration-200 px-4 py-2"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem", fontWeight: 500 }}
            >
              Sign in
            </a>
            <a
              href="#"
              className="bg-sky-500 hover:bg-sky-600 text-white px-5 py-2 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-sky-200"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem", fontWeight: 600 }}
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-slate-600 hover:text-slate-900 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            className="md:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-3"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => { e.preventDefault(); scrollTo(item.href, () => setMenuOpen(false)); }}
                className="block text-slate-600 hover:text-slate-900 transition-colors py-2 cursor-pointer"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem", fontWeight: 500 }}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="#"
                className="text-center text-slate-600 hover:text-slate-900 transition-colors py-2"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
              >
                Sign in
              </a>
              <a
                href="#"
                className="text-center bg-sky-500 hover:bg-sky-600 text-white px-5 py-2.5 rounded-full transition-all duration-200"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}