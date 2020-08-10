import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-acuerdo-parcial-cuba',
  templateUrl: './acuerdo-parcial-cuba.page.html',
  styleUrls: ['./acuerdo-parcial-cuba.page.scss'],
})
export class AcuerdoParcialCubaPage implements OnInit {

  @ViewChild('slides', {static:true}) slides:IonSlides;
  selectedSlide: any;

  public lista: Array<any> = [
    {
      titulo: "Acuerdo N"
    },
    {
      titulo: "AAP"
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
    acuerdo: "0-53",
    link: "/acuerdo-parcial-cuba",
  },
  {
    acuerdo: "Acuerdo de Alcance Parcial",
    link: "/acuerdo-parcial-cuba",
  },
  {
    acuerdo: "Preferencia Arancelaria Regional",
    link: "/acuerdo-parcial-cuba",
  },
  {
    acuerdo: "Colombia, Cuba",
    link: "/acuerdo-parcial-cuba",
  },
  {
    acuerdo: "27/04/1984",
    link: "/acuerdo-parcial-argentina",
  },
  {
    acuerdo: "9/05/2008",
    link: "/acuerdo-parcial-argentina",
  },
]
  
  options = {
    pager : true,
    zoom : {
      maxRatio : 3
    }
  }
  
  constructor() { }
  ionSlideChange(slides){
    this.selectedSlide = slides}
 next(){
    this.slides.getActiveIndex().then((slidesIndex)=>{
      if (slidesIndex == 0) {
        this.slides.slideNext();
      } else {
        this.slides.slidePrev();
      }
    })
  }
  ngOnInit() {
  }

}