import Link from "next/link";
import { MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background px-6 lg:px-40 pt-20 pb-8 border-t border-white/10" id="footer">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Parte superior */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-sm text-muted">
          {/* Logo + descrição */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-black uppercase text-white">4mmotos</h3>
            <p className="leading-relaxed">
              Oficina especializada em manutenção, revisão e performance de
              motocicletas. Precisão mecânica, transparência e paixão por duas
              rodas.
            </p>
          </div>

          {/* Unidades */}
          <div>
            <h4 className="font-black uppercase text-white mb-4">
              Nossas Unidades
            </h4>

            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="size-4 text-primary mt-1" />
                <Link
                  href={"https://maps.app.goo.gl/RKyY2LvwxQKQeJ1n9"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <p className="font-bold text-white">Unidade Centro I</p>
                  <p>R. Marieta Machado, 330</p>
                  <p>Centro, Sabará – MG</p>
                  <p>CEP 34505-390</p>
                </Link>
              </li>

              <li className="flex gap-3">
                <MapPin className="size-4 text-primary mt-1" />
                <Link
                  href={"https://maps.app.goo.gl/9EAKuVNq6t93hzJL6"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <p className="font-bold text-white">Unidade Centro II</p>
                  <p>R. Marquês de Sapucaí, 591</p>
                  <p>Centro, Sabará – MG</p>
                  <p>CEP 34505-600</p>
                </Link>
              </li>
            </ul>
          </div>

          {/* Conecte-se */}
          <div>
            <h4 className="font-black uppercase text-white mb-4">Conecte-se</h4>

            <ul className="space-y-3">
              <li>
                <Link
                  href="https://www.instagram.com/4mmotos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.facebook.com/4mmotos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="https://wa.me/5532999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  WhatsApp
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha inferior */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p className="text-center md:text-left max-w-3xl leading-relaxed">
            © {new Date().getFullYear()} 4MMotos. Todos os direitos reservados.
          </p>
          <p>
            Desenvolvido por{" "}
            <Link
              href="https://www.fullseek.com.br"
              target="_blank"
              className="hover:text-primary transition-colors"
            >
              FullSeek Soluções Tecnológicas
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
