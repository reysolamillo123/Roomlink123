import { SlidersHorizontal, Map, LayoutDashboard, Bell, Star, Zap } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: SlidersHorizontal,
    title: "Advanced Search Filters",
    description: "Filter by price, size, pet policy, utilities included, move-in date, and dozens more criteria to pinpoint exactly what you need.",
    color: "bg-sky-50 text-sky-500",
    glow: "hover:shadow-sky-100",
  },
  {
    icon: Map,
    title: "Map-Based Browsing",
    description: "Explore available rooms on an interactive map. Visualize commute times, nearby amenities, and neighborhood ratings at a glance.",
    color: "bg-violet-50 text-violet-500",
    glow: "hover:shadow-violet-100",
  },
  {
    icon: LayoutDashboard,
    title: "Landlord Dashboard",
    description: "A centralized hub to manage listings, track applications, communicate with tenants, and monitor booking analytics in real time.",
    color: "bg-emerald-50 text-emerald-500",
    glow: "hover:shadow-emerald-100",
  },
  {
    icon: Bell,
    title: "Instant Alerts",
    description: "Get notified the moment a matching listing goes live. Never miss a great room again with personalized, real-time notifications.",
    color: "bg-amber-50 text-amber-500",
    glow: "hover:shadow-amber-100",
  },
  {
    icon: Star,
    title: "Verified Reviews",
    description: "Read honest, verified reviews from previous tenants and landlords. Build trust before signing anything.",
    color: "bg-rose-50 text-rose-500",
    glow: "hover:shadow-rose-100",
  },
  {
    icon: Zap,
    title: "Instant Booking",
    description: "Skip the back-and-forth. Some listings support one-click booking with digital leases and secure deposits processed instantly.",
    color: "bg-indigo-50 text-indigo-500",
    glow: "hover:shadow-indigo-100",
  },
];

export function FeaturesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-sky-100 to-sky-50" id="features">
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div 
          className="max-w-xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="text-sky-500 mb-3"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.85rem", letterSpacing: "0.08em", textTransform: "uppercase" }}
          >
            Platform Features
          </p>
          <motion.h2
            className="text-slate-900"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}
          >
            Everything you need to find and manage rooms
          </motion.h2>
          <motion.p
            className="text-slate-500 mt-4"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", lineHeight: 1.7 }}
          >
            Powerful tools built to make the rental process seamless, transparent, and efficient for everyone involved.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className={`bg-white rounded-2xl border border-slate-100 p-6 ${feature.glow} group`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 } }}
              >
                <motion.div
                  className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${feature.color} mb-5`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                >
                  <Icon size={20} />
                </motion.div>
                <h3
                  className="text-slate-900 mb-2"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "1rem" }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-slate-500"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem", lineHeight: 1.7 }}
                >
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA strip */}
        <div className="mt-12 bg-gradient-to-r from-sky-500 to-sky-400 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3
              className="text-white"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "1.2rem" }}
            >
              Ready to see it in action?
            </h3>
            <p
              className="text-sky-100 mt-1"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem" }}
            >
              Join thousands of renters and landlords who trust RoomLink every day.
            </p>
          </div>
          <motion.a
            href="#"
            className="shrink-0 bg-white text-sky-600 hover:bg-sky-50 px-7 py-3 rounded-full transition-all duration-200 hover:shadow-xl"
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 100 }}
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "0.875rem" }}
          >
            Explore the Platform
          </motion.a>
        </div>
      </div>
    </section>
  );
}