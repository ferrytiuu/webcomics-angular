import {Component, Input, OnInit} from '@angular/core';
import {Webcomic} from "../dadesServei/webcomic_interface";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {WebcomicServei} from "../dadesServei/servei_Webcomic";
import {ActivatedRoute, Router} from '@angular/router';
import {LocalStorageService} from "ngx-webstorage";
import {NgxIndexedDBService} from "ngx-indexed-db";
import { trigger, state, style, transition, animate, keyframes } from "@angular/animations";

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './webcomic-ng.component.html',
  styleUrls: ['./webcomic-ng.component.css'],
  animations: [
    trigger('afegir', [
      state('show1', style({
        opacity: 1
      })),
      state('hide1',   style({
        opacity: 0
      })),
      transition('hide1 => show1', animate('1000ms ease-in')),
      transition('show1 => hide1', animate('1000ms ease-out'))
    ]),
    trigger('esborrar', [
      state('show2', style({
        opacity: 1
      })),
      state('hide2',   style({
        opacity: 0
      })),
      transition('hide2 => show2', animate('1000ms ease-in')),
      transition('show2 => hide2', animate('1000ms ease-out'))
    ])

  ]
})
export class webcomicNgComponent implements OnInit{

  show1 = false;
  show2 = false;

  get stateName() {
    return this.show1 ? 'show1' : 'hide1'
  }

  get stateName2() {
    return this.show2 ? 'show2' : 'hide2'
  }

  afegir() {
    this.show1 = !this.show1;
    setTimeout(() => {
      this.show1 = !this.show1;
    }, 2000);
  }

  esborrar() {
    this.show2 = !this.show2;
    setTimeout(() => {
      this.show2 = !this.show2;
    }, 2000);
  }

  @Input() name:String;
  @Input() comic:Webcomic;
  @Input() id:String;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public activeModal: NgbActiveModal,
    private localSt:LocalStorageService,
    private dbService: NgxIndexedDBService){}

  ngOnInit(){
    console.log(this.id);

  }
  abrirPreview(id:number){
    var strWindowFeatures = "location=yes,height=1920,width=820,scrollbars=yes,status=yes";
    const url = this.router.serializeUrl(this.router.createUrlTree(['/webcomic'], { queryParams: { id: id , estadoMenu:false} }));
    var win = window.open(url, "_blank", strWindowFeatures);
  }
  updateWebStorage(id:number,puntuacion:number){
    this.localSt.store(id.toString(), puntuacion);
    console.log("guardad:"+id.toString()+'||'+puntuacion);
  }
  updateIndexeddb(id:number,fav:boolean){
    this.comic.Fav= !this.comic.Fav!;
    this.dbService
      .update('WebtoonsFavs', {id:id,fav:!fav})
      .subscribe((item) => {
        console.log('item: ', item);
      });




  }
}

