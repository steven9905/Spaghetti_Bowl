import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tlc-colombia-chile',
  templateUrl: './tlc-colombia-chile.page.html',
  styleUrls: ['./tlc-colombia-chile.page.scss'],
})
export class TLCColombiaChilePage implements OnInit {

  //Función para desplazar entre slides

  @ViewChild('slides', { static: true }) slides: IonSlides;
  selectedSlide: any;

  public lista: Array<any> = [
    {
      item: "TLC Colombia - Chile"
    }
  ]

  public informacion: Array<any> = [
    {
      item: "Partes o (miembros)",
      informacion: "Colombia, Chile",
    },
    {
      item: "Fecha Firma",
      informacion: "27/11/2006"
    },
    {
      item: "Fecha Vigencia",
      informacion: "8/05/2009"
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
