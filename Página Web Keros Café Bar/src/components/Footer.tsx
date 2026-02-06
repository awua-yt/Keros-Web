import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1F2937] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-3xl text-[#DC2626] mb-4">KEROS</h3>
            <p className="text-gray-300 leading-relaxed">
              Tu punto de encuentro en Cajamarca. Café de especialidad, coctelería de
              autor y momentos para recordar.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-gray-300 hover:text-[#DC2626] transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#carta" className="text-gray-300 hover:text-[#DC2626] transition-colors">
                  Nuestra Carta
                </a>
              </li>
              <li>
                <a href="#eventos" className="text-gray-300 hover:text-[#DC2626] transition-colors">
                  Eventos
                </a>
              </li>
              <li>
                <a href="#tienda" className="text-gray-300 hover:text-[#DC2626] transition-colors">
                  Tienda
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Jr. Amazonas 123, Cajamarca</li>
              <li>+51 987 654 321</li>
              <li>hola@keroscafe.com</li>
              <li className="pt-2">
                <span className="text-gray-400">Síguenos:</span>
                <div className="flex gap-2 mt-2">
                  <span className="text-[#DC2626]">@keroscafe</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p className="flex items-center justify-center gap-2">
            Hecho con <Heart className="w-4 h-4 text-[#DC2626] fill-[#DC2626]" /> en
            Cajamarca © {new Date().getFullYear()} Keros Café Bar
          </p>
        </div>
      </div>
    </footer>
  );
}
