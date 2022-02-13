import { Component, OnInit } from '@angular/core';
import {Webcomic} from "../dadesServei/webcomic_interface";
import {WebcomicServei} from "../dadesServei/servei_Webcomic";

@Component({
  selector: 'app-cerca',
  templateUrl: './cerca.component.html',
  styleUrls: ['./cerca.component.css']
})
export class CercaComponent implements OnInit {


  generes = ['TERROR','DRAMA','AVENTURA'];
  webcomics: Webcomic[] =[];
  //:any;
  constructor(private webcomicService: WebcomicServei) {

  }

  ngOnInit() {
    this.obtenirWebcomics();
  }

  obtenirWebcomics(): void {
    this.webcomicService.obtenirWebcomics()
      .subscribe(alumnes => this.webcomics = alumnes);
  }

}