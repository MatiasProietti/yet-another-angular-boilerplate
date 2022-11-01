import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Theme } from '../constants/theme.constants';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private renderer: Renderer2;
  /**
   * @description BehaviorSubject for when the active theme changes
   */
  public readonly activeTheme$ = new BehaviorSubject<Theme>(this.getThemeFromLocalStorage() || Theme.LIGHT);

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
    this.addTheme(this.activeTheme$.value);
  }

  /**
   * @description Toggles between DARK and LIGHT theme
   */
  public toggleTheme(): void {
    this.removeTheme(this.activeTheme$.value);
    this.activeTheme$.next(this.activeTheme$.value === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
    this.addTheme(this.activeTheme$.value);
    this.saveThemeToLocalStorage();
  }

  private getThemeFromLocalStorage(): Theme {
    return localStorage.getItem('theme') as Theme;
  }

  private saveThemeToLocalStorage(): void {
    localStorage.setItem('theme', this.activeTheme$.value);
  }

  private addTheme(theme: string): void {
    this.renderer.addClass(document.body, theme);
  }

  private removeTheme(theme: string): void {
    this.renderer.removeClass(document.body, theme);
  }
}
