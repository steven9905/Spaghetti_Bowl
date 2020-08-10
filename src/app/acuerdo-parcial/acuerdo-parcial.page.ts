import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-acuerdo-parcial',
  templateUrl: './acuerdo-parcial.page.html',
  styleUrls: ['./acuerdo-parcial.page.scss'],
})
export class AcuerdoParcialPage implements OnInit {

  @ViewChild('slides', {static:true}) slides:IonSlides;
  selectedSlide: any;

  public lista: Array<any> = [
    {
      titulo: "Acuerdo No"
    },
    {
      titulo: "AAP"
    },
    {
      titulo: ""
    },
    {
      titulo: "Partes o (miembros)"
    },
    {
      titulo: "Fecha Suscrito"
    },
    {
      titulo: "Fecha Vigencia"
    }
  ]

  public acuerdo: Array<any> = [
    {
     acuerdo: "0-51",
     acuerdo2: "0-51",
     acuerdo3: "0-53",
     acuerdo4: "0-53",
     acuerdo5: "0-57",
     link: "/acuerdo-parcial-argentina",
     link2: "/acuerdo-parcial-brasil",
     link3: "/acuerdo-parcial-cuba",
     link4: "/acuerdo-parcial-paraguay",
     link5: "/acuerdo-parcial-uruguay",    
    },
    {
      acuerdo: "Acuerdo de Alcance Parcial",
      acuerdo2: "Acuerdo de Alcance Parcial",
      acuerdo3: "Acuerdo de Alcance Parcial",
      acuerdo4: "Acuerdo de Alcance Parcial",
      acuerdo5: "Acuerdo de Alcance Parcial",
      link: "/acuerdo-parcial-argentina",
      link2: "/acuerdo-parcial-brasil",
      link3: "/acuerdo-parcial-cuba",
      link4: "/acuerdo-parcial-paraguay",
      link5: "/acuerdo-parcial-uruguay",
    },
    {
      acuerdo: "Preferencia Arancelaria Regional",
      acuerdo2: "Preferencia Arancelaria Regional",
      acuerdo3: "Preferencia Arancelaria Regional",
      acuerdo4: "Preferencia Arancelaria Regional",
      acuerdo5: "Preferencia Arancelaria Regional",
      link: "/acuerdo-parcial-argentina",
      link2: "/acuerdo-parcial-brasil",
      link3: "/acuerdo-parcial-cuba",
      link4: "/acuerdo-parcial-paraguay",
      link5: "/acuerdo-parcial-uruguay",
    },
    {
      acuerdo: "Argentina",
      acuerdo2: "Brasil",
      acuerdo3: "Cuba",
      acuerdo4: "Paraguay",
      acuerdo5: "Uruguay",
      link: "/acuerdo-parcial-argentina",
      link2: "/acuerdo-parcial-brasil",
      link3: "/acuerdo-parcial-cuba",
      link4: "/acuerdo-parcial-paraguay",
      link5: "/acuerdo-parcial-uruguay",
    },
    {
      acuerdo: "27/04/1984",
      acuerdo2: "27/04/1984",
      acuerdo3: "27/04/1984",
      acuerdo4: "27/04/1984",
      acuerdo5: "27/04/1984",
      link: "/acuerdo-parcial-argentina",
      link2: "/acuerdo-parcial-brasil",
      link3: "/acuerdo-parcial-cuba",
      link4: "/acuerdo-parcial-paraguay",
      link5: "/acuerdo-parcial-uruguay",
    },
    {
      acuerdo: "9/05/2008",
      acuerdo2: "9/05/2008",
      acuerdo3: "9/05/2008",
      acuerdo4: "9/05/2008",
      acuerdo5: "9/05/2008",
      link: "/acuerdo-parcial-argentina",
      link2: "/acuerdo-parcial-brasil",
      link3: "/acuerdo-parcial-cuba",
      link4: "/acuerdo-parcial-paraguay",
      link5: "/acuerdo-parcial-uruguay",
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
