import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular'

@Component({
  selector: 'app-acuerdo-cooperacion-paraguay',
  templateUrl: './acuerdo-cooperacion-paraguay.page.html',
  styleUrls: ['./acuerdo-cooperacion-paraguay.page.scss'],
})
export class AcuerdoCooperacionParaguayPage implements OnInit {

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
     acuerdo: "220",
     link: "/acuerdo-parcial-paraguay",
    },
    {
      acuerdo: "Acuerdo de Cooperación Económica 72",
      link: "/acuerdo-parcial-paraguay",
   
     },
     {
      acuerdo: "Preferencia Arancelaria regional",
      link: "/acuerdo-parcial-paraguay",   
     },
     {
      acuerdo: "Colombia, Paraguay",
      link: "/acuerdo-parcial-paraguay",
     },
     {
      acuerdo: "18/10/2004",
      link: "/acuerdo-parcial-paraguay",
     },
     {
     acuerdo: "29/01/2019",
     link: "/acuerdo-parcial-paraguay",
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
