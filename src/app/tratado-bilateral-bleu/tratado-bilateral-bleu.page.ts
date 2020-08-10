import { Component, OnInit,ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tratado-bilateral-bleu',
  templateUrl: './tratado-bilateral-bleu.page.html',
  styleUrls: ['./tratado-bilateral-bleu.page.scss'],
})
export class TratadoBilateralBleuPage implements OnInit {
 
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
      acuerdo: "BLEU (Belgium-Luxembourg Economic Union)",
      link:"/tratado-bilateral-bleu"
    },
    {
      acuerdo: "Firmado",
      link:"/tratado-bilateral-bleu"
    },  
    {
      acuerdo: "4/02/2009",
      link:"/tratado-bilateral-bleu"
    },
    {
      acuerdo: "No",
      link:"/tratado-bilateral-bleu"
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
