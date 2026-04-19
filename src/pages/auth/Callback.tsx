import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";

export default function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      navigate("/", { replace: true });
    }, 1800);

    return () => window.clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-4">
      <div className="flex flex-col items-center gap-3 text-center">
        <Spinner className="size-10 text-primary" />
        <p className="font-serif text-3xl font-bold text-foreground">
          Synchronisation de demonstration
        </p>
        <p className="max-w-md text-sm text-muted-foreground">
          Cette page simule un callback d&apos;authentification puis vous
          redirige automatiquement vers l&apos;accueil.
        </p>
      </div>
      <Button variant="secondary" onClick={() => navigate("/", { replace: true })}>
        Retour immediat
      </Button>
    </div>
  );
}
