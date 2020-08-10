import { Component, OnInit,ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tratado-bilateral-republica-corea',
  templateUrl: './tratado-bilateral-republica-corea.page.html',
  styleUrls: ['./tratado-bilateral-republica-corea.page.scss'],
})
export class TratadoBilateralRepublicaCoreaPage implements OnInit {

  @ViewChild('slides', {static:true}) slides:IonSlides;
  selectedSlide: any;
  
  //Encabezado de lista

  public lista: Array<any> = [
    {
      titulo: "Partes o (miembros)"
    },
    {
      titulo: "Estado"
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
      acuerdo: "Colombia - República de Corea",
      link:"/tratado-bilateral-republica-corea"
    },
    {
      acuerdo: "Firmado",
      link:"/tratado-bilateral-republica-corea"
    },  
    {
      acuerdo: "6/07/2010",
      link:"/tratado-bilateral-republica-corea"
    },
    {
      acuerdo: "No",
      link:"/tratado-bilateral-republica-corea"
    },
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
