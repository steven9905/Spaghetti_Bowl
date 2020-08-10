import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tlc-colombia-efta',
  templateUrl: './tlc-colombia-efta.page.html',
  styleUrls: ['./tlc-colombia-efta.page.scss'],
})
export class TLCColombiaEFTAPage implements OnInit {
  
  @ViewChild('slides', {static:true}) slides:IonSlides;
  selectedSlide: any;

  public lista: Array<any> = [
    {
      item: "TLC Colombia - EFTA (Asociación Europea de Libre Comercio)"
    }
  ]

  public informacion: Array<any> = [
    {
      item: "Partes o (miembros)",
      informacion: "Colombia, Islandia, Liechtenstein, Suiza, Noruega",
    },
    {
      item: "Fecha Firma",
      informacion: "25/11/2008"
    },
    {
      item: "Fecha Vigencia",
      informacion: "1/07/2011"
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
