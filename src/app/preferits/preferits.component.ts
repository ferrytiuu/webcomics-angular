import { Component, OnInit } from '@angular/core';
import {Webcomic} from "../dadesServei/webcomic_interface";
import {WebcomicServei} from "../dadesServei/servei_Webcomic";

@Component({
  selector: 'app-preferits',
  templateUrl: './preferits.component.html',
  styleUrls: ['./preferits.component.css']
})
export class PreferitsComponent implements OnInit {

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
