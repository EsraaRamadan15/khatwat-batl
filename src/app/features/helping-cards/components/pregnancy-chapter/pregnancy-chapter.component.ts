import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type ChapterSection = {
  icon: string;
  title: string;
  body?: string;
  bullets?: string[];
  subBlocks?: { label: string; bullets: string[] }[];
  note?: string;
  tint?: 'sky' | 'emerald' | 'amber' | 'rose' | 'slate';
};

@Component({
  standalone: true,
  selector: 'app-pregnancy-chapter',
  imports: [CommonModule],
  templateUrl: './pregnancy-chapter.component.html',
})
export class PregnancyChapterComponent {
  title = 'الفصل الثاني';
  subtitle = 'بعد الزواج وخلال فترة الحمل: الوقاية العلمية والاستعداد لولادة طفل من ذوي الاحتياجات الخاصة';
  intro =
    'هذا الفصل يجمع الوقاية الطبية والغذائية والنفسية والسلوكية كمنظومة واحدة؛ تقلّل الاحتمالات وتزيد فرص الاكتشاف المبكر والدعم الصحيح.';
  highlight =
    'الوقاية ليست ادعاءً بالمنع المطلق، لكنها وعي وتدخلات مدروسة تقلّل المخاطر وتبني استعدادًا أفضل للأسرة والطفل.';

  outroTitle = 'خلاصة الفصل';
  outro =
    'الوقاية ليست ضمانًا، والإعاقة ليست نهاية… بل بداية لمسار مختلف يحتاج إلى علم، ووعي، وتكاتف أسري.';
  outroHighlight = 'مسارنا هنا: نرفع الوعي + نسهّل المتابعة + ندعم الأسرة بخطوات عملية.';

  sections: ChapterSection[] = [
    {
      icon: 'pi pi-compass',
      title: 'مفهوم الوقاية في مرحلة ما بعد الزواج',
      body:
        'تعرف الوقاية في الصحة الإنجابية بأنها: مجموعة التدخلات الطبية، النفسية، الغذائية، والسلوكية التي تهدف إلى تقليل احتمالات حدوث اضطرابات نمائية أو إعاقات لدى الجنين دون الادعاء بالمنع المطلق.',
      bullets: [
        'وقاية أولية (قبل حدوث المشكلة)',
        'وقاية ثانوية (الاكتشاف المبكر)',
        'وقاية ثالثية (تقليل الشدة وتحسين جودة الحياة)',
      ],
      tint: 'sky',
    },
    {
      icon: 'pi pi-heart',
      title: 'الوقاية الصحية خلال فترة الحمل (Medical Prevention)',
      subBlocks: [
        {
          label: 'أ. المتابعة الطبية الدورية',
          bullets: [
            'متابعة الحمل منذ الأسابيع الأولى',
            'الفحوصات الدورية للأم والجنين',
            'الموجات فوق الصوتية (Ultrasound) لمتابعة النمو',
          ],
        },
        {
          label: 'ب. التحكم في الأمراض المزمنة',
          bullets: [
            'داء السكري وتأثيره على الجهاز العصبي للجنين',
            'ارتفاع ضغط الدم وتأثيره على المشيمة',
            'اضطرابات الغدة الدرقية وتأثيرها على النمو العقلي',
          ],
        },
        {
          label: 'ج. الأدوية والتداخلات الطبية',
          bullets: [
            'تجنب الأدوية المشوهة للأجنة (Teratogenic drugs)',
            'الالتزام بالأدوية الآمنة فقط تحت إشراف طبي',
          ],
        },
      ],
      note: 'المتابعة المبكرة + ضبط الأمراض المزمنة = فرق كبير في تقليل المخاطر.',
      tint: 'emerald',
    },
    {
      icon: 'pi pi-apple',
      title: 'الوقاية الغذائية (Nutritional Prevention)',
      body:
        'أثبتت الدراسات أن سوء تغذية الأم مرتبط بشكل مباشر باضطرابات النمو العصبي. هذه أهم العناصر الغذائية خلال التخطيط للحمل وأثناءه:',
      bullets: [
        'حمض الفوليك: للوقاية من عيوب الأنبوب العصبي',
        'الحديد: لمنع الأنيميا وتأثيرها على أكسجة الجنين',
        'اليود: لنمو المخ',
        'فيتامين د: لنمو العظام والمناعة',
        'أوميجا 3: لتطور الجهاز العصبي',
      ],
      tint: 'amber',
    },
    {
      icon: 'pi pi-shield',
      title: 'الوقاية النفسية والسلوكية (Psychological & Behavioral Prevention)',
      subBlocks: [
        {
          label: 'أ. الصحة النفسية للأم',
          bullets: [
            'التوتر المزمن يرفع هرمون الكورتيزول',
            'الكورتيزول المرتفع يؤثر على نمو الجهاز العصبي للجنين',
          ],
        },
        {
          label: 'ب. العنف الأسري',
          bullets: [
            'مرتبط بزيادة معدلات الولادة المبكرة',
            'زيادة احتمالية الاضطرابات العصبية والسلوكية',
          ],
        },
        {
          label: 'ج. العادات السلبية',
          bullets: [
            'التدخين: يقلل تدفق الدم للمشيمة',
            'الكحول: يسبب متلازمة الجنين الكحولي',
            'المخدرات: اضطرابات نمو عصبي شديد',
          ],
        },
      ],
      tint: 'rose',
    },
    {
      icon: 'pi pi-book',
      title: 'عندما يولد طفل من ذوي الاحتياجات الخاصة: الإطار العلمي للفهم',
      body:
        'ذوو الاحتياجات الخاصة هم: أفراد لديهم انحراف ملحوظ عن المتوسط في أحد مجالات النمو (العقلي، الحسي، الحركي، السلوكي) ويحتاجون إلى خدمات تربوية وتأهيلية خاصة.',
      tint: 'slate',
    },
    {
      icon: 'pi pi-sitemap',
      title: 'التصنيف العلمي لأنواع الإعاقات',
      subBlocks: [
        {
          label: '1. الإعاقات الذهنية',
          bullets: [
            'متلازمة داون (خلل كروموسومي – تثلث الصبغي 21)',
            'الإعاقات الذهنية الوراثية والمكتسبة',
          ],
        },
        {
          label: '2. اضطرابات النمو العصبي',
          bullets: [
            'اضطراب طيف التوحد (ASD)',
            'اضطراب فرط الحركة وتشتت الانتباه (ADHD)',
          ],
        },
        {
          label: '3. الإعاقات الحركية',
          bullets: ['الشلل الدماغي (Cerebral Palsy)', 'إصابات الجهاز العصبي المركزي'],
        },
        {
          label: '4. الإعاقات الحسية',
          bullets: ['الإعاقة السمعية', 'الإعاقة البصرية'],
        },
        {
          label: '5. صعوبات التعلم المحددة',
          bullets: ['Dyslexia', 'Dysgraphia', 'Dyscalculia'],
        },
      ],
      tint: 'sky',
    },
    {
      icon: 'pi pi-users',
      title: 'الدور النفسي والتربوي للأب (The Father’s Role)',
      body: 'تشير الأبحاث إلى أن الدعم الأبوي الإيجابي عامل حاسم في تحسين النتائج النمائية للأطفال ذوي الاحتياجات الخاصة.',
      bullets: ['التقبل النفسي', 'المشاركة في التدخل المبكر', 'دعم الأم', 'بناء صورة ذاتية إيجابية للطفل'],
      tint: 'emerald',
    },
    {
      icon: 'pi pi-home',
      title: 'دور الأسرة الممتدة (Extended Family)',
      subBlocks: [
        {
          label: 'الأخوات',
          bullets: ['تعزيز مفهوم الاختلاف الطبيعي', 'منع الوصم الاجتماعي'],
        },
        {
          label: 'الأجداد',
          bullets: ['كسر المعتقدات الشعبية الخاطئة', 'دعم الأسرة بدلًا من اللوم'],
        },
      ],
      tint: 'amber',
    },
  ];

  tintClass(t?: ChapterSection['tint']) {
    switch (t) {
      case 'sky':
        return 'bg-sky-50 border-sky-200 text-sky-700';
      case 'emerald':
        return 'bg-emerald-50 border-emerald-200 text-emerald-700';
      case 'amber':
        return 'bg-amber-50 border-amber-200 text-amber-700';
      case 'rose':
        return 'bg-rose-50 border-rose-200 text-rose-700';
      default:
        return 'bg-slate-50 border-slate-200 text-slate-700';
    }
  }

  iconBg(t?: ChapterSection['tint']) {
    switch (t) {
      case 'sky':
        return 'bg-sky-100 text-sky-700';
      case 'emerald':
        return 'bg-emerald-100 text-emerald-700';
      case 'amber':
        return 'bg-amber-100 text-amber-700';
      case 'rose':
        return 'bg-rose-100 text-rose-700';
      default:
        return 'bg-slate-100 text-slate-700';
    }
  }
}
