import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular'

@Component({
  selector: 'app-acuerdo-de-cooperacion',
  templateUrl: './acuerdo-de-cooperacion.page.html',
  styleUrls: ['./acuerdo-de-cooperacion.page.scss'],
})
export class AcuerdoDeCooperacionPage implements OnInit {

  @ViewChild('slides', {static:true}) slides:IonSlides;
  selectedSlide: any;

  public lista: Array<any> = [
    {
      titulo: "Acuerdo No"
    },
    {
      titulo: "ACE"
    },
    {
      titulo: ""
    },
    {
      titulo: "Partes o (miembros)"
    },
    {
      titulo: "Fecha Suscrito"
    },
    {
      titulo: "Fecha Vigencia"
    }
  ]

  public acuerdo: Array<any> = [
    {
     acuerdo: "211",
     acuerdo2: "214",
     acuerdo3: "218",
     acuerdo4: "220",
     link: "/acuerdo-cooperacion-argentina",
     link2: "/acuerdo-cooperacion-brasil",
     link3: "/acuerdo-cooperacion-uruguay",
     link4: "/acuerdo-cooperacion-paraguay",    
    },
    {
      acuerdo: "Acuerdo de Cooperación Económica 72",
      acuerdo2: "Acuerdo de Cooperación Económica 72",
      acuerdo3: "Acuerdo de Cooperación Económica 72",
      acuerdo4: "Acuerdo de Cooperación Económica 72",
      link: "/acuerdo-cooperacion-argentina",
      link2: "/acuerdo-cooperacion-brasil",
      link3: "/acuerdo-cooperacion-uruguay",
      link4: "/acuerdo-cooperacion-paraguay",    
     },
     {
      acuerdo: "Preferencia Arancelaria regional",
      acuerdo2: "Preferencia Arancelaria regional",
      acuerdo3: "Preferencia Arancelaria regional",
      acuerdo4: "Preferencia Arancelaria regional",
      link: "/acuerdo-cooperacion-argentina",
      link2: "/acuerdo-cooperacion-brasil",
      link3: "/acuerdo-cooperacion-uruguay",
      link4: "/acuerdo-cooperacion-paraguay",    
     },
     {
      acuerdo: "Argentina",
      acuerdo2: "Brasil",
      acuerdo3: "Uruguay",
      acuerdo4: "Paraguay",
      link: "/acuerdo-cooperacion-argentina",
      link2: "/acuerdo-cooperacion-brasil",
      link3: "/acuerdo-cooperacion-uruguay",
      link4: "/acuerdo-cooperacion-paraguay",
     },
     {
      acuerdo: "18/10/2004",
      acuerdo2: "18/10/2004",
      acuerdo3: "18/10/2004",
      acuerdo4: "18/10/2004",
      link: "/acuerdo-cooperacion-argentina",
      link2: "/acuerdo-cooperacion-brasil",
      link3: "/acuerdo-cooperacion-uruguay",
      link4: "/acuerdo-cooperacion-paraguay",
     },
     {
     acuerdo: "1/01/2018",
     acuerdo2: "1/01/2018",
     acuerdo3: "11/06/2018",
     acuerdo4: "29/01/2019",
     link: "/acuerdo-cooperacion-argentina",
     link2: "/acuerdo-cooperacion-brasil",
     link3: "/acuerdo-cooperacion-uruguay",
     link4: "/acuerdo-cooperacion-paraguay",
     }
    ]

  options = {
    pager : true,
    zoom : {
      maxRatio : 3 //Función que permite hacer zoom
    }
  }
  
  constructor() { }
  ionSlideChange(slides){
    this.selectedSlide = slides
  }
  next(){
    this.slides.getActiveIndex().then((slidesIndex)=>{
      if (slidesIndex == 0 ){
        this.slides.slideNext();
      }else {
        this.slides.slidePrev();
      }
    })
  }
  ngOnInit() {
  }

}
