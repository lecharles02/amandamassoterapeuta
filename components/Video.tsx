export default function Video() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-terracotta-600 to-terracotta-800 bg-clip-text text-transparent">
            Conheça Meu Espaço
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-terracotta-500 to-terracotta-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Veja como é o ambiente preparado para sua massagem em Florianópolis
          </p>
        </div>
        
        <div className="max-w-sm mx-auto">
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-black flex items-center justify-center">
            <video
              className="w-full h-full object-cover bg-black"
              controls
              preload="metadata"
              poster="/imagens/Hero/espaço-amanda-masssoterapeuta.webp"
            >
              <source src="/videos/espaco-massagem-tantrica-florianopolis.mp4" type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>
          </div>
        </div>
      </div>
    </section>
  )
} 