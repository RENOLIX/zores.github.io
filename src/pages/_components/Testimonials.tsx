import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { logisticCommitments } from "@/lib/zores-content";

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-3">
            Engagements logistiques et sanitaires
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Une infrastructure au service de l&apos;export
          </h2>
          <div className="mt-6 w-16 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {logisticCommitments.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-white rounded-2xl p-8 border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                {i + 1}
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
