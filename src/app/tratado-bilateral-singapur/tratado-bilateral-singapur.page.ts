import { Component, OnInit,ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tratado-bilateral-singapur',
  templateUrl: './tratado-bilateral-singapur.page.html',
  styleUrls: ['./tratado-bilateral-singapur.page.scss'],
})
export class TratadoBilateralSingapurPage implements OnInit {

  @ViewChild('slides', {static:true}) slides:IonSlides;
  selectedSlide: any;
  
  //Encabezado de lista

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
      acuerdo: "Colombia - Singapur",
      link:"/tratado-bilateral-singapur"
    },
    {
      acuerdo: "Firmado",
      link:"/tratado-bilateral-singapur"
    },  
    {
      acuerdo: "12/07/2013",
      link:"/tratado-bilateral-singapur"
    },
    {
      acuerdo: "No",
      link:"/tratado-bilateral-singapur"
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