import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tlc-colombia-triangulo-del-norte',
  templateUrl: './tlc-colombia-triangulo-del-norte.page.html',
  styleUrls: ['./tlc-colombia-triangulo-del-norte.page.scss'],
})
export class TLCColombiaTrianguloDelNortePage implements OnInit {

  //Función para desplazar entre slides

  @ViewChild('slides', { static: true }) slides: IonSlides;
  selectedSlide: any;

  public lista: Array<any> = [
    {
      item: "TLC Colombia - Triángulo del norte"
    }
  ]

  public informacion: Array<any> = [
    {
      item: "Partes o (miembros)",
      informacion: "Colombia, El salvador, Guatemala, Honduras",
    },
    {
      item: "Fecha Firma",
      informacion: "9/08/2007"
    },
    {
      item: "Fecha Vigencia",
      informacion: "15/03/2010"
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
