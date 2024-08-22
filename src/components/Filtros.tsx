import React from 'react';

// Definición de las propiedades del componente
interface FiltrosProps {
  filtroActual: string;
  cambiarFiltro: (filtro: string) => void;
}

// Componente de filtros
const Filtros: React.FC<FiltrosProps> = ({ filtroActual, cambiarFiltro }) => {
  // Opciones de filtros disponibles
  const filtros = [
    { nombre: 'todos', etiqueta: 'Todos' },
    { nombre: 'nueva', etiqueta: 'Nuevas' },
    { nombre: 'arreglo', etiqueta: 'Arreglos' },
  ];

  return (
    <div className="flex space-x-4 mb-8">
      {filtros.map((filtro) => (
        <button
          key={filtro.nombre}
          className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${
            filtroActual === filtro.nombre
              ? 'bg-[#2DCAB1] text-white'
              : 'bg-gray-200 text-[#7D879C]'
          }`}
          onClick={() => cambiarFiltro(filtro.nombre)} // Cambia el filtro al hacer clic
        >
          {filtro.etiqueta}
        </button>
      ))}
    </div>
  );
};

export default Filtros;
