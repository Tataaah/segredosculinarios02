import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const names = [
  'Ana Silva', 'Carlos Oliveira', 'Juliana Santos', 'Marcos Pereira', 
  'Fernanda Lima', 'Roberto Alves', 'Luciana Costa', 'Gabriel Souza',
  'Patricia Ferreira', 'Eduardo Martins', 'Camila Rodrigues', 'Bruno Almeida'
];

const PurchaseNotification: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentName, setCurrentName] = useState('');

  useEffect(() => {
    const showNotification = () => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      setCurrentName(randomName);
      setIsVisible(true);
      
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    // Show first notification after 10 seconds
    const initialTimeout = setTimeout(() => {
      showNotification();
    }, 10000);

    // Show subsequent notifications randomly
    const interval = setInterval(() => {
      showNotification();
    }, Math.random() * 30000 + 20000); // Between 20-50 seconds

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="fixed bottom-4 left-4 z-50 max-w-xs bg-white/90 backdrop-blur-md border border-[#D4AF37] rounded-lg shadow-lg p-3"
        >
          <div className="flex items-center gap-3">
            <div className="bg-green-100 rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">{currentName}</p>
              <p className="text-xs text-gray-600">acabou de comprar o Pacote Premium</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PurchaseNotification;