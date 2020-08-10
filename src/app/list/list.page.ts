import { Component, OnInit, ViewChild } from '@angular/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  
  @ViewChild('slides', {static:true}) slides:IonSlides;
  selectedSlide: any;

  public list: Array<any>=[
    {
      titulo:"Tipo De Tratado"
    }

  ]

  public lista: Array<any> = [
    {
      titulo:"Tratado Libre Comercio",
      icon:"arrow-dropright-circle",
      link:"/tratado-libre-comercio"
    },
    {
      titulo:"Acuerdo de Integración",
      icon:"arrow-dropright-circle",
      link:"/acuerdo-de-integracion"
    },
    {
      titulo:"Tratados Bilaterales de Inversión",
      icon:"arrow-dropright-circle",
      link:"/tratado-bilateral-inversion"
    },
    {
      titulo:"Acuerdo de Cooperación",
      icon:"arrow-dropright-circle",
      link:"/acuerdo-de-cooperacion"
    },
    {
      titulo:"Acuerdo de Alcance Parcial",
      icon:"arrow-dropright-circle",
      link:"/acuerdo-parcial"
    }
  ];

  //Función de zoom

  options = {
    pager: true,
    zoom: {
      maxRatio: 3
    }
  }

  //Cambiar Orientación del movil

  constructor(private screenOrientation: ScreenOrientation){
  
  }
  setLandscape(){
    // set to landscape
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE); //Cambia la orientación del movil
  }

//Función de desplazamiento entre slides

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
 //--------------------------//

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navi gate(['/list', JSON.stringify(item)]);
  // }    
  /* 
  */
}
