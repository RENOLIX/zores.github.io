import { type FormEvent, useRef, useState } from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { Mail, MapPin, Phone, Send, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  aboutGallery,
  contactEmail,
  contactItems,
  contactPhone,
  locationUrl,
  president,
} from "@/lib/zores-content";

const WEB3FORMS_ACCESS_KEY = "73c26c5f-8baf-42cf-a918-37e6f690bf9c";

const icons = [MapPin, UserRound, Phone, Mail];

type ContactFormState = {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
};

const initialForm: ContactFormState = {
  name: "",
  email: "",
  company: "",
  phone: "",
  message: "",
};

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState<ContactFormState>(initialForm);
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "error" | "success";
    text: string;
  } | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setFeedback({
        type: "error",
        text: "Veuillez remplir les champs obligatoires avant l'envoi.",
      });
      return;
    }

    setSending(true);
    setFeedback(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "Nouvelle demande commerciale - SARL Zores Export",
          from_name: form.name,
          botcheck: "",
          name: form.name,
          email: form.email,
          company: form.company,
          phone: form.phone,
          message: form.message,
        }),
      });

      const result = (await response.json()) as {
        success?: boolean;
        message?: string;
      };

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Envoi impossible pour le moment.");
      }

      setFeedback({
        type: "success",
        text: "Demande envoyee avec succes. Nous revenons vers vous tres vite.",
      });
      setForm(initialForm);
    } catch (error) {
      setFeedback({
        type: "error",
        text:
          error instanceof Error
            ? error.message
            : "Une erreur est survenue pendant l'envoi du message.",
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" ref={ref} className="relative overflow-hidden bg-muted/40 py-24">
      <div className="absolute top-0 right-0 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 -translate-x-1/2 translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
            Contact commercial
          </span>
          <h2 className="mb-4 font-serif text-4xl font-bold text-foreground md:text-5xl">
            Vous voulez autre chose ? Contactez-nous
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Vous cherchez un produit specifique, un mix-loading ou une commande
            sur mesure ? Envoyez-nous votre demande et notre equipe commerciale
            vous repondra rapidement.
          </p>
          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-primary" />
        </motion.div>

        <div className="grid items-start gap-12 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-5 lg:col-span-2"
          >
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src={aboutGallery[3].src}
                alt={aboutGallery[3].alt}
                className="h-56 w-full object-cover"
              />
            </div>

            <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                Direction generale
              </div>
              <div className="mt-3 font-serif text-2xl font-bold text-foreground">
                {president.name}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                {president.title}
              </div>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Pour les demandes de partenariat, de distribution ou de
                consolidation export, notre equipe vous accompagne de la
                preparation jusqu&apos;a l&apos;expedition.
              </p>
            </div>

            <div className="space-y-3">
              {contactItems.map((item, index) => {
                const Icon = icons[index];
                const card = (
                  <div className="flex items-center gap-4 rounded-xl border border-border bg-white px-5 py-4 transition-shadow hover:shadow-sm">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-4 w-4 text-primary" />
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
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href === locationUrl ? "_blank" : undefined}
                    rel={item.href === locationUrl ? "noreferrer" : undefined}
                    className="block"
                  >
                    {card}
                  </a>
                ) : (
                  <div key={item.label}>{card}</div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-3xl border border-border bg-white p-8 shadow-lg md:p-10"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-white">
                  <Send className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                    Formulaire de demande
                  </div>
                  <div className="font-serif text-2xl font-bold text-foreground">
                    Parlez-nous de votre besoin
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-foreground">
                    Nom complet *
                  </label>
                  <Input
                    placeholder="Ahmed Benali"
                    value={form.name}
                    onChange={(event) => setForm({ ...form, name: event.target.value })}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-foreground">
                    Email *
                  </label>
                  <Input
                    type="email"
                    placeholder={contactEmail}
                    value={form.email}
                    onChange={(event) => setForm({ ...form, email: event.target.value })}
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-foreground">
                    Societe / Entreprise
                  </label>
                  <Input
                    placeholder="Nom de votre entreprise"
                    value={form.company}
                    onChange={(event) => setForm({ ...form, company: event.target.value })}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-foreground">
                    Telephone / WhatsApp
                  </label>
                  <Input
                    placeholder={contactPhone}
                    value={form.phone}
                    onChange={(event) => setForm({ ...form, phone: event.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-foreground">
                  Message *
                </label>
                <Textarea
                  placeholder="Decrivez les produits souhaites, les volumes, la destination ou tout autre besoin specifique..."
                  className="min-h-[160px] resize-none"
                  value={form.message}
                  onChange={(event) => setForm({ ...form, message: event.target.value })}
                />
              </div>

              <Button
                type="submit"
                disabled={sending}
                className="h-auto w-full cursor-pointer justify-center gap-2 rounded-xl bg-primary py-3 text-base font-semibold text-white shadow-lg shadow-primary/30 hover:bg-primary/90"
              >
                {sending ? "Envoi en cours..." : "Envoyer la demande"}
              </Button>

              {feedback ? (
                <p
                  className={`text-sm ${
                    feedback.type === "error" ? "text-destructive" : "text-primary"
                  }`}
                >
                  {feedback.text}
                </p>
              ) : null}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
