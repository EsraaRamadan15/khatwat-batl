import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-down-flip-card',
  standalone: true,
  templateUrl: './down-flip-card.component.html',
  styleUrls: ['./down-flip-card.component.scss'],
})
export class DownFlipCardComponent {
  @Input() title = 'مشروع خطوات بطل';
  @Input() subtitle = 'داون  • اختلاف نمائي';

  @Input() desc =
    'هذا الموقع يقدّم محتوى داعم ومبسّط لأهالي أطفال متلازمة داون. نؤمن أن كل طفل لديه قدرات قابلة للنمو، ومع الفهم الصحيح والاحتواء والتدخل المبكر، نساعدهم على تنمية التواصل والمهارات اليومية والاستقلالية خطوة بخطوة.';
  @Input() img = 'assets/images/down-kids.webp';

  // ✅ unique id so multiple cards won't conflict
  uid = `flip_${Math.random().toString(16).slice(2)}`;
}
