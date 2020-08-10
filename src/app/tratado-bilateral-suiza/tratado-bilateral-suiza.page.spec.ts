import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TratadoBilateralSuizaPage } from './tratado-bilateral-suiza.page';

describe('TratadoBilateralSuizaPage', () => {
  let component: TratadoBilateralSuizaPage;
  let fixture: ComponentFixture<TratadoBilateralSuizaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TratadoBilateralSuizaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TratadoBilateralSuizaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
