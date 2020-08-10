import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular'

@Component({
  selector: 'app-acuerdo-cooperacion-uruguay',
  templateUrl: './acuerdo-cooperacion-uruguay.page.html',
  styleUrls: ['./acuerdo-cooperacion-uruguay.page.scss'],
})
export class AcuerdoCooperacionUruguayPage implements OnInit {

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
     acuerdo: "218",
     link: "/acuerdo-parcial-uruguay",
    },
    {
      acuerdo: "Acuerdo de Cooperación Económica 72",
      link: "/acuerdo-parcial-uruguay",
   
     },
     {
      acuerdo: "Preferencia Arancelaria regional",
      link: "/acuerdo-parcial-uruguay",   
     },
     {
      acuerdo: "Colombia, Uruguay",
      link: "/acuerdo-parcial-uruguay",
     },
     {
      acuerdo: "18/10/2004",
      link: "/acuerdo-parcial-uruguay",
     },
     {
     acuerdo: "11/06/2018",
     link: "/acuerdo-parcial-uruguay",
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
