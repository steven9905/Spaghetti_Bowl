import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tlc-colombia-estado-unidos-de-america',
  templateUrl: './tlc-colombia-estado-unidos-de-america.page.html',
  styleUrls: ['./tlc-colombia-estado-unidos-de-america.page.scss'],
})
export class TLCColombiaEstadoUnidosDeAmericaPage implements OnInit {
  //Función para desplazar entre slides

  @ViewChild('slides', {static:true}) slides:IonSlides;
  selectedSlide: any;

  public lista: Array<any> = [
    {
      item: "TLC Colombia - Estados Unidos de América"
    }
  ]

  public informacion: Array<any> = [
    {
      item: "Partes o (miembros)",
      informacion: "Colombia, Estados Unidos",
    },
    {
      item: "Fecha Firma",
      informacion: "22/11/2006"
    },
    {
      item: "Fecha Vigencia",
      informacion: "15/05/2012"
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
