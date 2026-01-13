import { Component } from '@angular/core';
import { FeatureColorCardComponent } from '../../../../shared/ui/feature-color-card/feature-color-card.component';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [RouterLink, ButtonModule, FeatureColorCardComponent, RevealOnScrollDirective,NgFor],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  cards = [
    { title:'قبل الزواج', desc:'وعي + فحوصات + تغذية + وقاية', badge:'وقاية', icon:'pi pi-heart', link:'/pre-marriage', from:'#F97316', to:'#FB7185', tint:'rgba(249,115,22,.10)' },
    { title:'خلال الحمل', desc:'وقاية طبية وغذائية ونفسية', badge:'متابعة', icon:'pi pi-shield', link:'/pregnancy', from:'#06B6D4', to:'#3B82F6', tint:'rgba(6,182,212,.10)' },
    { title:'متلازمة داون', desc:'خطة زمنية + رعاية + تعامل تربوي', badge:'خطة', icon:'pi pi-users', link:'/down', from:'#8B5CF6', to:'#EC4899', tint:'rgba(139,92,246,.10)' },
    { title:'طيف التوحد DSM-5', desc:'مستويات الدعم + محوري التشخيص', badge:'تشخيص', icon:'pi pi-compass', link:'/autism', from:'#14B8A6', to:'#22C55E', tint:'rgba(20,184,166,.10)' },
    { title:'خطوات بطل', desc:'منازل الروح 7 + برنامج 7 أسابيع', badge:'7 أسابيع', icon:'pi pi-sparkles', link:'/program', from:'#A855F7', to:'#F59E0B', tint:'rgba(168,85,247,.10)' },
    { title:'الأدوات والاستبيانات', desc:'أسئلة أمهات + مقاييس + بحث', badge:'قياس', icon:'pi pi-sliders-h', link:'/tools', from:'#EF4444', to:'#F97316', tint:'rgba(239,68,68,.10)' },
  ];
}
