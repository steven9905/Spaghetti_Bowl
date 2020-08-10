import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcuerdoIntegracionAlianzaPacificoPage } from './acuerdo-integracion-alianza-pacifico.page';

describe('AcuerdoIntegracionAlianzaPacificoPage', () => {
  let component: AcuerdoIntegracionAlianzaPacificoPage;
  let fixture: ComponentFixture<AcuerdoIntegracionAlianzaPacificoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcuerdoIntegracionAlianzaPacificoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcuerdoIntegracionAlianzaPacificoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
