import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-warm-card',
  standalone: true,
  imports: [RouterLink, CardModule],
  templateUrl: './warm-card.component.html',
  styleUrl: './warm-card.component.css',
})

export class WarmCardComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() link = '/';
}

