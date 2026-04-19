import { motion } from "motion/react";
import { useInView } from "motion/react";
import { type FormEvent, useRef, useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  { icon: MapPin, label: "Adresse", value: "Alger, Algerie" },
  { icon: Phone, label: "Telephone", value: "+213 XX XX XX XX" },
  { icon: Mail, label: "Email", value: "contact@zoresexport.dz" },
  { icon: Clock, label: "Horaires", value: "Dim - Jeu : 8h00 - 17h00" },
];

const productLinks = [
  "Fruits & Legumes",
  "Jus & Boissons",
  "Biscuits & Snacks",
  "Produits Laitiers",
  "Poulet & Oeufs",
  "Detergents",
];

const companyLinks = [
  { label: "Accueil", href: "#home" },
  { label: "Nos Produits", href: "#products" },
  { label: "A propos", href: "#about" },
  { label: "Contact", href: "#contact" },
];

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  company: "",
  message: "",
};

export default function Footer() {
  const contactRef = useRef(null);
  const contactInView = useInView(contactRef, { once: true, margin: "-80px" });

  const footerRef = useRef(null);
  const footerInView = useInView(footerRef, { once: true, margin: "-60px" });

  const [form, setForm] = useState<FormState>(initialForm);
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterFeedback, setNewsletterFeedback] = useState("");

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setFeedback("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    setSending(true);
    setFeedback("");

    await new Promise((resolve) => setTimeout(resolve, 1200));

    setSending(false);
    setFeedback("Message envoye. Nous vous repondrons tres bientot.");
    setForm(initialForm);
  };

  const handleNewsletter = (event: FormEvent) => {
    event.preventDefault();

    if (!newsletterEmail.trim()) {
      setNewsletterFeedback("Entrez votre adresse email.");
      return;
    }

    setNewsletterFeedback("Inscription enregistree pour les prochaines offres.");
    setNewsletterEmail("");
  };

  return (
    <>
      <section
        id="contact"
        ref={contactRef}
        className="relative overflow-hidden bg-muted/40 py-28"
      >
        <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 -translate-x-1/2 translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
              Contactez-nous
            </span>
            <h2 className="mb-4 font-serif text-4xl font-bold text-foreground md:text-5xl">
              Travaillons Ensemble
            </h2>
            <p className="mx-auto max-w-xl text-lg text-muted-foreground">
              Importateur, distributeur ou revendeur ? Envoyez-nous votre
              demande, nous vous repondons sous 24h.
            </p>
            <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-primary" />
          </motion.div>

          <div className="grid items-start gap-12 lg:grid-cols-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={contactInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-5 lg:col-span-2"
            >
              <div className="h-52 overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="https://hercules-cdn.com/file_3SVLyueX3YTtnSywnHYEhUaR"
                  alt="Produits Zores Export"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="space-y-3">
                {contactInfo.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 rounded-xl border border-border bg-white px-5 py-4 transition-shadow hover:shadow-sm"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="text-sm font-semibold text-foreground">
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={contactInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <form
                onSubmit={handleSubmit}
                className="space-y-5 rounded-3xl border border-border bg-white p-8 shadow-lg md:p-10"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-foreground">
                      Nom complet *
                    </label>
                    <Input
                      placeholder="Ahmed Benali"
                      value={form.name}
                      onChange={(event) =>
                        setForm({ ...form, name: event.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-foreground">
                      Email *
                    </label>
                    <Input
                      type="email"
                      placeholder="ahmed@exemple.com"
                      value={form.email}
                      onChange={(event) =>
                        setForm({ ...form, email: event.target.value })
                      }
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-foreground">
                    Societe / Entreprise
                  </label>
                  <Input
                    placeholder="Nom de votre entreprise"
                    value={form.company}
                    onChange={(event) =>
                      setForm({ ...form, company: event.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-foreground">
                    Message *
                  </label>
                  <Textarea
                    placeholder="Decrivez votre besoin, les produits souhaites, les quantites..."
                    className="min-h-[130px] resize-none"
                    value={form.message}
                    onChange={(event) =>
                      setForm({ ...form, message: event.target.value })
                    }
                  />
                </div>
                <Button
                  type="submit"
                  disabled={sending}
                  className="h-auto w-full cursor-pointer justify-center gap-2 rounded-xl bg-primary py-3 text-base font-semibold text-white shadow-lg shadow-primary/30 hover:bg-primary/90"
                >
                  {sending ? (
                    "Envoi en cours..."
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Envoyer la demande
                    </>
                  )}
                </Button>
                {feedback ? (
                  <p
                    className={`text-sm ${
                      feedback.startsWith("Veuillez")
                        ? "text-destructive"
                        : "text-primary"
                    }`}
                  >
                    {feedback}
                  </p>
                ) : null}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <footer ref={footerRef} className="bg-[oklch(0.14_0.02_50)] text-white">
        <div className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={footerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4"
            >
              <div className="space-y-5 lg:col-span-1">
                <div>
                  <div className="font-serif text-lg leading-none font-bold text-white">
                    SARL ZORES
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-white/50">
                    Export - Alger
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-white/55">
                  Distributeur et exportateur de produits alimentaires et
                  menagers de qualite, base a Alger depuis plus de 15 ans.
                </p>
              </div>

              <div>
                <h4 className="mb-5 text-sm font-semibold uppercase tracking-widest text-white">
                  Nos Produits
                </h4>
                <ul className="space-y-2.5">
                  {productLinks.map((product) => (
                    <li key={product}>
                      <button
                        onClick={() => scrollTo("#products")}
                        className="group flex cursor-pointer items-center gap-1.5 text-sm text-white/55 transition-colors hover:text-primary"
                      >
                        <ChevronRight className="h-3 w-3 text-primary/0 transition-colors group-hover:text-primary" />
                        {product}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="mb-5 text-sm font-semibold uppercase tracking-widest text-white">
                  Entreprise
                </h4>
                <ul className="space-y-2.5">
                  {companyLinks.map((link) => (
                    <li key={link.label}>
                      <button
                        onClick={() => scrollTo(link.href)}
                        className="group flex cursor-pointer items-center gap-1.5 text-sm text-white/55 transition-colors hover:text-primary"
                      >
                        <ChevronRight className="h-3 w-3 text-primary/0 transition-colors group-hover:text-primary" />
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="mb-5 text-sm font-semibold uppercase tracking-widest text-white">
                  Restez informe
                </h4>
                <p className="mb-4 text-sm leading-relaxed text-white/55">
                  Recevez nos offres et nouveautes directement dans votre boite
                  mail.
                </p>
                <form onSubmit={handleNewsletter} className="flex gap-2">
                  <Input
                    placeholder="votre@email.com"
                    value={newsletterEmail}
                    onChange={(event) => setNewsletterEmail(event.target.value)}
                    className="h-10 border-white/15 bg-white/10 text-sm text-white placeholder:text-white/30"
                  />
                  <button className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-lg bg-primary transition-colors hover:bg-primary/80">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </button>
                </form>
                {newsletterFeedback ? (
                  <p className="mt-3 text-xs text-primary">
                    {newsletterFeedback}
                  </p>
                ) : null}
                <div className="mt-6 border-t border-white/10 pt-6">
                  <div className="mb-1 flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-primary" />
                    <span className="text-xs text-white/55">Alger, Algerie</span>
                  </div>
                  <div className="mb-1 flex items-center gap-2">
                    <Phone className="h-3.5 w-3.5 shrink-0 text-primary" />
                    <span className="text-xs text-white/55">+213 XX XX XX XX</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-3.5 w-3.5 shrink-0 text-primary" />
                    <span className="text-xs text-white/55">
                      contact@zoresexport.dz
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-3 text-xs text-white/35 sm:flex-row">
            <span>
              (c) {new Date().getFullYear()} SARL Zores Export. Tous droits
              reserves.
            </span>
            <div className="flex items-center gap-5">
              <span className="cursor-pointer transition-colors hover:text-white/60">
                Politique de confidentialite
              </span>
              <span className="cursor-pointer transition-colors hover:text-white/60">
                Mentions legales
              </span>
              <span className="cursor-pointer transition-colors hover:text-white/60">
                CGV
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
