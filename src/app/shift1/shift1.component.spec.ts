import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Shift1Component } from './shift1.component';

describe('Shift1Component', () => {
  let component: Shift1Component;
  let fixture: ComponentFixture<Shift1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Shift1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Shift1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
