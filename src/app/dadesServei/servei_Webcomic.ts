import { Injectable } from '@angular/core';
import { Webcomic } from './webcomic_interface';
import { WEBCOMIC } from './servei-mockWebcomic';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class WebcomicServei {

  constructor() { }

  obtenirWebcomics(): Observable<Webcomic[]> {
    return of(WEBCOMIC);
  }
  eliminarUsuari(): void{
    WEBCOMIC.pop();


  }
}
