import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Heart, Users, Award } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-20 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4 text-[#1F2937]">Sobre Keros</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Más que un café bar, somos una familia apasionada por crear experiencias inolvidables
          </p>
        </motion.div>

        {/* Nuestra Historia */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-8 h-8 text-[#DC2626]" />
              <h3 className="text-3xl text-[#1F2937]">Nuestra Historia</h3>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              Keros nació del sueño de crear un espacio donde la tradición cafetalera de
              Cajamarca se encuentra con la innovación de la coctelería moderna. Nuestro
              nombre evoca los vasos ceremoniales incas, símbolos de comunidad y
              celebración.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Fundado en 2023, nos hemos convertido en el punto de encuentro favorito de
              cajamarquinos y visitantes que buscan calidad, ambiente acogedor y un servicio
              excepcional. Cada taza de café y cada cóctel cuenta una historia de pasión y
              dedicación.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-lg overflow-hidden shadow-xl"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1566665812752-7c00cca1aa95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjYWZlJTIwaW50ZXJpb3IlMjBwZW9wbGV8ZW58MXx8fHwxNzY0MzcxOTAxfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Interior de Keros"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Compromiso con Cajamarca */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-lg overflow-hidden shadow-xl order-2 md:order-1"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1661669061302-307c750f6faf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMHNwZWNpYWx0eXxlbnwxfHx8fDE3NjQzNjY4NjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Granos de café de especialidad"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-8 h-8 text-[#DC2626]" />
              <h3 className="text-3xl text-[#1F2937]">Compromiso con Cajamarca</h3>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              En Keros creemos en el comercio justo y en apoyar a nuestra comunidad.
              Trabajamos directamente con productores locales de café de las zonas altas de
              Cajamarca, garantizando precios justos y relaciones a largo plazo.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Cada taza de café que servimos no solo es deliciosa, también contribuye al
              desarrollo sostenible de las familias caficultoras de nuestra región. Nuestro
              café es trazable, orgánico y cultivado con amor en las alturas andinas.
            </p>
          </motion.div>
        </div>

        {/* El Equipo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-white rounded-lg p-12 shadow-lg"
        >
          <div className="flex justify-center mb-6">
            <Users className="w-12 h-12 text-[#DC2626]" />
          </div>
          <h3 className="text-3xl mb-4 text-[#1F2937]">El Equipo</h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Detrás de cada bebida perfecta y cada sonrisa está nuestro increíble equipo.
            Baristas expertos, bartenders creativos y meseros apasionados que hacen posible
            tu experiencia en Keros. ¡Ven a conocernos!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
