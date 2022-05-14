import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AuthResendEmailPage } from "./auth-resend-email.page";

describe("AuthResendEmailPage", () => {
  let component: AuthResendEmailPage;
  let fixture: ComponentFixture<AuthResendEmailPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthResendEmailPage],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthResendEmailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
