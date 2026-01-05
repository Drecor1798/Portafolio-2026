import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar wrapper con justify-center para centrar contenido */}
      <nav
        className={cn(
          "fixed top-0 left-0 w-full px-6 flex items-center justify-center transition-all duration-300 z-50",
          isScrolled ? "py-3 bg-background/90 shadow-sm" : "py-5"
        )}
      >
        {/* Contenedor central con flex y espacio entre elementos */}
        <div className="flex items-center justify-center w-full max-w-5xl space-x-8">
          {/* Logo/Título */}
          <a className="text-xl font-bold text-primary mx-auto" href="#hero">
            DrecorThech Portfolio
          </a>

          {/* Desktop navigation centrado */}
          <div className="hidden md:flex flex-1 justify-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Grupo derecho: hamburguesa + theme toggle */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-4 ml-20 z-40"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMenuOpen ? (
                <X size={28} className="text-foreground" />
              ) : (
                <Menu size={28} className="text-foreground" />
              )}
            </button>

            <ThemeToggle className="z-50" />
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 md:hidden flex flex-col items-start justify-start pt-32 px-6 transition-opacity duration-300 bg-background z-40",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col space-y-8 text-xl pt-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-foreground/90 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
