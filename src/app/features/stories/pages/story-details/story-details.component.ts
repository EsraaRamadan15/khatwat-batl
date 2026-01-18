import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

type StoryDetails = {
  id: string;
  title: string;
  personName: string;
  imageUrl: string;
  content: string[];
};

@Component({
  selector: 'app-story-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './story-details.component.html',
})
export class StoryDetailsComponent {
  id = '';
  story: StoryDetails | null = null;

  // mock db (replace with API later)
  private db: StoryDetails[] = [
    {
      id: '1',
      title: 'Sebastian — قصة دعم ونجاح',
      personName: 'Sebastian',
      imageUrl: 'assets/images/stories/story-1.jpg',
      content: [
        'هنا تكتبي تفاصيل القصة كاملة.',
        'تقسيم المحتوى لفقرات بيخليه مقروء وسهل.',
        'ممكن تضيفي روابط/فيديو/مصادر داخل صفحة التفاصيل.',
      ],
    },
    {
      id: '2',
      title: 'Rhonda — أول خطوة للاستقلال',
      personName: 'Rhonda',
      imageUrl: 'assets/images/stories/story-2.jpg',
      content: ['تفاصيل القصة…', '…', '…'],
    },
  ];

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe((p) => {
      this.id = p.get('id') || '';
      this.story = this.db.find((x) => x.id === this.id) || null;
    });
  }
}
