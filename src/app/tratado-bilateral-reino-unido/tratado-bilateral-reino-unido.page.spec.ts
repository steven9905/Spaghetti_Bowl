import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TratadoBilateralReinoUnidoPage } from './tratado-bilateral-reino-unido.page';

describe('TratadoBilateralReinoUnidoPage', () => {
  let component: TratadoBilateralReinoUnidoPage;
  let fixture: ComponentFixture<TratadoBilateralReinoUnidoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TratadoBilateralReinoUnidoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TratadoBilateralReinoUnidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
