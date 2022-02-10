import { Component, OnInit } from '@angular/core';
import {Webcomic} from "../dadesServei/webcomic_interface";
import {WebcomicServei} from "../dadesServei/servei_Webcomic";
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'aplicacio',
  templateUrl: './inici.component.html',
  styleUrls: ['./inici.component.css']
})
export class IniciComponent implements OnInit {

  webcomics: Webcomic[] =[];
  //webcomics:any;
  constructor(private WebcomicService: WebcomicServei,private router: Router,private route: ActivatedRoute,) {
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


}
