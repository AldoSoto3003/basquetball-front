export interface JugadoresI {
    id:               number;
    Nombre:           string;
    Descripcion:      string;
    urlImagen:        string;
    id_asenta_cpcons: number;
    cp:               string;
    ID_Usuario:       number;
    Estatus:          string;
    jugadores:        Jugadore;
}

export interface Jugadore {
    id_equipo:     number;
    id_jugador:    number;
    DorsalJugador: number;
}
