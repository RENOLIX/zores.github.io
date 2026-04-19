import { motion } from "motion/react";
import { ArrowRight, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://hercules-cdn.com/file_k2YlHdE4nSKSLP9Dz7vEwN3J)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <div className="absolute top-0 left-0 h-full w-1 bg-primary md:w-2" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 flex items-center gap-2"
          >
            <div className="flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/20 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
              <MapPin className="h-3 w-3 text-primary" />
              Alger, Algerie
            </div>
            <div className="flex items-center gap-1 text-xs font-semibold text-yellow-400">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-3 w-3 fill-yellow-400" />
              ))}
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mb-6 font-serif text-5xl leading-tight font-bold text-white md:text-7xl"
          >
            L&apos;Excellence <br />
            <span className="text-primary">Alimentaire</span> <br />
            Algerienne
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mb-10 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl"
          >
            SARL Zores Export vous propose une gamme complete de produits
            alimentaires et menagers de qualite superieure, directement depuis
            Alger vers le monde.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              onClick={() => handleScroll("#products")}
              className="h-auto cursor-pointer rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/40 hover:bg-primary/90"
            >
              Decouvrir nos produits
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              onClick={() => handleScroll("#contact")}
              variant="ghost"
              className="h-auto cursor-pointer rounded-full border border-white/40 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/10"
            >
              Nous contacter
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-white/50">
          Defiler
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-8 w-5 items-start justify-center rounded-full border-2 border-white/30 pt-1"
        >
          <div className="h-2 w-1 rounded-full bg-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
