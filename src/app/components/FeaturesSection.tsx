import { SlidersHorizontal, Map, LayoutDashboard, Bell, Star, Zap, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: SlidersHorizontal,
    title: "Advanced Search Filters",
    description: "Filter by price, size, pet policy, utilities included, move-in date, and dozens more criteria to pinpoint exactly what you need.",
    color: "from-blue-600 to-cyan-500",
    number: "01",
    featured: true,
  },
  {
    icon: Map,
    title: "Map-Based Browsing",
    description: "Explore available rooms on an interactive map. Visualize commute times, nearby amenities, and neighborhood ratings at a glance.",
    color: "from-purple-600 to-pink-500",
    number: "02",
    featured: false,
  },
  {
    icon: LayoutDashboard,
    title: "Landlord Dashboard",
    description: "A centralized hub to manage listings, track applications, communicate with tenants, and monitor booking analytics in real time.",
    color: "from-emerald-600 to-teal-500",
    number: "03",
    featured: true,
  },
  {
    icon: Bell,
    title: "Instant Alerts",
    description: "Get notified the moment a matching listing goes live. Never miss a great room again with personalized, real-time notifications.",
    color: "from-amber-600 to-orange-500",
    number: "04",
    featured: false,
  },
  {
    icon: Star,
    title: "Verified Reviews",
    description: "Read honest, verified reviews from previous tenants and landlords. Build trust before signing anything.",
    color: "from-rose-600 to-red-500",
    number: "05",
    featured: true,
  },
  {
    icon: Zap,
    title: "Instant Booking",
    description: "Skip the back-and-forth. Some listings support one-click booking with digital leases and secure deposits processed instantly.",
    color: "from-indigo-600 to-blue-500",
    number: "06",
    featured: false,
  },
];

export function FeaturesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const handleScrollToHero = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative py-32 bg-gradient-to-br from-sky-100 via-sky-50 to-white overflow-hidden" id="features">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-20 right-10 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-20 left-10 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="max-w-3xl mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200/50">
              <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse" />
              <span className="text-sm font-bold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">KEY FEATURES</span>
            </span>
          </motion.div>

          <motion.h2
            className="text-slate-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 900, fontSize: "clamp(2.2rem, 5vw, 3.5rem)", letterSpacing: "-0.025em", lineHeight: 1.15 }}
          >
            Everything you need on one platform
          </motion.h2>

          <motion.p
            className="text-slate-700 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontFamily: "Inter, sans-serif", fontSize: "1.1rem", lineHeight: 1.8 }}
          >
            From advanced search to instant booking, RoomLink simplifies every step of your rental journey.
          </motion.p>
        </motion.div>

        {/* Features Grid - Uniform Sizing */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className="group relative"
                variants={cardVariants}
              >
                <div className="relative bg-white rounded-2xl border border-slate-200/50 overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                  {/* Gradient top bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${feature.color}`} />

                  {/* Background icon (faded) */}
                  <div className="absolute -top-6 -right-6 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                    <Icon size={140} />
                  </div>

                  {/* Content */}
                  <div className="relative p-6 flex-1 flex flex-col">
                    {/* Badge */}
                    <div className="mb-4">
                      <span className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br ${feature.color} text-white font-bold text-sm shadow-lg`}>
                        {feature.number}
                      </span>
                    </div>

                    {/* Icon */}
                    <motion.div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} text-white shadow-lg mb-5 w-fit`}
                      whileHover={{ rotate: 12, scale: 1.12 }}
                      transition={{ type: "spring", stiffness: 160 }}
                    >
                      <Icon size={32} />
                    </motion.div>

                    {/* Title */}
                    <h3
                      className="text-slate-900 mb-3 flex-grow"
                      style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "1.1rem", lineHeight: 1.3 }}
                    >
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-slate-700 text-sm leading-relaxed mb-5"
                      style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem" }}
                    >
                      {feature.description}
                    </p>

                    {/* Learn More Link */}
                    <motion.a
                      href="#"
                      onClick={handleScrollToHero}
                      className="inline-flex items-center gap-2 mt-7 bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-full transition-all duration-200 hover:shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 100 }}
                      style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.85rem" }}
                    >
                      Learn More
                      <ArrowRight size={14} />
                    </motion.a>
                  </div>

                  {/* Hover overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-[0.03] transition-opacity pointer-events-none rounded-2xl`}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Final CTA */}
        <motion.div 
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3
            className="text-slate-900 mb-6"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
          >
            Ready to transform your rental experience?
          </h3>
          <motion.a
            href="#hero"
            onClick={handleScrollToHero}
            className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl relative group overflow-hidden"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem" }}
          >
            {/* Ripple effect background */}
            <motion.div
              className="absolute inset-0 bg-white/20 rounded-full pointer-events-none"
              initial={{ scale: 0 }}
              whileTap={{ scale: 2.5 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            
            {/* Button content */}
            <span className="relative z-10">Get Started Now</span>
            <motion.div
              className="relative z-10"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <ArrowRight size={20} />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}