import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { StoriesService } from '../../stories.service';
import { StoryCreateDto } from '../../story.model';

import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { SelectModule } from 'primeng/select';
@Component({
  selector: 'app-create-story-modal',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    TextareaModule ,
    SelectModule,
  ],
  templateUrl: './create-story-modal.component.html',
  styleUrl:'./create-story-modal.component.scss',
})
export class CreateStoryModalComponent implements OnInit {
  @Input() open = false;

  @Output() created = new EventEmitter<void>();
  @Output() closed = new EventEmitter<void>();

  saving = false;
  errorMsg = '';
  successMsg = '';
  form!: FormGroup;

  mediaKinds = [
    { label: 'صورة', value: 'image' },
    { label: 'فيديو', value: 'video' },
    { label: 'رابط', value: 'link' },
  ];

  constructor(private fb: FormBuilder, private storiesService: StoriesService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      country: [''],
      domain: [''],
      personName: ['', [Validators.required]],
      highlight: [''],
      summary: ['', [Validators.required, Validators.minLength(10)]],
      tagsCsv: [''],
      coverImageUrl: [''],
      submittedByName: [''],
      submittedByEmail: ['', [Validators.email]],
      media: this.fb.array([]),
    });

    this.addMedia();
  }

  get mediaArr(): FormArray {
    return this.form.get('media') as FormArray;
  }

  private mediaGroup(): FormGroup {
    return this.fb.group({
      kind: ['image', Validators.required],
      title: [''],
      url: [''],
      order: [1, [Validators.required]],
    });
  }

  addMedia(): void {
    if (!this.form) return;
    this.mediaArr.push(this.mediaGroup());
    this.recalcOrders();
  }

  removeMedia(i: number): void {
    if (!this.form) return;
    if (this.mediaArr.length === 1) return;
    this.mediaArr.removeAt(i);
    this.recalcOrders();
  }

  private recalcOrders(): void {
    this.mediaArr.controls.forEach((g, idx) => {
      g.get('order')?.setValue(idx + 1, { emitEvent: false });
    });
  }

  onHide(): void {
    // called when dialog closes (mask click / ESC / x)
    this.errorMsg = '';
    this.successMsg = '';
    this.closed.emit();
  }

  close(): void {
    this.open = false;
    this.onHide();
  }

  resetForm(): void {
    this.form.reset();
    this.mediaArr.clear();
    this.addMedia();
  }

  submit(): void {
    this.errorMsg = '';
    this.successMsg = '';

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.errorMsg = 'من فضلك راجعي الحقول المطلوبة.';
      return;
    }

    const raw = this.form.getRawValue();

    const dto: StoryCreateDto = {
      ...raw,
      media: (raw.media || [])
        .map((m: any) => ({
          kind: (m.kind || '').trim(),
          title: (m.title || '').trim(),
          url: (m.url || '').trim(),
          order: Number(m.order || 0),
        }))
        .filter((m: any) => !!m.url),
    };

    this.saving = true;
    this.storiesService
      .createStory(dto)
      .pipe(finalize(() => (this.saving = false)))
      .subscribe({
        next: () => {
          this.successMsg = 'تم إرسال القصة بنجاح ✅';
          this.created.emit();
          setTimeout(() => (this.open = false), 400);
        },
        error: () => {
          this.errorMsg = 'حصل خطأ أثناء الإرسال. جرّبي مرة أخرى.';
        },
      });
  }

  c(name: string): FormControl {
    return this.form.get(name) as FormControl;
  }

  touchedInvalid(name: string): boolean {
    const ctrl = this.c(name);
    return !!ctrl && ctrl.touched && ctrl.invalid;
  }
}
