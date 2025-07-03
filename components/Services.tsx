import { Flame, Sparkles, Bath, Flower, Zap, Heart } from 'lucide-react'

const services = [
  {
    icon: Bath,
    title: 'Escalda-Pés + Massagem Relaxante',
    description: 'Combinação perfeita para alívio de tensões, ansiedade e estresse. Escalda-pés com ervas medicinais seguido de massagem relaxante completa.',
    price: 'R$ 320',
    duration: '1h45',
    benefits: ['Alívio de tensões', 'Redução da ansiedade', 'Combate ao estresse', 'Relaxamento profundo']
  },
  {
    icon: Flame,
    title: 'Pedras Quentes + Relaxante',
    description: 'Massagem com pedras quentes que proporciona relaxamento profundo através do calor terapêutico das pedras vulcânicas.',
    price: 'R$ 275',
    duration: '1h',
    benefits: ['Relaxamento profundo', 'Calor terapêutico', 'Alívio de tensões', 'Bem-estar geral']
  },
  {
    icon: Sparkles,
    title: 'Massagem Terapêutica',
    description: 'Técnica especializada para alívio muscular, desbloqueio físico e liberação de dores crônicas e tensões corporais.',
    price: 'R$ 250',
    duration: '1h20',
    benefits: ['Alívio muscular', 'Desbloqueio físico', 'Liberação de dores crônicas', 'Redução de tensões']
  },
  {
    icon: Flower,
    title: 'Massagem Tântrica',
    description: 'Reconexão profunda com o corpo através de toques conscientes. Desbloqueios emocionais e expansão da sensibilidade. Atendimento feminino e masculino.',
    price: 'R$ 400',
    duration: '1h',
    benefits: ['Reconexão corporal', 'Desbloqueios emocionais', 'Expansão da sensibilidade', 'Bem-estar integral']
  },
  {
    icon: Zap,
    title: 'Mix Massagem Premium',
    description: 'Combinação única: Relaxante + Tântrica + Tailandesa. Experiência completa de prazer consciente e desbloqueio energético com finalização orgástica.',
    price: 'R$ 650',
    duration: '1h30',
    benefits: ['Experiência completa', 'Prazer consciente', 'Desbloqueio energético', 'Finalização orgástica']
  },
  {
    icon: Sparkles,
    title: 'Massagem Tântrica Magnética',
    description: 'Sessão avançada com limpeza energética, ativação da kundalini e toques magnéticos sutis para expansão da consciência corporal.',
    price: 'R$ 550',
    duration: '1h30',
    benefits: ['Limpeza energética', 'Ativação da kundalini', 'Toques magnéticos sutis', 'Expansão da consciência']
  },
  {
    icon: Heart,
    title: 'Massagem Relaxante',
    description: 'Alívio do estresse e tensão muscular com técnicas suaves e reconfortantes.',
    price: 'R$ 200',
    duration: '1h',
    benefits: ['Redução do estresse', 'Relaxamento muscular', 'Melhora do sono', 'Bem-estar geral']
  }
]

export default function Services() {
  return (
    <section 
      id="servicos" 
      className="py-16 bg-gray-50 animate-slide-up"
      aria-labelledby="services-heading"
    >
      <div className="container-custom">
        <header className="text-center mb-12">
          <h2 
            id="services-heading"
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-terracotta-600 to-terracotta-800 bg-clip-text text-transparent"
          >
            Meus Serviços
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-terracotta-500 to-terracotta-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofereço uma variedade de técnicas de massagem para cuidar do seu bem-estar físico e mental
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <article
              key={index}
              className="group relative p-5 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              style={{
                background: 'linear-gradient(135deg, #fffbe6 0%, #faf6e3 100%)',
                border: '3px solid transparent',
                backgroundClip: 'padding-box',
                position: 'relative',
                boxShadow: '0 8px 32px 0 rgba(212, 180, 99, 0.15)'
              }}
            >
              {/* Gradiente border */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none group-hover:opacity-100 opacity-80 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(120deg, #ffe9b3 0%, #d5bb99 50%, #b8946a 100%)',
                  padding: '3px',
                  filter: 'blur(0.5px)'
                }}
              >
                <div className="h-full w-full bg-white rounded-2xl"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-r from-terracotta-500 to-terracotta-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                
                <h3 className="text-lg font-bold mb-2 bg-gradient-to-r from-terracotta-600 to-terracotta-800 bg-clip-text text-transparent">
                  {service.title}
                </h3>
                
                <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                  {service.description}
                </p>

                <div className="text-xs text-gray-500 mb-2">
                  Duração: {service.duration}
                </div>
                
                <div className="text-xl font-bold text-terracotta-600 mb-3">
                  {service.price}
                </div>

                <ul className="text-xs text-gray-600 space-y-1">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-terracotta-500 rounded-full mr-1.5"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Schema.org structured data for services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Serviços de Massoterapia",
            "description": "Serviços de massagem tântrica, relaxante, terapêutica e esportiva em Florianópolis",
            "itemListElement": services.map((service, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Service",
                "name": service.title,
                "description": service.description,
                "provider": {
                  "@type": "Person",
                  "name": "Amanda Rafaela"
                },
                "areaServed": {
                  "@type": "City",
                  "name": "Florianópolis"
                },
                "offers": {
                  "@type": "Offer",
                  "price": service.price.replace('R$ ', ''),
                  "priceCurrency": "BRL",
                  "availability": "https://schema.org/InStock"
                },
                "serviceType": service.title,
                "duration": service.duration
              }
            }))
          })
        }}
      />
    </section>
  )
} 