import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglCarComponent } from './singl-car.component';

describe('SinglCarComponent', () => {
  let component: SinglCarComponent;
  let fixture: ComponentFixture<SinglCarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SinglCarComponent]
    });
    fixture = TestBed.createComponent(SinglCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
