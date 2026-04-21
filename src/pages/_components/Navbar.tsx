import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Accueil", href: "#home" },
  { label: "Nos Poles", href: "#products" },
  { label: "A propos", href: "/about" },
  { label: "Contact", href: "#contact" },
];

const originalLogoImage = "https://hercules-cdn.com/file_nJDzeXog7g8SI2gSgTrvmR7j";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const fallbackLogoImage = `${import.meta.env.BASE_URL}images/brand/zores-logo.svg`;
  const [logoImage, setLogoImage] = useState(originalLogoImage);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);

    if (href === "/about") {
      navigate("/about");
      return;
    }

    if (location.pathname !== "/") {
      navigate({ pathname: "/", hash: href });
      return;
    }

    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || location.pathname !== "/"
            ? "bg-white/96 shadow-[0_2px_20px_rgba(0,0,0,0.08)] backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between md:h-20">
            <Link to="/" className="flex items-center gap-2">
              <img
                src={logoImage}
                alt="Zores Export"
                onError={() => setLogoImage(fallbackLogoImage)}
                className="h-12 w-auto object-contain"
              />
              <div className="mt-3 flex flex-col justify-center">
                <span
                  className={`block font-serif text-sm leading-none font-bold transition-colors ${
                    scrolled || location.pathname !== "/"
                      ? "text-foreground"
                      : "text-white"
                  }`}
                >
                  SARL ZORES
                </span>
                <span
                  className={`text-[9px] font-medium uppercase tracking-widest transition-colors ${
                    scrolled || location.pathname !== "/"
                      ? "text-muted-foreground"
                      : "text-white/70"
                  }`}
                >
                  Export Algerie
                </span>
              </div>
            </Link>

            <nav className="hidden items-center gap-8 md:flex">
              {links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className={`cursor-pointer text-sm font-medium transition-colors ${
                    scrolled || location.pathname !== "/"
                      ? "text-foreground/80 hover:text-primary"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <Button
                onClick={() => handleNav("#contact")}
                className="cursor-pointer bg-primary px-5 font-medium text-white hover:bg-primary/90"
              >
                Contact commercial
              </Button>
            </div>

            <button
              className={`rounded-lg p-2 transition-colors md:hidden ${
                scrolled || location.pathname !== "/"
                  ? "text-foreground"
                  : "text-white"
              }`}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 border-b border-border bg-white px-6 py-6 shadow-xl"
          >
            <nav className="flex flex-col gap-4">
              {links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="cursor-pointer text-left text-base font-medium text-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => handleNav("#contact")}
                className="mt-2 w-full cursor-pointer bg-primary text-white"
              >
                Contact commercial
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
