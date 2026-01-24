import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type JourneyCard = {
  title: string;
  desc: string;
  link: string;
  variant: 'yellow' | 'blue' | 'rose';
};

@Component({
  selector: 'app-journey-like-down-section',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './journey-like-down-section.component.html',
  styleUrls: ['./journey-like-down-section.component.scss'],
})
export class JourneyLikeDownSectionComponent {
  heading = 'ابدئي رحلتك';
  sub = 'بحث عن متلازمة داون + ربط بمنازل الروح السبعة';

  cards: JourneyCard[] = [
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
    {
      title: 'شارك قصتك',
      desc: 'ربط الرحلة بمنازل الروح السبعة: قبول، صبر، يقين، رضا… خطوة بخطوة.',
      link: '/seven-houses',
      variant: 'rose',
    },
  ];
}
