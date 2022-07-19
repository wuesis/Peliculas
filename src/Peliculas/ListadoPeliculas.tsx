import Pelicula from "./Pelicula";
import PeliculaModel from "./Pelicula.model";

export default function ListadoPeliculas(props: ListadoPeliculasProps) {


    return (<>
        <div style={{ display: 'flex', margin: '20px', columnGap: '20px'}}>
            {props.Peliculas.map( (e) =>  <Pelicula Pelicula={e} />  ) }
        </div>

    </>)
}


interface ListadoPeliculasProps {
    Peliculas: PeliculaModel[]
}