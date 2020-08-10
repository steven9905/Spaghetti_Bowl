import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-acuerdo-de-integracion',
  templateUrl: './acuerdo-de-integracion.page.html',
  styleUrls: ['./acuerdo-de-integracion.page.scss'],
})
export class AcuerdoDeIntegracionPage implements OnInit {
  
  @ViewChild('slides', {static:true}) slides:IonSlides;
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
     acuerdo2: "Comunidad Andina de Naciones (Acuerdo de Cartagena)",
     link: "/acuerdo-integracion-alianza-pacifico",
     link2: "/acuerdo-integracion-comunidad-andina"
    },
    {
      acuerdo: "Chile,México,Perú",
      acuerdo2: "Bolivia,Ecuador,Perú",
      link: "/acuerdo-integracion-alianza-pacifico",
      link2: "/acuerdo-integracion-comunidad-andina"
    },
    {
      acuerdo: "10/02/2014",
      acuerdo2: "26/05/1969",
      link: "/acuerdo-integracion-alianza-pacifico",
      link2: "/acuerdo-integracion-comunidad-andina"
    },
    {
      acuerdo: "1/05/2016",
      acuerdo2: "16/10/1969",
      link: "/acuerdo-integracion-alianza-pacifico",
      link2: "/acuerdo-integracion-comunidad-andina"
    }

  ]

  options = {
    pager : true,
    zoom : {
      maxRatio : 3
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
