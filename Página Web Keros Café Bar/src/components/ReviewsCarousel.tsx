import { motion } from "motion/react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const reviews = [
  {
    id: 1,
    name: "María González",
    rating: 5,
    comment:
      "¡El mejor café de Cajamarca! El arte latte es increíble y los baristas super amables. El ambiente es perfecto para trabajar o reunirse con amigos.",
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    rating: 5,
    comment:
      "Los cócteles son espectaculares, especialmente el pisco sour de autor. Los piqueos están deliciosos. Definitivamente mi lugar favorito en la ciudad.",
  },
  {
    id: 3,
    name: "Ana Pérez",
    rating: 5,
    comment:
      "Ambiente acogedor, música perfecta y el café de especialidad es de otro nivel. Se nota el compromiso con los productores locales. ¡100% recomendado!",
  },
];

export function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-20 bg-[#1F2937]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl mb-4 text-white">Lo que dicen de Nosotros</h2>
          <div className="flex justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-6 h-6 fill-[#DC2626] text-[#DC2626]"
              />
            ))}
          </div>
          <p className="text-gray-300">Basado en reseñas de Google Maps</p>
        </motion.div>

        <div className="relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg p-8 shadow-xl"
          >
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-[#DC2626] text-[#DC2626]"
                />
              ))}
            </div>
            <p className="text-gray-700 text-lg mb-6 italic leading-relaxed">
              "{reviews[currentIndex].comment}"
            </p>
            <p className="text-[#DC2626]">
              — {reviews[currentIndex].name}
            </p>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevReview}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextReview}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-[#DC2626]" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
