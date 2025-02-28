import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, HeaderComponent, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'EliteTechnologies';
  constructor(private iconRegistry: MatIconRegistry) {}

  ngOnInit(): void {
    this.iconRegistry.addSvgIconLiteral('backIcon', 'assets/icons/back.svg');
    this.iconRegistry.addSvgIconLiteral('nextIcon', 'assets/icons/next.svg');
  }
}
