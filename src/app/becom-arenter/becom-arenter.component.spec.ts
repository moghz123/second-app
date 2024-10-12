import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomARenterComponent } from './becom-arenter.component';

describe('BecomARenterComponent', () => {
  let component: BecomARenterComponent;
  let fixture: ComponentFixture<BecomARenterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BecomARenterComponent]
    });
    fixture = TestBed.createComponent(BecomARenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
