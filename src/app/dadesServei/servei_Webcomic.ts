import {Injectable, OnInit} from '@angular/core';
import { Webcomic } from './webcomic_interface';
import { WEBCOMIC } from './servei-mockWebcomic';
import {async, Observable, of} from 'rxjs';
import {LocalStorageService} from "ngx-webstorage";
import {ESTADOMENU} from "./servei-mockMenu";

import { NgxIndexedDBService } from "ngx-indexed-db";
import {resolve} from "@angular/compiler-cli/src/ngtsc/file_system";
import {resourceChangeTicket} from "@angular/compiler-cli/src/ngtsc/core";


@Injectable({
  providedIn: 'root',
})
export class WebcomicServei implements OnInit{


   constructor(private storage:LocalStorageService,private dbService: NgxIndexedDBService) {

    WEBCOMIC.forEach((webcomic, index, webcomics) => {
      webcomic.Puntuacion =storage.retrieve(webcomic.id.toString()) ;
      webcomics[index] = webcomic;
    });



    console.log("Crea componente");
    //this.añadirWebtoon();
    this.recuperarFav()
    WEBCOMIC.forEach((web)=>{
        console.log(web);
     });
  }

  async ngOnInit() {

  }
  recuperarFav(){
    this.dbService.getAll('WebtoonsFavs').subscribe((webtoon) => {
      console.log(webtoon);
      WEBCOMIC.forEach((webcomic, index, webcomics) => {
        let [webtoonTemp]:any = webtoon.filter((e:any) => e.id == webcomic.id ) ;
        if(webtoonTemp == undefined ){
          return;
        }
        webcomic.Fav = webtoonTemp.fav;
        webcomics[index] = webcomic;
      });
    });


  }
  añadirWebtoon(){
    const webottons = [
      { id: 7,fav:true },
      { id: 4,fav:true},
    ];

    let numero:number = Math.random() * (1000 - 20) + 20;
    this.dbService.add('WebtoonsFavs',
      {id:numero,fav:true})
      .subscribe((key) => {
        console.log("Data added successfully");
        console.log('key: ', key);
      });

    this.dbService.getAll('WebtoonsFavs').subscribe((peoples) => {
      console.log(peoples);
    });

  }

  estadoMenu():Observable<{ estado: boolean }> {
     return of(ESTADOMENU);
  }


  obtenirWebcomics(): Observable<Webcomic[]> {
    return of(WEBCOMIC);
  }

}
