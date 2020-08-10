import { Component, OnInit,ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tratado-bilateral-espana',
  templateUrl: './tratado-bilateral-espana.page.html',
  styleUrls: ['./tratado-bilateral-espana.page.scss'],
})
export class TratadoBilateralEspanaPage implements OnInit {

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
      acuerdo: "Colombia - España",
      link:"/tratado-bilateral-espana"
    },
    {
      acuerdo: "Vigente",
      link:"/tratado-bilateral-espana"
    },  
    {
      acuerdo: "31/03/2005",
      link:"/tratado-bilateral-espana"
    },
    {
      acuerdo: "22/09/2007",
      link:"/tratado-bilateral-espana"
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
