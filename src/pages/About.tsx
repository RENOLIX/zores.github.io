import { BadgeCheck, MapPinned } from "lucide-react";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import {
  aboutGallery,
  aboutParagraphs,
  avicoleDetails,
  competitiveAdvantages,
  contactEmail,
  contactPhone,
  locationUrl,
  logisticCommitments,
  president,
} from "@/lib/zores-content";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-28 pb-20">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(33,166,91,0.12),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(241,153,64,0.14),transparent_28%)]" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2.25rem] border border-border bg-white/92 backdrop-blur p-8 md:p-12 shadow-[0_24px_80px_rgba(0,0,0,0.06)]">
              <span className="inline-flex rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                A propos
              </span>
              <h1 className="mt-5 max-w-4xl font-serif text-4xl md:text-6xl font-bold leading-tight">
                SARL Zores Export Algerie, l&apos;excellence agroalimentaire au service du monde
              </h1>
              <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-5 text-lg leading-8 text-muted-foreground">
                  {aboutParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className="rounded-[1.8rem] border border-border bg-[linear-gradient(160deg,rgba(33,166,91,0.10),rgba(241,153,64,0.10))] p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shrink-0">
                      <BadgeCheck className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-serif text-2xl font-bold text-foreground">
                        {president.name}
                      </div>
                      <div className="mt-1 text-xs uppercase tracking-[0.22em] text-primary">
                        {president.title}
                      </div>
                      <p className="mt-4 text-sm leading-7 text-muted-foreground">
                        {president.summary}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-border pt-5 text-sm text-foreground/80">
                    <div>Tel : {contactPhone}</div>
                    <div className="mt-2">Email : {contactEmail}</div>
                    <a
                      href={locationUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                    >
                      <MapPinned className="w-4 h-4" />
                      Voir SARL Zores Export Algerie sur la carte
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <section className="mb-8 rounded-[1.9rem] border border-border bg-white p-8 shadow-sm">
            <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-3">
              Galerie de la societe
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              SARL Zores Export Algerie en images
            </h2>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {aboutGallery.map((image, index) => (
                <figure
                  key={image.src}
                  className={`overflow-hidden rounded-2xl border border-border bg-muted/30 ${
                    index === 0 ? "md:col-span-2" : ""
                  }`}
                >
                  <div style={{ aspectRatio: index === 0 ? "16/9" : "4/3" }}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <figcaption className="px-4 py-3 text-sm font-medium text-foreground/80">
                    {image.title}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <div className="grid lg:grid-cols-2 gap-8">
            <article className="rounded-[1.9rem] border border-border bg-white p-8 shadow-sm">
              <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-3">
                L&apos;Excellence Avicole
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Une filiere structuree et exportable
              </h2>
              <div className="space-y-5 text-base leading-8 text-muted-foreground">
                {avicoleDetails.map((detail) => (
                  <p key={detail}>{detail}</p>
                ))}
              </div>
            </article>

            <article className="rounded-[1.9rem] border border-border bg-white p-8 shadow-sm">
              <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-3">
                Engagements
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Logistique et sanitaire
              </h2>
              <div className="space-y-4">
                {logisticCommitments.map((item, index) => (
                  <div key={item.title} className="rounded-2xl bg-muted/50 border border-border p-5">
                    <div className="text-primary text-sm font-semibold mb-2">0{index + 1}</div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm leading-7 text-muted-foreground">{item.text}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <section className="mt-8 rounded-[1.9rem] border border-border bg-white p-8 shadow-sm">
            <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-3">
              Avantages competitifs
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ce qui fait notre difference
            </h2>
            <div className="grid md:grid-cols-3 gap-5">
              {competitiveAdvantages.map((item) => (
                <div key={item.title} className="rounded-2xl border border-border bg-muted/40 p-5">
                  <h3 className="font-semibold text-foreground mb-2 capitalize">{item.title}</h3>
                  <p className="text-sm leading-7 text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </section>
        </section>
      </main>

      <Footer />
    </div>
  );
}
