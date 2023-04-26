
export interface edicionesI  {
    id_torneo:   number;
    id_edicion:  number;
    descripcion: string;
    torneo:      Torneo;
}

export interface Torneo {
    id:           number;
    NombreTorneo: string;
    Estatus:      string;
}
