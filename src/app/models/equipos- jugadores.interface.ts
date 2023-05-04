import { DatosUsuario } from "./Usuario.model";

export interface JugadoresI {
  id: number;
  Nombre: string;
  ID_Usuario: number;
  jugadores: Jugadore[];
  datos: datosU[];
}

export interface datosU{
    Nombres:          string;
    ApellidoPaterno:  string;
    ApellidoMaterno:  string;
}
export interface Jugadore {
  id_equipo: number;
  id_jugador: number;
  Nombre: string;
  DorsalJugador: number;
  IdJugador: number;

}

  
