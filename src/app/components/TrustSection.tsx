import { ShieldCheck, Lock, BadgeCheck, Eye, FileText, Headphones } from "lucide-react";
import { motion } from "framer-motion";
import roomSecure from "../../assets/landlord.png";

const trustItems = [
  {
    icon: BadgeCheck,
    title: "Landlord Certifications",
    description: "Aspiring landlords complete a comprehensive certification program to ensure they meet all legal requirements and best practices for property management.",
  },
  {
    icon: Lock,
    title: "Secure Payments",
    description: "All transactions are encrypted and deposits are held securely until move-in is confirmed.",
  },
  {
    icon: Eye,
    title: "Transparent Listings",
    description: "What you see is what you get. No hidden fees, no bait-and-switch. Every detail is disclosed upfront.",
  },
  {
    icon: FileText,
    title: "Legal Protection",
    description: "Digital leases are legally binding and stored securely in your account for easy reference anytime.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our support team is available around the clock to help with any questions or concerns.",
  },
  {
    icon: ShieldCheck,
    title: "Platform Guarantee",
    description: "If a listing misrepresents itself, we provide a full refund and help you find an alternative.",
  },
];

export function TrustSection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-sky-100 to-sky-50" id="trust">
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image + overlay */}
          <div className="relative w-full block md:hidden lg:block">
            <motion.div className="rounded-2xl overflow-hidden shadow-xl shadow-slate-100" animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
              <img
                src={roomSecure}
                alt="Trust and security"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-900/30 to-transparent rounded-2xl" />
            </motion.div>

            {/* Floating trust badge */}
            <motion.div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-slate-100 p-5" animate={{ y: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center shrink-0">
                  <ShieldCheck size={22} className="text-sky-500" />
                </div>
                <div>
                  <p className="text-slate-900" style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "0.95rem" }}>
                    99.8% Safe Transaction Rate
                  </p>
                  <p className="text-slate-400 mt-0.5" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8rem" }}>
                    Every booking is protected by RoomLink's guarantee
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Content */}
          <div>
            <p
              className="text-sky-500 mb-3"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.85rem", letterSpacing: "0.08em", textTransform: "uppercase" }}
            >
              Trust & Safety
            </p>
            <motion.h2
              className="text-slate-900 mb-5"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}
            >
              Your safety is our <span className="text-sky-500">highest priority</span>
            </motion.h2>
            <p
              className="text-slate-500 mb-10"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", lineHeight: 1.7 }}
            >
              We've built RoomLink from the ground up with trust at the center. Every feature, every interaction, is designed to keep you protected.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {trustItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    className="bg-white rounded-xl border border-slate-100 p-4 flex items-start gap-3 shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -8, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
                    viewport={{ once: true }}
                    animate={{ y: [0, -4, 0] }}
                    transition={{
                      default: { duration: 0.5, type: "spring", stiffness: 100 },
                      y: { duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: index * 0.15 }
                    }}
                  >
                    <motion.div
                      className="w-9 h-9 rounded-lg bg-sky-50 flex items-center justify-center shrink-0 mt-0.5"
                      whileHover={{ scale: 1.15, rotate: 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon size={16} className="text-sky-500" />
                    </motion.div>
                    <div>
                      <p
                        className="text-slate-900"
                        style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.875rem" }}
                      >
                        {item.title}
                      </p>
                      <p
                        className="text-slate-500 mt-1"
                        style={{ fontFamily: "Inter, sans-serif", fontSize: "0.82rem", lineHeight: 1.65 }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Trust logos row */}
            <div className="mt-10 pt-8 border-t border-slate-100">
              <p className="text-slate-400 mb-4" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.78rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                Certified & Compliant
              </p>
              <div className="flex flex-wrap gap-3">
                {["SSL Secured", "GDPR Compliant", "PCI DSS", "ISO 27001"].map((badge) => (
                  <div
                    key={badge}
                    className="bg-slate-50 border border-slate-100 rounded-lg px-4 py-2 text-slate-500"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "0.78rem", fontWeight: 600 }}
                  >
                    {badge}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}