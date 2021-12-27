import { Injectable, Renderer2, RendererFactory2 } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { THEMES } from "../constants/themes";
import { theme } from "../models/theme";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  private renderer: Renderer2;
  public activeTheme = new BehaviorSubject<theme>((localStorage.getItem("theme") as theme) || THEMES.LIGHT);

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
    this.renderer.addClass(document.body, this.activeTheme.value + "-theme");
  }

  public toggleTheme(): void {
    this.renderer.removeClass(document.body, this.activeTheme.value + "-theme");
    this.activeTheme.next(this.activeTheme.value === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT);
    this.renderer.addClass(document.body, this.activeTheme.value + "-theme");
    localStorage.setItem("theme", this.activeTheme.value);
  }
}
