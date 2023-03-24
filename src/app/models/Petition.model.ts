export class Petition<T>{
    message: string;
    status: number;
    data: T;
}

export class PetitionWithArray<T>{
    message: string;
    status: number;
    data: Array<T>;
}