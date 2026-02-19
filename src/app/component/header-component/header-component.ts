import { Component, Host, HostListener} from '@angular/core';

@Component({
  selector: 'app-header-component',
  imports: [],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css',
})
export class HeaderComponent {
  isScrolled= false;

  @HostListener('window:scroll',[])
  onWindwScroll(){
    this.isScrolled = window.scrollY > 1000;
  }
}
