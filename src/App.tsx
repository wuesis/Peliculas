import React, { useEffect, useState } from 'react';
import './App.css';
import ListadoPeliculas from './Peliculas/ListadoPeliculas';
import { LandingPageDTO } from './Peliculas/Pelicula.model';

export default function App() {

  const [Peliculas, SetPeliculas] = useState<LandingPageDTO>({})

  useEffect(() => {
    const timer = setTimeout(() => {
      SetPeliculas({
        EnCartelera: [{
          ID: 1,
          Titulo: "Star wars III",
          Arte: "https://m.media-amazon.com/images/M/MV5BZWFkZGJjYzUtNmUyOC00YjliLWJmMDQtNzBkZGQxOTEzMDJkXkEyXkFqcGdeQXVyNzExODc3Nzk@._V1_.jpg",
          Valoracion: 5
        },
        {
          ID: 2,
          Titulo: "The iron giant",
          Arte: "https://m.media-amazon.com/images/M/MV5BMmRiYzM2ZGYtNTcyYS00ZTFmLWJmY2YtYjI0NDAzOTlhNDU2XkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_.jpg",
          Valoracion: 3
        }],
        ProximosEstrenos: [{
          ID: 3,
          Titulo: "Black adam",
          Arte: "https://m.media-amazon.com/images/M/MV5BN2ZmYTlhNmMtODQ0OS00YWNiLWI1MmMtNzkwYWMzOGM4YWQxXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
          Valoracion: 3
        }]
      })
      console.log("GG");
    },1500)
    return () => clearTimeout(timer)
  })

  return (<>
    <h3>Peliculas en cartelera</h3>
    <ListadoPeliculas Peliculas={Peliculas.EnCartelera} />
    <h3>Proximos estrenos</h3>
    <ListadoPeliculas Peliculas={Peliculas.ProximosEstrenos} />
  </>)
}