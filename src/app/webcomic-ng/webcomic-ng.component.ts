import {Component, Input, OnInit} from '@angular/core';
import {Webcomic} from "../dadesServei/webcomic_interface";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {WebcomicServei} from "../dadesServei/servei_Webcomic";
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './webcomic-ng.component.html',
  styleUrls: ['./webcomic-ng.component.css']
})
export class webcomicNgComponent implements OnInit{
  @Input() name:String;
  @Input() comic:Webcomic;
  @Input() id:String;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(){
    console.log(this.id);

  }
}

