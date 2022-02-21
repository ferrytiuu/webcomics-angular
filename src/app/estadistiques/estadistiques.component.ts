import { Component, OnInit } from '@angular/core';
import { WebcomicServei } from "../dadesServei/servei_Webcomic";
import { Webcomic } from "../dadesServei/webcomic_interface";
import { trigger, state, style, transition, animate, keyframes } from "@angular/animations";
import {toInteger} from "@ng-bootstrap/ng-bootstrap/util/util";
import {ActivatedRoute, Router} from "@angular/router";
declare var $: any;
@Component({
  selector: 'app-estadistiques',
  templateUrl: './estadistiques.component.html',
  styleUrls: ['./estadistiques.component.css'],
  animations: [
    trigger('apareixer', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0
      })),
      transition('hide => show', animate('1000ms ease-in')),
    ]),
  ]
})
export class EstadistiquesComponent implements OnInit {

  show = false;

  get stateName() {
    return this.show ? 'show' : 'hide'
  }

  webcomics: Webcomic[] = [];
  ordenarTipo: string;
  ordenarComo: string = "true";


  constructor(private WebcomicService: WebcomicServei) {
  }

  ngOnInit() {
    console.log("cargado");
    this.obtenirWebcomic();
  }
  ngAfterViewInit(){
    this.cargarjquery();
  }

  obtenirWebcomic(): void {
    this.WebcomicService.obtenirWebcomics()
      .subscribe(element => this.webcomics = element);
  }

  ordenarPer(event: Event): void {
    this.ordenarTipo = (event.target as HTMLInputElement).innerText;
    this.ordenarComo = (event.target as HTMLInputElement).getAttribute('ord') ?? "true";
    if (this.ordenarComo == "true") (event.target as HTMLInputElement).setAttribute("ord", "false");
    if (this.ordenarComo == "false") (event.target as HTMLInputElement).setAttribute("ord", "true");

    console.log(this.ordenarComo);
    this.cargarjquery();

  }
  cargarjquery(){
    $('.table tr').each((key:number,tag:any) => {
      var elemnt = $(tag).find(".puntuacion");
      var valor = parseInt($(tag).find(".puntuacion").html());
      if(valor <5){
        elemnt.addClass("suspendido");
        return;
      }
      if(valor >=5 && valor <8 ){
        elemnt.addClass("bien");
        return;
      }
      if(valor >= 8 && valor <= 10 ){
        elemnt.addClass("excelente");
        return;
      }
    });
  }

}
