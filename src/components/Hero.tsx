import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { getCurrentDate } from '../utils/date';
import { scrollToSection } from '../utils/scrollUtils';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#4C1C24] to-[#5B3924] pt-16 pb-12 px-4 flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto max-w-5xl"
      >
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
          SEGREDOS QUE SOMENTE OS GRANDES CONFEITEIROS SABEM - AGORA NO SEU PRATO
        </h1>
        
        <h2 className="font-serif text-xl md:text-3xl text-white mb-4">
          TRANSFORME RECHEIOS SEM FOGO EM UMA RENDA EXTRA DE 
          <span className="font-bold text-[#D4AF37]"> ATÉ R$3.735 POR MÊS!</span>
        </h2>
        
        <p className="text-white/80 text-sm mb-6">
          ATUALIZADO EM <span>{getCurrentDate()}</span>
        </p>
        
        <div className="mb-8">
          <div className="inline-block mx-auto bg-[#7D9774] px-4 py-2 rounded font-bold text-white mb-4">
            90% de desconto
          </div>
          
          <p className="text-lg text-white/90 mb-6">
            <span className="line-through">DE R$120,00</span> POR APENAS <span className="text-2xl font-bold text-white">R$12,99</span>
          </p>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('pricing')}
            className="bg-[#C1443D] hover:bg-[#A32E27] text-white font-bold py-4 px-8 rounded-lg shadow-lg transform transition-transform duration-300 text-lg"
          >
            EU QUERO AS RECEITAS
          </motion.button>
        </div>
        
        <div className="mb-6">
          <img
            src="https://i.im.ge/2025/04/20/vr6hwD.Capabook.th.jpeg"
            alt="Capa do livro de receitas"
            className="mx-auto rounded-lg shadow-lg max-w-xs md:max-w-sm mb-4"
          />
        </div>
        
        <div className="flex justify-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-6 w-6 text-[#D4AF37] fill-[#D4AF37]" />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;