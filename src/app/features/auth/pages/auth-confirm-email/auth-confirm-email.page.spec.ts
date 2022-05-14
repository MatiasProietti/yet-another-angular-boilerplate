import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AuthConfirmEmailPage } from "./auth-confirm-email.page";

describe("AuthConfirmEmailPage", () => {
  let component: AuthConfirmEmailPage;
  let fixture: ComponentFixture<AuthConfirmEmailPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthConfirmEmailPage],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthConfirmEmailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
