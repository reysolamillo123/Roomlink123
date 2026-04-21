import { ArrowRight, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";
import roomlinkLogo from "../../assets/roomlink1.png";

const footerLinks = {
  Product: ["Features", "Pricing", "Changelog", "Roadmap"],
  Company: ["About", "Blog", "Careers", "Press"],
  Support: ["Help Center", "Contact Us", "Privacy Policy", "Terms of Service"],
};

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      {/* Final CTA Strip */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center">
          <p
            className="text-sky-400 mb-3"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.85rem", letterSpacing: "0.08em", textTransform: "uppercase" }}
          >
            Get Started Today
          </p>
          <h2
            className="text-white mb-5"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3.25rem)", letterSpacing: "-0.02em", lineHeight: 1.15 }}
          >
            Get Started with RoomLink
          </h2>
          <p
            className="text-slate-400 mb-8 max-w-lg mx-auto"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", lineHeight: 1.7 }}
          >
            Join over 50,000 people who have found their perfect space — or filled their vacancies — with RoomLink. It's free to get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-white px-8 py-3.5 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-sky-900/50 hover:-translate-y-0.5"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.95rem" }}
            >
              Find a Room
              <ArrowRight size={16} />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white px-8 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.95rem" }}
            >
              List Your Property
            </a>
          </div>
        </div>
      </div>

      {/* Footer Nav */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div>
              <img src={roomlinkLogo} alt="RoomLink Logo" className="w-11 h-11 object-contain drop-shadow-sm rounded" />
              </div>
              <span className="text-white" style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "1.05rem" }}>RoomLink</span>
            </div>
            <p className="text-slate-500 mb-5" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.85rem", lineHeight: 1.7 }}>
              The premium marketplace connecting tenants and landlords worldwide.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p
                className="text-white mb-4"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.85rem" }}
              >
                {group}
              </p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-500 hover:text-slate-300 transition-colors duration-200"
                      style={{ fontFamily: "Inter, sans-serif", fontSize: "0.85rem" }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8rem" }}>
            © 2026 RoomLink, Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-slate-600 hover:text-slate-400 transition-colors duration-200"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8rem" }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
