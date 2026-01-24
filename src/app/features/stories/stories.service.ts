import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PagedResultDto, StoryCreateDto, StoryDetailsDto, StoryItemDto } from './story.model';

@Injectable({ providedIn: 'root' })
export class StoriesService {
  private readonly apiUrl =
    'https://championstepsback-production.up.railway.app/api/stories';

  constructor(private http: HttpClient) {}

  getStories(page = 1, pageSize = 12): Observable<PagedResultDto<StoryItemDto>> {
    const params = new HttpParams()
      .set('page', String(page))
      .set('pageSize', String(pageSize));

    return this.http.get<PagedResultDto<StoryItemDto>>('https://championstepsback-production.up.railway.app/api/stories', { params });
  }

    getStoryById(id: string): Observable<StoryDetailsDto> {
    return this.http.get<StoryDetailsDto>(`${'https://championstepsback-production.up.railway.app/api/stories'}/${encodeURIComponent(id)}`);
  }

  createStory(payload: StoryCreateDto): Observable<any> {
  return this.http.post('https://championstepsback-production.up.railway.app/api/stories', payload);
}

}
