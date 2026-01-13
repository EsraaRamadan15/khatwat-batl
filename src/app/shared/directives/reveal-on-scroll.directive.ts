import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[revealOnScroll]',
  standalone: true,
})
export class RevealOnScrollDirective implements AfterViewInit {
  @Input() delay = 0;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    const element = this.el.nativeElement;
    element.style.opacity = '0';
    element.style.transform = 'translateY(14px)';
    element.style.transition = `opacity .7s ease ${this.delay}ms, transform .7s ease ${this.delay}ms`;

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
          obs.unobserve(element);
        }
      });
    }, { threshold: 0.15 });

    obs.observe(element);
  }
}
