import { Component, OnInit,ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
@Component({
  selector: 'app-tratado-bilateral-francia',
  templateUrl: './tratado-bilateral-francia.page.html',
  styleUrls: ['./tratado-bilateral-francia.page.scss'],
})
export class TratadoBilateralFranciaPage implements OnInit {

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
      acuerdo: "Colombia - Francia",
      link:"/tratado-bilateral-francia"
    },
    {
      acuerdo: "Firmado",
      link:"/tratado-bilateral-francia"
    },  
    {
      acuerdo: "10/07/2014",
      link:"/tratado-bilateral-francia"
    },
    {
      acuerdo: "No",
      link:"/tratado-bilateral-francia"
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
