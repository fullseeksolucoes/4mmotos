import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/80 border-b border-white/10">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div>
                        <Link href="/" className="font-black text-xl text-primary">4M Motos</Link>
                    </div>
                    <ul
                        className="hidden md:flex space-x-8 items-center list-none"
                        role="menubar"
                    >
                        <li role="none">
                            <a href="#services" className="text-sm hover:text-primary transition-colors" role="menuitem">
                                Serviços
                            </a>
                        </li>
                        <li role="none">
                            <a href="#about" className="text-sm hover:text-primary transition-colors" role="menuitem">
                                Sobre
                            </a>
                        </li>
                        <li role="none">
                            <a href="#contact" className="text-sm hover:text-primary transition-colors" role="menuitem">
                                Contato
                            </a>
                        </li>
                        <li role="none">
                            <Button size="sm">
                                Agende agora
                            </Button>
                        </li>
                    </ul>
                    <div className="md:hidden flex items-center">
                        <Button size="xs">
                            Agende agora
                        </Button>
                    </div>
                </div>
            </nav>
        </header >
    );
}
