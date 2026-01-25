import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-community-rooms',
  templateUrl: './community-rooms.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommunityRoomsComponent {
  readonly isSoon = true;
}
