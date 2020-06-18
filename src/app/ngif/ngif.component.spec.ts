import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NGIFComponent } from './ngif.component';

describe('NGIFComponent', () => {
  let component: NGIFComponent;
  let fixture: ComponentFixture<NGIFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NGIFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NGIFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
