import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Instagram } from "lucide-react";

const instagramPosts = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1669162364316-a74b2d661d1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXR0ZSUyMGFydCUyMGNvZmZlZXxlbnwxfHx8fDE3NjQyOTkzODl8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1681579289844-cc57e4d60e10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGNvY2t0YWlscyUyMGJhcnxlbnwxfHx8fDE3NjQzNzE4OTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1756678506940-cf96f497dc84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3ByZXNzbyUyMHRvbmljJTIwZ2xhc3N8ZW58MXx8fHwxNzY0MzcxOTAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1687269850754-be2607366462?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXBhcyUyMGZvb2QlMjBzaGFyaW5nfGVufDF8fHx8MTc2NDM3MTkwMHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1566665812752-7c00cca1aa95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjYWZlJTIwaW50ZXJpb3IlMjBwZW9wbGV8ZW58MXx8fHwxNzY0MzcxOTAxfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1758272133395-b0f83eb6f554?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRzJTIwdG9hc3RpbmclMjBkcmlua3N8ZW58MXx8fHwxNzY0MzcxOTAyfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function InstagramGallery() {
  return (
    <section className="py-20 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl mb-4 text-[#1F2937] inline-flex items-center gap-3">
            Vive la <span className="text-[#DC2626]">#ExperienciaKeros</span>
            <Instagram className="w-10 h-10 text-[#DC2626]" />
          </h2>
          <p className="text-gray-600 text-lg">
            Síguenos en Instagram y etiquétanos en tus fotos
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="aspect-square overflow-hidden rounded-lg shadow-md cursor-pointer"
            >
              <ImageWithFallback
                src={post.image}
                alt={`Instagram post ${post.id}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
