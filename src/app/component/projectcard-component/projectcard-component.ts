import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projectcard-component',
  imports: [],
  templateUrl: './projectcard-component.html',
  styleUrls: ['./projectcard-component.css'],
  standalone: true,
})
export class ProjectcardComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() image!: string;
  @Input() github!: string;
  @Input() livedemo?: string;
  @Input() icons!: string;

  openLiveDemo() {
    if (this.livedemo) {
      window.open(this.livedemo, '_blank');
    }
  }
}
