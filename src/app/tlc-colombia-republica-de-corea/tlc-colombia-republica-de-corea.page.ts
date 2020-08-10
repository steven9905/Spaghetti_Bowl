import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tlc-colombia-republica-de-corea',
  templateUrl: './tlc-colombia-republica-de-corea.page.html',
  styleUrls: ['./tlc-colombia-republica-de-corea.page.scss'],
})
export class TLCColombiaRepublicaDeCoreaPage implements OnInit {
  
  //Función para desplazar entre slides

  @ViewChild('slides', {static:true}) slides:IonSlides;
  selectedSlide: any;


  public lista: Array<any> = [
    {
      item: "TLC Colombia - República de Corea"
    }
  ]

  public informacion: Array<any> = [
    {
      item: "Partes o (miembros)",
      informacion: "Colombia, República de Corea (Corea del sur)", 
    },
    {
      item: "Fecha Firma",
      informacion: "21/02/2013"
    },
    {
      item: "Fecha Vigencia",
      informacion: "15/07/2016"
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
