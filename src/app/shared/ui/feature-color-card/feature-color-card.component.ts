import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-feature-color-card',
  standalone: true,
  imports: [RouterLink, ButtonModule],
  templateUrl: './feature-color-card.component.html',
})
export class FeatureColorCardComponent {
  @Input() title = '';
  @Input() desc = '';
  @Input() badge = '';
  @Input() icon = 'pi pi-sparkles';
  @Input() link = '/';

  // اللون الخاص بالكارت
  @Input() from = '#B85C00';
  @Input() to = '#F08C2E';
  @Input() tint = 'rgba(184,92,0,.10)'; // خلفية خفيفة
}
