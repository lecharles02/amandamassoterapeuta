export default function Space() {
  const beneficios = [
    {
      title: 'Ambiente Climatizado',
      desc: 'Temperatura ideal controlada para seu máximo conforto durante a massagem.'
    },
    {
      title: 'Aromaterapia e Luz Ambiente',
      desc: 'Atmosfera relaxante com óleos essenciais e iluminação terapêutica.'
    },
    {
      title: 'Camas Profissionais',
      desc: 'Equipamentos de massagem profissionais, amplos e confortáveis.'
    },
    {
      title: 'Higiene Rigorosa',
      desc: 'Protocolos rigorosos de limpeza e segurança sanitária.'
    },
    {
      title: 'Música Terapêutica',
      desc: 'Trilha sonora especialmente selecionada para relaxamento profundo.'
    },
    {
      title: 'Privacidade Total',
      desc: 'Ambiente completamente reservado e discreto para sua tranquilidade.'
    }
  ];
  const imagens = [
    '/imagens/Meu Espaço/massagem-florianopolis.jpg.webp',
    '/imagens/Meu Espaço/sala-massoterapia-balneario-camboriu.jpg.webp',
    '/imagens/Meu Espaço/quarto-massagem-tantrica-balneario.jpg.webp',
    '/imagens/Meu Espaço/espaco-massagem-florianopolis.jpg.webp'
  ];
  return (
    <section id="espaco" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Lista de benefícios */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-terracotta-600 to-terracotta-800 bg-clip-text text-transparent">
              Ambiente Preparado para Massagem em Florianópolis
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-terracotta-500 to-terracotta-600 mb-6"></div>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Espaço terapêutico completo em Florianópolis, pensado para acolher corpo, alma e energia durante sua sessão de massagem.
            </p>
            <ul className="space-y-6">
              {beneficios.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="mt-1 text-green-600">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#e6f4ea" /><path d="M9 12l2 2 4-4" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
                  </span>
                  <div>
                    <div className="font-semibold text-lg text-gray-800">{item.title}</div>
                    <div className="text-gray-500 text-sm">{item.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* Grade de fotos */}
          <div className="grid grid-cols-2 gap-20 px-2 md:px-8">
            {imagens.slice(0,2).map((src, idx) => (
              <div key={idx} className="aspect-square max-w-lg mx-auto flex items-center justify-center h-80 md:h-[24rem]">
                <img src={src} alt={`Espaço de massagem ${idx+1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <span className="flex items-center text-gray-500 text-sm">
          <span className="mr-1" style={{fontSize: '1em'}}>📍</span>
          Rua Tenente Silveira 199 - Florianópolis
        </span>
      </div>
    </section>
  )
} 