import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';


@Component({
  selector: 'app-tlc-colombia-costa-rica',
  templateUrl: './tlc-colombia-costa-rica.page.html',
  styleUrls: ['./tlc-colombia-costa-rica.page.scss'],
})
export class TLCColombiaCostaRicaPage implements OnInit {
  
   //Función para desplazar entre slides

   @ViewChild('slides', {static:true}) slides:IonSlides;
   selectedSlide: any; 
  
  public lista: Array<any> = [
    {
      item: "TLC Colombia - Costa Rica"
    }
  ]

  public informacion: Array<any> = [
    {
      item: "Partes o (miembros)",
      informacion: "Colombia, Costa Rica", 
    },
    {
      item: "Fecha Firma",
      informacion: "22/05/2013"
    },
    {
      item: "Fecha Vigencia",
      informacion: "1/08/2016"
    }
  ]

  options = {
    pager : true,
    zoom : {
      maxRatio : 3
    }
  }
 
  //Función de desplazamiento entre slides

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
