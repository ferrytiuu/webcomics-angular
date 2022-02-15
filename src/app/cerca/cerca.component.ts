import { Component, OnInit } from '@angular/core';
import { Webcomic } from "../dadesServei/webcomic_interface";
import { WebcomicServei } from "../dadesServei/servei_Webcomic";
import { filtrarPipe } from '../filtrar-cerca/filtrar-cerca.component';

@Component({
  selector: 'app-cerca',
  templateUrl: './cerca.component.html',
  styleUrls: ['./cerca.component.css']
})
export class CercaComponent implements OnInit {

  generes: any;

  cerca: string = '';

  webcomics: Webcomic[] = [];
  //:any;
  constructor(private webcomicService: WebcomicServei) {

  }

  ngOnInit() {
    this.obtenirWebcomics();
    this.genereBusqueda();
  }

  obtenirWebcomics(): void {
    this.webcomicService.obtenirWebcomics()
      .subscribe(alumnes => this.webcomics = alumnes);
  }

  genereBusqueda(): void {
    let generes = this.webcomics.map(function (x) {
      return x.Genere;
    });

    this.generes = new Set(generes);

  }

}
