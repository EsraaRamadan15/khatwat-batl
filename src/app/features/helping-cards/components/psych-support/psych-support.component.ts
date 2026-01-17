import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
type FaqItem = {
  q: string;
  a: string;
  tag?: 'مشاعر' | 'دمج' | 'دعم' | 'قياس' | 'منهج الإحسان';
};

type VideoItem = {
  title: string;
  desc?: string;
  url: string; // youtube embed url
  duration?: string;
};

type LinkItem = {
  title: string;
  desc?: string;
  url: string;
  badge?: string;
  icon?: string; // prime icon class e.g. "pi pi-book"
};

@Component({
  selector: 'app-psych-support',
  standalone: true,
  imports: [CommonModule, RouterLink,FormsModule],
  templateUrl: './psych-support.component.html',
})
export class PsychSupportComponent {
  constructor(private sanitizer: DomSanitizer) {}

  // ===== Header
  title = 'الدعم النفسي للأم';
  subtitle = 'مساحة آمنة: أسئلة وإجابات + فيديوهات + مواقع داعمة';
  intro =
    'هنا هنحط الأسئلة الشائعة اللي بتواجه أي أم (داون/توحد) + إجابات عملية، وكمان أدوات قياس بسيطة للاحتراق النفسي، ومصادر موثوقة تساعدك يوميًا.';

  // ===== Simple filters
  activeTab: 'faq' | 'videos' | 'sites' = 'faq';
  query = '';
  selectedTag: string = 'الكل';

  tags: string[] = ['الكل', 'مشاعر', 'دمج', 'دعم', 'قياس', 'منهج الإحسان'];

  // ===== FAQ (you can extend)
  faqs: FaqItem[] = [
    {
      tag: 'مشاعر',
      q: 'كيف أتعامل مع مشاعر القلق والحزن التي تنتابني كأم لطفل داون؟',
      a: 'ابدئي بتسمية الشعور (قلق/حزن/خوف) بدون لوم. خصصي 10 دقائق يوميًا “تفريغ” (كتابة أو دعاء أو تنفّس عميق)، واطلبي دعمًا عمليًا (مساعدة ساعة يوميًا). مهم جدًا: لا تقارني رحلتك برحلة غيرك، وخلي تركيزك على “خطوة صغيرة” كل يوم.',
    },
    {
      tag: 'مشاعر',
      q: 'كيف أتعامل مع نظرات الناس أو قلة تفهمهم؟',
      a: 'حضّري جملة قصيرة جاهزة: “ابني/بنتي عنده/عندها اختلاف نمائي وبنشتغل على الدعم”. لو الموقف مزعج، انسحبي بأدب. الأهم: ابنك مش مشروع لإرضاء الناس. خلي دعمك الداخلي أقوى من تقييمهم.',
    },
    {
      tag: 'دمج',
      q: 'ما أبرز التحديات في دمج الطفل بالمدرسة؟',
      a: 'غالبًا: نقص التدريب لدى بعض المعلمين، وعدم وجود خطة فردية واضحة (IEP/خطة دعم)، والتواصل غير المنتظم بين البيت والمدرسة. الحل: ملف متابعة بسيط + اجتماع شهري + أهداف صغيرة قابلة للقياس.',
    },
    {
      tag: 'دمج',
      q: 'ما الذي أتمنى تغييره في المدارس لتكون أكثر دعمًا؟',
      a: 'وجود “خطة دعم فردية”، تدريب المعلمين على التواصل، مرونة في التقييم، وأخصائي/مرشد دمج متابع داخل المدرسة، مع بيئة تمنع التنمّر وتدعم تقبّل الاختلاف.',
    },
    {
      tag: 'دعم',
      q: 'ما أهم أنواع الدعم التي يحتاجها طفلك لتجاوز تحديات الدمج؟',
      a: 'ثلاث دوائر: (1) طبي: متابعة القلب/السمع/الغدة… (2) تعليمي: خطة واضحة + تواصل مع المدرسة (3) نفسي للأسرة: دعم للأم والأب، وروتين يحمي البيت من الاحتراق.',
    },
    {
      tag: 'قياس',
      q: 'كيف نقيس الاحتراق النفسي للأمهات؟',
      a: 'مؤشرات بسيطة: إرهاق عاطفي، توتر دائم، صعوبة نوم، فقدان متعة، غضب سريع، شعور بالعجز. عمليًا: استخدمي مقياس قصير أسبوعي (0-10) لثلاثة محاور: (إرهاق/ضغط/انطفاء). لو ارتفع لمدة أسبوعين متتالين، يحتاج تدخل (دعم/تقليل حمل/استشارة).',
    },
    {
      tag: 'منهج الإحسان',
      q: 'كيف نقيس مدى الالتزام بمنهج الإحسان (منازل الروح السبعة)؟',
      a: 'اعملي “مؤشر إحسان أسبوعي” بسيط: لكل منزل عادة واحدة صغيرة (5-10 دقائق) وتقيّمي الالتزام 0/1 يوميًا. في نهاية الأسبوع تشوفي نسبة الالتزام. الفكرة مش الكمال، الفكرة “الاستمرارية”.',
    },
  ];

  // ===== Videos (put your own)
  videos: VideoItem[] = [
    {
      title: 'تهدئة القلق للأم (تمرين عملي 5 دقائق)',
      desc: 'تنفّس + تفريغ أفكار + نية يومية بسيطة',
      url: 'https://www.youtube.com/embed/VIDEO_ID_1',
      duration: '5:10',
    },
    {
      title: 'كيف أتعامل مع نظرات الناس؟',
      desc: 'حدود نفسية + ردود قصيرة محترمة + حماية الطفل',
      url: 'https://www.youtube.com/embed/VIDEO_ID_2',
      duration: '8:40',
    },
    {
      title: 'الاحتراق النفسي للأمهات: علامات وخطة إنقاذ',
      desc: 'علامات + خطوات أسبوع',
      url: 'https://www.youtube.com/embed/VIDEO_ID_3',
      duration: '11:20',
    },
  ];

  // ===== Sites
  sites: LinkItem[] = [
    {
      title: 'WHO – World Health Organization',
      desc: 'معلومات صحية عامة موثوقة',
      url: 'https://www.who.int/',
      badge: 'موثوق',
      icon: 'pi pi-globe',
    },
    {
      title: 'CDC – Child Development',
      desc: 'معلومات عن التطور والنمو والدعم',
      url: 'https://www.cdc.gov/ncbddd/childdevelopment/index.html',
      badge: 'موثوق',
      icon: 'pi pi-verified',
    },
    {
      title: 'Autism Speaks – Resources',
      desc: 'مصادر وإرشادات للعائلات (بالإنجليزية)',
      url: 'https://www.autismspeaks.org/',
      badge: 'موارد',
      icon: 'pi pi-book',
    },
  ];

  // ===== helpers
  get filteredFaqs(): FaqItem[] {
    const q = this.query.trim().toLowerCase();
    return this.faqs.filter((x) => {
      const matchesText =
        !q || x.q.toLowerCase().includes(q) || x.a.toLowerCase().includes(q);
      const matchesTag =
        this.selectedTag === 'الكل' || x.tag === (this.selectedTag as any);
      return matchesText && matchesTag;
    });
  }

  safe(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  setTab(t: 'faq' | 'videos' | 'sites') {
    this.activeTab = t;
  }
}
