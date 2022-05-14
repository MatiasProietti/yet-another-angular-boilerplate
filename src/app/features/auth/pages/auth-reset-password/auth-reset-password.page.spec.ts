import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AuthResetPasswordPage } from "./auth-reset-password.page";

describe("AuthResetPasswordPage", () => {
  let component: AuthResetPasswordPage;
  let fixture: ComponentFixture<AuthResetPasswordPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthResetPasswordPage],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthResetPasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
