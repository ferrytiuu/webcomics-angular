import {Component, Input, OnInit} from '@angular/core';
import {Webcomic} from "../dadesServei/webcomic_interface";
import {WebcomicServei} from "../dadesServei/servei_Webcomic";
import {ActivatedRoute, Router} from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Hello, {{name}}!</p>
      <p>BUenas, {{id}}!</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContent implements OnInit{
  @Input() name:String;
  @Input() id:String;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(){
    console.log(this.id);

  }
}





@Component({
  selector: 'aplicacio',
  templateUrl: './inici.component.html',
  styleUrls: ['./inici.component.css']
})
export class IniciComponent implements OnInit {

  webcomics: Webcomic[] =[];
  //webcomics:any;
  currentRate = 8;
  constructor(private WebcomicService: WebcomicServei,private router: Router,private route: ActivatedRoute,private modalService: NgbModal) {
  }

  ngOnInit() {
    this.obtenirWebcomic();
  }

  obtenirWebcomic(): void {
    this.WebcomicService.obtenirWebcomics()
      .subscribe(element => this.webcomics = element);
  }
  abrirComic(id:number):void{
    //this.router.navigate(['/webcomic', { id: id }]);
    this.router.navigate(['/webcomic'], { queryParams: { id: id } });
  }
  abrirModal(id:number):void{
    const modalRef = this.modalService.open(NgbdModalContent,{size:'xl'});
    modalRef.componentInstance.name = 'World';
    modalRef.componentInstance.id = id;
  }


}
