import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TratadoBilateralSingapurPage } from './tratado-bilateral-singapur.page';

describe('TratadoBilateralSingapurPage', () => {
  let component: TratadoBilateralSingapurPage;
  let fixture: ComponentFixture<TratadoBilateralSingapurPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TratadoBilateralSingapurPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TratadoBilateralSingapurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
