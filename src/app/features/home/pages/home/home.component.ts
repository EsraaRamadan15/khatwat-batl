import { Component } from '@angular/core';
import { FeatureColorCardComponent } from '../../../../shared/ui/feature-color-card/feature-color-card.component';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DownBandComponent } from '../../components/down-band/down-band.component';
import { DownFlipCardComponent } from '../../components/down-flip-card/down-flip-card.component';
import { JourneyLikeDownSectionComponent } from '../../components/JourneyLikeDownSection/journey-like-down-section.component';
import { AutismBandComponent } from '../../components/autism-band/autism-band.component';
import { OurStoriesComponent } from '../../components/our-stories/our-stories.component';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule, RouterLink, ButtonModule, FeatureColorCardComponent, RevealOnScrollDirective, DownBandComponent, DownFlipCardComponent, JourneyLikeDownSectionComponent, AutismBandComponent, OurStoriesComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  cards = [
    { title: 'قبل الزواج', desc: 'وعي + فحوصات + تغذية + وقاية', badge: 'وقاية', icon: 'pi pi-heart', link: '/cards/pre-marriage', from: '#F97316', to: '#FB7185', tint: 'rgba(249,115,22,.10)' },
    { title: 'خلال الحمل', desc: 'وقاية طبية وغذائية ونفسية', badge: 'متابعة', icon: 'pi pi-shield', link: '/cards/pregnancy', from: '#06B6D4', to: '#3B82F6', tint: 'rgba(6,182,212,.10)' },
    {title: 'قسم الدعم الروحي للأم', desc: 'الدعم الروحي للأم باستخدام منازل الروح السبعة', badge: 'طمأنينة',icon: 'pi pi-moon',link: '/seven-houses',from: '#0EA5E9',to: '#14B8A6', tint: 'rgba(14,165,233,.10)'},
    { title: 'قسم التثقيف الصحي', desc: 'فع وعي الأم صحيًا بحالة طفلها', badge: 'وعي', icon: 'pi pi-compass', link: '/cards/hub-suppor', from: '#14B8A6', to: '#22C55E', tint: 'rgba(20,184,166,.10)' },
    { title: 'قسم التثقيف الغذائي', desc: 'مساعدة الأم على بناء نظام غذائي داعم لصحة الطفل وتركيزه ومناعته', badge: 'تثقيف', icon: 'pi pi-sparkles', link: '/cards/nutrition-support', from: '#A855F7', to: '#F59E0B', tint: 'rgba(168,85,247,.10)' },
     { title: 'قسم الدعم المجتمعي', desc: 'مساندة الأم نفسيًا في رحلة القبول، الصبر، الأمل، والاستمرار', badge: ' دعم', icon: 'pi pi-users', link: '/cards/psych-support', from: '#8B5CF6', to: '#EC4899', tint: 'rgba(139,92,246,.10)' },
    { title: 'قسم التعليم واكتشاف نقاط القوة', desc: 'تمكين الام من تعليم طفلها في البيت ,اكتشاف مواهبه, تنمية قدراته', badge: 'قياس', icon: 'pi pi-sliders-h', link: '/cards/education-support', from: '#EF4444', to: '#F97316', tint: 'rgba(239,68,68,.10)' },
    {
      title: 'أدوات تفاعلية بالموقع',
      desc: 'استبيانات تقييم + اختبارات نقاط القوة + منظم يومي + تحميل PDFs',
      badge: 'أدوات',
      icon: 'pi pi-chart-line',
      link: '/cards/interactive-tools',
      from: '#4F46E5',   // Indigo
      to: '#06B6D4',   // Cyan
      tint: 'rgba(79,70,229,.10)'
    },
    {
      title: 'ملتقى الأمهات  ',
      desc:  ' للأمهات: لقاءات Zoom، قصص حقيقية، وتواصل ودردشة داعمة 🤍',
      badge: 'مجتمع',
      icon: 'pi pi-comments',
      link: '/community',
      from: '#F43F5E',
      to: '#8B5CF6',
      tint: 'rgba(244,63,94,.10)'
    },


  ];






  /////////////////////////////
//   cards = [
//   {
//     title: 'قبل الزواج',
//     desc: 'وعي + فحوصات + تغذية + وقاية',
//     badge: 'وقاية',
//     icon: 'pi pi-heart',
//     link: '/cards/pre-marriage',
//     from: '#14B8A6',
//     to: '#22C55E',
//     tint: 'rgba(20,184,166,.10)',
//   },
//   {
//     title: 'خلال الحمل',
//     desc: 'وقاية طبية وغذائية ونفسية',
//     badge: 'متابعة',
//     icon: 'pi pi-shield',
//     link: '/cards/pregnancy',
//     from: '#06B6D4',
//     to: '#3B82F6',
//     tint: 'rgba(6,182,212,.10)',
//   },
//   {
//     title: 'قسم الدعم النفسي للأم',
//     desc: 'مساندة الأم نفسيًا في رحلة القبول، الصبر، الأمل، والاستمرار',
//     badge: 'فضفضة أم',
//     icon: 'pi pi-users',
//     link: '/cards/psych-support',
//     from: '#0EA5E9',
//     to: '#14B8A6',
//     tint: 'rgba(14,165,233,.10)',
//   },
//   {
//     title: 'قسم الدعم الروحي للأم',
//     desc: 'الدعم الروحي للأم باستخدام منازل الروح السبعة',
//     badge: 'طمأنينة',
//     icon: 'pi pi-moon',
//     link: '/seven-houses',
//     from: '#22C55E',
//     to: '#14B8A6',
//     tint: 'rgba(34,197,94,.10)',
//   },
//   {
//     title: 'قسم التثقيف الصحي',
//     desc: 'رفع وعي الأم صحيًا بحالة طفلها',
//     badge: 'وعي',
//     icon: 'pi pi-compass',
//     link: '/cards/hub-suppor',
//     from: '#14B8A6',
//     to: '#06B6D4',
//     tint: 'rgba(20,184,166,.10)',
//   },
//   {
//     title: 'قسم التثقيف الغذائي',
//     desc: 'مساعدة الأم على بناء نظام غذائي داعم لصحة الطفل',
//     badge: 'تثقيف',
//     icon: 'pi pi-sparkles',
//     link: '/cards/nutrition-support',
//     from: '#22C55E',
//     to: '#14B8A6',
//     tint: 'rgba(34,197,94,.10)',
//   },
//   {
//     title: 'قسم التعليم واكتشاف نقاط القوة',
//     desc: 'تمكين الأم من تعليم طفلها واكتشاف مواهبه',
//     badge: 'قياس',
//     icon: 'pi pi-sliders-h',
//     link: '/cards/education-support',
//     from: '#06B6D4',
//     to: '#14B8A6',
//     tint: 'rgba(6,182,212,.10)',
//   },
//   {
//     title: 'أدوات تفاعلية بالموقع',
//     desc: 'استبيانات تقييم + اختبارات نقاط القوة + منظم يومي',
//     badge: 'أدوات',
//     icon: 'pi pi-chart-line',
//     link: '/cards/interactive-tools',
//     from: '#3B82F6',
//     to: '#06B6D4',
//     tint: 'rgba(59,130,246,.10)',
//   },
//   {
//     title: 'قسم المجتمع',
//     desc: 'مساحة آمنة للأمهات: مشاركة التجارب ودعم جماعي',
//     badge: 'مجتمع',
//     icon: 'pi pi-comments',
//     link: '/',
//     from: '#14B8A6',
//     to: '#3B82F6',
//     tint: 'rgba(20,184,166,.10)',
//   },
// ];

}
