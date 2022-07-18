import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { PeliculaModel } from './Peliculas/Pelicula.model';
import Pelicula from './Peliculas/Pelicula';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const pelicula: PeliculaModel = {
  ID: 1,
  Titulo: "Bob esponja",
  Arte: "data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAAAQCQCdASqzAIQAPpFIok0lpCMiIEgAsBIJaW7hdgEbQBWb0VcIMghqqTXbaLhBkENVSa7bRcIMghqqTXbaLhBkENVSa7bRcIMghqqTXbaLOAAA/v8wjf//yDH+7L/STiMAAAAAAAA=",
  Valoracion: 5
}

root.render(
  <React.StrictMode>
    <div style={{margin: '20px'}}>
      <Pelicula Pelicula={pelicula} />
    </div>
  </React.StrictMode>
);

reportWebVitals();
