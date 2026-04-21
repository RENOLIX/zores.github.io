import { motion } from "motion/react";
import { ArrowRight, MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://hercules-cdn.com/file_k2YlHdE4nSKSLP9Dz7vEwN3J)",
          backgroundPosition: "42% center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="flex items-center gap-1.5 bg-primary/20 border border-primary/40 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full">
              <MapPin className="w-3 h-3 text-primary" />
              Alger, Algérie
            </div>
            <div className="flex items-center gap-1 text-yellow-400 text-xs font-semibold">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="w-3 h-3 fill-yellow-400" />
              ))}
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-serif text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
          >
            L&apos;Excellence <br />
            <span className="text-primary">Agroalimentaire</span> <br />
            Algérienne
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
          >
            SARL Zores Export Algérie, basée à Alger, développe une offre
            d&apos;export structurée autour de produits agroalimentaires de
            premier choix pour les marchés internationaux.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              onClick={() => handleScroll("#products")}
              className="cursor-pointer bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 text-base h-auto rounded-full shadow-lg shadow-primary/40 flex items-center gap-2"
            >
              Découvrir nos pôles
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Link to="/about">
              <Button
                variant="ghost"
                className="cursor-pointer text-white border border-white/40 hover:bg-white/10 font-semibold px-8 py-4 text-base h-auto rounded-full backdrop-blur-sm"
              >
                Lire plus
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-xs tracking-widest uppercase">Défiler</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-white/30 rounded-full flex items-start justify-center pt-1"
        >
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
