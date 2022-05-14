import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AuthRoutingModule } from "./auth-routing.module";
import { AuthComponent } from "./auth.component";
import { AuthRepositoryService } from "./services/auth-repository.service";
import { AuthService } from "./services/auth.service";

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, AuthRoutingModule],
  providers: [AuthService, AuthRepositoryService],
})
export class AuthModule {}
