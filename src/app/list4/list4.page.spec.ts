import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { List4Page } from './list4.page';

describe('List4Page', () => {
  let component: List4Page;
  let fixture: ComponentFixture<List4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ List4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(List4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
