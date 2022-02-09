import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cerca',
  templateUrl: './cerca.component.html',
  styleUrls: ['./cerca.component.css']
})
export class CercaComponent implements OnInit {

  webcomics:any;
  constructor() {

    this.webcomics = [
      {"Titol":"Castle Swimmer",
      "Genere":"Drama",
      "Imatge":"Castle Swimmer/portada.png",
      "Descripcio":"La descripcion"  
      },
      {"Titol":"Castle Swimmer",
      "Genere":"Drama",
      "Imatge":"Castle Swimmer/portada.png",
      "Descripcio":"La descripcion"  
      },
      {"Titol":"Castle Swimmer",
      "Genere":"Drama",
      "Imatge":"Castle Swimmer/portada.png",
      "Descripcio":"La descripcion"  
      },
      {"Titol":"Castle Swimmer",
      "Genere":"Drama",
      "Imatge":"Castle Swimmer/portada.png",
      "Descripcio":"La descripcion"  
      },
      {"Titol":"Castle Swimmer",
      "Genere":"Drama",
      "Imatge":"Castle Swimmer/portada.png",
      "Descripcio":"La descripcion"  
      },
      {"Titol":"Castle Swimmer",
      "Genere":"Drama",
      "Imatge":"Castle Swimmer/portada.png",
      "Descripcio":"La descripcion"  
      },
      {"Titol":"Castle Swimmer",
      "Genere":"Drama",
      "Imatge":"Castle Swimmer/portada.png",
      "Descripcio":"La descripcion"  
      },
      {"Titol":"Castle Swimmer",
      "Genere":"Drama",
      "Imatge":"Castle Swimmer/portada.png",
      "Descripcio":"La descripcion"  
      },
      {"Titol":"Castle Swimmer",
      "Genere":"Drama",
      "Imatge":"Castle Swimmer/portada.png",
      "Descripcio":"La descripcion"  
      },
      {"Titol":"Castle Swimmer",
      "Genere":"Drama",
      "Imatge":"Castle Swimmer/portada.png",
      "Descripcio":"La descripcion"  
      },
      {"Titol":"Castle Swimmer",
      "Genere":"Drama",
      "Imatge":"Castle Swimmer/portada.png",
      "Descripcio":"La descripcion"  
      },
      {"Titol":"Castle Swimmer",
      "Genere":"Drama",
      "Imatge":"Castle Swimmer/portada.png",
      "Descripcio":"La descripcion"  
      },
      {"Titol":"Castle Swimmer",
      "Genere":"Drama",
      "Imatge":"Castle Swimmer/portada.png",
      "Descripcio":"La descripcion"  
      },
      {"Titol":"Castle Swimmer",
      "Genere":"Drama",
      "Imatge":"Castle Swimmer/portada.png",
      "Descripcio":"La descripcion"  
      },
      {"Titol":"Castle Swimmer",
      "Genere":"Drama",
      "Imatge":"Castle Swimmer/portada.png",
      "Descripcio":"La descripcion"  
      },
      {"Titol":"Castle Swimmer",
      "Genere":"Drama",
      "Imatge":"Castle Swimmer/portada.png",
      "Descripcio":"La descripcion"  
      },
      {"Titol":"Castle Swimmer",
      "Genere":"Drama",
      "Imatge":"Castle Swimmer/portada.png",
      "Descripcio":"La descripcion"  
      },
      {"Titol":"Castle Swimmer",
      "Genere":"Drama",
      "Imatge":"Castle Swimmer/portada.png",
      "Descripcio":"La descripcion"  
      },
      {"Titol":"Castle Swimmer",
      "Genere":"Drama",
      "Imatge":"Castle Swimmer/portada.png",
      "Descripcio":"La descripcion"  
      },
      {"Titol":"Castle Swimmer",
      "Genere":"Drama",
      "Imatge":"Castle Swimmer/portada.png",
      "Descripcio":"La descripcion"  
      },
      {"Titol":"Castle Swimmer",
      "Genere":"Drama",
      "Imatge":"Castle Swimmer/portada.png",
      "Descripcio":"La descripcion"  
      },
      {"Titol":"Castle Swimmer",
      "Genere":"Drama",
      "Imatge":"Castle Swimmer/portada.png",
      "Descripcio":"La descripcion"  
      },
      {"Titol":"Castle Swimmer",
      "Genere":"Drama",
      "Imatge":"Castle Swimmer/portada.png",
      "Descripcio":"La descripcion"  
      },
      {"Titol":"Castle Swimmer",
      "Genere":"Drama",
      "Imatge":"Castle Swimmer/portada.png",
      "Descripcio":"La descripcion"  
      },
      {"Titol":"Castle Swimmer",
      "Genere":"Drama",
      "Imatge":"Castle Swimmer/portada.png",
      "Descripcio":"La descripcion"  
      },
      {"Titol":"Castle Swimmer",
      "Genere":"Drama",
      "Imatge":"Castle Swimmer/portada.png",
      "Descripcio":"La descripcion"  
      },
      {"Titol":"Castle Swimmer",
      "Genere":"Drama",
      "Imatge":"Castle Swimmer/portada.png",
      "Descripcio":"La descripcion"  
      },
      {"Titol":"Castle Swimmer",
      "Genere":"Drama",
      "Imatge":"Castle Swimmer/portada.png",
      "Descripcio":"La descripcion"  
      },
      {"Titol":"Castle Swimmer",
      "Genere":"Drama",
      "Imatge":"Castle Swimmer/portada.png",
      "Descripcio":"La descripcion"  
      },
      {"Titol":"Castle Swimmer",
      "Genere":"Drama",
      "Imatge":"Castle Swimmer/portada.png",
      "Descripcio":"La descripcion"  
      },
      {"Titol":"Castle Swimmer",
      "Genere":"Drama",
      "Imatge":"Castle Swimmer/portada.png",
      "Descripcio":"La descripcion"  
      },
      {"Titol":"Castle Swimmer",
      "Genere":"Drama",
      "Imatge":"Castle Swimmer/portada.png",
      "Descripcio":"La descripcion"  
      },
      {"Titol":"Castle Swimmer",
      "Genere":"Drama",
      "Imatge":"Castle Swimmer/portada.png",
      "Descripcio":"La descripcion"  
      },
      {"Titol":"Castle Swimmer",
      "Genere":"Drama",
      "Imatge":"Castle Swimmer/portada.png",
      "Descripcio":"La descripcion"  
      },
      {"Titol":"Castle Swimmer",
      "Genere":"Drama",
      "Imatge":"Castle Swimmer/portada.png",
      "Descripcio":"La descripcion"  
      },
      {"Titol":"Castle Swimmer",
      "Genere":"Drama",
      "Imatge":"Castle Swimmer/portada.png",
      "Descripcio":"La descripcion"  
      },
      {"Titol":"Castle Swimmer",
      "Genere":"Drama",
      "Imatge":"Castle Swimmer/portada.png",
      "Descripcio":"La descripcion"  
      },
      {"Titol":"Castle Swimmer",
      "Genere":"Drama",
      "Imatge":"Castle Swimmer/portada.png",
      "Descripcio":"La descripcion"  
      },
      {"Titol":"Castle Swimmer",
      "Genere":"Drama",
      "Imatge":"Castle Swimmer/portada.png",
      "Descripcio":"La descripcion"  
      },
      {"Titol":"Castle Swimmer",
      "Genere":"Drama",
      "Imatge":"Castle Swimmer/portada.png",
      "Descripcio":"La descripcion"  
      },
      {"Titol":"Castle Swimmer",
      "Genere":"Drama",
      "Imatge":"Castle Swimmer/portada.png",
      "Descripcio":"La descripcion"  
      },
      {"Titol":"Castle Swimmer",
      "Genere":"Drama",
      "Imatge":"Castle Swimmer/portada.png",
      "Descripcio":"La descripcion"  
      },
      {"Titol":"Nomads",
      "Genere":"Drama",
      "Imatge":"Nomads/portada.png",
      "Descripcio":"La descripcion"  

      },
      {"Titol":"Kirkewood",
      "Genere":"Drama",
      "Imatge":"Castle Swimmer/portada.png",
      "Descripcio":"La descripcion"  
      }
      ]
  }

  ngOnInit(): void {
  }

}
class Webcomic {
  private titol:String;
  private genere:String;
  private imatge:String;
  private descripcio:String;
  private num_capitols:number;
  private data_publicacio:Date;
  private url:URL;


  constructor(titol:String,genere:String,imatge:string,descripcio:string,num_capitols:number,data_publicacio:Date,url:URL) {
    this.titol=titol;
    this.genere=genere;
    this.imatge=imatge;
    this.descripcio=descripcio;
    this.num_capitols=num_capitols;
    this.data_publicacio=data_publicacio;
    this.url=url;
    
  }

}
