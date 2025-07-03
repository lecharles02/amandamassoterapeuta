export default function About() {
  return (
    <section 
      id="sobre" 
      className="py-20 bg-white animate-fade-in"
      aria-labelledby="about-heading"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <header>
              <h2 
                id="about-heading"
                className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-terracotta-600 to-terracotta-800 bg-clip-text text-transparent"
              >
                Sobre Amanda Rafaela
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-terracotta-500 to-terracotta-600 mb-8"></div>
            </header>
            
            <article className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Olá! Sou Amanda Rafaela, massoterapeuta apaixonada por cuidar do bem-estar das pessoas. 
                Com mais de 5 anos de experiência, dedico-me a proporcionar momentos de relaxamento e 
                alívio através de técnicas especializadas de massagem.
              </p>
              
              <p>
                Minha jornada começou com o desejo de ajudar pessoas a encontrarem equilíbrio físico e 
                mental em suas vidas agitadas. Cada sessão é personalizada para atender às necessidades 
                específicas de cada cliente, garantindo uma experiência única e transformadora.
              </p>
              
              <p>
                Trabalho em um ambiente acolhedor e profissional, onde você pode se sentir completamente 
                à vontade para relaxar e se entregar aos cuidados terapêuticos. Meu objetivo é que você 
                saia de cada sessão sentindo-se renovado, com mais energia e bem-estar.
              </p>
            </article>
            
            <aside className="mt-8 flex flex-wrap gap-4">
              <div className="bg-terracotta-50 px-4 py-2 rounded-full">
                <span className="text-terracotta-700 font-semibold">✓ Certificada</span>
              </div>
              <div className="bg-terracotta-50 px-4 py-2 rounded-full">
                <span className="text-terracotta-700 font-semibold">✓ 5+ Anos de Experiência</span>
              </div>
              <div className="bg-terracotta-50 px-4 py-2 rounded-full">
                <span className="text-terracotta-700 font-semibold">✓ Ambiente Profissional</span>
              </div>
            </aside>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="p-1 rounded-2xl" style={{background: 'linear-gradient(135deg, #ffe9b3 0%, #d5bb99 100%)'}}>
              <img src="/imagens/Sobre mim/amanda-massagem-terapeutica-corpo-e-alma-florianopolis.jpg.webp" alt="Amanda Massagem Terapêutica Corpo e Alma" className="object-cover w-72 h-[32rem] md:w-96 md:h-[40rem] rounded-2xl bg-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Schema.org structured data for About section */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Amanda Rafaela",
            "jobTitle": "Massoterapeuta Integrativa",
            "description": "Massoterapeuta apaixonada por cuidar do bem-estar das pessoas com mais de 5 anos de experiência",
            "url": "https://amandarafaela.com.br",
            "image": "https://amandarafaela.com.br/amanda-rafaela.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Florianópolis",
              "addressRegion": "SC",
              "addressCountry": "BR"
            },
            "knowsAbout": [
              "Massagem Relaxante",
              "Massagem Terapêutica",
              "Drenagem Linfática",
              "Massagem Esportiva",
              "Bem-estar",
              "Terapia Manual"
            ],
            "award": [
              "Certificada",
              "5+ Anos de Experiência",
              "Ambiente Profissional"
            ],
            "hasCredential": "Certificação em Massoterapia",
            "workExample": [
              "Massagem Relaxante",
              "Massagem Terapêutica", 
              "Drenagem Linfática",
              "Massagem Esportiva"
            ],
            "telephone": "+55-48-99999-9999",
            "email": "contato@amandarafaela.com.br"
          })
        }}
      />
    </section>
  )
} 