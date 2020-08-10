import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list4',
  templateUrl: './list4.page.html',
  styleUrls: ['./list4.page.scss'],
})
export class List4Page implements OnInit {

  public lista: Array<any> = [
    {
      titulo:"Tratado Bilateral BLEU (Belgium - Luxembourg Economic Union)",
      icon:"arrow-dropright-circle",
      link:"/tratado-bilateral-bleu"
    },
    {
      titulo:"Tratado Bilateral De Inversión Colombia - Brasil",
      icon:"arrow-dropright-circle",
      link:"/tratado-bilateral-brasil"
    },
    {
      titulo:"Tratado Bilateral De Inversión Colombia - Chile",
      icon:"arrow-dropright-circle",
      link:"/tratado-bilateral-chile"
    },
    {
      titulo:"Tratado Bilateral De Inversión Colombia - China",
      icon:"arrow-dropright-circle",
      link:"/tratado-bilateral-china"
    },{
      titulo:"Tratado Bilateral De Inversión Colombia - Cuba",
      icon:"arrow-dropright-circle",
      link:"/tratado-bilateral-cuba"
    },
    {
      titulo:"Tratado Bilateral De Inversión Colombia - Emiratos Árabes Unidos",
      icon:"arrow-dropright-circle",
      link:"/tratado-bilateral-emiratos-arabes"
    },{
      titulo:"Tratado Bilateral De Inversión Colombia - España",
      icon:"arrow-dropright-circle",
      link:"/tratado-bilateral-espana"
    },
    {
      titulo:"Tratado Bilateral De Inversión Colombia - Francia",
      icon:"arrow-dropright-circle",
      link:"/tratado-bilateral-francia"
    },{
      titulo:"Tratado Bilateral De Inversión Colombia - India",
      icon:"arrow-dropright-circle",
      link:"/tratado-bilateral-india"
    },
    {
      titulo:"Tratado Bilateral De Inversión Colombia - Japón",
      icon:"arrow-dropright-circle",
      link:"/tratado-bilateral-japon"
    },{
      titulo:"Tratado Bilateral De Inversión Colombia - Perú",
      icon:"arrow-dropright-circle",
      link:"/tratado-bilateral-peru"
    },
    {
      titulo:"Tratado Bilateral De Inversión Colombia - Reino Unido",
      icon:"arrow-dropright-circle",
      link:"/tratado-bilateral-reino-unido"
    },{
      titulo:"Tratado Bilateral De Inversión Colombia - República de Corea",
      icon:"arrow-dropright-circle",
      link:"/tratado-bilateral-republica-corea"
    },
    {
      titulo:"Tratado Bilateral De Inversión Colombia - Singapur",
      icon:"arrow-dropright-circle",
      link:"/tratado-bilateral-singapur"
    },{
      titulo:"Tratado Bilateral De Inversión Colombia - Suiza",
      icon:"arrow-dropright-circle",
      link:"/tratado-bilateral-suiza"
    },
    {
      titulo:"Tratado Bilateral De Inversión Colombia - Turquía",
      icon:"arrow-dropright-circle",
      link:"/tratado-bilateral-turquia"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}

