import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-acuerdo-parcial-paraguay',
  templateUrl: './acuerdo-parcial-paraguay.page.html',
  styleUrls: ['./acuerdo-parcial-paraguay.page.scss'],
})
export class AcuerdoParcialParaguayPage implements OnInit {

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
    link: "/acuerdo-parcial-paraguay",
  },
  {
    acuerdo: "Acuerdo de Alcance Parcial",
    link: "/acuerdo-parcial-paraguay",
  },
  {
    acuerdo: "Preferencia Arancelaria Regional",
    link: "/acuerdo-parcial-paraguay",
  },
  {
    acuerdo: "Colombia, Paraguay",
    link: "/acuerdo-parcial-paraguay",
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

