import { Component, OnInit } from "@angular/core";
import { ThemeService } from "@app/shared/services/theme.service";
import { random } from "@app/shared/utils/random";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"],
})
export class AuthComponent implements OnInit {
  public background = "";

  private images = {
    light: [
      "assets/backgrounds/light/mountain_forest.jpg",
      "assets/backgrounds/light/mountain.jpg",
      "assets/backgrounds/light/sunrise.jpg",
      "assets/backgrounds/light/sunset.jpg",
      "assets/backgrounds/light/volcano.jpg",
    ],
    dark: [
      "assets/backgrounds/dark/cavern.jpg",
      "assets/backgrounds/dark/mountain.jpg",
      "assets/backgrounds/dark/forest.jpg",
      "assets/backgrounds/dark/girl.jpg",
      "assets/backgrounds/dark/torii_gate.jpg",
    ],
  };
  constructor(public themeSrv: ThemeService) {
    this.themeSrv.activeTheme.subscribe((theme) => {
      const images = this.images[theme];
      const randomIndex = random.integer(0, images.length - 1);
      const gradientColor = "--gradient-" + theme;
      this.background = `linear-gradient(to right, var(${gradientColor}), var(${gradientColor})), url("${images[randomIndex]}")`;
    });
  }

  ngOnInit(): void {}
}
