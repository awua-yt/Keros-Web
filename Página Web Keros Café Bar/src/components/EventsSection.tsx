import { motion } from "motion/react";
import { Calendar, Clock, Music, Percent } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const events = [
  {
    id: 1,
    title: "Martes de After Office",
    icon: Percent,
    day: "Todos los Martes",
    time: "6:00 PM - 8:00 PM",
    description: "2x1 en Chilcanos y Pisco Sours. El momento perfecto para relajarte después del trabajo.",
    image:
      "https://images.unsplash.com/photo-1758272133395-b0f83eb6f554?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRzJTIwdG9hc3RpbmclMjBkcmlua3N8ZW58MXx8fHwxNzY0MzcxOTAyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    highlight: true,
  },
  {
    id: 2,
    title: "Miércoles Acústico",
    icon: Music,
    day: "Todos los Miércoles",
    time: "9:00 PM - 11:00 PM",
    description: "Música en vivo con artistas locales. Disfruta de buena música, mejores bebidas y excelente compañía.",
    image:
      "https://images.unsplash.com/photo-1558098329-a11cff621064?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY291c3RpYyUyMG11c2ljJTIwY2FmZXxlbnwxfHx8fDE3NjQzNzE5MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    highlight: true,
  },
  {
    id: 3,
    title: "Jueves de Trivia",
    icon: Calendar,
    day: "Todos los Jueves",
    time: "8:00 PM - 10:00 PM",
    description: "Pon a prueba tus conocimientos en nuestro trivia night. Premios para los ganadores.",
    image:
      "https://images.unsplash.com/photo-1566665812752-7c00cca1aa95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjYWZlJTIwaW50ZXJpb3IlMjBwZW9wbGV8ZW58MXx8fHwxNzY0MzcxOTAxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    highlight: false,
  },
  {
    id: 4,
    title: "Happy Hour Diario",
    icon: Clock,
    day: "Lunes a Viernes",
    time: "5:00 PM - 7:00 PM",
    description: "Descuentos especiales en bebidas seleccionadas. La mejor forma de empezar tu tarde.",
    image:
      "https://images.unsplash.com/photo-1681579289844-cc57e4d60e10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGNvY2t0YWlscyUyMGJhcnxlbnwxfHx8fDE3NjQzNzE4OTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    highlight: false,
  },
];

export function EventsSection() {
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
          <h2 className="text-5xl mb-4 text-[#1F2937]">Eventos y Promociones</h2>
          <p className="text-gray-600 text-lg">
            Siempre hay algo especial esperándote en Keros
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => {
            const Icon = event.icon;
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow ${
                  event.highlight ? "border-2 border-[#DC2626]" : ""
                }`}
              >
                <div className="relative h-56">
                  <ImageWithFallback
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white mb-2">
                      <Icon className="w-6 h-6" />
                      <h3 className="text-2xl">{event.title}</h3>
                    </div>
                  </div>
                  {event.highlight && (
                    <div className="absolute top-4 right-4 bg-[#DC2626] text-white px-3 py-1 rounded-full">
                      Popular
                    </div>
                  )}
                </div>
                <div className="p-6 bg-white">
                  <div className="flex items-center gap-4 text-gray-600 mb-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{event.day}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600">
            Síguenos en nuestras redes sociales para estar al tanto de eventos especiales
            y promociones exclusivas
          </p>
        </motion.div>
      </div>
    </section>
  );
}
