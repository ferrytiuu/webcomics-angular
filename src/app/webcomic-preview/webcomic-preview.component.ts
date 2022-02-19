import { Component, OnInit } from '@angular/core';
import {Webcomic} from "../dadesServei/webcomic_interface";
import {WebcomicServei} from "../dadesServei/servei_Webcomic";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-webcomic-preview',
  templateUrl: './webcomic-preview.component.html',
  styleUrls: ['./webcomic-ficha.component.css']
})
export class WebcomicPreviewComponent implements OnInit {

  webcomics: Webcomic[] =[];
  webcomic:Webcomic;
  //webcomics:any;
  id:string | null;

  preview:number[];
  constructor(private WebcomicService: WebcomicServei,private router: Router,private route: ActivatedRoute,) {
  }

  ngOnInit() {
    /*this.id=this.route.snapshot.paramMap.get("id");
    this.id = this.route.snapshot.params.id;
    let id;*/
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });
    this.obtenirWebcomic();
  }

  obtenirWebcomic(): void {
    this.WebcomicService.obtenirWebcomics()
      .subscribe(element => this.webcomics = element);
    [this.webcomic] = this.webcomics.filter(element => element.id.toString() == this.id );
    this.preview = Array.from({length: this.webcomic.Preview}, (_, i) => i + 1)
  }

}
