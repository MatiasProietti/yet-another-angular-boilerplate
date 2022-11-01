import { Component } from '@angular/core';
import { Theme } from '@app/shared/constants/theme.constants';
import { ThemeService } from '@app/shared/services/theme.service';
import { Arr } from '@app/shared/utils/arr';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  public background = '';

  private images = {
    [Theme.LIGHT]: [
      'assets/backgrounds/light/mountain_forest.jpg',
      'assets/backgrounds/light/mountain.jpg',
      'assets/backgrounds/light/sunrise.jpg',
      'assets/backgrounds/light/sunset.jpg',
      'assets/backgrounds/light/volcano.jpg',
    ],
    [Theme.DARK]: [
      'assets/backgrounds/dark/cavern.jpg',
      'assets/backgrounds/dark/mountain.jpg',
      'assets/backgrounds/dark/forest.jpg',
      'assets/backgrounds/dark/girl.jpg',
      'assets/backgrounds/dark/torii_gate.jpg',
    ],
  };
  constructor(public themeSrv: ThemeService) {
    this.listenThemeChange();
  }

  private listenThemeChange(): void {
    this.themeSrv.activeTheme$.subscribe((theme: Theme) => {
      this.changeBackground(theme);
    });
  }

  private changeBackground(theme: Theme): void {
    const image = Arr.randomElement(this.images[theme]);
    this.background = `linear-gradient(to right, var(--background-gradient-color), var(--background-gradient-color)), url("${image}")`;
  }
}
