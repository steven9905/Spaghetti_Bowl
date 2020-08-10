import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tlc-colombia-israel',
  templateUrl: './tlc-colombia-israel.page.html',
  styleUrls: ['./tlc-colombia-israel.page.scss'],
})
export class TLCColombiaIsraelPage implements OnInit {
  
  //Función para desplazar entre slides

  @ViewChild('slides', {static:true}) slides:IonSlides;
  selectedSlide: any;
  
  //Encabezado de lista

  public lista: Array<any> = [
    {
      item: "TLC Colombia - Israel"
    }
  ]

  public informacion: Array<any> = [
    {
      item: "Partes o (miembros)",
      informacion: "Colombia, Israel", 
    },
    {
      item: "Fecha Firma",
      informacion: "30/09/2013"
    },
    {
      item: "Fecha Vigencia",
      informacion: "No"
    }
  ]
  options = {
    pager: true,
    zoom: {
      maxRatio: 3
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
