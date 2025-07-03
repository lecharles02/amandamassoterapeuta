'use client'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-terracotta-100">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div>
              <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-terracotta-600 to-terracotta-800 bg-clip-text text-transparent py-2 md:py-0">
                Amanda Terapias do Corpo & Alma
              </h1>
              <div className="text-xs md:text-sm text-terracotta-700 font-medium -mt-1 md:-mt-0">
                Massoterapeuta
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-terracotta-600 transition-colors font-medium">
              Início
            </a>
            <a href="#servicos" className="text-gray-700 hover:text-terracotta-600 transition-colors font-medium">
              Serviços
            </a>
            <a href="#sobre" className="text-gray-700 hover:text-terracotta-600 transition-colors font-medium">
              Sobre
            </a>
            <a href="#galeria" className="text-gray-700 hover:text-terracotta-600 transition-colors font-medium">
              Galeria
            </a>
            <a href="#depoimentos" className="text-gray-700 hover:text-terracotta-600 transition-colors font-medium">
              Depoimentos
            </a>
            <a href="#contato" className="text-gray-700 hover:text-terracotta-600 transition-colors font-medium">
              Contato
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-terracotta-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-terracotta-100">
            <div className="flex flex-col space-y-4">
              <a href="#inicio" className="text-gray-700 hover:text-terracotta-600 transition-colors font-medium">
                Início
              </a>
              <a href="#servicos" className="text-gray-700 hover:text-terracotta-600 transition-colors font-medium">
                Serviços
              </a>
              <a href="#sobre" className="text-gray-700 hover:text-terracotta-600 transition-colors font-medium">
                Sobre
              </a>
              <a href="#galeria" className="text-gray-700 hover:text-terracotta-600 transition-colors font-medium">
                Galeria
              </a>
              <a href="#depoimentos" className="text-gray-700 hover:text-terracotta-600 transition-colors font-medium">
                Depoimentos
              </a>
              <a href="#contato" className="text-gray-700 hover:text-terracotta-600 transition-colors font-medium">
                Contato
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 