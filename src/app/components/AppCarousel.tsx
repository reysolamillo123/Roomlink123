import { useState } from "react";
import { Search, Home, MessageCircle, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import roomlinkPhone from "../../assets/image.png";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";


const slides = [
  {
    id: 1,
    icon: Search,
    step: "01",
    title: "Search & Discover",
    description: "Browse thousands of verified listings filtered by location, price, and lifestyle preferences. Find the perfect match effortlessly.",
    color: "bg-sky-50",
    iconColor: "text-sky-500",
    iconBg: "bg-sky-100",
    image: roomlinkPhone,
    preview: {
      label: "Search Results",
      items: ["Studio in Midtown – $1,100/mo", "1BR near Central Park – $1,800/mo", "Shared Room in Brooklyn – $750/mo"],
    },
  },
  {
    id: 2,
    icon: Home,
    step: "02",
    title: "View Listings",
    description: "Explore detailed listings with high-quality photos, virtual tours, neighborhood insights, and transparent pricing breakdowns.",
    color: "bg-violet-50",
    iconColor: "text-violet-500",
    iconBg: "bg-violet-100",
    image: image1,
    preview: {
      label: "Listing Details",
      items: ["📸 12 Photos & Virtual Tour", "🗺 Map & Neighborhood Info", "✅ Verified Landlord Profile"],
    },
  },
  {
    id: 3,
    icon: MessageCircle,
    step: "03",
    title: "Message Landlords",
    description: "Connect directly with verified landlords through our secure in-app messaging. Ask questions, schedule viewings, and negotiate — no middlemen.",
    color: "bg-emerald-50",
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-100",
    image: image2,
    preview: {
      label: "Direct Messaging",
      items: ["💬 \"Is the apartment still available?\"", "🔒 Secure encrypted chat", "⚡ Average reply in under 2 hrs"],
    },
  },
  {
    id: 4,
    icon: Calendar,
    step: "04",
    title: "Book Your Space",
    description: "Complete your booking with confidence. Secure payments, digital lease signing, and move-in coordination — all from the app.",
    color: "bg-amber-50",
    iconColor: "text-amber-500",
    iconBg: "bg-amber-100",
    image: image3,
    preview: {
      label: "Booking Confirmed",
      items: ["✍️ Digital lease signed", "💳 Secure deposit held", "🏠 Move-in: June 1st, 2026"],
    },
  },
];

export function AppCarousel() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + slides.length) % slides.length);
  const next = () => setActive((a) => (a + 1) % slides.length);

  const slide = slides[active];
  const Icon = slide.icon;

  return (
    <motion.section
      className="py-24 bg-slate-950"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="text-sky-400 mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.85rem", letterSpacing: "0.08em", textTransform: "uppercase" }}
          >
            How It Works
          </motion.p>
          <motion.h2
            className="text-white"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}
          >
            Your journey to the perfect room
          </motion.h2>
          <motion.p
            className="text-slate-400 mt-4 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", lineHeight: 1.7 }}
          >
            From discovery to move-in, RoomLink guides you through every step of finding and securing your ideal space.
          </motion.p>
        </motion.div>

        {/* Carousel */}
        <div className="flex flex-col lg:flex-row items-center gap-12 justify-center">
          {/* Right: Info */}
          <div className="w-full lg:w-auto max-w-md order-2 lg:order-2">
            {/* Step indicators */}
            <div className="flex gap-3 mb-8">
              {slides.map((s, i) => (
                <motion.button
                  key={s.id}
                  onClick={() => setActive(i)}
                  className={`h-1 rounded-full transition-all duration-300 ${i === active ? "bg-sky-400" : "bg-slate-700 hover:bg-slate-600"}`}
                  animate={{
                    width: i === active ? 32 : 16,
                  }}
                  whileHover={{ scaleY: 1.5 }}
                  transition={{ type: "spring", stiffness: 100 }}
                />
              ))}
            </div>

            <motion.div
              className="inline-flex items-center gap-2 bg-slate-800 text-slate-400 px-3 py-1 rounded-full mb-5"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8rem", fontWeight: 600 }}
            >
              Step {slide.step}
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <h3
                  className="text-white mb-4"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", letterSpacing: "-0.01em" }}
                >
                  {slide.title}
                </h3>
                <p
                  className="text-slate-400 mb-8"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", lineHeight: 1.75 }}
                >
                  {slide.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="flex items-center gap-3">
              <motion.button
                onClick={prev}
                className="w-11 h-11 rounded-full border border-slate-700 hover:border-slate-500 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-all duration-200 flex items-center justify-center"
                whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(15,23,42,0.5)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <ChevronLeft size={18} />
              </motion.button>
              <motion.button
                onClick={next}
                className="w-11 h-11 rounded-full bg-sky-500 hover:bg-sky-400 text-white transition-all duration-200 flex items-center justify-center shadow-lg shadow-sky-900/40"
                whileHover={{ scale: 1.15, boxShadow: "0 0 30px rgba(14,165,233,0.6)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <ChevronRight size={18} />
              </motion.button>
              <motion.span
                className="text-slate-500 ml-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                style={{ fontFamily: "Inter, sans-serif", fontSize: "0.85rem" }}
              >
                {active + 1} / {slides.length}
              </motion.span>
            </div>
          </div>

          {/* Left: Mobile Phone Mockup */}
          <motion.div
            className="relative flex justify-center order-1 lg:order-1"
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, type: "spring", stiffness: 80 }}
          >
            {/* Phone frame with gradient border */}
            <motion.div 
              className="relative w-65 rounded-4xl shadow-2xl overflow-hidden" 
              style={{ 
                height: "550px",
                background: "linear-gradient(135deg, #ff4444 0%, #ff6b35 25%, #ff8c00 50%, #ffc300 75%, #ffed4e 100%)",
                padding: "6px"
              }}
              animate={{
                y: [0, -12, 0],
                boxShadow: [
                  "0 20px 40px rgba(255, 68, 68, 0.2)",
                  "0 35px 70px rgba(255, 107, 53, 0.35)",
                  "0 20px 40px rgba(255, 68, 68, 0.2)"
                ]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Black frame */}
              <div className="w-full h-full bg-black rounded-3xl overflow-hidden p-1.5">
                {/* Inner phone frame */}
                <div className="w-full h-full bg-white rounded-3xl overflow-hidden relative flex flex-col">
                  {/* Screen content - Image fills entire area */}
                  <div className="flex-1 w-full bg-white overflow-hidden flex items-center justify-center relative">
                    <AnimatePresence mode="wait">
                      <motion.img 
                        key={slide.id}
                        src={slide.image}
                        alt="App Screen"
                        className="w-full h-full object-contain absolute inset-0"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                      />
                    </AnimatePresence>
                  </div>              
                </div>
              </div>
            </motion.div>

            {/* Glow */}
            <motion.div
              className="absolute inset-0 -z-10 bg-gradient-to-r from-orange-500/20 via-yellow-500/20 to-red-500/20 blur-3xl rounded-full w-96 h-96"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            />
          </motion.div>
        </div>


      </div>
    </motion.section>
  );
}
