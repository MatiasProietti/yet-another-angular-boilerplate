import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { THEMES } from "../constants/themes";
import { theme } from "../models/theme";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  public activeTheme = new BehaviorSubject<theme>((localStorage.getItem("theme") as theme) || THEMES.LIGHT);

  constructor() {}

  public toggleTheme(): void {
    this.activeTheme.next(this.activeTheme.value === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT);
    localStorage.setItem("theme", this.activeTheme.value);
  }
}
