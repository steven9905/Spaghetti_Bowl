import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
@Component({
  selector: 'app-tratado-bilateral-chile',
  templateUrl: './tratado-bilateral-chile.page.html',
  styleUrls: ['./tratado-bilateral-chile.page.scss'],
})
export class TratadoBilateralChilePage implements OnInit {

  @ViewChild('slides', {static:true}) slides:IonSlides;
  selectedSlide: any;
  
  public lista: Array<any> = [
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
      acuerdo: "Colombia - Chile",
      link:"/tratado-bilateral-chile"
    },
    {
      acuerdo: "Firmado",
      link:"/tratado-bilateral-chile"
    },  
    {
      acuerdo: "25/01/2000",
      link:"/tratado-bilateral-chile"
    },
    {
      acuerdo: "No",
      link:"/tratado-bilateral-chile"
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
