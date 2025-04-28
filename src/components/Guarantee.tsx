import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const Guarantee: React.FC = () => {
  return (
    <div className="bg-[#FFF4E6] py-10 px-4">
      <div className="container mx-auto max-w-3xl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-green-50/80 backdrop-blur-md border-2 border-green-600 rounded-lg shadow-md p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <div className="bg-green-100 rounded-full p-4">
              <ShieldCheck className="h-12 w-12 text-green-600" />
            </div>
            
            <div>
              <h3 className="text-xl md:text-2xl font-serif font-bold text-green-800 mb-2">
                Garantia de Satisfação
              </h3>
              
              <p className="text-sm md:text-base text-green-900/80">
                Estamos tão confiantes na qualidade das nossas receitas que oferecemos garantia de satisfação. 
                Se você não conseguir resultados incríveis seguindo nosso passo a passo ou se não estiver 
                satisfeito com o conteúdo por qualquer motivo, devolveremos 100% do seu investimento 
                em até 7 dias após a compra.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Guarantee;