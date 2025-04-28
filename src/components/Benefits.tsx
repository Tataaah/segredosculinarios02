import React from 'react';
import { motion } from 'framer-motion';

interface BenefitBoxProps {
  title: string;
  description: string;
  delay: number;
}

const BenefitBox: React.FC<BenefitBoxProps> = ({ title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="bg-[#FFF4E6]/95 backdrop-blur-md border border-[#D4AF37]/30 rounded-lg p-4 shadow-md flex-1 min-w-[250px]"
    >
      <h3 className="font-serif text-[#5B3924] text-lg font-bold mb-2">{title}</h3>
      <p className="text-[#5B3924]/90 text-sm">{description}</p>
    </motion.div>
  );
};

const Benefits: React.FC = () => {
  const benefits = [
    {
      title: "APRENDA MESMO SENDO TOTALMENTE INICIANTE",
      description: "Receitas com passo a passo didático e facilitado, perfeitas para confeiteiras do básico ao avançado criarem recheios lucrativos sem complicação e aumentarem suas vendas com praticidade"
    },
    {
      title: "BAIXO INVESTIMENTO",
      description: "A produção de bolos caseiros exige um investimento inicial baixo. Com utensílios básicos e ingredientes acessíveis, você pode começar sem grandes custos e lucrar rápido!"
    },
    {
      title: "MERCADO EM CRESCIMENTO",
      description: "A demanda por alimentos caseiros e artesanais cresce a cada ano. Cada vez mais pessoas buscam produtos feitos à mão, criando um mercado em expansão para bolos lucrativos"
    },
    {
      title: "MARGEM DE LUCRO ATRATIVA",
      description: "A produção de bolos caseiros garante uma margem de lucro alta. Com custos baixos de ingredientes e utensílios, é possível vender por um preço atrativo e lucrar de verdade."
    },
    {
      title: "SATISFAÇÃO PESSOAL",
      description: "Produzir bolos caseiros traz uma satisfação única. Ver a alegria dos clientes é gratificante, além de permitir expressar sua criatividade com saberes e decorações que encantam e vendem."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-[#5B3924] to-[#4C1C24] py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-serif text-3xl text-center font-bold text-[#D4AF37] mb-10"
        >
          QUAIS SÃO OS BÔNUS?
        </motion.h2>
        
        <div className="flex flex-wrap gap-4 justify-center">
          {benefits.map((benefit, index) => (
            <BenefitBox 
              key={index}
              title={benefit.title}
              description={benefit.description}
              delay={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;