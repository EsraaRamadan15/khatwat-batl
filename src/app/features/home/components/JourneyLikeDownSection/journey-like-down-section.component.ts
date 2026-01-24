import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CreateStoryModalComponent } from '../../../stories/pages/create-story-modal/create-story-modal.component';

type JourneyCard = {
  title: string;
  desc: string;
  link?: string;
  variant: 'yellow' | 'blue' | 'rose';
  action?: 'createStory';
};

@Component({
  selector: 'app-journey-like-down-section',
  standalone: true,
  imports: [RouterLink, CommonModule,CreateStoryModalComponent],
  templateUrl: './journey-like-down-section.component.html',
  styleUrls: ['./journey-like-down-section.component.scss'],
})
export class JourneyLikeDownSectionComponent {
  heading = 'ابدئي رحلتك';
  sub = 'بحث عن متلازمة داون + ربط بمنازل الروح السبعة';


  createStoryOpen = false;

  cards: JourneyCard[] = [
    {
      title: 'شارك قصتك',
      desc: 'قصتك قد تغيّر نظرة، أو تمنح أمل. شارك رحلتك ودع تأثيرك يصل لغيرك.',
      variant: 'rose',
      action: 'createStory',
    },
    {
      title: 'تواصل معنا',
      desc: 'إرسال استفسار + طلب استشارة + اقتراحات وشكاوى (نرد عليك بسرعة)',
      link: '/contact-us',
      variant: 'yellow',
    },
    {
      title: 'مصادر وبحث',
      desc: 'اعرفي متلازمة داون ببساطة: الفحوصات، النمو، المهارات، والمتابعة المبكرة.',
      link: '/refrences',
      variant: 'blue',
    },
  ];

  constructor(private router: Router) { }
  onCardClick(c: JourneyCard) {
    if (c.action === 'createStory') {
      this.createStoryOpen = true;
      return;
    }

    if (c.link) this.router.navigateByUrl(c.link);
  }

  onStorySubmitted() {
    this.createStoryOpen = false;
    // اختياري: بعد الإرسال روحي صفحة القصص
    this.router.navigateByUrl('/stories/stories-list');
  }
}
