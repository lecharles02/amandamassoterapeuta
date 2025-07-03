export default function Testimonials() {
  const testimonials = [
    {
      name: "Maria Silva",
      text: "A Amanda é incrível! Sua massagem relaxante me ajudou muito com o estresse do trabalho. O ambiente é super acolhedor e ela é muito profissional.",
      rating: 5
    },
    {
      name: "João Santos",
      text: "Excelente profissional! A massagem terapêutica resolveu minhas dores nas costas. Recomendo muito!",
      rating: 5
    },
    {
      name: "Ana Costa",
      text: "Primeira vez que fiz massagem e adorei! A Amanda é muito atenciosa e o resultado foi surpreendente. Já agendei a próxima sessão.",
      rating: 5
    },
    {
      name: "Pedro Oliveira",
      text: "Profissionalismo e qualidade! A drenagem linfática fez uma diferença enorme na minha circulação. Super recomendo!",
      rating: 5
    }
  ]

  return (
    <section id="depoimentos" className="py-20 bg-white animate-fade-in">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-terracotta-600 to-terracotta-800 bg-clip-text text-transparent leading-tight overflow-visible">
            Depoimentos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-terracotta-500 to-terracotta-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja o que meus clientes dizem sobre os serviços e atendimento
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-terracotta-50 to-white p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-gray-700 mb-4 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="font-semibold text-terracotta-700 flex items-center gap-2">
                <span className="inline-block w-7 h-7 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center">
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 10a4 4 0 100-8 4 4 0 000 8zm0 2c-4 0-7 2-7 4v2h14v-2c0-2-3-4-7-4z" /></svg>
                </span>
                {testimonial.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 