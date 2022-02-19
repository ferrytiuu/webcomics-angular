import {Component, Input, OnInit} from '@angular/core';
import {Webcomic} from "../dadesServei/webcomic_interface";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {WebcomicServei} from "../dadesServei/servei_Webcomic";
import {ActivatedRoute, Router} from '@angular/router';
import {LocalStorageService} from "ngx-webstorage";
import {NgxIndexedDBService} from "ngx-indexed-db";

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './webcomic-ng.component.html',
  styleUrls: ['./webcomic-ng.component.css']
})
export class webcomicNgComponent implements OnInit{
  @Input() name:String;
  @Input() comic:Webcomic;
  @Input() id:String;

  constructor(
    public activeModal: NgbActiveModal,
    private localSt:LocalStorageService,
    private dbService: NgxIndexedDBService){}

  ngOnInit(){
    console.log(this.id);

  }
  updateWebStorage(id:number,puntuacion:number){
    this.localSt.store(id.toString(), puntuacion);
    console.log("guardad:"+id.toString()+'||'+puntuacion);
  }
  updateIndexeddb(id:number,fav:boolean){
    /**
    try {
      this.dbService.add('WebtoonsFavs',
        {id:id,fav:!fav})
        .subscribe((key) => {
          console.log("Data added successfully");
          console.log('key: ', key);
        });
    }catch (e) {
      this.dbService
        .updateByKey('WebtoonsFavs', {id:id,fav:!fav},'id')
        .subscribe((item) => {
          console.log('item: ', item);
        });

    }**/
    this.comic.Fav= !this.comic.Fav!;
    this.dbService
      .update('WebtoonsFavs', {id:id,fav:!fav})
      .subscribe((item) => {
        console.log('item: ', item);
      });




  }
}

