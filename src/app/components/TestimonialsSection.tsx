import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Tenant in New York",
    avatar: "PS",
    avatarColor: "bg-sky-500",
    quote: "RoomLink made finding my studio apartment genuinely effortless. The verified listings gave me confidence, and I moved in within a week of searching.",
    rating: 5,
  },
  {
    name: "Marcus Chen",
    role: "Landlord, 3 Properties",
    avatar: "MC",
    avatarColor: "bg-violet-500",
    quote: "My vacancies used to sit empty for months. Since listing on RoomLink, I fill them in days. The dashboard is intuitive and the tenants are pre-screened.",
    rating: 5,
  },
  {
    name: "Sophie Laurent",
    role: "Tenant in Chicago",
    avatar: "SL",
    avatarColor: "bg-emerald-500",
    quote: "The map feature is genius. I could instantly see which listings were close to my office. Booked a room in 48 hours — totally stress-free.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-sky-100 to-sky-50">
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-sky-500 mb-3"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.85rem", letterSpacing: "0.08em", textTransform: "uppercase" }}
          >
            What People Say
          </p>
          <motion.h2
            className="text-slate-900"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}
          >
            Loved by renters and landlords
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              className="bg-white rounded-2xl border border-slate-100 p-7 shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -12, boxShadow: "0 25px 50px rgba(0,0,0,0.12)" }}
              viewport={{ once: true }}
              animate={{ y: [0, -6, 0] }}
              transition={{
                default: { duration: 0.6, type: "spring", stiffness: 100 },
                y: { duration: 5.3, repeat: Infinity, ease: "easeInOut", delay: index * 0.25 }
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p
                className="text-slate-700 mb-7"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem", lineHeight: 1.75 }}
              >
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${t.avatarColor} flex items-center justify-center text-white shrink-0`}
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "0.8rem" }}>
                  {t.avatar}
                </div>
                <div>
                  <p className="text-slate-900" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.875rem" }}>{t.name}</p>
                  <p className="text-slate-400" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8rem" }}>{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
