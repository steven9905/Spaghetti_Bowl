import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular'

@Component({
  selector: 'app-acuerdo-cooperacion-argentina',
  templateUrl: './acuerdo-cooperacion-argentina.page.html',
  styleUrls: ['./acuerdo-cooperacion-argentina.page.scss'],
})
export class AcuerdoCooperacionArgentinaPage implements OnInit {

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
     link: "/acuerdo-parcial-argentina",
    },
    {
      acuerdo: "Acuerdo de Cooperación Económica 72",
      link: "/acuerdo-parcial-argentina",
   
     },
     {
      acuerdo: "Preferencia Arancelaria regional",
      link: "/acuerdo-parcial-argentina",   
     },
     {
      acuerdo: "Colombia, Argentina",
      link: "/acuerdo-parcial-argentina",
     },
     {
      acuerdo: "18/10/2004",
      link: "/acuerdo-parcial-argentina",
     },
     {
     acuerdo: "1/01/2018",
     link: "/acuerdo-parcial-argentina",
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
