import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Subject, of } from 'rxjs';
import { catchError, distinctUntilChanged, map, switchMap, takeUntil, tap, finalize } from 'rxjs/operators';
import { StoriesService } from '../../stories.service';
import { StoryDetailsDto, StoryMediaDto } from '../../story.model';
import { findStaticStoryById } from '../../stories.static';

@Component({
  selector: 'app-story-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './story-details.component.html',
  styleUrls: ['./story-details.component.scss'],
})
export class StoryDetailsComponent implements OnInit, OnDestroy {
  loading = false;
  errorMsg = '';
  story: StoryDetailsDto | null = null;

  private destroy$ = new Subject<void>();

  constructor(private route: ActivatedRoute, private storiesService: StoriesService) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        map((pm) => (pm.get('id') || '').trim()),
        distinctUntilChanged(),
        tap(() => {
          this.loading = true;
          this.errorMsg = '';
          this.story = null;
        }),
        switchMap((id) => {
          if (!id) {
            this.errorMsg = 'Story id is missing';
            return of(null).pipe(finalize(() => (this.loading = false)));
          }

          // ✅ 1) جربي static الأول
          const staticStory = findStaticStoryById(id);
          if (staticStory) {
            const sorted = this.sortStoryMedia(staticStory);
            return of(sorted).pipe(finalize(() => (this.loading = false)));
          }

          // ✅ 2) لو مش static -> روحي للـ API
          return this.storiesService.getStoryById(id).pipe(
            map((res) => this.sortStoryMedia(res)),
            catchError(() => {
              this.errorMsg = 'تعذر تحميل القصة. جرّبي مرة أخرى.';
              return of(null);
            }),
            finalize(() => (this.loading = false))
          );
        }),
        takeUntil(this.destroy$)
      )
      .subscribe((res) => {
        this.story = res;
      });
  }

  retry(): void {
    const id = (this.route.snapshot.paramMap.get('id') || '').trim();
    if (!id) return;

    this.loading = true;
    this.errorMsg = '';
    this.story = null;

    // ✅ retry برضه يحترم static + api
    const staticStory = findStaticStoryById(id);
    if (staticStory) {
      this.story = this.sortStoryMedia(staticStory);
      this.loading = false;
      return;
    }

    this.storiesService
      .getStoryById(id)
      .pipe(
        map((res) => this.sortStoryMedia(res)),
        catchError(() => {
          this.errorMsg = 'تعذر تحميل القصة. جرّبي مرة أخرى.';
          return of(null);
        }),
        finalize(() => (this.loading = false)),
        takeUntil(this.destroy$)
      )
      .subscribe((res) => (this.story = res));
  }

  private sortStoryMedia(res: StoryDetailsDto): StoryDetailsDto {
    const sortedMedia = (res.media || [])
      .slice()
      .sort((a, b) => (a.order || 0) - (b.order || 0));
    return { ...res, media: sortedMedia };
  }

  get tags(): string[] {
    const csv = (this.story?.tagsCsv || '').trim();
    if (!csv) return [];
    return csv.split(',').map((x) => x.trim()).filter(Boolean);
  }

  // ✅ فلترة الميديا اللي URL بتاعها فاضي
  get validMedia(): StoryMediaDto[] {
    return (this.story?.media || []).filter((m) => (m?.url || '').trim().length > 0);
  }

  get hasMedia(): boolean {
    return this.validMedia.length > 0;
  }

  isImage(m: StoryMediaDto): boolean {
    return (m?.kind || '').toLowerCase() === 'image';
  }

  isVideo(m: StoryMediaDto): boolean {
    return (m?.kind || '').toLowerCase() === 'video';
  }

  trackMedia(_: number, m: StoryMediaDto): string {
    return `${m.order ?? 0}-${m.kind}-${m.url || ''}`;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
