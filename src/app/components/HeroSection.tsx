import { ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";

const heroImg = "https://images.unsplash.com/photo-1614622350812-96b09c78af77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBpbnRlcmlvciUyMG1pbmltYWx8ZW58MXx8fHwxNzc2NTc0MTU0fDA&ixlib=rb-4.1.0&q=80&w=1080";
const cityImg = "https://images.unsplash.com/photo-1759093887202-9d2aaa9691ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc2t5bGluZSUyMGFlcmlhbCUyMHVyYmFuJTIwbGl2aW5nfGVufDF8fHx8MTc3NjU3NDE1NHww&ixlib=rb-4.1.0&q=80&w=1080";

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8 },
    },
  };
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-sky-100 to-sky-50 pt-16">
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 w-full py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Content */}
          <motion.div 
            className="max-w-xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-100 text-sky-600 px-4 py-1.5 rounded-full mb-6">
              <Star size={13} className="fill-sky-400 text-sky-400" />
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8rem", fontWeight: 600 }}>
                Trusted by 50,000+ renters & landlords
              </span>
            </div>

            {/* Headline */}
            <motion.h1
              className="text-slate-900 mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(2.4rem, 5vw, 3.75rem)",
                fontWeight: 800,
                lineHeight: 1.12,
                letterSpacing: "-0.02em",
              }}
            >
              Find Your Perfect{" "}
              <span className="text-sky-500">Space</span>
              {" "}with RoomLink
            </motion.h1>

            {/* Subtext */}
            <motion.p
              className="text-slate-500 mb-8 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "1.05rem",
                lineHeight: 1.7,
                fontWeight: 400,
              }}
            >
              The premium marketplace connecting tenants and landlords. Browse verified listings, communicate directly, and book your next home — all in one place.
            </motion.p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.a
                href="#"
                className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-xl hover:shadow-sky-200"
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 100 }}
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.95rem" }}
              >
                Find a Room
                <ArrowRight size={16} />
              </motion.a>
              <motion.a
                href="#"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-md"
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 100 }}
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.95rem" }}
              >
                List Your Property
              </motion.a>
            </div>

            {/* Social proof row */}
            <div className="mt-10 flex items-center gap-6 pt-8 border-t border-slate-100">
              <div className="text-center">
                <p className="text-slate-900" style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "1.4rem" }}>50K+</p>
                <p className="text-slate-400" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8rem", fontWeight: 500 }}>Active Listings</p>
              </div>
              <div className="w-px h-10 bg-slate-100" />
              <div className="text-center">
                <p className="text-slate-900" style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "1.4rem" }}>98%</p>
                <p className="text-slate-400" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8rem", fontWeight: 500 }}>Satisfaction Rate</p>
              </div>
              <div className="w-px h-10 bg-slate-100" />
              <div className="text-center">
                <p className="text-slate-900" style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "1.4rem" }}>120+</p>
                <p className="text-slate-400" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8rem", fontWeight: 500 }}>Cities Covered</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div 
            className="relative w-full"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Main image card */}
            <motion.div 
              className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-200"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src={heroImg}
                alt="Modern apartment interior"
                className="w-full h-auto sm:h-[300px] md:h-[400px] lg:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>

            {/* Floating city card */}
            <motion.div 
              className="hidden sm:block absolute -bottom-4 sm:-bottom-6 md:-bottom-8 -left-4 sm:-left-6 md:-left-8 w-40 sm:w-44 md:w-52 rounded-xl overflow-hidden shadow-xl shadow-slate-200 border-2 border-white"
              animate={{ y: [0, 8, 0], x: [0, 2, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <img
                src={cityImg}
                alt="City skyline"
                className="w-full h-24 sm:h-28 md:h-32 object-cover"
              />
              <div className="bg-white px-3 py-2.5">
                <p className="text-slate-900" style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "0.85rem" }}>Downtown Studio</p>
                <p className="text-sky-500" style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "0.9rem" }}>$1,200/mo</p>
              </div>
            </motion.div>

            {/* Floating stats badge */}
            <motion.div 
              className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg shadow-slate-100 border border-slate-100 px-4 py-3"
              animate={{ y: [0, -8, 0], x: [0, -2, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                <div>
                  <p className="text-slate-900" style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "0.85rem" }}>Verified Listing</p>
                  <p className="text-slate-400" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem" }}>ID & background checked</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
