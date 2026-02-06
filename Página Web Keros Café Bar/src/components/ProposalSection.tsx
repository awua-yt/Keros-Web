import { Coffee, Wine, UtensilsCrossed } from "lucide-react";
import { motion } from "motion/react";

const proposals = [
  {
    icon: Coffee,
    title: "Café de Especialidad",
    description:
      "Directo de productores cajamarquinos, preparado con pasión por nuestros baristas.",
  },
  {
    icon: Wine,
    title: "Coctelería de Autor",
    description:
      "Creaciones únicas y clásicos reinventados para sorprender tu paladar.",
  },
  {
    icon: UtensilsCrossed,
    title: "Piqueos para Compartir",
    description:
      "El acompañamiento perfecto para tu bebida y una buena conversación.",
  },
];

export function ProposalSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {proposals.map((proposal, index) => {
            const Icon = proposal.icon;
            return (
              <motion.div
                key={proposal.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#DC2626]/10 mb-6">
                  <Icon className="w-10 h-10 text-[#DC2626]" />
                </div>
                <h3 className="text-2xl mb-4 text-[#1F2937]">{proposal.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {proposal.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
