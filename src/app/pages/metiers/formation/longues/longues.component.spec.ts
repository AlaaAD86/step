import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LonguesComponent } from './longues.component';

describe('LonguesComponent', () => {
  let component: LonguesComponent;
  let fixture: ComponentFixture<LonguesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LonguesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LonguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
