import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AuthPendingConfirmationPage } from "./auth-pending-confirmation.page";

describe("AuthPendingConfirmationPage", () => {
  let component: AuthPendingConfirmationPage;
  let fixture: ComponentFixture<AuthPendingConfirmationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthPendingConfirmationPage],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthPendingConfirmationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
