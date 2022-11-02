import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalfImageComponent } from './half-image.component';

describe('HalfImageComponent', () => {
  let component: HalfImageComponent;
  let fixture: ComponentFixture<HalfImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HalfImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HalfImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
