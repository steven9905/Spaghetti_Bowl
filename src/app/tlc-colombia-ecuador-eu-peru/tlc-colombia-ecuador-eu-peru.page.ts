import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tlc-colombia-ecuador-eu-peru',
  templateUrl: './tlc-colombia-ecuador-eu-peru.page.html',
  styleUrls: ['./tlc-colombia-ecuador-eu-peru.page.scss'],
})
export class TLCColombiaEcuadorEUPeruPage implements OnInit {

  @ViewChild('slides', {static:true}) slides:IonSlides;
  selectedSlide: any;

  public lista: Array<any> = [
    {
      item: "TLC Colombia - Ecuador - EU - Perú"
    }
  ]

  public informacion: Array<any> = [
    {
      item: "Partes o (miembros)",
      informacion: "Colombia, Ecuador, Perú, Alemania, Austria, Bélgica, Bulgaria, Chipre, Croacia, Dinamarca, Eslovaquia, Eslovenia, España, Estonia, Finlandia, Francia, Grecia, Hungría, Irlanda, Italia, Letonia, Lituania, Luxemburgo, Malta, Países Bajos, Polonia, Portugal, Reino Unido, República Checa, Rumanía, Suecia",
    },
    {
      item: "Fecha Firma",
      informacion: "26/06/2012"
    },
    {
      item: "Fecha Vigencia",
      informacion: "1/06/2013"
    }
  ]

  options = {
    pager: true,
    zoom: {
      maxRatio: 3
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
