import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type Level = {
  level: 1 | 2 | 3;
  title: string;
  support: string;
  points: string[];
  note?: string;
  gradientFrom: string; // tailwind class
  gradientTo: string;   // tailwind class
  badgeBg: string;      // tailwind class
  ring: string;         // tailwind class
};

@Component({
  selector: 'app-autism-dsm-chapter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './autism-dsm-chapter.component.html',
})
export class AutismDsmChapterComponent {
  // Hero
  title = 'التصنيف والتقسيم الجديد لاضطراب طيف التوحد (ASD)';
  subtitle = 'حسب DSM-5 / DSM-5-TR — الأهم حاليًا في التشخيص';
  intro =
    'المنهج الحديث ألغى الأسماء القديمة، وأصبح التشخيص يعتمد على “درجة الدعم المطلوب” + وجود محورين أساسيين معًا.';

  // 1) Old types removed
  removedOld = ['توحد كلاسيكي', 'أسبرجر', 'PDD-NOS'];
  unifiedName = 'اضطراب طيف التوحد (ASD)';

  // 2) Levels
  levels: Level[] = [
    {
      level: 1,
      title: 'المستوى الأول',
      support: 'يحتاج دعم بسيط (Level 1 – Requiring Support)',
      points: [
        'صعوبات اجتماعية واضحة',
        'لغة موجودة',
        'سلوكيات نمطية خفيفة',
        'يمكنه التعلم والاندماج بدعم بسيط وتوجيه',
      ],
      note: 'كان يُطلق عليه سابقًا: أسبرجر / توحد عالي الأداء',
      gradientFrom: 'from-teal-500',
      gradientTo: 'to-emerald-500',
      badgeBg: 'bg-emerald-500/10 text-emerald-700',
      ring: 'ring-emerald-200',
    },
    {
      level: 2,
      title: 'المستوى الثاني',
      support: 'يحتاج دعم متوسط (Level 2 – Requiring Substantial Support)',
      points: [
        'صعوبات واضحة في التواصل اللفظي وغير اللفظي',
        'سلوكيات نمطية متكررة + مقاومة التغيير',
        'يحتاج جلسات تخاطب + تعديل سلوك',
        'يحتاج دعم تعليمي مستمر',
      ],
      gradientFrom: 'from-violet-500',
      gradientTo: 'to-sky-500',
      badgeBg: 'bg-violet-500/10 text-violet-700',
      ring: 'ring-violet-200',
    },
    {
      level: 3,
      title: 'المستوى الثالث',
      support: 'يحتاج دعم مكثف (Level 3 – Requiring Very Substantial Support)',
      points: [
        'ضعف شديد أو غياب الكلام',
        'تفاعل اجتماعي محدود جدًا',
        'سلوكيات شديدة أو إيذاء النفس',
        'يعتمد على الآخرين في أغلب الأنشطة',
        'يحتاج برنامج تأهيلي مكثف وطويل المدى',
      ],
      gradientFrom: 'from-rose-500',
      gradientTo: 'to-orange-500',
      badgeBg: 'bg-rose-500/10 text-rose-700',
      ring: 'ring-rose-200',
    },
  ];

  // 3) Two pillars
  pillars = [
    {
      title: 'المحور الأول',
      icon: 'pi pi-users',
      head: 'قصور دائم في',
      items: ['التفاعل الاجتماعي', 'التواصل الاجتماعي'],
      tint: 'bg-sky-500/10 border-sky-500/20',
      iconColor: 'text-sky-600',
    },
    {
      title: 'المحور الثاني',
      icon: 'pi pi-refresh',
      head: 'أنماط سلوك',
      items: [
        'متكررة / نمطية',
        'اهتمامات محدودة',
        'حساسية حسية (صوت – لمس – ضوء…)',
      ],
      tint: 'bg-emerald-500/10 border-emerald-500/20',
      iconColor: 'text-emerald-600',
    },
  ];

  // 4) Specifiers
  specifiers = [
    'مع أو بدون تأخر عقلي',
    'مع أو بدون تأخر لغوي',
    'مرتبط بحالة طبية أو جينية',
    'مرتبط بعوامل بيئية',
  ];
}
