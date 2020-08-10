import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'tratado-libre-comercio', loadChildren: './tratado-libre-comercio/tratado-libre-comercio.module#TratadoLibreComercioPageModule' },
  { path: 'acuerdo-de-integracion', loadChildren: './acuerdo-de-integracion/acuerdo-de-integracion.module#AcuerdoDeIntegracionPageModule' },
  { path: 'tratado-bilateral-inversion', loadChildren: './tratado-bilateral-inversion/tratado-bilateral-inversion.module#TratadoBilateralInversionPageModule' },
  { path: 'acuerdo-de-cooperacion', loadChildren: './acuerdo-de-cooperacion/acuerdo-de-cooperacion.module#AcuerdoDeCooperacionPageModule' },
  { path: 'acuerdo-parcial', loadChildren: './acuerdo-parcial/acuerdo-parcial.module#AcuerdoParcialPageModule' },
  { path: 'list2', loadChildren: './list2/list2.module#List2PageModule' },
  { path: 'tlc-colombia-israel', loadChildren: './tlc-colombia-israel/tlc-colombia-israel.module#TLCColombiaIsraelPageModule' },
  { path: 'tlc-colombia-panama', loadChildren: './tlc-colombia-panama/tlc-colombia-panama.module#TLCColombiaPanamaPageModule' },
  { path: 'tlc-colombia-costa-rica', loadChildren: './tlc-colombia-costa-rica/tlc-colombia-costa-rica.module#TLCColombiaCostaRicaPageModule' },
  { path: 'tlc-colombia-republica-de-corea', loadChildren: './tlc-colombia-republica-de-corea/tlc-colombia-republica-de-corea.module#TLCColombiaRepublicaDeCoreaPageModule' },
  { path: 'tlc-colombia-ecuador-eu-peru', loadChildren: './tlc-colombia-ecuador-eu-peru/tlc-colombia-ecuador-eu-peru.module#TLCColombiaEcuadorEUPeruPageModule' },
  { path: 'tlc-colombia-efta', loadChildren: './tlc-colombia-efta/tlc-colombia-efta.module#TLCColombiaEFTAPageModule' },
  { path: 'tlc-colombia-canada', loadChildren: './tlc-colombia-canada/tlc-colombia-canada.module#TLCColombiaCanadaPageModule' },
  { path: 'tlc-colombia-triangulo-del-norte', loadChildren: './tlc-colombia-triangulo-del-norte/tlc-colombia-triangulo-del-norte.module#TLCColombiaTrianguloDelNortePageModule' },
  { path: 'tlc-colombia-chile', loadChildren: './tlc-colombia-chile/tlc-colombia-chile.module#TLCColombiaChilePageModule' },
  { path: 'tlc-colombia-estado-unidos-de-america', loadChildren: './tlc-colombia-estado-unidos-de-america/tlc-colombia-estado-unidos-de-america.module#TLCColombiaEstadoUnidosDeAmericaPageModule' },
  { path: 'acuerdo-integracion-alianza-pacifico', loadChildren: './acuerdo-integracion-alianza-pacifico/acuerdo-integracion-alianza-pacifico.module#AcuerdoIntegracionAlianzaPacificoPageModule' },
  { path: 'list3', loadChildren: './list3/list3.module#List3PageModule' },
  { path: 'acuerdo-integracion-comunidad-andina', loadChildren: './acuerdo-integracion-comunidad-andina/acuerdo-integracion-comunidad-andina.module#AcuerdoIntegracionComunidadAndinaPageModule' },
  { path: 'tratado-bilateral-bleu', loadChildren: './tratado-bilateral-bleu/tratado-bilateral-bleu.module#TratadoBilateralBleuPageModule' },
  { path: 'tratado-bilateral-brasil', loadChildren: './tratado-bilateral-brasil/tratado-bilateral-brasil.module#TratadoBilateralBrasilPageModule' },
  { path: 'tratado-bilateral-chile', loadChildren: './tratado-bilateral-chile/tratado-bilateral-chile.module#TratadoBilateralChilePageModule' },
  { path: 'tratado-bilateral-china', loadChildren: './tratado-bilateral-china/tratado-bilateral-china.module#TratadoBilateralChinaPageModule' },
  { path: 'tratado-bilateral-cuba', loadChildren: './tratado-bilateral-cuba/tratado-bilateral-cuba.module#TratadoBilateralCubaPageModule' },
  { path: 'tratado-bilateral-francia', loadChildren: './tratado-bilateral-francia/tratado-bilateral-francia.module#TratadoBilateralFranciaPageModule' },
  { path: 'tratado-bilateral-india', loadChildren: './tratado-bilateral-india/tratado-bilateral-india.module#TratadoBilateralIndiaPageModule' },
  { path: 'tratado-bilateral-japon', loadChildren: './tratado-bilateral-japon/tratado-bilateral-japon.module#TratadoBilateralJaponPageModule' },
  { path: 'tratado-bilateral-republica-corea', loadChildren: './tratado-bilateral-republica-corea/tratado-bilateral-republica-corea.module#TratadoBilateralRepublicaCoreaPageModule' },
  { path: 'tratado-bilateral-peru', loadChildren: './tratado-bilateral-peru/tratado-bilateral-peru.module#TratadoBilateralPeruPageModule' },
  { path: 'tratado-bilateral-singapur', loadChildren: './tratado-bilateral-singapur/tratado-bilateral-singapur.module#TratadoBilateralSingapurPageModule' },
  { path: 'tratado-bilateral-suiza', loadChildren: './tratado-bilateral-suiza/tratado-bilateral-suiza.module#TratadoBilateralSuizaPageModule' },
  { path: 'tratado-bilateral-espana', loadChildren: './tratado-bilateral-espana/tratado-bilateral-espana.module#TratadoBilateralEspanaPageModule' },
  { path: 'tratado-bilateral-turquia', loadChildren: './tratado-bilateral-turquia/tratado-bilateral-turquia.module#TratadoBilateralTurquiaPageModule' },
  { path: 'tratado-bilateral-emiratos-arabes', loadChildren: './tratado-bilateral-emiratos-arabes/tratado-bilateral-emiratos-arabes.module#TratadoBilateralEmiratosArabesPageModule' },
  { path: 'tratado-bilateral-reino-unido', loadChildren: './tratado-bilateral-reino-unido/tratado-bilateral-reino-unido.module#TratadoBilateralReinoUnidoPageModule' },
  { path: 'list4', loadChildren: './list4/list4.module#List4PageModule' },
  { path: 'acuerdo-parcial-argentina', loadChildren: './acuerdo-parcial-argentina/acuerdo-parcial-argentina.module#AcuerdoParcialArgentinaPageModule' },
  { path: 'acuerdo-parcial-brasil', loadChildren: './acuerdo-parcial-brasil/acuerdo-parcial-brasil.module#AcuerdoParcialBrasilPageModule' },
  { path: 'acuerdo-parcial-cuba', loadChildren: './acuerdo-parcial-cuba/acuerdo-parcial-cuba.module#AcuerdoParcialCubaPageModule' },
  { path: 'acuerdo-parcial-paraguay', loadChildren: './acuerdo-parcial-paraguay/acuerdo-parcial-paraguay.module#AcuerdoParcialParaguayPageModule' },
  { path: 'acuerdo-parcial-uruguay', loadChildren: './acuerdo-parcial-uruguay/acuerdo-parcial-uruguay.module#AcuerdoParcialUruguayPageModule' },
  { path: 'list5', loadChildren: './list5/list5.module#List5PageModule' },
  { path: 'acuerdo-cooperacion-argentina', loadChildren: './acuerdo-cooperacion-argentina/acuerdo-cooperacion-argentina.module#AcuerdoCooperacionArgentinaPageModule' },
  { path: 'acuerdo-cooperacion-brasil', loadChildren: './acuerdo-cooperacion-brasil/acuerdo-cooperacion-brasil.module#AcuerdoCooperacionBrasilPageModule' },
  { path: 'acuerdo-cooperacion-uruguay', loadChildren: './acuerdo-cooperacion-uruguay/acuerdo-cooperacion-uruguay.module#AcuerdoCooperacionUruguayPageModule' },
  { path: 'acuerdo-cooperacion-paraguay', loadChildren: './acuerdo-cooperacion-paraguay/acuerdo-cooperacion-paraguay.module#AcuerdoCooperacionParaguayPageModule' },
  { path: 'list6', loadChildren: './list6/list6.module#List6PageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
