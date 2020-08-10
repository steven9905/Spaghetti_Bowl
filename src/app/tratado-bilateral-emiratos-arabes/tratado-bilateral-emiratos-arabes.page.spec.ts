import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TratadoBilateralEmiratosArabesPage } from './tratado-bilateral-emiratos-arabes.page';

describe('TratadoBilateralEmiratosArabesPage', () => {
  let component: TratadoBilateralEmiratosArabesPage;
  let fixture: ComponentFixture<TratadoBilateralEmiratosArabesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TratadoBilateralEmiratosArabesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TratadoBilateralEmiratosArabesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
