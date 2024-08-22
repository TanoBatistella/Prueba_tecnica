import React, { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Filtros from '../components/Filtros';
import Timeline from '../components/Timeline';
import BarraLateral from '../components/BarraLateral';
import releaseNotesData from '../data/releaseNotes.json';
import '../styles/globals.css';

const Home: React.FC = () => {
  const [filtroActual, setFiltroActual] = useState('todos');
  const [notaSeleccionada, setNotaSeleccionada] = useState<string | null>(null);

  const handleSelectNota = (id: string) => {
    setNotaSeleccionada(id);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Notas de Lanzamiento</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Filtros filtroActual={filtroActual} cambiarFiltro={setFiltroActual} />
        </div>
        <div className="flex flex-col md:flex-row">
          <Timeline
            releases={releaseNotesData.releases}
            filtroActual={filtroActual}
            notaSeleccionada={notaSeleccionada}
            onSelectNota={handleSelectNota}
          />
          <BarraLateral releases={releaseNotesData.releases} onSelectNota={handleSelectNota} />
        </div>
      </main>
    </div>
  );
};

export default Home;
