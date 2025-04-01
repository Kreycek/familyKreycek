import { Component } from '@angular/core';

import { FooterComponent } from "./footer/footer.component";
import { MenuComponent } from "./menu/menu.component";
import { CenterComponent } from "./center/center.component";

@Component({
  selector: 'app-root',
  imports: [MenuComponent, CenterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Web';
}
