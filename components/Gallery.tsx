export default function Gallery() {
  const images = [
    {
      src: "/imagens/Galeria/amanda-terapeuta-tantrica-florianopolis (16).webp",
      alt: "Amanda terapeuta tântrica 16"
    },
    {
      src: "/imagens/Galeria/amanda-terapeuta-tantrica-florianopolis (15).webp",
      alt: "Amanda terapeuta tântrica 15"
    },
    {
      src: "/imagens/Galeria/amanda-terapeuta-tantrica-florianopolis (14).webp",
      alt: "Amanda terapeuta tântrica 14"
    },
    {
      src: "/imagens/Galeria/amanda-terapeuta-tantrica-florianopolis (12).webp",
      alt: "Amanda terapeuta tântrica 12"
    },
    {
      src: "/imagens/Galeria/massagista-tantrica-sensual-amanda-balneario.jpg.webp",
      alt: "Massagista tântrica sensual Amanda Balneário"
    },
    {
      src: "/imagens/Galeria/amanda-terapia-tantrica-para-homens-balneario.jpg.webp",
      alt: "Amanda terapia tântrica para homens Balneário"
    },
    {
      src: "/imagens/Galeria/amanda-relaxamento-profundo-florianopolis.jpg.webp",
      alt: "Amanda relaxamento profundo Florianópolis"
    },
    {
      src: "/imagens/Galeria/experiencia-relaxante-amanda-balneario.jpg.webp",
      alt: "Experiência relaxante Amanda Balneário"
    },
    {
      src: "/imagens/Galeria/massagem-com-prazer-e-cuidado-amanda-balneario.jpg.webp",
      alt: "Massagem com prazer e cuidado Amanda Balneário"
    },
    {
      src: "/imagens/Galeria/amanda-massagem-sensual-e-terapeutica-florianopolis.jpg.webp",
      alt: "Amanda massagem sensual e terapêutica Florianópolis"
    },
    {
      src: "/imagens/Galeria/amanda-especialista-massagem-sensual-balneario.jpg.webp",
      alt: "Amanda especialista massagem sensual Balneário"
    },
    {
      src: "/imagens/Galeria/profissional-massagem-nuru-florianopolis.jpg.webp",
      alt: "Profissional massagem nuru Florianópolis"
    },
    {
      src: "/imagens/Galeria/massagista-sensual-balneario-camboriu.jpg.webp",
      alt: "Massagista sensual Balneário Camboriú"
    },
    {
      src: "/imagens/Galeria/amanda-terapeuta-tantrica-florianopolis (1).webp",
      alt: "Amanda terapeuta tântrica 1"
    }
  ]

  return (
    <section id="galeria" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-terracotta-600 to-terracotta-800 bg-clip-text text-transparent">
            Galeria
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-terracotta-500 to-terracotta-600 mx-auto mb-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-64 h-96 object-cover mx-auto group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 