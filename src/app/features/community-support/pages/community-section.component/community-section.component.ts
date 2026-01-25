import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommunitySpotlightComponent } from '../../components/community-spotlight.component/community-spotlight.component';
import { CommunitySessionsComponent } from '../../components/community-sessions.component/community-sessions.component';
import { CommunityRoomsComponent } from '../../components/community-rooms.component/community-rooms.component';
import { CommunityShareStoryComponent } from '../../components/community-share-story.component/community-share-story.component';
import { CommunityStoriesComponent } from "../../components/community-stories.component/community-stories.component";

@Component({
  standalone: true,
  selector: 'app-community-section.component',
  imports: [CommunitySpotlightComponent, CommunitySessionsComponent, CommunityRoomsComponent, CommunityShareStoryComponent, CommunityStoriesComponent],
  templateUrl: './community-section.component.html',
  styleUrl: './community-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommunitySectionComponent {



   scrollTo(id: string): void {
    // Use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (!el) return;

      // If you have sticky header, offset the scroll
      const headerOffset = 88; // adjust to your header height
      const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  }
 }
