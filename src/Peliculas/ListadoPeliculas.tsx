import Cargando from "../Utilidades/Cargando";
import ListadoGenerico from "../Utilidades/ListadoGenerico";
import Pelicula from "./Pelicula";
import { PeliculaModel } from "./Pelicula.model";

export default function ListadoPeliculas(props: ListadoPeliculasProps) {
    return <>
        <ListadoGenerico Listado={props.Peliculas}
            Contenido={props.Peliculas?.map((e) => <Pelicula Pelicula={e} />)}
            UICargando={<Cargando />}
            UIVacio={<p>Hola Mundos</p>}
        />
    </>
}


interface ListadoPeliculasProps {
    Peliculas?: PeliculaModel[]
}