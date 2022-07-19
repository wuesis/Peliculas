import PeliculaModel from "./Pelicula.model"
import css from "./Pelicula.module.css"

export default function Pelicula(props: PeliculaProps) {

    return (
        <>
            <div className={css.Contenedor}>
                <div className={css.Cabecera}>
                 
                        <h2 className={css.Valoracion}>{props.Pelicula.Valoracion}/5</h2>
                     
                    <img className={css.Arte} alt="ArteDelContenidoAudioVisual" src={props.Pelicula.Arte} />
                </div>

                <div className={css.Cuerpo}>
                    <p>{props.Pelicula.Titulo}</p>
                </div>

                <div className={css.Pie}>
                    <p>{props.Pelicula.ID}</p>
                </div>
            </div>
        </>
    )
}



interface PeliculaProps {
    Pelicula: PeliculaModel
}



