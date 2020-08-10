import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list2',
  templateUrl: './list2.page.html',
  styleUrls: ['./list2.page.scss'],
})
export class List2Page implements OnInit {
  public lista: Array<any> = [
    {
      titulo:"TLC Colombia - Israel",
      icon:"arrow-dropright-circle",
      link:"/tlc-colombia-israel"
    },
    {
      titulo:"TLC Colombia - Panamá",
      icon:"arrow-dropright-circle",
      link:"/tlc-colombia-panama"
    },
    {
      titulo:"TLC Colombia - Costa Rica",
      icon:"arrow-dropright-circle",
      link:"/tlc-colombia-costa-rica"
    },
    {
      titulo:"TLC Colombia - República de Corea",
      icon:"arrow-dropright-circle",
      link:"/tlc-colombia-republica-de-corea"
    },
    {
      titulo:"TLC Colombia - Ecuador - EU - Perú",
      icon:"arrow-dropright-circle",
      link:"/tlc-colombia-ecuador-eu-peru"
    },
    {
      titulo:"TLC Colombia - EFTA",
      icon:"arrow-dropright-circle",
      link:"/tlc-colombia-efta"
    },
    {
      titulo:"TLC Colombia - Canadá",
      icon:"arrow-dropright-circle",
      link:"/tlc-colombia-canada"
    },
    {
      titulo:"TLC Colombia - Tríangulo del norte",
      icon:"arrow-dropright-circle",
      link:"/tlc-colombia-triangulo-del-norte"
    },
    {
      titulo:"TLC  Colombia - Chile",
      icon:"arrow-dropright-circle",
      link:"/tlc-colombia-chile"
    },
    {
      titulo:"TLC Colombia - Estados Unidos de América",
      icon:"arrow-dropright-circle",
      link:"/tlc-colombia-estado-unidos-de-america"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
