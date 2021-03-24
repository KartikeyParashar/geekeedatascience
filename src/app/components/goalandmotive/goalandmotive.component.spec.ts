import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalandmotiveComponent } from './goalandmotive.component';

describe('GoalandmotiveComponent', () => {
  let component: GoalandmotiveComponent;
  let fixture: ComponentFixture<GoalandmotiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalandmotiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalandmotiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
