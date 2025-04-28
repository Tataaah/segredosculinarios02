export const getCurrentDate = (): string => {
  const options: Intl.DateTimeFormatOptions = { 
    day: '2-digit', 
    month: '2-digit', 
    year: 'numeric' 
  };
  
  return new Date().toLocaleDateString('pt-BR', options);
};