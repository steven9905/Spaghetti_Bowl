import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tlc-colombia-panama',
  templateUrl: './tlc-colombia-panama.page.html',
  styleUrls: ['./tlc-colombia-panama.page.scss'],
})
export class TLCColombiaPanamaPage implements OnInit {
 
  @ViewChild('slides', {static:true}) slides:IonSlides;
  selectedSlide: any;
 
  public lista: Array<any> = [
    {
      item: "TLC Colombia - Panamá"
    }
  ]

  public informacion: Array<any> = [
    {
      item: "Partes o (miembros)",
      informacion: "Colombia, Panamá", 
    },
    {
      item: "Fecha Firma",
      informacion: "20/09/2013"
    },
    {
      item: "Fecha Vigencia",
      informacion: "No"
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
