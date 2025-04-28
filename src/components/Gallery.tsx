import React from 'react';
import { motion } from 'framer-motion';

const Gallery: React.FC = () => {
  const images = [
    {
      src: "https://i.im.ge/2025/04/20/vrNEdh.download-4.jpeg",
      alt: "Sobremesa confeiteira"
    },
    {
      src: "https://i.im.ge/2025/04/20/vrNtI9.download-3.jpeg",
      alt: "Doce gourmet"
    },
    {
      src: "https://i.im.ge/2025/04/20/vrNAJ8.download.jpeg",
      alt: "Sobremesa decorada"
    },
    {
      src: "https://i.im.ge/2025/04/20/vrNyxX.recipeshub24-recipeshub24-on-Threads.jpeg",
      alt: "Receita de confeitaria"
    },
    {
      src: "https://i.im.ge/2025/04/20/vrN3fY.Como-fazer-ovos-de-Pascoa-na-Colher-receita-facil.jpeg",
      alt: "Ovos de Páscoa na Colher"
    },
    {
      src: "https://i.im.ge/2025/04/20/vrNxPM.brigadeiro-.jpeg",
      alt: "Brigadeiro gourmet"
    }
  ];

  return (
    <div className="bg-[#FFF4E6] py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-serif text-center font-bold text-[#5B3924] mb-10"
        >
          <span className="relative inline-block">
            APRENDA A FATURAR MUITO COM SOBREMESAS COMO ESTAS
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#D4AF37]"></span>
          </span>
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-lg shadow-md group"
              style={{ height: '180px' }}
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;