import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      image: "https://i.im.ge/2025/04/20/vuiFbf.IMG-5417.jpeg",
      alt: "Avaliação de cliente"
    },
    {
      image: "https://i.im.ge/2025/04/20/vuiXZp.IMG-5416.jpeg",
      alt: "Avaliação de cliente"
    },
    {
      image: "https://i.im.ge/2025/04/20/vuirXP.IMG-5413.jpeg",
      alt: "Avaliação de cliente"
    },
    {
      image: "https://i.im.ge/2025/04/20/vuiowq.IMG-5414.jpeg",
      alt: "Avaliação de cliente"
    },
    {
      image: "https://i.im.ge/2025/04/20/vuiMH4.IMG-5415.jpeg",
      alt: "Avaliação de cliente"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-[#5B3924] py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-serif text-center font-bold text-white mb-10"
        >
          O QUE NOSSOS CLIENTES ESTÃO FALANDO SOBRE OS RECHEIOS
        </motion.h2>
        
        <div className="relative">
          <div className="overflow-hidden rounded-lg shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.alt}
                    className="mx-auto w-full max-w-2xl rounded-lg shadow-lg"
                    style={{ maxHeight: '600px', objectFit: 'contain' }}
                  />
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-r-lg p-4 ml-2 focus:outline-none transition-colors duration-300 group"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-8 w-8 transform group-hover:-translate-x-1 transition-transform" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-l-lg p-4 mr-2 focus:outline-none transition-colors duration-300 group"
            aria-label="Próximo"
          >
            <ChevronRight className="h-8 w-8 transform group-hover:translate-x-1 transition-transform" />
          </button>
          
          <div className="flex justify-center mt-6 gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-white w-6' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;