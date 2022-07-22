export interface PeliculaModel{
    ID: number;
    Titulo: string;
    Arte: string;
    Valoracion: number;
}


export interface LandingPageDTO{
    EnCartelera?: PeliculaModel[];
    ProximosEstrenos?: PeliculaModel[];

}