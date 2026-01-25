import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-community-stories',
  templateUrl: './community-stories.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommunityStoriesComponent {
  // Idea-only (no real data for now)
  readonly isSoon = true;
}
