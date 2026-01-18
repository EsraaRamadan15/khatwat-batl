import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

export type StoryCard = {
  id: string;
  personName: string;
  quote: string;     // short excerpt
  imageUrl: string;
  tag?: string;      // optional small label
};

@Component({
  selector: 'app-our-stories',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './our-stories.component.html',
})
export class OurStoriesComponent {
  /** limit how many cards to show */
  @Input() limit = 4;

  /** You can replace this with API data later */
  stories: StoryCard[] = [
    {
      id: '1',
      personName: 'Sebastian',
      quote: 'يقدر يعمل اللي بيحبه… بالدعم اللي محتاجه.',
      imageUrl: 'assets/stories/story1.jpg',
      tag: 'قصة نجاح',
    },
    {
      id: '2',
      personName: 'Rhonda',
      quote: 'هنا بدأت أول خطوة نحو الاستقلال الحقيقي.',
      imageUrl: 'assets/stories/story1.jpg',
      tag: 'استقلالية',
    },
    {
      id: '3',
      personName: 'Tina (Mom)',
      quote: 'من غير الدعم… ماكنّاش هنكون في المكان ده النهاردة.',
      imageUrl: 'assets/stories/story1.jpg',
      tag: 'أسرة',
    },
    {
      id: '4',
      personName: 'Work Support',
      quote: 'مبادرات بتساعد على المهارات والدمج في بيئات العمل.',
      imageUrl: 'assets/stories/story1.jpg',
      tag: 'مهارات',
    },
    // extra (won’t show if limit=4)
    {
      id: 'extra-1',
      personName: 'Extra',
      quote: 'تفاصيل مختصرة… ثم صفحة تفاصيل كاملة.',
      imageUrl: 'assets/images/stories/story-5.jpg',
      tag: 'معلومة',
    },
  ];

  get limitedStories(): StoryCard[] {
    return this.stories.slice(0, this.limit);
  }

  trackById(_: number, s: StoryCard) {
    return s.id;
  }
}
