import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-autism-band',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './autism-band.component.html',
})
export class AutismBandComponent {
  @Input() link = '/autism-kids';
}
