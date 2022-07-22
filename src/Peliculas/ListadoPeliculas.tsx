import Cargando from "./Cargando";
import Pelicula from "./Pelicula";
import { PeliculaModel } from "./Pelicula.model";

export default function ListadoPeliculas(props: ListadoPeliculasProps) {

    if (!props.Peliculas)
        return <Cargando/>
    else if (props.Peliculas.length == 0) {
        return <p>No hay peliculas disponibles</p>
    } else {
        return (<>
            <div style={{ display: 'flex', margin: '20px', columnGap: '20px' }}>
                {props.Peliculas.map((e) => <Pelicula Pelicula={e} />)}
            </div>
        </>)
    }
}


interface ListadoPeliculasProps {
    Peliculas?: PeliculaModel[]
}