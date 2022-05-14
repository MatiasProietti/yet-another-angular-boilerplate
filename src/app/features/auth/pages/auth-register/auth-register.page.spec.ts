import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AuthRegisterPage } from "./auth-register.page";

describe("AuthRegisterPage", () => {
  let component: AuthRegisterPage;
  let fixture: ComponentFixture<AuthRegisterPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthRegisterPage],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
