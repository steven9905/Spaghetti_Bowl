import { Component, OnInit,ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tratado-bilateral-peru',
  templateUrl: './tratado-bilateral-peru.page.html',
  styleUrls: ['./tratado-bilateral-peru.page.scss'],
})
export class TratadoBilateralPeruPage implements OnInit {

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
      acuerdo: "Colombia - Perú",
      link:"/tratado-bilateral-peru"
    },
    {
      acuerdo: "Vigente",
      link:"/tratado-bilateral-peru"
    },  
    {
      acuerdo: "11/12/2007",
      link:"/tratado-bilateral-peru"
    },
    {
      acuerdo: "30/12/2010",
      link:"/tratado-bilateral-peru"
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
