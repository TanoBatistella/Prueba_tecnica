import React from 'react';

// Definición de las propiedades del componente
interface Nota {
  id: string;
  titulo: string;
}

interface Release {
  fecha: string;
  notas: Nota[];
}

interface BarraLateralProps {
  releases: Release[];
  onSelectNota: (id: string) => void;
}

// Componente de barra lateral
const BarraLateral: React.FC<BarraLateralProps> = ({ releases, onSelectNota }) => {
  const handleClick = (id: string) => {
    onSelectNota(id);
    const elemento = document.getElementById(id);
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Desplaza a la nota seleccionada
    }
  };

  return (
    <div className="md:w-1/4 md:ml-8 mt-8 md:mt-0 sticky top-0 h-screen">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Todas las Notas</h2>
        <div className="space-y-4">
          {releases.map((release) => (
            <div key={release.fecha}>
              <p className="text-sm text-[#7D879C] mb-2">{release.fecha}</p>
              {release.notas.map((nota) => (
                <button
                  key={nota.id}
                  onClick={() => handleClick(nota.id)} 
                  className="text-left text-[#2B3445] text-base hover:text-[#2DCAB1] transition-colors w-full"
                >
                  • {nota.titulo}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BarraLateral;
