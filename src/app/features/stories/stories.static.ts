import { StoryDetailsDto, StoryItemDto } from './story.model';
export function mapStaticToListItems(staticStories: StoryDetailsDto[]): StoryItemDto[] {
  return staticStories.map(s => ({
    id: s.id,
    title: s.title,
    domain: s.domain,
    personName: s.personName,
    highlight: s.highlight,
    coverImageUrl: s.coverImageUrl,
  } as StoryItemDto));
}
export const STATIC_STORIES: StoryDetailsDto[] = [
  {
    id: 'static-rahma-khaled',
    title: 'رحمة خالد - من البطولات الرياضية إلى شاشة التلفزيون',
    country: 'مصر',
    domain: 'إعلام/رياضة',
    personName: 'رحمة خالد',
    summary:
      'رحمة بدأت رحلتها الرياضية منذ الصغر وحققت إنجازات في أكثر من لعبة، ثم حققت حلمًا كبيرًا بالظهور الإعلامي كمذيعة. قصتها نموذج للإصرار وتأثير الدعم والفرص على بناء الثقة وتحقيق الذات.',
    highlight: 'من متلازمة داون إلى بطولات في الرياضة والإعلام',
    tagsCsv: 'متلازمة داون,مصر,إعلام,رياضة,إلهام',
    coverImageUrl:
      'assets/images/rahma.jpg',
    sourceType: 0 as any,
    visibility: 0 as any,
    submittedByName: 'محتوى مُعدّ مسبقًا',
    submittedByEmail: null,
    createdAtUtc: new Date().toISOString(),
    updatedAtUtc: new Date().toISOString(),
    media: [
      {
        kind: 'image',
        title: 'صورة للقصة',
        url: 'assets/images/rahma.jpg',
        order: 1,
      },
      { kind: 'video', title: 'فيديو ملهم عن رحمة خالد', url: 'https://www.youtube.com/watch?v=z41nBYxfcpo', order: 2 },
      { kind: 'video', title: 'فيديو يوضح إنجازاتها الرياضية', url: 'https://www.youtube.com/watch?v=3VTd4DgdwP4', order: 3 },
    ],
  },
  {
    id: 'static-ibrahim-elkholy',
    title: 'إبراهيم الخولي - إنجاز أكاديمي غير مسبوق',
    country: 'مصر',
    domain: 'تعليم/أكاديميا/رياضة',
    personName: 'إبراهيم الخولي',
    summary:
      'إبراهيم تحدّى الصعوبات ودرس الإعلام وتفوّق أكاديميًا، ثم أكمل مسارًا بحثيًا مميزًا. قصته تؤكد أن التعليم والفرصة والتشجيع يصنعون واقعًا جديدًا، وأن الطموح لا يتوقف عند حدود الصورة النمطية.',
    highlight: 'مسار أكاديمي وبحثي ملهم مع حضور رياضي',
    tagsCsv: 'متلازمة داون,مصر,تعليم,أكاديميا,إلهام',
    coverImageUrl:
      'assets/images/kholy.jpg',
    sourceType: 0 as any,
    visibility: 0 as any,
    submittedByName: 'محتوى مُعدّ مسبقًا',
    submittedByEmail: null,
    createdAtUtc: new Date().toISOString(),
    updatedAtUtc: new Date().toISOString(),
    media: [
      {
        kind: 'image',
        title: 'صورة للقصة',
        url: 'assets/images/kholy.jpg',
        order: 1,
      },
      { kind: 'video', title: 'فيديو وثائقي: مدرس الأمل', url: 'https://www.youtube.com/watch?v=O3u69x1yJ90', order: 2 },
      { kind: 'video', title: 'فيديو يروي رحلته الكاملة', url: 'https://www.youtube.com/watch?v=3jOCVD4NID4', order: 3 },
    ],
  },
  {
    id: 'static-mohamed-karam',
    title: 'محمد كرم - بطل الغوص والرياضات المائية',
    country: 'مصر',
    domain: 'رياضات مائية/غوص',
    personName: 'محمد كرم',
    summary:
      'محمد حقق إنجازًا مميزًا في الغوص وحصل على اعتماد دولي، ليؤكد أن الرياضات التخصصية ممكنة مع التدريب التدريجي والدعم الأسري والمهني.',
    highlight: 'إنجاز ملهم في الغوص والرياضات المائية',
    tagsCsv: 'متلازمة داون,مصر,غوص,رياضة,إلهام',
    coverImageUrl:
      'assets/images/mokaram.jpg',
    sourceType: 0 as any,
    visibility: 0 as any,
    submittedByName: 'محتوى مُعدّ مسبقًا',
    submittedByEmail: null,
    createdAtUtc: new Date().toISOString(),
    updatedAtUtc: new Date().toISOString(),
    media: [
      { kind: 'image', title: 'صورة للقصة', url: 'assets/images/mokaram.jpg', order: 1 },
      { kind: 'video', title: 'فيديو عن إنجازه', url: 'https://www.tiktok.com/@alarabiya_egy/video/7300728359414205702', order: 2 },
    ],
  },
  {
    id: 'static-mohamed-elhusseiny-nemo',
    title: 'محمد الحسيني (نيمو) - سباح التحدي',
    country: 'مصر',
    domain: 'رياضة/سباحة مفتوحة',
    personName: 'محمد الحسيني (نيمو)',
    summary:
      'محمد الحسيني الملقب بـ(نيمو) من أبرز أبطال ذوي الهمم في السباحة المفتوحة. ارتبط اسمه بتحديات تاريخية ومحاولات لعبور بحر المانش، ليكون رمزًا للإصرار وأن الدعم والتدريب يصنعان فرقًا حقيقيًا.',
    highlight: 'من أبرز أبطال السباحة المفتوحة ومحاولات بحر المانش',
    tagsCsv: 'متلازمة داون,مصر,سباحة,تحدي,إلهام',
    coverImageUrl:
      'assets/images/mohos.jpg',
    sourceType: 0 as any,
    visibility: 0 as any,
    submittedByName: 'محتوى مُعدّ مسبقًا',
    submittedByEmail: null,
    createdAtUtc: new Date().toISOString(),
    updatedAtUtc: new Date().toISOString(),
    media: [
      { kind: 'image', title: 'صورة للقصة', url: 'assets/images/mohos.jpg', order: 1 },
    ],
  },
];

export function findStaticStoryById(id: string): StoryDetailsDto | null {
  const key = (id || '').toLowerCase();
  return STATIC_STORIES.find(s => (s.id || '').toLowerCase() === key) ?? null;
}
