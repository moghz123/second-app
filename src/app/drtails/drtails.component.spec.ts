import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrtailsComponent } from './drtails.component';

describe('DrtailsComponent', () => {
  let component: DrtailsComponent;
  let fixture: ComponentFixture<DrtailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrtailsComponent]
    });
    fixture = TestBed.createComponent(DrtailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
