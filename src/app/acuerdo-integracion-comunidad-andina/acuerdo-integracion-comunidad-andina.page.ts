import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
@Component({
  selector: 'app-acuerdo-integracion-comunidad-andina',
  templateUrl: './acuerdo-integracion-comunidad-andina.page.html',
  styleUrls: ['./acuerdo-integracion-comunidad-andina.page.scss'],
})
export class AcuerdoIntegracionComunidadAndinaPage implements OnInit {

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
     acuerdo: "Comunidad Andina de Naciones ( Acuerdo de Cartagena )",
     link: "/acuerdo-integracion-comunidad-andina",
    },
    {
      acuerdo: "Colombia, Bolivia, Ecuador, Perú",
      link: "/acuerdo-integracion-comunidad-andina",
    },
    {
      acuerdo: "26/05/1969",
      link: "/acuerdo-integracion-comunidad-andina",     
    },
    {
      acuerdo: "16/10/1969",
      link: "/acuerdo-integracion-comunidad-andina",
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
