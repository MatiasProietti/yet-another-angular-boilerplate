import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingConfirmationComponent } from './pending-confirmation.component';

describe('PendingConfirmationComponent', () => {
  let component: PendingConfirmationComponent;
  let fixture: ComponentFixture<PendingConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingConfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
