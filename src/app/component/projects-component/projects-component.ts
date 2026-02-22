import { Component } from '@angular/core';
import { ProjectcardComponent } from '../projectcard-component/projectcard-component';
import { CommonModule } from '@angular/common';
import { title } from 'node:process';

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
      title: 'The-Bookery',
      description:
        'The Bookery is a modern web-based digital library and book-selling platform built using C#.NET for backend and React for frontend. This system allows users to browse, filter, and order books, while providing administrative features for managing books, orders, and announcements.',
      image:
        'https://cdn.dribbble.com/userupload/4299008/file/original-9939187c75d8b604f733e669b8a9bf1b.png?format=webp&resize=400x300&vertical=center',
      github: 'https://github.com/Ayush-tamang07/The-Bookery.git',
    },
    {
      title: 'Tonii',
      description:
      'Tonii is a full-stack fitness application that empowers users with personalized workout plans, intelligent workout suggestions, calorie tracking, form correction feedback, and consistency through streak tracking.',
      image:
        'https://cdn.dribbble.com/userupload/4299008/file/original-9939187c75d8b604f733e669b8a9bf1b.png?format=webp&resize=400x300&vertical=center',
      github: 'https://github.com/Ayush-tamang07/FYP-Tonii.git',
    },
    {
      title: 'MyFinanceHub',
      description:
      'MyFinanceHub is a finance',
      image:
        'https://cdn.dribbble.com/userupload/4299008/file/original-9939187c75d8b604f733e669b8a9bf1b.png?format=webp&resize=400x300&vertical=center',
      github: 'https://github.com/Ayush-tamang07/MyFinanceHub.git',
    },
  ];
}
