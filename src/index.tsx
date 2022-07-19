import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import PeliculaModel from './Peliculas/Pelicula.model';
import ListadoPeliculas from './Peliculas/ListadoPeliculas';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const CotenidoVisual: PeliculaModel[] = [{
  ID: 1,
  Titulo: "Bob esponja",
  Arte: "data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAAAQCQCdASqzAIQAPpFIok0lpCMiIEgAsBIJaW7hdgEbQBWb0VcIMghqqTXbaLhBkENVSa7bRcIMghqqTXbaLhBkENVSa7bRcIMghqqTXbaLOAAA/v8wjf//yDH+7L/STiMAAAAAAAA=",
  Valoracion: 5
},
{
  ID: 2,
  Titulo: "Pooh",
  Arte: "data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAAAQCQCdASqzAIQAPpFIok0lpCMiIEgAsBIJaW7hdgEbQBWb0VcIMghqqTXbaLhBkENVSa7bRcIMghqqTXbaLhBkENVSa7bRcIMghqqTXbaLOAAA/v8wjf//yDH+7L/STiMAAAAAAAA=",
  Valoracion: 3
}];

const ContenidoVisualDos: PeliculaModel[] = [{
  ID: 3,
  Titulo: "thaf ppopy",
  Arte: "e",
  Valoracion: 1
}]


root.render(
  <React.StrictMode>
    <h3>Series god</h3>
    <ListadoPeliculas Peliculas={CotenidoVisual} />
    <h3>Series Zzz</h3>
    <ListadoPeliculas Peliculas={ContenidoVisualDos} />
  </React.StrictMode>
);

reportWebVitals();
