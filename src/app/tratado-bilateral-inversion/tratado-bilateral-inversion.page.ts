import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
@Component({
  selector: 'app-tratado-bilateral-inversion',
  templateUrl: './tratado-bilateral-inversion.page.html',
  styleUrls: ['./tratado-bilateral-inversion.page.scss'],
})
export class TratadoBilateralInversionPage implements OnInit {

  
  @ViewChild('slides', {static:true}) slides:IonSlides;
  selectedSlide: any;
  
  //Encabezado de lista

  public lista: Array<any> = [
    {
      titulo: "País"
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
      acuerdo: "BLEU (Belgium-Luxembourg Economic Union)",
      acuerdo2:"Brasil",
      acuerdo3:"Chile",
      acuerdo4:"China",
      acuerdo5:"Cuba",
      acuerdo15:"Emiratos Árabes Unidos",
      acuerdo12:"España",
      acuerdo6:"Francia",
      acuerdo7:"India",
      acuerdo8:"Japón",
      acuerdo9:"República de Corea",
      acuerdo10:"Perú",
      acuerdo11:"Singapur",
      acuerdo13:"Suiza",
      acuerdo14:"Turquía",
      acuerdo16:"Reino Unido",
      link:"/tratado-bilateral-bleu",
      link2:"/tratado-bilateral-brasil",
      link3:"/tratado-bilateral-chile",
      link4:"/tratado-bilateral-china",
      link5:"/tratado-bilateral-cuba",
      link15:"/tratado-bilateral-emiratos-arabes",
      link12:"/tratado-bilateral-espana",
      link6:"/tratado-bilateral-francia",
      link7:"/tratado-bilateral-india",
      link8:"/tratado-bilateral-japon",
      link9:"/tratado-bilateral-republica-corea",
      link10:"/tratado-bilateral-peru",
      link11:"/tratado-bilateral-singapur",
      link13:"/tratado-bilateral-suiza",
      link14:"/tratado-bilateral-turquia",
      link16:"/tratado-bilateral-reino-unido"
    },
    {   
      acuerdo: "Firmado",
      acuerdo2:"Firmado",
      acuerdo3:"Firmado",
      acuerdo4:"Vigente",
      acuerdo5:"Firmado",
      acuerdo15:"Firmado",
      acuerdo12:"Vigente",
      acuerdo6:"Firmado",
      acuerdo7:"Firmado",
      acuerdo8:"Vigente",
      acuerdo9:"Firmado",
      acuerdo10:"Vigente",
      acuerdo11:"Firmado",
      acuerdo13:"Vigente",
      acuerdo14:"Firmado",
      acuerdo16:"Vigente",
      link:"/tratado-bilateral-bleu",
      link2:"/tratado-bilateral-brasil",
      link3:"/tratado-bilateral-chile",
      link4:"/tratado-bilateral-china",
      link5:"/tratado-bilateral-cuba",
      link15:"/tratado-bilateral-emiratos-arabes",
      link12:"/tratado-bilateral-espana",
      link6:"/tratado-bilateral-francia",
      link7:"/tratado-bilateral-india",
      link8:"/tratado-bilateral-japon",
      link9:"/tratado-bilateral-republica-corea",
      link10:"/tratado-bilateral-peru",
      link11:"/tratado-bilateral-singapur",
      link13:"/tratado-bilateral-suiza",
      link14:"/tratado-bilateral-turquia",
      link16:"/tratado-bilateral-reino-unido"
    },
    {   
      acuerdo: "4/02/2009",
      acuerdo2:"9/10/2015",
      acuerdo3:"25/01/2000",
      acuerdo4:"22/11/2008",
      acuerdo5:"16/07/1994",
      acuerdo15:"12/11/2017",
      acuerdo12:"31/03/2005",
      acuerdo6:"10/07/2014",
      acuerdo7:"10/11/2009",
      acuerdo8:"12/09/2011",
      acuerdo9:"6/07/2010",
      acuerdo10:"11/12/2007",
      acuerdo11:"12/07/2013",
      acuerdo13:"17/05/2006",
      acuerdo14:"28/07/2014",
      acuerdo16:"17/03/2010",
      link:"/tratado-bilateral-bleu",
      link2:"/tratado-bilateral-brasil",
      link3:"/tratado-bilateral-chile",
      link4:"/tratado-bilateral-china",
      link5:"/tratado-bilateral-cuba",
      link15:"/tratado-bilateral-emiratos-arabes",
      link12:"/tratado-bilateral-espana",
      link6:"/tratado-bilateral-francia",
      link7:"/tratado-bilateral-india",
      link8:"/tratado-bilateral-japon",
      link9:"/tratado-bilateral-republica-corea",
      link10:"/tratado-bilateral-peru",
      link11:"/tratado-bilateral-singapur",
      link13:"/tratado-bilateral-suiza",
      link14:"/tratado-bilateral-turquia",
      link16:"/tratado-bilateral-reino-unido"
    },
    {
      acuerdo: "No",
      acuerdo2:"No",
      acuerdo3:"No",
      acuerdo4:"2/07/2013",
      acuerdo5:"No",
      acuerdo15:"No",
      acuerdo12:"22/09/2007",
      acuerdo6:"No",
      acuerdo7:"No",
      acuerdo8:"11/09/2015",
      acuerdo9:"No",
      acuerdo10:"30/12/2010",
      acuerdo11:"No",
      acuerdo13:"6/10/2009",
      acuerdo14:"No",
      acuerdo16:"10/10/2014",
      link:"/tratado-bilateral-bleu",
      link2:"/tratado-bilateral-brasil",
      link3:"/tratado-bilateral-chile",
      link4:"/tratado-bilateral-china",
      link5:"/tratado-bilateral-cuba",
      link15:"/tratado-bilateral-emiratos-arabes",
      link12:"/tratado-bilateral-espana",
      link6:"/tratado-bilateral-francia",
      link7:"/tratado-bilateral-india",
      link8:"/tratado-bilateral-japon",
      link9:"/tratado-bilateral-republica-corea",
      link10:"/tratado-bilateral-peru",
      link11:"/tratado-bilateral-singapur",
      link13:"/tratado-bilateral-suiza",
      link14:"/tratado-bilateral-turquia",
      link16:"/tratado-bilateral-reino-unido"
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
