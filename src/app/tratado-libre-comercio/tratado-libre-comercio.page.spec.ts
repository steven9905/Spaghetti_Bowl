import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TratadoLibreComercioPage } from './tratado-libre-comercio.page';

describe('TratadoLibreComercioPage', () => {
  let component: TratadoLibreComercioPage;
  let fixture: ComponentFixture<TratadoLibreComercioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TratadoLibreComercioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TratadoLibreComercioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
