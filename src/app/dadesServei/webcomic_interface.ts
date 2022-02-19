export interface Webcomic {
  id:number,
  Titol: string;
  Genere: string;
  Imatge: string;
  Descripcio: string;
  Autor:string;
  Puntuacion:number;
  Fav:boolean;
  Preview:number;
  Capitulos: {
    nom: string,
    data: string,
    posicio: string
  }[]

}
