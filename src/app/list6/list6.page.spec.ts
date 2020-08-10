import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { List6Page } from './list6.page';

describe('List6Page', () => {
  let component: List6Page;
  let fixture: ComponentFixture<List6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ List6Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(List6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
