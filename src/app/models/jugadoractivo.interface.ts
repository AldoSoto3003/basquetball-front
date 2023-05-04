export interface JugadorA {
    id: number;
    id_equipo: number;
    Nombres: string;
    ApellidoPaterno: string;
    ApellidoMaterno: string;
    urlImagen: string;
  }
  
  export interface Respuesta {
    message: string;
    status: number;
    data: JugadorA[];
  }
  