import { Component } from '@angular/core';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  imports: [MatIconModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer ) {
    this.iconRegistry.addSvgIcon("backIcon", this.sanitizer.bypassSecurityTrustResourceUrl("assets/back.svg"));
    this.iconRegistry.addSvgIcon("nextIcon", this.sanitizer.bypassSecurityTrustResourceUrl("assets/next.svg"));
  }
}
