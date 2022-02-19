import { Component, Input, OnInit } from '@angular/core';
import { Webcomic } from "../dadesServei/webcomic_interface";
import { WebcomicServei } from "../dadesServei/servei_Webcomic";
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { webcomicNgComponent } from '../webcomic-ng/webcomic-ng.component';
import { trigger, state, style, transition, animate, keyframes } from "@angular/animations";


@Component({
  selector: 'aplicacio',
  templateUrl: './inici.component.html',
  styleUrls: ['./inici.component.css'],
  animations: [
    trigger("apareixer", [
      state('hidden', style({
        transform: 'translateY(100%)'})
      ), state('shown', style({
        transform: 'translateY(0%)', opacity: 1})
      ), transition('hidden => shown', [
        animate('1s')
      ]),
    ])
  ]
})
export class IniciComponent implements OnInit {

  state = 'hidden';

  ngAfterViewInit() {
    setTimeout(() => {
      this.state = 'shown';
    }, 200);
  }

  webcomics: Webcomic[] = [];
  //webcomics:any;
  webcomic: Webcomic;
  constructor(private WebcomicService: WebcomicServei, private router: Router, private route: ActivatedRoute, private modalService: NgbModal) {
  }

  ngOnInit() {
    this.obtenirWebcomic();
  }

  obtenirWebcomic(): void {
    this.WebcomicService.obtenirWebcomics()
      .subscribe(element => this.webcomics = element);
  }
  abrirComic(id: number): void {
    //this.router.navigate(['/webcomic', { id: id }]);
    this.router.navigate(['/webcomic'], { queryParams: { id: id } });
  }
  abrirModal(id: number): void {
    const modalRef = this.modalService.open(webcomicNgComponent, { size: 'xl' });
    modalRef.componentInstance.name = 'World';
    [modalRef.componentInstance.comic] = this.webcomics.filter(e => e.id == id);
    modalRef.componentInstance.id = id;
  }


}
