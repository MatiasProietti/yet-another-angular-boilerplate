import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AuthChangePasswordPage } from "./auth-change-password.page";

describe("AuthChangePasswordPage", () => {
  let component: AuthChangePasswordPage;
  let fixture: ComponentFixture<AuthChangePasswordPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthChangePasswordPage],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthChangePasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
