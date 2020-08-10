import { Component, OnInit,ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
@Component({
  selector: 'app-tratado-bilateral-emiratos-arabes',
  templateUrl: './tratado-bilateral-emiratos-arabes.page.html',
  styleUrls: ['./tratado-bilateral-emiratos-arabes.page.scss'],
})
export class TratadoBilateralEmiratosArabesPage implements OnInit {

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
      acuerdo: "Tratado Bilateral Colombia - Emiratos Arabes Unidos",
      link:"/tratado-bilateral-bleu"
    },
    {
      acuerdo: "Firmado",
      link:"/tratado-bilateral-bleu"
    },  
    {
      acuerdo: "12/11/2017",
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