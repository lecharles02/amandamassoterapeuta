export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-terracotta-500 to-terracotta-600 w-full max-w-full overflow-x-hidden">
      <div className="container-custom w-full max-w-full">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto para Relaxar?
          </h2>
          <p className="text-xl text-terracotta-100 mb-8 max-w-3xl mx-auto">
            Agende sua sessão de massagem e descubra o poder transformador do toque terapêutico. 
            Sua jornada para o bem-estar começa aqui.
          </p>
          
          <div className="flex justify-center">
            <a
              href="https://wa.me/5548988793758?text=Ol%C3%A1! Gostaria de agendar uma sess%C3%A3o de massagem com a Amanda Rafaela."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-white to-[#ecd7b8] text-[#7d6345] font-bold py-4 px-8 rounded-full text-lg hover:scale-105 transition-transform duration-200 shadow-md border-2 border-terracotta-200"
            >
              ✨ AGENDAR AGORA ✨
            </a>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <span className="flex items-center text-gray-500 text-sm">
            <span className="mr-1" style={{fontSize: '1em'}}>📍</span>
            Atendimento em Florianópolis
          </span>
        </div>
      </div>
    </section>
  )
} 