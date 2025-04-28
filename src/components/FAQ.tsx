import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="border-b border-[#D4AF37]/20 last:border-b-0"
    >
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full py-4 text-left font-medium text-[#5B3924] focus:outline-none"
      >
        <span className="font-serif">{question}</span>
        <ChevronDown 
          className={`w-5 h-5 text-[#5B3924] transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
        />
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-[#5B3924]/80">{answer}</p>
      </div>
    </motion.div>
  );
};

const FAQ: React.FC = () => {
  const faqItems = [
    {
      question: "Para quem é indicado estes conteúdos?",
      answer: "Estes conteúdos são ideais para qualquer pessoa, desde iniciantes sem experiência até confeiteiros mais avançados que desejam aprimorar suas habilidades em bolos caseiros e aprender técnicas eficazes de venda."
    },
    {
      question: "Preciso de equipamentos especiais para começar?",
      answer: "Não. Começamos com o básico, ensinando você a trabalhar com materiais e utensílios que provavelmente já possui em sua cozinha."
    },
    {
      question: "Tenho que pagar todo mês?",
      answer: "Não! O conteúdo é todo entregue assim que o pagamento for feito, com acesso vitalício e você não precisa se preocupar com mensalidades. Isso o torna uma ótima opção para confeiteiros (as) que desejam aprender novos sabores e expandir seu cardápio sem ter que se preocupar com valores mensais para isso."
    },
    {
      question: "O PACOTE PREMIUM realmente vale a pena?",
      answer: "SIM! Com o pacote premium você terá acesso às melhores receitas dos confeiteiros mais renomados, incluindo receitas secretas e diversos bônus que não foram adicionados no Pacote Básico."
    },
    {
      question: "Quais são as formas de pagamento?",
      answer: "Você tem as opções de pagamento via cartões de crédito ou PIX."
    },
    {
      question: "Ainda não recebi o material. O que fazer?",
      answer: "Nós damos um prazo de até 24 horas para receber seu material, caso esse prazo já tenha passado indicamos a verificar as caixas de SPAM/lixo/outros de seu e-mail. Caso ainda não encontre seu material, envie um e-mail para o nosso suporte com o comprovante de compra."
    }
  ];

  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#FFF4E6] py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-serif text-center font-bold text-[#5B3924] mb-10"
        >
          Perguntas Frequentes
        </motion.h2>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;