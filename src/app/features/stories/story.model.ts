export interface StoryItemDto {
  id: string;
  title: string;
  domain: string;
  personName: string;
  highlight: string;
  coverImageUrl: string;
}

export interface PagedResultDto<T> {
  total: number;
  page: number;
  pageSize: number;
  items: T[];
}
export interface StoryMediaDto {
  kind: 'image' | 'video' | 'link' | string;
  title?: string | null;
  url: string;
  order?: number | null;
}

export interface StoryDetailsDto {
  id: string;
  title: string;
  country?: string | null;
  domain?: string | null;
  personName?: string | null;
  summary?: string | null;
  highlight?: string | null;
  tagsCsv?: string | null;
  coverImageUrl?: string | null;

  sourceType?: number | null;
  visibility?: number | null;

  submittedByName?: string | null;
  submittedByEmail?: string | null;

  createdAtUtc?: string | null;
  updatedAtUtc?: string | null;

  media?: StoryMediaDto[] | null;
}
export type StoryMediaKind = 'image' | 'video' | 'link';

export interface StoryMediaCreateDto {
  kind: StoryMediaKind | string;
  title: string;
  url: string;
  order: number;
}

export interface StoryCreateDto {
  title: string;
  country: string;
  domain: string;
  personName: string;
  summary: string;
  highlight: string;
  tagsCsv: string;
  coverImageUrl: string;
  media: StoryMediaCreateDto[];
  submittedByName: string;
  submittedByEmail: string;
}
