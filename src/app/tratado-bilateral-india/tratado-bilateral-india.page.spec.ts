import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TratadoBilateralIndiaPage } from './tratado-bilateral-india.page';

describe('TratadoBilateralIndiaPage', () => {
  let component: TratadoBilateralIndiaPage;
  let fixture: ComponentFixture<TratadoBilateralIndiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TratadoBilateralIndiaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TratadoBilateralIndiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
