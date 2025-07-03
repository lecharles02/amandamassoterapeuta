'use client'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

function useCountUp(to: number, duration = 1, suffix = '', start = 0) {
  const [count, setCount] = useState(start)
  const ref = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    let startTimestamp: number | null = null
    function step(timestamp: number) {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1)
      setCount(Math.floor(progress * (to - start) + start))
      if (progress < 1) {
        ref.current = setTimeout(() => requestAnimationFrame(step), 16)
      } else {
        setCount(to)
      }
    }
    requestAnimationFrame(step)
    return () => {
      if (ref.current) clearTimeout(ref.current)
    }
  }, [to, duration, start])

  return `${count}${suffix}`
}

export default function Hero() {
  const anos = useCountUp(5, 2.2, '+')
  const clientes = useCountUp(800, 2.5, '+')
  const satisfacao = useCountUp(99, 2.5, '%')

  return (
    <section 
      className="relative min-h-[140vh] md:min-h-screen flex flex-col justify-center bg-gradient-to-br from-[#c2ad8f] to-[#ecd7b8] overflow-x-hidden pt-0 w-full max-w-full"
      role="banner"
      aria-label="Seção principal - Amanda Rafaela Massoterapeuta"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="https://res.cloudinary.com/didmwzrw0/image/upload/v1750097317/Design_sem_nome_8_k8zuqn.png" 
          alt="Background decorativo"
          className="w-full h-full object-cover opacity-10 max-w-full"
          draggable="false"
        />
        <div className="absolute inset-0 bg-black opacity-10" />
      </div>
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <header>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white text-shadow-lg">
                Toque que
                <span className="text-white block">Desbloqueia</span>
                <span className="text-white block">Corpo, Emoções e Energia</span>
              </h1>
            </header>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Massagem Tântrica, Relaxante e Terapêutica em Florianópolis - Sessões únicas de massoterapia e terapias energéticas com foco em prazer consciente, alívio de dores e expansão do seu sentir.
            </p>

            <section aria-label="Estatísticas e experiência" className="grid grid-cols-3 gap-4 mb-8">
              <article className="text-center">
                <p className="text-2xl font-bold text-white text-shadow-lg" aria-label={`${anos} anos de experiência`}>{anos}</p>
                <p className="text-sm text-white/80">Anos de Experiência</p>
              </article>
              <article className="text-center">
                <p className="text-2xl font-bold text-white text-shadow-lg" aria-label={`${clientes} clientes atendidos`}>{clientes}</p>
                <p className="text-sm text-white/80">Clientes Atendidos</p>
              </article>
              <article className="text-center">
                <p className="text-2xl font-bold text-white text-shadow-lg" aria-label={`${satisfacao} de satisfação`}>{satisfacao}</p>
                <p className="text-sm text-white/80">Satisfação</p>
              </article>
            </section>

            <div className="flex justify-center">
              <a
                href="https://wa.me/5548988793758?text=Ol%C3%A1! Gostaria de agendar uma sess%C3%A3o de massagem com a Amanda Rafaela."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-white to-[#ecd7b8] text-[#7d6345] font-bold py-4 px-8 rounded-full text-lg hover:scale-105 transition-transform duration-200 shadow-md"
                aria-label="Agendar sessão de massoterapia agora"
              >
                ✨ AGENDAR AGORA ✨
              </a>
            </div>

            <div className="flex justify-center mt-6">
              <span className="flex items-center text-gray-200 text-sm">
                <span className="mr-1" style={{fontSize: '1em'}}>📍</span>
                Rua Tenente Silveira 199 - Florianópolis
              </span>
            </div>
          </div>

          <div className="relative">
            <figure className="relative h-96 lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/imagens/Hero/asddasd.webp"
                alt="Amanda Rafaela - Massoterapeuta Integrativa em Florianópolis oferecendo sessões de massagem tântrica e terapêutica"
                className="w-full h-full object-cover max-w-full"
                loading="eager"
                fetchPriority="high"
              />
              <figcaption className="sr-only">
                Amanda Rafaela - Massoterapeuta Integrativa em Florianópolis
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      {/* Schema.org structured data for the hero section */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Amanda Rafaela",
            "jobTitle": "Massoterapeuta Integrativa",
            "description": "Especialista em Massagem Tântrica, Relaxante e Terapêutica em Florianópolis",
            "url": "https://amandarafaela.com.br",
            "image": "https://amandarafaela.com.br/amanda-rafaela.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Florianópolis",
              "addressRegion": "SC",
              "addressCountry": "BR"
            },
            "knowsAbout": [
              "Massagem Tântrica",
              "Massagem Relaxante", 
              "Massagem Terapêutica",
              "Terapia Energética",
              "Prazer Consciente",
              "Alívio de Dores"
            ],
            "award": ["5+ anos de experiência", "800+ clientes atendidos", "99% de satisfação"],
            "telephone": "+55-48-99999-9999"
          })
        }}
      />
    </section>
  )
} 