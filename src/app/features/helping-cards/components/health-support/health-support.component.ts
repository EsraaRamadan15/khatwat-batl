import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TabsModule } from 'primeng/tabs';
import { PregnancyChapterComponent } from "../pregnancy-chapter/pregnancy-chapter.component";
import { PreMarriageChapterComponent } from "../pre-marriage-chapter/pre-marriage-chapter.component";
import { DownSupportHubComponent } from "../down-support-hub/down-support-hub.component";

@Component({
  selector: 'app-health-support',
  imports: [CommonModule, TabsModule, PregnancyChapterComponent, PreMarriageChapterComponent, DownSupportHubComponent],
  templateUrl: './health-support.component.html',
  styleUrl: './health-support.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HealthSupportComponent { }
