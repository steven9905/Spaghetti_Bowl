import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TratadoBilateralRepublicaCoreaPage } from './tratado-bilateral-republica-corea.page';

describe('TratadoBilateralRepublicaCoreaPage', () => {
  let component: TratadoBilateralRepublicaCoreaPage;
  let fixture: ComponentFixture<TratadoBilateralRepublicaCoreaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TratadoBilateralRepublicaCoreaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TratadoBilateralRepublicaCoreaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
