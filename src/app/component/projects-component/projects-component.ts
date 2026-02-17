import { Component } from '@angular/core';
import { ProjectcardComponent } from '../projectcard-component/projectcard-component';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-projects-component',
  templateUrl: './projects-component.html',
  styleUrls: ['./projects-component.css'],
  standalone: true,
  imports: [CommonModule, ProjectcardComponent],
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website built with Angular and Tailwind CSS.',
    },
    {
      title: 'Todo App',
      description: 'A full-stack todo application using Angular and Node.js.',
    },
    {
      title: 'Gym Tracker',
      description: 'A fitness tracker web app to log workouts and progress.',
    },
  ];
}
