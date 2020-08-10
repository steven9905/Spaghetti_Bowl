import { Component, OnInit,ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tratado-bilateral-japon',
  templateUrl: './tratado-bilateral-japon.page.html',
  styleUrls: ['./tratado-bilateral-japon.page.scss'],
})
export class TratadoBilateralJaponPage implements OnInit {

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
      acuerdo: "Colombia - Japón",
      link:"/tratado-bilateral-japon"
    },
    {
      acuerdo: "Vigente",
      link:"/tratado-bilateral-japon"
    },  
    {
      acuerdo: "12/09/2011",
      link:"/tratado-bilateral-japon"
    },
    {
      acuerdo: "11/09/2015",
      link:"/tratado-bilateral-japon"
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

