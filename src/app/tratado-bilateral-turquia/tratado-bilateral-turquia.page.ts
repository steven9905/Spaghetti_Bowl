import { Component, OnInit,ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tratado-bilateral-turquia',
  templateUrl: './tratado-bilateral-turquia.page.html',
  styleUrls: ['./tratado-bilateral-turquia.page.scss'],
})
export class TratadoBilateralTurquiaPage implements OnInit {

 
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
      acuerdo: "Colombia - Turquía",
      link:"/tratado-bilateral-turquia"
    },
    {
      acuerdo: "Firmado",
      link:"/tratado-bilateral-turquia"
    },  
    {
      acuerdo: "28/07/2014",
      link:"/tratado-bilateral-turquia"
    },
    {
      acuerdo: "No",
      link:"/tratado-bilateral-turquia"
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
