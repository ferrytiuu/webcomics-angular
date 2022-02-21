import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from "@angular/core";
import { Webcomic } from '../dadesServei/webcomic_interface';

@Pipe({
  name: "ordenarPer"
})
export class filtrarPipe implements PipeTransform {
  transform(array: Webcomic[], filterTitol = ' ', filterAutor = ' ', filterGenere = ' ') {

    if (array) {
      let filGenere: String = filterGenere;
      if (filterGenere == 'Tots els gèneres') {
        filGenere = '';
      }
      const regexTItol = new RegExp('' + filterTitol + '', 'ig');
      const regexAutor = new RegExp('' + filterAutor + '', 'ig');
      const regexGenere = new RegExp('' + filGenere + '', 'ig');
      const matchedSites = array.filter((element) => element.Titol.match(regexTItol) && element.Autor.match(regexAutor) && element.Genere.match(regexGenere));
      console.log(matchedSites);
      return matchedSites;
    }
    return [];
  }
}
