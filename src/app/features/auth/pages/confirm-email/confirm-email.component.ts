import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FieldGroup } from "@app/shared/models/field-group";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-confirm-email",
  templateUrl: "./confirm-email.component.html",
  styleUrls: ["./confirm-email.component.scss"],
})
export class ConfirmEmailComponent {
  public fieldGroup = new FieldGroup([]);
  public id = 0;
  public hash = "";
  public expires = "";
  public signature = "";
  constructor(private activatedRoute: ActivatedRoute, private authSrv: AuthService, private router: Router) {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.id = params["id"] as number;
      this.hash = params["hash"] as string;
      this.expires = params["expires"] as string;
      this.signature = params["signature"] as string;
    });
  }

  public onSubmit(): void {
    if (!this.id || !this.hash || !this.expires || !this.signature) return;

    this.authSrv.confirmEmail(this.id, this.hash, this.expires, this.signature).subscribe(() => {
      void this.router.navigateByUrl("/auth/login");
    });
  }
}
