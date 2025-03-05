import { Component } from '@angular/core';
import { LogoComponent } from "../logo/logo.component";
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-header',
  imports: [LogoComponent, MatMenuModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true
})
export class HeaderComponent {

}
