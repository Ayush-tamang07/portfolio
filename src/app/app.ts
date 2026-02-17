import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './component/header-component/header-component';
import { HeroComponent } from "./component/hero-component/hero-component";
import { AboutmeComponent } from './component/aboutme-component/aboutme-component';
import { SkillsComponent } from './component/skills-component/skills-component';
import { ProjectsComponent } from './component/projects-component/projects-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HeroComponent, AboutmeComponent, SkillsComponent, ProjectsComponent],
  template:`
  <app-header-component/>
  <main>
    <app-hero-component/>
    <app-aboutme-component/>
    <app-skills-component/>
    <app-projects-component/>
  </main>
  <router-outlet>`,
  // templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
