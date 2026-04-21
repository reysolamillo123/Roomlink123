import { Check } from "lucide-react";
import { motion } from "framer-motion";

const tenantImg = "https://images.unsplash.com/photo-1497898871738-28f5fb9b275c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5hbnQlMjBtb3ZpbmclMjBpbnRvJTIwbmV3JTIwcm9vbSUyMGFwYXJ0bWVudHxlbnwxfHx8fDE3NzY1NzQxNTl8MA&ixlib=rb-4.1.0&q=80&w=1080";
const landlordImg = "https://images.unsplash.com/photo-1729855637715-99192904aac5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kbG9yZCUyMHNob3dpbmclMjBwcm9wZXJ0eSUyMGtleXN8ZW58MXx8fHwxNzc2NTc0MTU5fDA&ixlib=rb-4.1.0&q=80&w=1080";

const tenantBenefits = [
  "Discover thousands of verified listings",
  "Seamless, secure booking flow",
  "Direct messaging with landlords",
  "Save favorites and compare rooms",
  "Move-in ready support & guides",
];

const landlordBenefits = [
  "Access to verified, pre-screened tenants",
  "Simple, guided listing process",
  "Smart dashboard to manage properties",
  "Automated rent collection tools",
  "Real-time booking notifications",
];

function BenefitList({ items, color }: { items: string[]; color: string }) {
  return (
    <ul className="space-y-3 mt-5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <div className={`w-5 h-5 rounded-full ${color} flex items-center justify-center mt-0.5 shrink-0`}>
            <Check size={11} className="text-white" strokeWidth={3} />
          </div>
          <span
            className="text-slate-600"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem", lineHeight: 1.6 }}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function ValuePropSection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-sky-100 to-sky-50">
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-sky-500 mb-3"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.85rem", letterSpacing: "0.08em", textTransform: "uppercase" }}
          >
            Built for Everyone
          </p>
          <motion.h2
            className="text-slate-900"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}
          >
            Whether you're renting or listing
          </motion.h2>
          <p
            className="text-slate-700 mt-4 max-w-lg mx-auto"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", lineHeight: 1.7 }}
          >
            RoomLink is designed to deliver value on both sides of the marketplace — making every transaction smoother and more transparent.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Tenants Card */}
          <motion.div
            id="for-tenants"
            className="group rounded-2xl border border-slate-100 overflow-hidden shadow-sm bg-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -12, boxShadow: "0 25px 50px rgba(0,0,0,0.12)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          >
            <motion.div className="relative h-32 sm:h-40 md:h-48 lg:h-52 overflow-hidden" animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
              <img
                src={tenantImg}
                alt="Tenants finding a room"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              <div className="absolute top-4 left-4 bg-sky-500 text-white px-3 py-1 rounded-full" style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "0.75rem" }}>
                For Tenants
              </div>
            </motion.div>
            <div className="p-7">
              <h3
                className="text-slate-900"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "1.25rem" }}
              >
                Find your ideal space
              </h3>
              <p
                className="text-slate-700 mt-2"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem", lineHeight: 1.65 }}
              >
                Discover rooms that match your lifestyle, budget, and location — and book with confidence knowing every listing is verified.
              </p>
              <BenefitList items={tenantBenefits} color="bg-sky-500" />
              <motion.a
                href="#"
                className="inline-flex items-center gap-2 mt-7 bg-sky-500 hover:bg-sky-600 text-white px-6 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg"
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 100 }}
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.875rem" }}
              >
                Start Searching
              </motion.a>
            </div>
          </motion.div>

          {/* Landlords Card */}
          <motion.div
            id="for-landlords"
            className="group rounded-2xl border border-slate-100 overflow-hidden shadow-sm bg-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -12, boxShadow: "0 25px 50px rgba(0,0,0,0.12)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          >
            <motion.div className="relative h-32 sm:h-40 md:h-48 lg:h-52 overflow-hidden" animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>
              <img
                src={landlordImg}
                alt="Landlords listing property"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              <div className="absolute top-4 left-4 bg-slate-800 text-white px-3 py-1 rounded-full" style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "0.75rem" }}>
                For Landlords
              </div>
            </motion.div>
            <div className="p-7">
              <h3
                className="text-slate-900"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "1.25rem" }}
              >
                Fill vacancies with ease
              </h3>
              <p
                className="text-slate-700 mt-2"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem", lineHeight: 1.65 }}
              >
                List your property in minutes and connect with pre-verified tenants. Manage everything from one powerful dashboard.
              </p>
              <BenefitList items={landlordBenefits} color="bg-slate-700" />
              <motion.a
                href="#"
                className="inline-flex items-center gap-2 mt-7 bg-sky-500 hover:bg-sky-600 text-white px-6 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg"
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 100 }}
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.875rem" }}
              >
                List a Property
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}