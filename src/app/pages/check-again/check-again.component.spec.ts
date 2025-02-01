import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckAgainComponent } from './check-again.component';

describe('CheckAgainComponent', () => {
  let component: CheckAgainComponent;
  let fixture: ComponentFixture<CheckAgainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckAgainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckAgainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
