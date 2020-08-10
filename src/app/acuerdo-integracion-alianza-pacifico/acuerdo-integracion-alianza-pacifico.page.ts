import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
@Component({
  selector: 'app-acuerdo-integracion-alianza-pacifico',
  templateUrl: './acuerdo-integracion-alianza-pacifico.page.html',
  styleUrls: ['./acuerdo-integracion-alianza-pacifico.page.scss'],
})
export class AcuerdoIntegracionAlianzaPacificoPage implements OnInit {

  @ViewChild('slides', { static: true }) slides: IonSlides;
  selectedSlide: any;
  
  public lista: Array<any> = [
    {
      titulo: "Acuerdo"
    },
    {
      titulo: "Partes o ( Miembros)"
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
     acuerdo: "Alianza del Pacífico",
     link: "/acuerdo-integracion-alianza-pacifico",
    },
    {
      acuerdo: "Colombia, Chile, México, Perú",
      link: "/acuerdo-integracion-alianza-pacifico",
    },
    {
      acuerdo: "10/02/2014",
      link: "/acuerdo-integracion-alianza-pacifico",     
    },
    {
      acuerdo: "1/05/2016",
      link: "/acuerdo-integracion-alianza-pacifico",
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
