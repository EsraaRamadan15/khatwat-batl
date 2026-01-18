import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactPayload, ContactService, ContactType } from '../../services/contact-service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
})
export class ContactFormComponent {
  private fb = inject(FormBuilder);
  private contact = inject(ContactService);

  sending = signal(false);
  successMsg = signal<string | null>(null);
  errorMsg = signal<string | null>(null);

  readonly form = this.fb.group({
    type: this.fb.control<ContactType>('inquiry', { nonNullable: true, validators: [Validators.required] }),
    name: this.fb.control('', { nonNullable: true, validators: [Validators.required, Validators.minLength(2)] }),
    email: this.fb.control('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    phone: this.fb.control<string | null>(null),
    preferredContact: this.fb.control<'email' | 'phone' | 'whatsapp'>('email', { nonNullable: true }),
    urgent: this.fb.control(false, { nonNullable: true }),
    subject: this.fb.control('', { nonNullable: true, validators: [Validators.required, Validators.minLength(3)] }),
    message: this.fb.control('', { nonNullable: true, validators: [Validators.required, Validators.minLength(10)] }),
    consent: this.fb.control(false, { nonNullable: true, validators: [Validators.requiredTrue] }),
  });

  readonly typeLabel = computed(() => {
    const t = this.form.controls.type.value;
    if (t === 'inquiry') return 'رسالة استفسار';
    if (t === 'consultation') return 'طلب استشارة';
    return 'اقتراحات وشكاوى (نرد عليك بسرعة)';
  });

  submit() {
    this.successMsg.set(null);
    this.errorMsg.set(null);

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.errorMsg.set('من فضلك راجع الحقول المطلوبة 👇');
      return;
    }

    const payload = this.form.getRawValue() as ContactPayload;

    this.sending.set(true);
    this.contact.submit(payload).subscribe({
      next: () => {
        this.sending.set(false);
        this.successMsg.set('تم إرسال رسالتك بنجاح ✅ هنرد عليك قريبًا.');
        this.form.reset({
          type: 'inquiry',
          name: '',
          email: '',
          phone: null,
          preferredContact: 'email',
          urgent: false,
          subject: '',
          message: '',
          consent: false,
        });
      },
      error: (err) => {
        this.sending.set(false);
        this.errorMsg.set(err?.error?.message || 'حصلت مشكلة أثناء الإرسال. جرّب مرة تانية.');
      },
    });
  }

  isInvalid(path: keyof ContactFormComponent['form']['controls']) {
    const c = this.form.controls[path];
    return c.touched && c.invalid;
  }

  errText(path: keyof ContactFormComponent['form']['controls']) {
    const c = this.form.controls[path];
    if (!c.touched || !c.errors) return '';
    if (c.errors['required'] || c.errors['requiredTrue']) return 'هذا الحقل مطلوب';
    if (c.errors['email']) return 'اكتب بريد إلكتروني صحيح';
    if (c.errors['minlength']) return `الحد الأدنى ${c.errors['minlength'].requiredLength} حروف`;
    return 'قيمة غير صحيحة';
  }
}
