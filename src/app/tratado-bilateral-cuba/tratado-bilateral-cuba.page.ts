import { Component, OnInit,ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tratado-bilateral-cuba',
  templateUrl: './tratado-bilateral-cuba.page.html',
  styleUrls: ['./tratado-bilateral-cuba.page.scss'],
})
export class TratadoBilateralCubaPage implements OnInit {

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
      acuerdo: "Colombia - Cuba",
      link:"/tratado-bilateral-cuba"
    },
    {
      acuerdo: "Firmado",
      link:"/tratado-bilateral-cuba"
    },  
    {
      acuerdo: "16/07/1994",
      link:"/tratado-bilateral-cuba"
    },
    {
      acuerdo: "No",
      link:"/tratado-bilateral-cuba"
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

