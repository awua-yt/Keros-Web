import { useState } from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

type MenuCategory = "cafes" | "cocteles" | "sinAlcohol" | "piqueos" | "carnes";

interface MenuItem {
  name: string;
  price: string;
  description: string;
  featured: boolean;
  image?: string;
}

const menuData = {
  cafes: [
    {
      name: "Espresso de Cajamarca",
      price: "S/ 6.90",
      description:
        "Intenso y aromático, directo de las alturas cajamarquinas.",
      featured: false,
      image:
        "https://cdn.mesa247.io/archivos/local/foto/2025/09/fnyhw-foto-fotonetflix3-cafeina-gourmet-espresso-bar-1.jpg",
    },
    {
      name: "Cappuccino Arte Latte",
      price: "S/ 11.90",
      description:
        "Nuestro cappuccino signature con arte personalizado por nuestros baristas expertos.",
      featured: true,
      image:
        "https://images.unsplash.com/photo-1669162364316-a74b2d661d1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXR0ZSUyMGFydCUyMGNvZmZlZXxlbnwxfHx8fDE3NjQyOTkzODl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Espresso Tonic",
      price: "S/ 13.90",
      description:
        "Una explosión refrescante de café y cítricos, ideal para las tardes de sol.",
      featured: true,
      image:
        "https://images.unsplash.com/photo-1756678506940-cf96f497dc84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3ByZXNzbyUyMHRvbmljJTIwZ2xhc3N8ZW58MXx8fHwxNzY0MzcxOTAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Latte Vainilla",
      price: "S/ 10.90",
      description: "Suave y dulce, perfecto para cualquier momento del día.",
      featured: false,
      image:
        "https://dfrnt.coffee/cdn/shop/articles/descubre-como-preparar-un-latte-de-vainilla-perfecto-en-casa-738665.png?v=1733918359",
    },
  ],
  cocteles: [
    {
      name: "Pisco Sour Keros",
      price: "S/ 19.90",
      description:
        "¡Déjate llevar por la frescura del limón y la intensidad del Pisco en cada sorbo!",
      featured: true,
      image:
        "https://www.instagram.com/p/C25-1h6IVWj/",
    },
    {
      name: "Chilcano | Limón, Arándano, Fresa, Maracuyá",
      price: "S/ 19.90",
      description:
        "¡Descubre el sabor auténtico en Keros Bar!",
      featured: false,
      image:
        "https://www.instagram.com/p/C20s3A3tllm/",
    },
    {
      name: "Gin Tónic",
      price: "S/ 29.90",
      description: "¿Sabías que originalmente no se servía con fresas ni ninguna otra fruta?",
      featured: false,
      image:
        "https://www.instagram.com/p/C2vsk_HMQrm/?img_index=1",
    },
    {
      name: "Margarita",
      price: "S/ 14.90",
      description:
        "¡La fiesta está en cada sorbo!",
      featured: false,
      image:
        "https://www.instagram.com/p/C2iVQWBAshI/",
    },
    {
      name: "Mohito | Limón, Arándano, Fresa, Maracuyá",
      price: "S/ 12.90",
      description:
        "¡Perfecto para compartir con amigos y disfrutar de momentos inolvidables!",
      featured: false,
      image:
        "https://www.instagram.com/p/C2S9ECfv0Kq/",
    },
  ],
  sinAlcohol: [
    {
      name: "Limonada Frozen",
      price: "S/ 8.90",
      description: "Refrescante y perfecta para el clima cajamarquino.",
      featured: false,
      image:
        "https://polleriaslagranja.com/wp-content/uploads/2022/10/La-Granja-Real-Food-Chicken-Limonada-Frozen.png",
    },
    {
      name: "Té Helado de Frutas",
      price: "S/ 7.90",
      description: "Una mezcla de frutas de estación con té negro.",
      featured: false,
      image:
        "https://lalagunaahora.com/wp-content/uploads/2024/08/te-helado-.jpg",
    },
    {
      name: "Smoothie Verde",
      price: "S/ 12.90",
      description: "Espinaca, manzana verde, plátano y miel.",
      featured: false,
      image:
        "https://blogsmarttravelers.areas.com/sites/blogsmarttravelers.areas.com/files/uploads/2023/06/Smothie-Verde-e1686306631495.jpg",
    },
  ],
  piqueos: [
    {
      name: "Tabla de Quesos Regionales",
      price: "S/ 35.00",
      description:
        "Selección de quesos cajamarquinos acompañados de mermeladas artesanales.",
      featured: true,
      image:
        "https://images.unsplash.com/photo-1687269850754-be2607366462?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXBhcyUyMGZvb2QlMjBzaGFyaW5nfGVufDF8fHx8MTc2NDM3MTkwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Churros",
      price: "S/ 9.90",
      description: "El dulzor que le da el toque a tu bebida.",
      featured: false,
      image:
        "https://www.instagram.com/p/C2Ly7d2MG92/?img_index=1",
    },
    {
      name: "Tequeños",
      price: "S/ 11.90",
      description: "Un sabor saladito nunca viene mal.",
      featured: false,
      image:
        "https://www.instagram.com/p/C2Ly7d2MG92/?img_index=2",
    },
    {
      name: "Papas Keros",
      price: "S/ 10.90",
      description: "Papas crujientes con dos salsas especiales de la casa.",
      featured: false,
      image:
        "https://www.instagram.com/p/C2Ly7d2MG92/?img_index=3",
    },
  ],
  carnes: [
    {
      name: "Anticuchos",
      price: "S/ 9.90",
      description:
        "Corazón cajamarquino en tu mesa.",
      featured: true,
      image:
        "https://comidasperuanas.net/wp-content/uploads/2015/06/Anticuchos-de-Coraz%C3%B3n-Peruanos.jpg",
    },
    {
      name: "Lomo Saltado",
      price: "S/ 19.90",
      description:
        "Tiras de lomo fino salteadas con cebolla, tomate y papas fritas. El clásico peruano.",
      featured: false,
      image:
        "https://agraria.pe/imgs/a/lx/un-plato-de-lomo-saltado-gourmet-a-65-soles-desata-intenso-d-15847.jpg",
    },
    {
      name: "Bistec a lo Pobre",
      price: "S/ 29.90",
      description:
        "Bistec de res con huevo frito, plátano frito, papas fritas y arroz blanco.",
      featured: false,
      image:
        "https://storage.googleapis.com/takeapp/media/cm3i7gujg00050cjn0o046y2m.jpg",
    },
    {
      name: "Parrilla Keros",
      price: "S/ 54.90",
      description:
        "Selección de carnes a la parrilla: lomo, pollo, chorizo y anticuchos. Para compartir.",
      featured: true,
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWF0JTIwZ3JpbGwlMjBwbGF0dGVyfGVufDF8fHx8MTczNzEwMDAwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Churrasco Cajamarquino",
      price: "S/ 35.90",
      description:
        "Churrasco de res a la parrilla con chimichurri de la casa, ensalada y papas nativas.",
      featured: false,
      image:
        "https://www.farodapalloza.com/img/leoblog/b/1/63/lg-b-churrasco%20ternera-%20faro%20da%20palloza.jpg",
    },
  ],
};

const categories = [
  { id: "cafes" as MenuCategory, label: "Cafés" },
  { id: "cocteles" as MenuCategory, label: "Cócteles" },
  { id: "sinAlcohol" as MenuCategory, label: "Sin Alcohol" },
  { id: "piqueos" as MenuCategory, label: "Piqueos" },
  { id: "carnes" as MenuCategory, label: "Carnes" },
];

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("cafes");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [showOrderDialog, setShowOrderDialog] = useState(false);

  const handleOrder = (item: MenuItem) => {
    setSelectedItem(item);
    setShowOrderDialog(true);
  };

  const handleSendWhatsApp = () => {
    if (selectedItem) {
      const message = `Hola! Me gustaría ordenar:\n\n${selectedItem.name}\nPrecio: ${selectedItem.price}\n\n¿Está disponible?`;
      const whatsappUrl = `https://wa.me/51976514444?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");
      setShowOrderDialog(false);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl mb-4 text-[#1F2937]">Nuestra Carta</h2>
          <p className="text-gray-600 text-lg">
            Descubre nuestras creaciones preparadas con dedicación
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full transition-all ${
                activeCategory === category.id
                  ? "bg-[#DC2626] text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {menuData[activeCategory].map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg transition-shadow hover:shadow-lg ${
                item.featured ? "bg-[#FAFAFA] border-2 border-[#DC2626]" : "bg-gray-50"
              }`}
            >
              {item.featured && item.image && (
                <div className="mb-4 rounded-lg overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
              )}
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl text-[#1F2937]">
                  {item.name}
                </h3>
                <span className="text-[#DC2626] ml-4 whitespace-nowrap">
                  {item.price}
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">{item.description}</p>
              {item.featured && (
                <span className="inline-block mb-3 text-sm text-[#DC2626]">
                  ⭐ Producto Destacado
                </span>
              )}
              <Button
                onClick={() => handleOrder(item)}
                className="w-full bg-[#DC2626] hover:bg-[#B91C1C] text-white"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Ordenar Ahora
              </Button>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Order Dialog */}
      <Dialog open={showOrderDialog} onOpenChange={setShowOrderDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl">Hacer Pedido</DialogTitle>
            <DialogDescription>
              Confirma tu pedido y te contactaremos por WhatsApp
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6">
            <div className="bg-[#FAFAFA] p-4 rounded-lg">
              <h3 className="text-lg text-[#1F2937] mb-2">{selectedItem?.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{selectedItem?.description}</p>
              <div className="text-2xl text-[#DC2626]">{selectedItem?.price}</div>
            </div>

            <div className="space-y-4">
              <div className="border-l-4 border-[#DC2626] pl-4">
                <div className="text-gray-700 mb-2">¿Cómo funciona?</div>
                <p className="text-sm text-gray-600">
                  Al hacer clic en el botón, te enviaremos a WhatsApp con tu pedido listo. 
                  Nuestro equipo confirmará disponibilidad y coordinará el servicio.
                </p>
              </div>

              <div className="border-l-4 border-[#DC2626] pl-4">
                <div className="text-gray-700 mb-2">Opciones de servicio:</div>
                <p className="text-sm text-gray-600">
                  • Consumo en local<br />
                  • Para llevar<br />
                  • Delivery (consultar cobertura)
                </p>
              </div>
            </div>

            <Button
              className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white py-6"
              onClick={handleSendWhatsApp}
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Enviar Pedido por WhatsApp
            </Button>

            <p className="text-xs text-gray-500 text-center">
              Te responderemos lo antes posible durante nuestro horario de atención.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
