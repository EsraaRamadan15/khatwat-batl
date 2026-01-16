import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-down-flip-card',
  standalone: true,
  templateUrl: './down-flip-card.component.html',
  styleUrls: ['./down-flip-card.component.scss'],
})
export class DownFlipCardComponent {
  @Input() title = 'أطفال متلازمة داون';
  @Input() desc =
    'أطفال متلازمة داون لديهم قدرات جميلة قابلة للنمو. مع الحب والتقبّل والمتابعة المبكرة، نساعدهم في تنمية التواصل والمهارات الحركية والاستقلالية خطوة بخطوة.';
  @Input() img = 'assets/images/down-kids.webp';

  // ✅ unique id so multiple cards won't conflict
  uid = `flip_${Math.random().toString(16).slice(2)}`;
}
