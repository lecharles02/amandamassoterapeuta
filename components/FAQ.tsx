'use client'
import { useState } from 'react'

const faqs = [
  {
    question: "Qual a duração de cada sessão?",
    answer: "As sessões variam entre 1 hora e 1h30, dependendo do tipo de massagem escolhida. O tempo é otimizado para garantir o máximo de benefícios."
  },
  {
    question: "Quais são as formas de pagamento aceitas?",
    answer: "Aceito pagamentos em dinheiro, Pix e cartões de débito e crédito."
  },
  {
    question: "Onde você atende?",
    answer: "Atendo em Florianópolis (Rua Tenente Silveira 199, edifício Apolo), uma vez por semana em Balneário Camboriú e uma vez por mês em São Paulo, mediante agendamento prévio."
  },
  {
    question: "É possível fazer pacotes de sessões de massagem?",
    answer: "Sim! Ofereço pacotes personalizados de sessões de massagem com condições especiais. Entre em contato para saber mais e montar o pacote ideal para você."
  },
  {
    question: "Homens e mulheres podem fazer qualquer tipo de massagem?",
    answer: "Sim, todos os tipos de massagem são oferecidos tanto para homens quanto para mulheres, respeitando sempre as necessidades e limites de cada pessoa."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-terracotta-600 to-terracotta-800 bg-clip-text text-transparent">
            Perguntas Frequentes
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-terracotta-500 to-terracotta-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tire suas dúvidas sobre os serviços e atendimento
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
                >
                  <span className="text-lg font-semibold text-gray-800">
                    {faq.question}
                  </span>
                  <span className={`text-2xl text-terracotta-600 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-45' : ''
                  }`}>
                    +
                  </span>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-4 bg-gray-50">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 