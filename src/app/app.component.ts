import { Component } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { ThemeService } from "./shared/services/theme.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "yet-another-angular-boilerplate";

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer, public themeSrv: ThemeService) {
    /* 
    Using this resolver we remove the need to register each icon we want to use.
    */
    this.matIconRegistry.addSvgIconResolver((name: string, namespace: string): SafeResourceUrl => {
      const route = namespace ? `/assets/icons/${namespace}/${name}.svg` : `/assets/icons/${name}.svg`;
      return this.domSanitizer.bypassSecurityTrustResourceUrl(route);
    });
  }
}
