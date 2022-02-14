import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from "@angular/core";
import { Webcomic } from '../dadesServei/webcomic_interface';

@Pipe({
  name: "ordenarPer"
})
export class filtrarPipe implements PipeTransform {
  transform(array: Webcomic[], filter = ' ') {

    if (array) {
      const regex = new RegExp(''+filter+'', 'ig');
      const matchedSites = array.filter(({ Titol }) => Titol.match(regex));
      console.log(matchedSites);
      return matchedSites;
    }
    return [];
  }
}