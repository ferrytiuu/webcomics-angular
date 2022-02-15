import {Component, Input, OnInit} from '@angular/core';
import {Webcomic} from "../dadesServei/webcomic_interface";
import {WebcomicServei} from "../dadesServei/servei_Webcomic";
import {ActivatedRoute, Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {webcomicNgComponent} from "../webcomic-ng/webcomic-ng.component";

@Component({
  selector: 'app-webcomic-card',
  templateUrl: './webcomic-card.component.html',
  styleUrls: ['./webcomic-card.component.css']
})
export class WebcomicCardComponent implements OnInit {
  @Input() webcomic:Webcomic;


  constructor(private router: Router,private route: ActivatedRoute,private modalService: NgbModal) {
  }

  ngOnInit() {
  }
  abrirComic(id:number):void{
    //this.router.navigate(['/webcomic', { id: id }]);
    this.router.navigate(['/webcomic'], { queryParams: { id: id } });
  }

  abrirModal(id:number):void{
    /*
    const modalRef = this.modalService.open(webcomicNgComponent,{size:'xl'});
    modalRef.componentInstance.name = 'World';
    [modalRef.componentInstance.comic] = this.webcomics.filter(e => e.id == id);
    modalRef.componentInstance.id = id;*/
  }


}
