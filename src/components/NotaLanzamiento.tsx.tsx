import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Definición de las propiedades del componente
interface NotaLanzamientoProps {
  nota: {
    id: string;
    tipo: 'nueva' | 'arreglo';
    titulo: string;
    descripcion: string;
    imagen?: string;
  };
  expandido: boolean;
}

// Componente de nota de lanzamiento
const NotaLanzamiento: React.FC<NotaLanzamientoProps> = ({ nota, expandido }) => {
  const [isExpanded, setIsExpanded] = useState(expandido);

  // Actualiza el estado de expansión cuando cambie la propiedad expandido
  useEffect(() => {
    setIsExpanded(expandido);
  }, [expandido]);

  const chipStyles = {
    nueva: 'bg-[#1CB59C] text-white',
    arreglo: 'bg-[#F56565] text-white',
  };

  return (
    <div
      id={nota.id}
      className={`bg-white rounded-lg shadow-md p-6 mb-4 cursor-pointer transition-transform transform hover:scale-105 fade-in opacity-0`}
      onClick={() => setIsExpanded(!isExpanded)} // Expande o contrae la nota al hacer clic
    >
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-[#2B3445]">{nota.titulo}</h3>
        <span className={`px-3 py-1 rounded-full text-xs font-bold ${chipStyles[nota.tipo]}`}>
          {nota.tipo === 'nueva' ? 'Nueva' : 'Arreglo'}
        </span>
      </div>
      {isExpanded && (
        <div className="mt-4">
          <p className="text-[#2B3445] text-sm whitespace-pre-line">
            {nota.descripcion}
          </p>
          {nota.imagen && (
            <div className="w-full h-auto mt-4 rounded-lg shadow-md overflow-hidden">
              <Image
                src={nota.imagen}
                alt={nota.titulo}
                width={800}
                height={450}
                layout="responsive"
                objectFit="cover"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NotaLanzamiento;
