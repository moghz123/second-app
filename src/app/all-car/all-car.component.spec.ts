import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCarComponent } from './all-car.component';

describe('AllCarComponent', () => {
  let component: AllCarComponent;
  let fixture: ComponentFixture<AllCarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllCarComponent]
    });
    fixture = TestBed.createComponent(AllCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
