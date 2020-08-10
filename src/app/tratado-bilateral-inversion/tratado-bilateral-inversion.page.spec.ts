import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TratadoBilateralInversionPage } from './tratado-bilateral-inversion.page';

describe('TratadoBilateralInversionPage', () => {
  let component: TratadoBilateralInversionPage;
  let fixture: ComponentFixture<TratadoBilateralInversionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TratadoBilateralInversionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TratadoBilateralInversionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
