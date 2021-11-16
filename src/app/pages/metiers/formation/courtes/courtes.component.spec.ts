import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtesComponent } from './courtes.component';

describe('CourtesComponent', () => {
  let component: CourtesComponent;
  let fixture: ComponentFixture<CourtesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourtesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourtesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
