import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { PagedResultDto, StoryItemDto } from '../../story.model';
import { StoriesService } from '../../stories.service';
import { STATIC_STORIES, mapStaticToListItems } from '../../stories.static';

@Component({
  selector: 'app-stories-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './stories-list.component.html',
})
export class StoriesListComponent implements OnInit {
  loading = false;

  page = 1;
  pageSize = 9;
  total = 0;

  items: StoryItemDto[] = [];

  // ✅ static items mapped to list dto
  private staticItems: StoryItemDto[] = mapStaticToListItems(STATIC_STORIES);

  get totalPages(): number {
    const pages = Math.ceil((this.total || 0) / (this.pageSize || 1));
    return Math.max(1, pages);
  }

  get pageNumbers(): number[] {
    const total = this.totalPages;
    const cur = this.page;

    const start = Math.max(1, cur - 2);
    const end = Math.min(total, start + 4);
    const realStart = Math.max(1, end - 4);

    const arr: number[] = [];
    for (let i = realStart; i <= end; i++) arr.push(i);
    return arr;
  }

  constructor(private storiesService: StoriesService) {}

  ngOnInit(): void {
    this.load(1);
  }

  load(page = this.page): void {
    this.loading = true;
    this.page = page;

    this.storiesService
      .getStories(this.page, this.pageSize)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (res: PagedResultDto<StoryItemDto>) => {
          const apiItems = res?.items || [];
          const apiTotal = res?.total || 0;

          // ✅ Show static only on first page
          const showStatic = this.page === 1;
          const combined = showStatic ? [...this.staticItems, ...apiItems] : apiItems;

          // ✅ optional: remove duplicates if same id exists in api
          this.items = this.uniqueById(combined);

          // ✅ total = apiTotal + staticCount (so pagination counts both)
          this.total = apiTotal + this.staticItems.length;

          this.page = res?.page || this.page;
          this.pageSize = res?.pageSize || this.pageSize;
        },
        error: () => {
          // حتى لو الـ API وقع، خلي الستاتيك يظهر
          if (this.page === 1) {
            this.items = [...this.staticItems];
            this.total = this.staticItems.length;
          } else {
            this.items = [];
            this.total = this.staticItems.length; // أو 0 لو تحبي
          }
        },
      });
  }

  private uniqueById(list: StoryItemDto[]): StoryItemDto[] {
    const seen = new Set<string>();
    const out: StoryItemDto[] = [];
    for (const x of list) {
      const id = (x?.id || '').toLowerCase();
      if (!id) continue;
      if (seen.has(id)) continue;
      seen.add(id);
      out.push(x);
    }
    return out;
  }

  prev(): void {
    if (this.page > 1) this.load(this.page - 1);
  }

  next(): void {
    if (this.page < this.totalPages) this.load(this.page + 1);
  }

  goTo(p: number): void {
    if (p >= 1 && p <= this.totalPages && p !== this.page) this.load(p);
  }

  trackById(_: number, x: StoryItemDto): string {
    return x?.id;
  }
}
