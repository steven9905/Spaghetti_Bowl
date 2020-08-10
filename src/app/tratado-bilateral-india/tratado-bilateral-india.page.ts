import { Component, OnInit,ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
@Component({
  selector: 'app-tratado-bilateral-india',
  templateUrl: './tratado-bilateral-india.page.html',
  styleUrls: ['./tratado-bilateral-india.page.scss'],
})
export class TratadoBilateralIndiaPage implements OnInit {

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
      acuerdo: "Colombia - India",
      link:"/tratado-bilateral-india"
    },
    {
      acuerdo: "Firmado",
      link:"/tratado-bilateral-india"
    },  
    {
      acuerdo: "10/11/2009",
      link:"/tratado-bilateral-india"
    },
    {
      acuerdo: "No",
      link:"/tratado-bilateral-india"
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
