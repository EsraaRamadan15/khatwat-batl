import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-title.component.html',
})
export class SectionTitleComponent {
  @Input() title = '';
  @Input() subtitle?: string;
}
