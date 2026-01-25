import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-community-sessions',
  templateUrl: './community-sessions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommunitySessionsComponent {
  readonly isSoon = true;
}
