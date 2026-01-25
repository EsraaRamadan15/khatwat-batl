// community-spotlight.component.ts
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

export type CommunityMediaType = 'audio' | 'video' | 'both';

export interface CommunitySpotlightVm {
  title: string;
  quote: string;
  country: string;
  category: string;      // e.g. "رياضة"
  isNew?: boolean;
  mediaType?: CommunityMediaType;
  posterUrl?: string;    // image/video poster
  listenUrl?: string;    // route or external link
  discussAnchor?: string; // "#community-rooms"
}

@Component({
  standalone: true,
  selector: 'app-community-spotlight',
  templateUrl: './community-spotlight.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommunitySpotlightComponent {
  @Input() vm: CommunitySpotlightVm = {
    title: 'لقاء مع أم بطل رياضي… حكاية البداية والتحدّي',
    quote: '"مكنتش متخيلة إن يوم من الأيام هنقف على منصة… بس ربنا كريم."',
    country: 'مصر',
    category: 'رياضة',
    isNew: true,
    mediaType: 'both',
    posterUrl: 'https://placehold.co/1200x700/png?text=Story+Spotlight',
    listenUrl: '#',
    discussAnchor: '#community-rooms',
  };
}

