"use client";

import { Button } from "@/components/ui/Button";
import { scrollToSection } from "@/lib/utils";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/80 border-b border-white/10" id="header">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div>
            <span className="font-black text-xl text-primary">4MMotos</span>
          </div>
          <ul
            className="hidden md:flex space-x-8 items-center list-none"
            role="menubar"
          >
            <li role="none">
              <a
                onClick={() => scrollToSection("services")}
                className="text-sm hover:text-primary transition-colors"
                role="menuitem"
              >
                Serviços
              </a>
            </li>
            <li role="none">
              <a
                onClick={() => scrollToSection("acessories")}
                className="text-sm hover:text-primary transition-colors"
                role="menuitem"
              >
                Acessórios
              </a>
            </li>
            <li role="none">
              <a
                onClick={() => scrollToSection("contact")}
                className="text-sm hover:text-primary transition-colors"
                role="menuitem"
              >
                Contato
              </a>
            </li>
            <li role="none">
              <Button size="sm">Agende agora</Button>
            </li>
          </ul>
          <div className="md:hidden flex items-center">
            <Button size="xs">Agende agora</Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
