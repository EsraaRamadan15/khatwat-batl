import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type LinkItem = { title: string; url: string; note?: string };
type BulletCard = { title: string; desc?: string; points?: string[]; icon?: string; tag?: string };
type PlaceCard = { name: string; city?: string; address?: string; phone?: string; email?: string; website?: string; notes?: string[]; tag?: string };

type Section =
  | { kind: 'hero'; title: string; subtitle?: string; badges?: string[] }
  | { kind: 'cards'; title: string; desc?: string; items: BulletCard[] }
  | { kind: 'places'; title: string; desc?: string; items: PlaceCard[] }
  | { kind: 'links'; title: string; desc?: string; items: LinkItem[] }
  | { kind: 'note'; title: string; desc: string; emphasis?: 'info' | 'warn' | 'good' };

@Component({
  selector: 'app-down-support-hub',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './down-support-hub.component.html',
})
export class DownSupportHubComponent {
  // simple filter
  q = '';

  /** ALL CONTENT (organized) */
  sections: Section[] = [
    {
      kind: 'hero',
      title: 'الدعم الصحي والغذائي والرياضي لمتلازمة داون',
      subtitle: 'محتوى مُنظَّم يساعد الأسرة في الفهم + الاختيارات العملية + روابط ومراكز',
      badges: ['صحي', 'تغذية', 'رياضة نفسية', 'مراكز مصر/لبنان', 'روابط موثوقة'],
    },

    // 1) Associated conditions + general note
    {
      kind: 'cards',
      title: 'الأمراض المصاحبة الشائعة لمتلازمة داون',
      desc: 'لا يوجد نظام غذائي واحد للجميع — يتم تخصيصه حسب الحالة الصحية، مع الاعتماد على تغذية متوازنة وتعديلات لكل مرض مصاحب.',
      items: [
        {
          title: 'قصور الغدة الدرقية (Hypothyroidism)',
          icon: 'pi pi-bolt',
          points: ['بطء التمثيل الغذائي', 'زيادة الوزن', 'إمساك/تعب'],
        },
        {
          title: 'مرض السلياك (Celiac Disease)',
          icon: 'pi pi-shield',
          points: ['سوء امتصاص', 'إسهال/إمساك', 'نقص حديد/فيتامينات'],
        },
        { title: 'السمنة / زيادة الوزن', icon: 'pi pi-chart-line', points: ['الأيض أبطأ', 'نشاط أقل أحيانًا'] },
        { title: 'الإمساك المزمن', icon: 'pi pi-clock', points: ['نقص توتر العضلات', 'قلة الحركة'] },
        { title: 'عيوب القلب الخلقية', icon: 'pi pi-heart', points: ['تعب أثناء الأكل', 'احتياج سعرات أعلى'] },
        { title: 'مشاكل هضمية أخرى', icon: 'pi pi-inbox', points: ['ارتجاع', 'عدم تحمل لاكتوز'] },
        { title: 'أحيانًا السكري/اضطرابات المناعة', icon: 'pi pi-sun', points: ['متابعة طبية حسب الحالة'] },
      ],
    },
    {
      kind: 'note',
      title: 'ملاحظة مهمة',
      emphasis: 'warn',
      desc:
        'هذه توصيات عامة مبنية على إرشادات طبية موثوقة. يُنصح باستشارة طبيب أطفال/تغذية/غدد لتقييم التحاليل (مثل TSH، أجسام مضادة للسلياك، مستويات الفيتامينات) ووضع خطة شخصية. لا تعتمد على مكملات دون إشراف طبي.',
    },

    // 2) Nutrition per condition
    {
      kind: 'cards',
      title: 'تعديلات غذائية حسب المرض المصاحب',
      items: [
        {
          title: '1) قصور الغدة الدرقية (15–50%)',
          tag: 'غدد',
          points: [
            'يود: أسماك بحرية (تونة/سردين/جمبري)، ألبان، ملح يود (باعتدال)',
            'سيلينيوم: جوز برازيلي (1–2 يوميًا)، سمك، بيض، دجاج',
            'زنك: لحوم هزيلة، بقوليات، بذور',
            'ألياف عالية للإمساك: تفاح/كمثرى/توت + بروكلي/سبانخ + حبوب كاملة',
            'قلل النيئ بزيادة من الجويتروجيني (ملفوف/قرنبيط/صويا) ويمكن طهيه',
            'وجبات صغيرة + ماء + تقليل السكريات والدهون المشبعة',
          ],
        },
        {
          title: '2) السلياك (5–12%)',
          tag: 'Gluten-free',
          points: [
            'نظام خالٍ من الغلوتين مدى الحياة (لا قمح/شعير/جاودار + شوفان غير معتمد)',
            'بدائل: أرز، ذرة، كينوا، حنطة سوداء، بطاطس، خضار/فاكهة، لحوم/سمك/بيض، ألبان إذا مناسبة',
            'مراقبة نقص: ألياف، حديد، فيتامينات B، كالسيوم — مكملات بإشراف',
            'فحص دوري للأجسام المضادة وامتصاص المغذيات',
          ],
        },
        {
          title: '3) السمنة/زيادة الوزن',
          tag: 'Weight',
          points: [
            'عجز طاقي خفيف (تقريبًا 300–500 سعرة أقل) بدون حرمان',
            '3 وجبات رئيسية + 1–2 سناك',
            'نصف الطبق خضار/فاكهة + ربع بروتين هزيل + ربع حبوب كاملة',
            'دهون صحية بكميات: أفوكادو/مكسرات/زيت زيتون',
            'تجنب: سكريات، مشروبات سكرية، وجبات سريعة، سناكات عشوائية',
            'نشاط يومي مناسب (مشي/ألعاب)',
          ],
        },
        {
          title: '4) الإمساك المزمن',
          tag: 'Fiber',
          points: [
            'ألياف + سوائل + حركة',
            'أفضل أطعمة: كيوي/برتقال/تفاح بالقشر، خضار ورقية، عدس/فول، شوفان/أرز بني، شيا/كتان مطحون',
            'الماء 6–8 أكواب يوميًا (حسب العمر/الطبيب)',
            'رفع الألياف تدريجيًا لتجنب مغص',
            'قلل: المعالج، الأرز الأبيض بكثرة، ألبان لو بتسبب إمساك',
          ],
        },
      ],
    },
    {
      kind: 'cards',
      title: 'نصائح عامة لكل الحالات المصاحبة',
      items: [
        {
          title: 'الأساس',
          icon: 'pi pi-check',
          points: [
            'نظام متوازن (MyPlate): نصف الطبق خضار/فاكهة + بروتين هزيل + حبوب كاملة + ألبان قليلة الدسم أو بدائل',
            'عناصر مهمة: أوميغا-3، فيتامين D وB12 (مع فحص دوري)، حديد، ألياف، مضادات أكسدة',
            'مراقبة وزن/نمو + تحاليل دورية + متابعة مع اختصاصي',
            'حركة يومية تساعد التمثيل والإمساك',
            'صعوبات بلع/انتقائية: قدّم الأطعمة تدريجيًا وخلي الوجبة ممتعة وعائلية',
          ],
        },
      ],
    },

    // 3) Egypt premarriage tests
    {
      kind: 'cards',
      title: 'فحوصات ما قبل الزواج في مصر (100 مليون صحة)',
      items: [
        {
          title: 'معلومة أساسية',
          points: [
            'الفحوصات المعتمدة رسميًا تتم عبر مبادرة 100 مليون صحة التابعة لوزارة الصحة والسكان',
            'الشهادة الصحية شرط لتوثيق الزواج، ولا تُستخرج لغرض الزواج الرسمي من معامل خاصة',
          ],
        },
        {
          title: 'أماكن الإجراء',
          points: [
            'وحدات الرعاية الصحية الأولية (وحدات/مراكز حكومية) في جميع المحافظات',
            'سحب العينات في الوحدة وتحليلها في معامل مركزية تابعة للوزارة',
          ],
        },
        {
          title: 'للاستعلام',
          points: ['الخط الساخن: 15335', 'خط وزارة الصحة: 105', 'الموقع: 100millionseha.eg/marriage'],
        },
        {
          title: 'التكلفة والخطوات (كما وصلتك)',
          points: [
            'تكلفة الفحوصات للفرد: 350 جنيه',
            'استخراج الشهادة: 96 جنيه',
            'المدة: حوالي 14 يوم (أو رسالة نصية)',
            'سريان الشهادة: 6 أشهر',
          ],
        },
      ],
    },

    // 4) Egypt centers + genetics labs
    {
      kind: 'places',
      title: 'مراكز/جهات في مصر (رعاية/تأهيل/تحليل وراثي)',
      desc: 'يفضّل الاتصال أولًا للتأكد من التوافر والتكاليف والحجز.',
      items: [
        {
          name: 'مركز متخصص لرعاية متلازمة داون (كما ورد)',
          city: 'القاهرة – مدينة نصر',
          address: '33 شارع الخليفة الأمر، خلف الحديقة الدولية، عباس العقاد',
          notes: ['تقييمات فردية، برامج علاجية، دعم للدمج الاجتماعي/التعليمي'],
        },
        { name: 'المؤسسة المصرية لمتلازمة داون', city: 'القاهرة', notes: ['خدمات رعاية/تنمية/دعم'] },
        { name: 'مركز د. مؤمن ندا', city: 'مصر', notes: ['جلسات تخاطب منزلية للأطفال والكبار'] },
        { name: 'Generations Genetics Labs', city: 'القاهرة الجديدة', phone: '01222913333', email: 'info@generations-genetics.com', notes: ['NIPT من الأسبوع 10 + تحديد النوع'] },
        { name: 'Colors Medical Lab', city: 'المعادي – القاهرة', phone: '01028035937 / 01061999378', notes: ['Bloom NIPT'] },
        { name: 'Bedaya Hospital', city: 'الدقي – الجيزة', phone: '19483', notes: ['NACE / PGT-A'] },
      ],
    },

    // 5) Lebanon hospitals
    {
      kind: 'places',
      title: 'لبنان: مستشفيات تقدّم فحوصات مرتبطة بالكشف قبل الولادة',
      items: [
        {
          name: 'Mount Lebanon Hospital University Medical Center',
          city: 'Hazmieh, Lebanon',
          phone: '+9615957000',
          website: 'http://www.mlh.com.lb/',
          address: 'Mickhael Gharios Street, Hazmieh',
        },
        {
          name: 'AUBMC',
          city: 'Beirut, Lebanon',
          phone: '+9611350000',
          website: 'https://aubmc.org.lb/',
          address: 'Riad El Solh, Beirut (Hamra – Cairo Street)',
          email: 'aubmc@aub.edu.lb',
        },
        {
          name: 'LAU Medical Center–Rizk Hospital',
          city: 'Beirut, Lebanon',
          phone: '+9611200800',
          website: 'https://www.laumcrh.com/',
          address: 'Zahar Street, Achrafieh',
          email: 'info@laumcrh.com',
        },
        {
          name: 'Aboujaoudé Hospital',
          city: 'Jal El Dib, Lebanon',
          phone: '+9614718000 / +9614716000',
          website: 'http://www.hopitalaboujaoude.com/',
        },
      ],
    },

    // 6) Lebanon specialists + associations
    {
      kind: 'places',
      title: 'لبنان: أطباء/عيادات/جمعيات دعم',
      items: [
        {
          name: 'Lebanese Down Syndrome Association (LDSA)',
          city: 'بيروت',
          phone: '+9611735738 / +96178970406',
          email: 'info@lebanesedownsyndrome.org',
          website: 'https://lebanesedownsyndrome.org',
          address: 'شارع توفيق طبّارة – الطابق الثاني',
          notes: ['موارد وإحالات ودعم للأسر'],
        },
        {
          name: 'AUBMC Special Kids Clinic',
          city: 'بيروت',
          phone: '+9611350000 تحويلة 7580',
          website: 'https://aubmc.org.lb',
          notes: ['فريق متعدد التخصصات: نمو/تدخل مبكر/علاج نطق/علاج مهني/سلوكي'],
        },
        {
          name: 'Nawfal Clinics Beirut Branch',
          city: 'بيروت',
          website: 'https://nawfalclinics.com',
          address: 'Sodeco Square – Block B – الطابق 8',
          notes: ['تقييم نفسي/تطوري ودعم سلوكي'],
        },
      ],
    },

    // 7) Sports psychology support
    {
      kind: 'cards',
      title: 'الدعم الرياضي النفسي لذوي الهمم',
      desc: 'مختصر عملي يساعدك تكتبي المحتوى داخل الموقع بشكل جذاب.',
      items: [
        { title: 'رفع تقدير الذات', points: ['النجاح في تمرين بسيط يبني “أنا أقدر” بدل “أنا مش زيهم”'] },
        { title: 'تقليل القلق والتوتر', points: ['الحركة ترفع الإندورفين/السيروتونين — طفل بيتحرك = طفل أهدى نفسيًا'] },
        { title: 'تحسين التحكم الانفعالي', points: ['انتظار الدور، تقبل الخسارة، تفريغ غضب بشكل صحي'] },
        { title: 'الأمان النفسي', points: ['الروتين يقلل الخوف والتشتت خصوصًا للتوحد'] },
        { title: 'تحسين التواصل الاجتماعي', points: ['اللعب الجماعي والتعاون — حتى غير اللفظي يتواصل بالحركة قبل الكلام'] },
      ],
    },
    {
      kind: 'links',
      title: 'فيديو مقترح',
      items: [{ title: 'لقاء د. عبير شعبان عن علم النفس الرياضي', url: 'https://www.facebook.com/share/v/1AaMsNsj5V/' }],
    },

    // 8) Health articles links
    {
      kind: 'links',
      title: 'روابط مقالات للدعم الصحي',
      items: [
        { title: 'وزارة الصحة السعودية – Baby Health', url: 'https://www.moh.gov.sa/HealthAwareness/EducationalContent/BabyHealth/Pages/005.aspx' },
        { title: 'ARsco – مقال', url: 'https://arsco.org/articles/article-detail-15142/' },
        { title: 'Werathah – hearing issues', url: 'https://www.werathah.com/down/medical_issues/hearing/' },
        { title: 'GSC Egypt – متى يتكلم طفل متلازمة داون', url: 'https://gscegypt.com/post/%D9%85%D8%AA%D9%89-%D9%8A%D8%AA%D9%83%D9%84%D9%85-%D8%B7%D9%81%D9%84-%D9%85%D8%AA%D9%84%D8%A7%D8%B2%D9%85%D8%A9-%D8%AF%D8%A7%D9%88%D9%86-173' },
        { title: 'Taheelweb – مقال', url: 'https://www.taheelweb.com/home/blog_detail/d61a3618c1bed9a0ff4b3ce9495041725fcc522e424390c6' },
      ],
    },
  ];

  /** filters sections by text */
  get filteredSections(): Section[] {
    const q = (this.q || '').trim().toLowerCase();
    if (!q) return this.sections;

    const hit = (s: string | undefined) => (s || '').toLowerCase().includes(q);

    return this.sections.filter((sec) => {
      if (sec.kind === 'hero') return hit(sec.title) || hit(sec.subtitle) || (sec.badges || []).some(hit);
      if (sec.kind === 'note') return hit(sec.title) || hit(sec.desc);
      if (sec.kind === 'links') return hit(sec.title) || hit(sec.desc) || sec.items.some((x) => hit(x.title) || hit(x.url) || hit(x.note));
      if (sec.kind === 'cards') return hit(sec.title) || hit(sec.desc) || sec.items.some((x) => hit(x.title) || hit(x.desc) || (x.points || []).some(hit) || hit(x.tag));
      if (sec.kind === 'places') return hit(sec.title) || hit(sec.desc) || sec.items.some((x) => hit(x.name) || hit(x.city) || hit(x.address) || hit(x.phone) || hit(x.email) || hit(x.website) || (x.notes || []).some(hit) || hit(x.tag));
      return true;
    });
  }

  open(url: string) {
    window.open(url, '_blank', 'noopener');
  }
}
