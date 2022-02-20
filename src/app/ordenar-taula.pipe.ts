import {Pipe, PipeTransform} from '@angular/core';
import {Webcomic} from "./dadesServei/webcomic_interface";

@Pipe({
  name: 'ordenarTaula'
})
export class OrdenarTaulaPipe implements PipeTransform {


  compareTitol(a:Webcomic, b:Webcomic) {
    if (a.Titol < b.Titol) {
      return -1;
    }
    if (a.Titol > b.Titol) {
      return 1;
    }
    return 0;
  }
  compareGenere(a:Webcomic, b:Webcomic) {
    if (a.Genere < b.Genere) {
      return -1;
    }
    if (a.Genere > b.Genere) {
      return 1;
    }
    return 0;
  }
  comparePuntuacio(a:Webcomic, b:Webcomic) {
    if (a.Puntuacion < b.Puntuacion) {
      return -1;
    }
    if (a.Puntuacion > b.Puntuacion) {
      return 1;
    }
    return 0;
  }
  compareFav(a:Webcomic, b:Webcomic) {
    if (a.Fav < b.Fav) {
      return -1;
    }
    if (a.Fav > b.Fav) {
      return 1;
    }
    return 0;
  }

  transform(webcomics: Webcomic[], ...args: string[]): Webcomic[] {
    let tipo:string = args[1];
    console.log(tipo);
    if (args[0] == "Titulo") {
      webcomics.sort(this.compareTitol);
      if(tipo == "true") return webcomics;
      else if (tipo=="false") return webcomics.reverse();
    }
    if (args[0] == "Genere") {
      webcomics.sort(this.compareGenere);
      if(tipo == "true") return webcomics;
      else if (tipo=="false") return webcomics.reverse();
    }
    if (args[0] == "Puntuacion") {
      webcomics.sort(this.comparePuntuacio);
      if(tipo == "true") return webcomics;
      else if (tipo=="false") return webcomics.reverse();
    }
    if (args[0] == "Favorito") {
      webcomics.sort(this.compareFav);
      if(tipo == "true") return webcomics;
      else if (tipo=="false") return webcomics.reverse();
    }

    return webcomics;
  }



}
