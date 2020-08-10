import { Component, OnInit,ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tratado-bilateral-suiza',
  templateUrl: './tratado-bilateral-suiza.page.html',
  styleUrls: ['./tratado-bilateral-suiza.page.scss'],
})
export class TratadoBilateralSuizaPage implements OnInit {

  
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
      acuerdo: "Colombia - Suiza",
      link:"/tratado-bilateral-suiza"
    },
    {
      acuerdo: "Vigente",
      link:"/tratado-bilateral-suiza"
    },  
    {
      acuerdo: "17/05/2006",
      link:"/tratado-bilateral-suiza"
    },
    {
      acuerdo: "6/10/2009",
      link:"/tratado-bilateral-suiza"
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
