export default function Footer() {
  return (
    <footer id="contato" className="bg-gray-900 text-white py-16">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Contato */}
          <div>
            <h4 className="text-xl font-semibold mb-4">CONTATO</h4>
            <div className="flex items-center justify-center md:justify-start mb-2">
              <span className="text-red-500 mr-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm12-12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm0 12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
              </span>
              <span className="text-lg">(48) 98879-3758</span>
            </div>
            <div className="text-gray-300 text-sm">Agendamento via WhatsApp</div>
          </div>

          {/* Localização */}
          <div>
            <h4 className="text-xl font-semibold mb-4">LOCALIZAÇÃO EM FLORIANÓPOLIS</h4>
            <div className="flex items-center justify-center md:justify-start mb-2">
              <span className="text-red-500 mr-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 10c-4.418 0-8-3.582-8-8 0-4.418 3.582-8 8-8s8 3.582 8 8c0 4.418-3.582 8-8 8z" /></svg>
              </span>
              <span className="text-lg">Rua Tenente Silveira 199, edifício Apolo</span>
            </div>
            <div className="text-gray-300 text-sm">Florianópolis-SC<br/>(Localização detalhada via WhatsApp)</div>
          </div>

          {/* Atendimento */}
          <div>
            <h4 className="text-xl font-semibold mb-4">ATENDIMENTO</h4>
            <div className="flex items-center justify-center md:justify-start mb-2">
              <span className="text-red-500 mr-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </span>
              <span className="text-lg">Segunda a Sábado, 09h às 18h</span>
            </div>
            <div className="text-gray-300 text-sm">Todos os dias em Florianópolis</div>
          </div>
        </div>

        <div className="col-span-3">
          <p className="text-center text-base text-terracotta-700 font-semibold mt-6">
            Atendimento presencial também disponível uma vez por semana em Balneário Camboriú e uma vez por mês em São Paulo, mediante agendamento prévio.
          </p>
        </div>

        <div className="border-t border-gray-700 mt-4 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Amanda Rafaela. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Site desenvolvido por <span className="text-terracotta-400 font-semibold">Charles</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 