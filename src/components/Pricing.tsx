import React from 'react';
import { motion } from 'framer-motion';
import { Crown, ArrowRight } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <div id="pricing" className="bg-[#FFF4E6] py-16 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-serif text-center font-bold text-[#5B3924] mb-10"
        >
          <span className="relative inline-block">
            ADQUIRA AS RECEITAS:
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#D4AF37]"></span>
          </span>
        </motion.h2>
        
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {/* Basic Package */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-300 rounded-lg shadow-md p-6 md:p-8 flex flex-col max-w-sm w-full transform hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-2xl font-serif font-bold text-gray-800 text-center mb-6">PACOTE BÁSICO</h3>
            
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Receba seu acesso na hora</span>
              </li>
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Acesso Vitalício</span>
              </li>
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>+150 Tipos de Recheios Diferentes</span>
              </li>
            </ul>
            
            <div className="text-center mb-6">
              <p className="text-gray-500 line-through">R$120,00</p>
              <p className="text-3xl font-bold text-gray-800 mt-1">R$12,99</p>
            </div>
            
            <a 
              href="https://pay.kirvano.com/76e1e8fe-bc3e-4f47-bb52-0ce04e10c162" 
              className="group block text-center w-full bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded-md transition-all duration-300 relative overflow-hidden"
            >
              <span className="flex items-center justify-center gap-2">
                QUERO AS RECEITAS
                <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            
            <p className="text-sm text-center text-gray-600 mt-4">
              Mas antes de comprar… temos uma oferta AINDA MAIS vantajosa para você!
              <br />Veja logo abaixo⬇️
            </p>
          </motion.div>
          
          {/* Premium Package */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-[#D4AF37] rounded-lg shadow-xl p-6 md:p-8 flex flex-col max-w-sm w-full relative transform hover:scale-105 transition-transform duration-300"
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#D4AF37] text-white font-bold py-1 px-4 rounded-full text-sm">
              RECOMENDADO
            </div>
            
            <div className="flex items-center justify-center mb-6">
              <Crown className="h-6 w-6 text-[#D4AF37] mr-2" />
              <h3 className="text-2xl font-serif font-bold text-[#D4AF37]">PACOTE PREMIUM</h3>
            </div>
            
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#D4AF37] mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white">Receba seu acesso na hora</span>
              </li>
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#D4AF37] mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white">Acesso Vitalício</span>
              </li>
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#D4AF37] mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white">+150 Recheios Diferentes</span>
              </li>
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#D4AF37] mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white">+40 Receitas de Massas (Pão de Ló, Massa Amanteigada, Brownie, entre MUITOS outros)</span>
              </li>
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#D4AF37] mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white">Dicas para Decorações de Bolos</span>
              </li>
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#D4AF37] mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-white">30 Receitas Completas de Coberturas</span>
              </li>
            </ul>
            
            <div className="text-center mb-6">
              <p className="text-gray-400 line-through">R$200,00</p>
              <p className="text-3xl font-bold text-[#D4AF37] mt-1">R$19,99</p>
            </div>
            
            <a 
              href="https://pay.kirvano.com/9d9296aa-4d85-45b0-a3d4-09f42b71be06" 
              className="group block text-center w-full bg-[#C1443D] hover:bg-[#A32E27] text-white font-bold py-3 px-4 rounded-md transition-all duration-300 relative overflow-hidden shadow-lg"
            >
              <span className="flex items-center justify-center gap-2">
                EU QUERO AS RECEITAS PREMIUM!
                <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Sticky CTA Button */}
      <div className="fixed bottom-4 right-4 z-50 md:hidden">
        <a
          href="https://pay.kirvano.com/9d9296aa-4d85-45b0-a3d4-09f42b71be06"
          className="flex items-center gap-2 bg-[#C1443D] hover:bg-[#A32E27] text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300"
        >
          <Crown className="h-5 w-5" />
          <span>COMPRAR AGORA!</span>
        </a>
      </div>
    </div>
  );
};

export default Pricing;