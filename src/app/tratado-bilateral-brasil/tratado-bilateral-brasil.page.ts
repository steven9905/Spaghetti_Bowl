import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
@Component({
  selector: 'app-tratado-bilateral-brasil',
  templateUrl: './tratado-bilateral-brasil.page.html',
  styleUrls: ['./tratado-bilateral-brasil.page.scss'],
})
export class TratadoBilateralBrasilPage implements OnInit {
  
  @ViewChild('slides', {static:true}) slides:IonSlides;
  selectedSlide:any

  public lista: Array <any> = [
    {
      titulo: "Partes o (miembros)"
    },
    {
      titulo: "Estado"
    },
    {
      titulo: "Fecha Firma"
    },
    {
      titulo: "Fecha Vigencia"
    }
  ]
  public acuerdo: Array<any> = [
    {
      acuerdo: "Colombia - Brasil",
      link:"/tratado-bilateral-brasil"
    },
    {
      acuerdo: "Firmado",
      link:"/tratado-bilateral-brasil"
    },  
    {
      acuerdo: "9/10/2015",
      link:"/tratado-bilateral-brasil"
    },
    {
      acuerdo: "No",
      link:"/tratado-bilateral-brasil"
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
