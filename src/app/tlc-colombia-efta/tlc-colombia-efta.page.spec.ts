import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TLCColombiaEFTAPage } from './tlc-colombia-efta.page';

describe('TLCColombiaEFTAPage', () => {
  let component: TLCColombiaEFTAPage;
  let fixture: ComponentFixture<TLCColombiaEFTAPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TLCColombiaEFTAPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TLCColombiaEFTAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
