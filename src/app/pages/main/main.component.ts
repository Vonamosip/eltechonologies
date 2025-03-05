import { Component, inject } from '@angular/core';
import {MatIconRegistry, MatIconModule} from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-main',
  imports: [MatIconModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  standalone: true,

})
export class MainComponent {
  constructor() {
    const iconRegistry = inject(MatIconRegistry);
    const sanitizer = inject(DomSanitizer);
    iconRegistry.addSvgIcon(
      'arrow',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/arrow.svg')
    );
  }

}
