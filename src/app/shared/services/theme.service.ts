import { Injectable, Renderer2, RendererFactory2 } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Theme } from "../constants/theme";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  private renderer: Renderer2;
  public activeTheme = new BehaviorSubject<Theme>((localStorage.getItem("theme") as Theme) || Theme.LIGHT);

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
    this.renderer.addClass(document.body, this.activeTheme.value + "-theme");
  }

  public toggleTheme(): void {
    this.renderer.removeClass(document.body, this.activeTheme.value + "-theme");
    this.activeTheme.next(this.activeTheme.value === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
    this.renderer.addClass(document.body, this.activeTheme.value + "-theme");
    localStorage.setItem("theme", this.activeTheme.value);
  }
}
