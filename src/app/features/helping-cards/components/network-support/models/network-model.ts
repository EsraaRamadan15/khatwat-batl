export type Scope = 'egypt' | 'arab' | 'world';
export type ScopeFilter = Scope | 'all';

export type FaqItem = {
  q: string;
  a: string;
  tag?: 'مشاعر' | 'دمج' | 'دعم' | 'قياس' | 'منهج الإحسان'|'خدمات';
};

export type VideoProvider = 'youtube' | 'facebook' | 'link';

export type VideoItem = {
  title: string;
  desc?: string;
  provider: VideoProvider;

  url: string;       // external link OR youtube normal/share link
  embedUrl?: string; // only for youtube iframe

  duration?: string;
  badge?: string;
  icon?: string;

  // ✅ filtering:
  scope: Scope;
};

export type LinkItem = {
  title: string;
  desc?: string;
  url: string;
  badge?: string;
  icon?: string;

  // ✅ filtering:
  scope: Scope;
};


export type SiteLink = {
  label: string;   // مثال: "الموقع الرسمي", "فيسبوك", "إنستجرام"
  url: string;
  icon?: string;   // مثال: "pi pi-globe", "pi pi-facebook"
};

export type SiteCard = {
  title: string;
  desc?: string;
  badge?: string;
  icon?: string;     // أيقونة الكارت نفسه
  scope: Scope;
  links: SiteLink[]; // ✅ أهم تغيير
};