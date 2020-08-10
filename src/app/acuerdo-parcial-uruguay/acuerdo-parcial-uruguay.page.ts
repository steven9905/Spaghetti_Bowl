import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-acuerdo-parcial-uruguay',
  templateUrl: './acuerdo-parcial-uruguay.page.html',
  styleUrls: ['./acuerdo-parcial-uruguay.page.scss'],
})
export class AcuerdoParcialUruguayPage implements OnInit {

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
    acuerdo: "0-57",
    link: "/acuerdo-parcial-uruguay",
  },
  {
    acuerdo: "Acuerdo de Alcance Parcial",
    link: "/acuerdo-parcial-uruguay",
  },
  {
    acuerdo: "Preferencia Arancelaria Regional",
    link: "/acuerdo-parcial-uruguay",
  },
  {
    acuerdo: "Colombia, Uruguay",
    link: "/acuerdo-parcial-uruguay",
  },
  {
    acuerdo: "27/04/1984",
    link: "/acuerdo-parcial-uruguay",
  },
  {
    acuerdo: "9/05/2008",
    link: "/acuerdo-parcial-uruguay",
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
