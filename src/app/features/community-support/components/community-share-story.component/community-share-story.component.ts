import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-community-share-story',
  templateUrl: './community-share-story.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommunityShareStoryComponent {
  readonly isSoon = true;
}
