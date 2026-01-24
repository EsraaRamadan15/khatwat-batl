import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type ToolItem = {
  id: string;
  title: string;
  desc: string;
  img: string;          // tile image
  enabled: boolean;     // clickable or "soon"
  link?: string;        // only if enabled
  external?: boolean;   // open new tab for external links
  badge?: string;       // small label under tile if you want
};

type ToolSection = {
  id: string;
  title: string;
  subtitle?: string;
  items: ToolItem[];
  enabled: boolean;     // section state (soon/active)
};

@Component({
  selector: 'app-interactive-tools',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interactive-tools.component.html',
})
export class InteractiveToolsComponent {
  // ====== Main banner tiles (the photos you created) ======
  headerTiles = [
    { img: '/assets/images/tools/survey.png', alt: 'استبيان' },
    { img: '/assets/images/tools/strengths-soon.png', alt: 'اختبارات نقاط القوة قريبًا' },
    { img: '/assets/images/tools/organizer-soon.png', alt: 'منظم يومي قريبًا' },
    { img: '/assets/images/tools/pdf-soon.png', alt: 'تحميل PDF قريبًا' },
  ];

  // ====== Sections + data inside each section ======
  sections: ToolSection[] = [
    {
      id: 'surveys',
      title: 'الاستبيانات',
      subtitle: 'متاحة الآن',
      enabled: true,
      items: [
        {
          id: 'khotwat-batal-form',
          title: 'استمارة استبيان مشروع "خطوات بطل"',
          desc: 'استبيان رسمي لجمع آراء واحتياجات الأمهات والأسر لدعم تطوير محتوى وأدوات المشروع.',
          img: 'assets/images/tools/survey.png',
          enabled: true,
          link: 'https://docs.google.com/forms/d/e/1FAIpQLSdCAeErbGf529G-NwVjotkx7LKCz_gS5NP9YVOakMUCKWYS8w/viewform?usp=dialog',
          external: true,
          badge: 'Google Form',
        },
        {
          id: 'down-syndrome-open-survey',
          title: 'استبيان مفتوح لأسر الأطفال ذوي متلازمة داون',
          desc: 'مساحة مفتوحة لمشاركة التجارب والاحتياجات والتحديات والاقتراحات لتحسين الدعم والوعي.',
          img: '/assets/images/tools/open-survey.png',
             enabled: true,
          link: 'https://docs.google.com/forms/d/e/1FAIpQLSevhrIQeIrz7CTNT0142CvJWsvBFpvtZnhiJ1LHVteEW8SA2g/viewform?usp=dialog',
          external: true,
          badge: 'Google Form',
        },
      ],
    },

  {
  id: 'strengths',
  title: 'اختبارات نقاط القوة',
  subtitle: 'متاحة الآن',
  enabled: true,
  items: [
    {
      id: 'gallup-strengths-mom',
      title: 'اختبار نقاط القوة (Gallup) للأم',
      desc: 'يساعدك تكتشفي نقاط قوتك الأساسية وتستخدميها في دعم طفلك: في التواصل، الصبر، التنظيم، والتحفيز اليومي.',
      img: 'assets/images/tools/strengths-soon.png', // أو strength.png لو عندك صورة بدون كلمة "قريبًا"
      enabled: true,
      link: 'https://www.gallup.com/cliftonstrengths/en/home.aspx',
      external: true,
      badge: 'Gallup',
    },
    {
      id: 'strengths-howto',
      title: 'كيف أستخدم نقاط قوتك مع طفلك؟ (قريبًا)',
      desc: 'إرشادات عملية وأمثلة: كيف تحولّي كل نقطة قوة لسلوك يومي يساعد طفلك ويتناسب مع شخصيته.',
      img: 'assets/images/tools/strengths-soon.png',
      enabled: false,
      badge: 'قريبًا',
    },
  ],
},
    {
      id: 'organizer',
      title: 'المنظّم اليومي',
      subtitle: 'قريبًا',
      enabled: false,
      items: [
        {
          id: 'daily-organizer',
          title: 'منظّم يومي',
          desc: 'تنظيم بسيط: أولويات، عادة صغيرة، ومراجعة لطيفة لليوم.',
          img: '/assets/images/tools/organizer-soon.png',
          enabled: false,
          badge: 'قريبًا',
        },
        {
          id: 'weekly-organizer',
          title: 'منظّم أسبوعي',
          desc: 'نظرة أسبوعية: أهداف صغيرة وتوزيع مهام ومراجعة أسبوعية.',
          img: '/assets/images/tools/organizer-soon.png',
          enabled: false,
          badge: 'قريبًا',
        },
      ],
    },

    {
      id: 'pdf',
      title: 'تحميل ملفات PDF',
      subtitle: 'قريبًا',
      enabled: false,
      items: [
        {
          id: 'pdf-mom-routine',
          title: 'PDF: روتين بسيط للأم',
          desc: 'ورقة عملية تساعد على تنظيم اليوم بخفة وواقعية.',
          img: '/assets/images/tools/pdf-soon.png',
          enabled: false,
          badge: 'قريبًا',
        },
        {
          id: 'pdf-strengths-sheet',
          title: 'PDF: ورقة نقاط القوة',
          desc: 'قالب لتسجيل نقاط قوتك ومواقف النجاح الصغيرة.',
          img: '/assets/images/tools/pdf-soon.png',
          enabled: false,
          badge: 'قريبًا',
        },
      ],
    },
  ];

  trackBySection(_: number, s: ToolSection) {
    return s.id;
  }

  trackByItem(_: number, i: ToolItem) {
    return i.id;
  }
}
