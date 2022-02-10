import { Component, OnInit } from '@angular/core';
import {Webcomic} from "../dadesServei/webcomic_interface";
import {WebcomicServei} from "../dadesServei/servei_Webcomic";

@Component({
  selector: 'aplicacio',
  templateUrl: './inici.component.html',
  styleUrls: ['./inici.component.css']
})
export class IniciComponent implements OnInit {

  webcomics: Webcomic[] =[];
  //webcomics:any;
  constructor(private WebcomicService: WebcomicServei) {
  }

  ngOnInit() {
    this.obtenirWebcomic();
  }

  obtenirWebcomic(): void {
    this.WebcomicService.obtenirWebcomics()
      .subscribe(element => this.webcomics = element);
  }
  eliminarUsuari():void{
    this.webcomics.pop();
  }


}
