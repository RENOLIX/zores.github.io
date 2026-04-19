import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function AuthPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-muted/40 px-6 py-16">
      <div className="grid w-full max-w-5xl gap-8 md:grid-cols-2">
        <div className="rounded-[2rem] bg-white p-10 shadow-lg">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Espace Client
          </p>
          <h1 className="font-serif text-4xl font-bold tracking-tight md:text-5xl">
            Un portail B2B peut etre ajoute ensuite.
          </h1>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Cette page de demonstration est prete pour une future connexion a
            Convex et a une authentification reelle si vous souhaitez ajouter un
            espace client prive.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/">
              <Button variant="secondary">Retour a l&apos;accueil</Button>
            </Link>
            <Link to="/auth/callback">
              <Button>Lancer une demo</Button>
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] border border-border bg-[linear-gradient(135deg,rgba(33,166,91,0.12),rgba(241,153,64,0.12))] p-10 shadow-lg">
          <span className="inline-flex rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Fonctionnalites possibles
          </span>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-foreground/80">
            <li>Suivi des commandes et des livraisons.</li>
            <li>Demandes de devis personnalisees.</li>
            <li>Historique des produits negocies.</li>
            <li>Messagerie et support dedie pour les importateurs.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
