import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'primeng/tabs';

type ReferenceItem = {
  title: string;
  author?: string;
  org?: string;
  desc: string[];
};

@Component({
  selector: 'app-references-tabs',
  standalone: true,
  imports: [CommonModule, TabsModule],
  templateUrl: './references-tabs.component.html',
  styleUrl:'./references-tabs.component.scss'
})
export class ReferencesTabsComponent {
  active = '0';

  arabic: ReferenceItem[] = [
    {
      title: 'منظمة الصحة العالمية – المكتب الإقليمي لشرق المتوسط',
      org: 'WHO EMRO',
      desc: [
        'الصحة قبل الزواج والحمل',
        'إرشادات الفحوصات الوراثية والتغذية والصحة الإنجابية',
      ],
    },
    {
      title: 'وزارة الصحة المصرية',
      org: 'Ministry of Health – Egypt',
      desc: [
        'دليل الفحص الطبي قبل الزواج',
        'برامج صحة الأم والطفل',
      ],
    },
    {
      title: 'الطب الوراثي والإرشاد الجيني',
      author: 'د. عبد الله الزهراني',
      desc: ['مرجع مبسط لفهم الأمراض الوراثية وزواج الأقارب'],
    },
    {
      title: 'صحة الأم والطفل',
      author: 'د. محمد عبد الرحمن',
      desc: ['أساسيات التغذية، الحمل الصحي، والوقاية'],
    },
    {
      title: 'التغذية العلاجية قبل وأثناء الحمل',
      author: 'د. هالة فهمي',
      desc: ['الفيتامينات والعناصر الدقيقة المهمة لنمو الجنين'],
    },
  ];

  foreign: ReferenceItem[] = [
    {
      title: 'World Health Organization (WHO)',
      desc: ['Preconception Care: Maximizing the gains for maternal and child health'],
    },
    {
      title: 'Centers for Disease Control and Prevention (CDC)',
      desc: ['Preconception Health and Health Care'],
    },
    {
      title: 'American College of Obstetricians and Gynecologists (ACOG)',
      desc: ['Prepregnancy Counseling'],
    },
    {
      title: 'Genetics in Medicine Journal',
      desc: [
        'أبحاث عن زواج الأقارب',
        'الاضطرابات الجينية',
        'الفحوصات الوراثية قبل الزواج',
      ],
    },
    {
      title: 'Nelson Textbook of Pediatrics',
      desc: [
        'الخِلقة السليمة',
        'التشوهات الخلقية',
        'الوقاية المبكرة',
      ],
    },
  ];

  consanguinity: ReferenceItem[] = [
    {
      title: 'Consanguinity and Genetic Disorders',
      author: 'Alan H. Bittles',
      desc: ['مرجع علمي شامل يشرح أثر زواج الأقارب'],
    },
    {
      title: 'Medical Genetics at a Glance',
      desc: ['تبسيط علم الوراثة للأهالي والمتخصصين'],
    },
  ];
}
