import { Component, OnInit,ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tratado-bilateral-china',
  templateUrl: './tratado-bilateral-china.page.html',
  styleUrls: ['./tratado-bilateral-china.page.scss'],
})
export class TratadoBilateralChinaPage implements OnInit {
  
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
      acuerdo: "Colombia - China",
      link:"/tratado-bilateral-china"
    },
    {
      acuerdo: "Vigente",
      link:"/tratado-bilateral-china"
    },  
    {
      acuerdo: "22/11/2008",
      link:"/tratado-bilateral-china"
    },
    {
      acuerdo: "2/07/2013",
      link:"/tratado-bilateral-china"
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
