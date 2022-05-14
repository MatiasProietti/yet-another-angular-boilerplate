import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AuthLoginPage } from "./auth-login.page";

describe("AuthLoginPage", () => {
  let component: AuthLoginPage;
  let fixture: ComponentFixture<AuthLoginPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthLoginPage],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
