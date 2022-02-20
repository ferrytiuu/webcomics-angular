import { Component, OnInit } from '@angular/core';
import {WebcomicServei} from "../dadesServei/servei_Webcomic";
import {Webcomic} from "../dadesServei/webcomic_interface";

@Component({
  selector: 'app-estadistiques',
  templateUrl: './estadistiques.component.html',
  styleUrls: ['./estadistiques.component.css']
})
export class EstadistiquesComponent implements OnInit {

  webcomics: Webcomic[] = [];
  ordenarTipo: string;
  ordenarComo:string = "true";

  constructor(private WebcomicService: WebcomicServei) { }

  ngOnInit() {
    this.obtenirWebcomic();

  }

  obtenirWebcomic(): void {
    this.WebcomicService.obtenirWebcomics()
      .subscribe(element => this.webcomics = element);
  }

  ordenarPer(event: Event): void{
    this.ordenarTipo = (event.target as HTMLInputElement).innerText;
    this.ordenarComo = (event.target as HTMLInputElement).getAttribute('ord') ?? "true";
    if(this.ordenarComo == "true") (event.target as HTMLInputElement).setAttribute("ord", "false");
    if(this.ordenarComo == "false") (event.target as HTMLInputElement).setAttribute("ord", "true");

    console.log(this.ordenarComo);
  }

}
