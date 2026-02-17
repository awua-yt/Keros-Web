import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4 text-[#1F2937]">Contáctanos</h2>
          <p className="text-gray-600 text-lg">
            Ven a visitarnos o ponte en contacto con nosotros
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Horario */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-[#DC2626]/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[#DC2626]" />
                </div>
              </div>
              <div>
                <h3 className="text-xl text-[#1F2937] mb-2">Horario de Atención</h3>
                <div className="text-gray-600 space-y-1">
                  <p>Lunes a Sábado de 6PM a 11PM</p>
                </div>
              </div>
            </div>

            {/* Dirección */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-[#DC2626]/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#DC2626]" />
                </div>
              </div>
              <div>
                <h3 className="text-xl text-[#1F2937] mb-2">Dirección</h3>
                <a
                  href="https://maps.google.com/?q=Jr.+San+Andres+140+Plazuela+la+Roja+Cajamarca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#DC2626] transition-colors"
                >
                  Jr. San Andrés 140 - Primer Nivel Interior 2
                  <br />
                  Plazuela la Roja, Cajamarca, Perú
                  <br />
                  <span className="text-[#DC2626] underline">Ver en Google Maps</span>
                </a>
              </div>
            </div>

            {/* Teléfono */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-[#DC2626]/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[#DC2626]" />
                </div>
              </div>
              <div>
                <h3 className="text-xl text-[#1F2937] mb-2">Teléfono</h3>
                <a
                  href="tel:+51992344153"
                  className="text-gray-600 hover:text-[#DC2626] transition-colors"
                >
                  +51 992 344 153
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-[#DC2626]/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#DC2626]" />
                </div>
              </div>
              <div>
                <h3 className="text-xl text-[#1F2937] mb-2">Email</h3>
                <a
                  href="mailto:hola@keroscafe.com"
                  className="text-gray-600 hover:text-[#DC2626] transition-colors"
                >
                  hola@keroscafe.com
                </a>
              </div>
            </div>

            {/* Redes Sociales */}
            <div>
              <h3 className="text-xl text-[#1F2937] mb-4">Síguenos en Redes Sociales</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/keros.pe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white hover:scale-110 transition-transform"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://www.facebook.com/KerosCB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white hover:scale-110 transition-transform"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://tiktok.com/@keroscafe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white hover:scale-110 transition-transform"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-[500px] rounded-lg overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4479.406721229987!2d-78.507989!3d-7.150800999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMDknMDIuOSJTIDc4wrAzMCcyOC44Ilc!5e1!3m2!1ses-419!2spe!4v1771306948476!5m2!1ses-419!2spe"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
