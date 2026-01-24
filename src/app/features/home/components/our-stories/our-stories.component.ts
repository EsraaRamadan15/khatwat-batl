import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { STATIC_STORIES } from '../../../stories/stories.static';


export type StoryCard = {
  id: string;
  personName: string;
  quote: string;
  imageUrl: string;
  tag?: string;
};

@Component({
  selector: 'app-our-stories',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './our-stories.component.html',
})
export class OurStoriesComponent {
  @Input() limit = 4;

  /** mapped cards from static stories */
  stories: StoryCard[] = STATIC_STORIES.map((s) => ({
    id: s.id,
    personName: s.personName || s.title,
    quote: s.highlight || s.summary || '',
    imageUrl: s.coverImageUrl || 'https://placehold.co/1200x630/png?text=Story',
    tag: s.domain || 'قصة',
  }));

  get limitedStories(): StoryCard[] {
    return this.stories.slice(0, this.limit);
  }

  trackById(_: number, s: StoryCard) {
    return s.id;
  }
}
