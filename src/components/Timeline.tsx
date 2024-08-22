import React, { useEffect, useRef, useState } from 'react';
import NotaLanzamiento from './NotaLanzamiento.tsx';

// Definición de las propiedades
interface Nota {
  id: string;
  tipo: 'nueva' | 'arreglo';
  titulo: string;
  descripcion: string;
  imagen?: string;
  fecha: string;
}

interface Release {
  fecha: string;
  notas: Nota[];
}

interface TimelineProps {
  releases: Release[];
  filtroActual: string;
}

// Componentes
const Timeline: React.FC<TimelineProps> = ({ releases, filtroActual }) => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [selectedNotaId, setSelectedNotaId] = useState<string | null>(null);

  // Observador para animación de desvanecimiento al hacer scroll
  useEffect(() => {
    const elementos = timelineRef.current?.querySelectorAll('.fade-in');

    const opciones = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        }
      });
    }, opciones);

    elementos?.forEach((el) => observer.observe(el));

    return () => {
      elementos?.forEach((el) => observer.unobserve(el));
    };
  }, [releases]);

  // Filtra las notas según el filtro seleccionado
  const notasFiltradas = releases.flatMap((release) =>
    release.notas
      .filter(
        (nota) => filtroActual === 'todos' || nota.tipo === filtroActual
      )
      .map((nota) => ({ ...nota, fecha: release.fecha }))
  );

  return (
    <div className="flex flex-col md:flex-row">
      {/* Línea de tiempo */}
      <div className="flex-1">
        <div ref={timelineRef} className="space-y-8">
          {notasFiltradas.map((nota) => (
            <div key={nota.id} className="item-timeline">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 bg-[#2DCAB1] rounded-full mr-4"></div>
                <p className="text-sm text-[#7D879C]">{nota.fecha}</p>
              </div>
              <NotaLanzamiento nota={nota} expandido={selectedNotaId === nota.id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
