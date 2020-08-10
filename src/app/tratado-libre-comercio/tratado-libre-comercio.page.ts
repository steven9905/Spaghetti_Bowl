import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tratado-libre-comercio',
  templateUrl: './tratado-libre-comercio.page.html',
  styleUrls: ['./tratado-libre-comercio.page.scss'],
})
export class TratadoLibreComercioPage implements OnInit {
  
  //Función para desplazar entre slides

  @ViewChild('slides', {static:true}) slides:IonSlides;
  selectedSlide: any;
  
  //Encabezado de lista

  public lista: Array<any> = [
    {
      titulo: "Acuerdo"
    },
    {
      titulo: "Partes o (miembros)"
    },
    {
      titulo: "Fecha Firma"
    },
    {
      titulo: "Fecha Vigencia"
    }
    
  ]

  //Información de los tratados

  public acuerdo: Array<any> = [
    {
      acuerdo: "TLC Colombia-Israel",
      acuerdo2: "TLC Colombia-Panamá",
      acuerdo3: "TLC Colombia-Costa Rica",
      acuerdo4: "TLC Colombia-República de Corea",
      acuerdo5: "TLC Colomba-Ecuador-EU-Perú ",
      acuerdo6: "TLC Colombia-EFTA",
      acuerdo7: "TLC Colombia-Canadá",
      acuerdo8: "TLC Colombia-Triángulo del norte",
      acuerdo9: "TLC Colombia-Chile",
      acuerdo10: "TLC Colombia-Estados Unidos de América",
      link: "/tlc-colombia-israel",
      link2: "/tlc-colombia-panama",
      link3: "/tlc-colombia-costa-rica",
      link4: "/tlc-colombia-republica-de-corea",
      link5: "/tlc-colombia-ecuador-eu-peru",
      link6: "/tlc-colombia-efta",
      link7: "/tlc-colombia-canada",
      link8: "/tlc-colombia-triangulo-del-norte",
      link9: "/tlc-colombia-chile",
      link10: "/tlc-colombia-estado-unidos-de-america"
    },
    {
      acuerdo: "Israel",
      acuerdo2: "Panamá",
      acuerdo3: "Costa Rica",
      acuerdo4: "República de Corea",
      acuerdo5: "Ecuador, EU(Unión Europea), Perú",
      acuerdo6: "EFTA(Asociación Europea de Libre Comercio)",
      acuerdo7: "Canadá",
      acuerdo8: "El Salvador, Guatemala, Honduras",
      acuerdo9: "Chile",
      acuerdo10: "Estados Unidos de América",
      link: "/tlc-colombia-israel",
      link2: "/tlc-colombia-panama",
      link3: "/tlc-colombia-costa-rica",
      link4: "/tlc-colombia-republica-de-corea",
      link5: "/tlc-colombia-ecuador-eu-peru",
      link6: "/tlc-colombia-efta",
      link7: "/tlc-colombia-canada",
      link8: "/tlc-colombia-triangulo-del-norte",
      link9: "/tlc-colombia-chile",
      link10: "/tlc-colombia-estado-unidos-de-america",
    },
    {
      acuerdo: "30/09/2013",
      acuerdo2: "20/09/2013",
      acuerdo3: "22/05/2013",
      acuerdo4: "21/02/2013",
      acuerdo5: "26/06/2012",
      acuerdo6: "25/11/2008",
      acuerdo7: "21/11/2008",
      acuerdo8: "9/08/2007",
      acuerdo9: "27/11/2006",
      acuerdo10: "22/11/2006",
      link: "/tlc-colombia-israel",
      link2: "/tlc-colombia-panama",
      link3: "/tlc-colombia-costa-rica",
      link4: "/tlc-colombia-republica-de-corea",
      link5: "/tlc-colombia-ecuador-eu-peru",
      link6: "/tlc-colombia-efta",
      link7: "/tlc-colombia-canada",
      link8: "/tlc-colombia-triangulo-del-norte",
      link9: "/tlc-colombia-chile",
      link10: "/tlc-colombia-estado-unidos-de-america",
    },
    {
      acuerdo: "No",
      acuerdo2: "No",
      acuerdo3: "1/08/2016",
      acuerdo4: "15/07/2016",
      acuerdo5: "1/06/2013",
      acuerdo6: "1/07/2011",
      acuerdo7: "15/08/2011",
      acuerdo8: "15/03/2010",
      acuerdo9: "8/05/2009",
      acuerdo10: "15/05/2012",
      link: "/tlc-colombia-israel",
      link2: "/tlc-colombia-panama",
      link3: "/tlc-colombia-costa-rica",
      link4: "/tlc-colombia-republica-de-corea",
      link5: "/tlc-colombia-ecuador-eu-peru",
      link6: "/tlc-colombia-efta",
      link7: "/tlc-colombia-canada",
      link8: "/tlc-colombia-triangulo-del-norte",
      link9: "/tlc-colombia-chile",
      link10: "/tlc-colombia-estado-unidos-de-america",
    }
  ]

  //Función de zoom

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

