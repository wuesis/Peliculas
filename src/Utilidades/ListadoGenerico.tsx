import { ReactElement } from "react";
import Cargando from "./Cargando";

export default function ListadoGenerico(props: ListadoGenericoProps) {
    if (!props.Listado) {
        if (!props.UICargando)
            return <Cargando />
        else
            return (props.UICargando)
    } else {
        if (props.Listado.length == 0) {
            if (!props.UIVacio)
                return <>Listado vacio</>
            else
                return props.UIVacio
        }
        else
            return (<>
                <div style={{ display: 'flex', margin: '20px', columnGap: '20px' }}>
                    {props.Contenido}
                </div>
            </>)
    }
}


interface ListadoGenericoProps {
    Listado: any;
    Contenido?: ReactElement;
    UICargando?: ReactElement;
    UIVacio?: ReactElement
}