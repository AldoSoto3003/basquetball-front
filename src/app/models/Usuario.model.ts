
export interface ListaUsuariosI {
    id:            number;
    email:         string;
    urlImagen:     any;
    Id_Rol:        number;
    ID_Genero:     number;
    Estatus:       string;
    datos_usuario: DatosUsuario | null;
    rol:           Rol;
    password: string;
}

export interface DatosUsuario {
    Nombres:          string;
    ApellidoPaterno:  string;
    ApellidoMaterno:  string;
    Domicilio:        string;
    referencia:       string;
    id_asenta_cpcons: number;
    cp:               string;
    curp:             string;
    Fecha_Nacimiento: Date;
    numSS:            string;
    telefono:         string;
}

export interface Rol {
    Id_Rol: number;
    name:   string;
}







export class Usuario{
    ApellidoPaterno: string;
    ApellidoMaterno: string;
    email: string;
    password: string;
    Nombres: string;
    Domicilio: string;
    Id_Rol: number;
    ID_Genero: number;
    id_asenta: number;
    CP: string;
    referencia: string;
    Fecha_Nacimiento: string;
    numSS:string;
    telefono:string;
    curp: string;
    Estatus: string;
    image: any;
}
