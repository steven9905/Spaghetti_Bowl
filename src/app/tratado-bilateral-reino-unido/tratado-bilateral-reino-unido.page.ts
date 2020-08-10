import { Component, OnInit,ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tratado-bilateral-reino-unido',
  templateUrl: './tratado-bilateral-reino-unido.page.html',
  styleUrls: ['./tratado-bilateral-reino-unido.page.scss'],
})
export class TratadoBilateralReinoUnidoPage implements OnInit {

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
      acuerdo: "Colombia - Reino Unido",
      link:"/tratado-bilateral-reino-unido"
    },
    {
      acuerdo: "Vigente",
      link:"/tratado-bilateral-reino-unido"
    },  
    {
      acuerdo: "17/03/2010",
      link:"/tratado-bilateral-reino-unido"
    },
    {
      acuerdo: "10/10/2014",
      link:"/tratado-bilateral-reino-unido"
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

