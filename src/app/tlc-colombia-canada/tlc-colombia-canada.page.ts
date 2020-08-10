import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tlc-colombia-canada',
  templateUrl: './tlc-colombia-canada.page.html',
  styleUrls: ['./tlc-colombia-canada.page.scss'],
})
export class TLCColombiaCanadaPage implements OnInit {

  //Función para desplazar entre slides

  @ViewChild('slides', { static: true }) slides: IonSlides;
  selectedSlide: any;

  public lista: Array<any> = [
    {
      item: "TLC Colombia - Canadá"
    }
  ]

  public informacion: Array<any> = [
    {
      item: "Partes o (miembros)",
      informacion: "Colombia, Canadá",
    },
    {
      item: "Fecha Firma",
      informacion: "21/11/2008"
    },
    {
      item: "Fecha Vigencia",
      informacion: "15/08/2011"
    }
  ]

  options = {
    pager: true,
    zoom: {
      maxRatio: 3
    }
  }

  constructor() { }
  ionSlideChange(slides) {
    this.selectedSlide = slides
  }
  next() {
    this.slides.getActiveIndex().then((slidesIndex) => {
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
