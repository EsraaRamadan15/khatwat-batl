import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SevenHousesIntroComponent,  } from "../../components/seven-houese-intro/seven-houese-intro.component";
import { SevenHousesStepperComponent } from '../../components/seven-houses-stepper/seven-houses-stepper.component';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'primeng/tabs';

@Component({
  selector: 'app-seven-houses-main.component',
  imports: [   CommonModule,TabsModule,SevenHousesIntroComponent,SevenHousesStepperComponent],
  templateUrl: './seven-houses-main.component.html',
  styleUrl: './seven-houses-main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SevenHousesMainComponent { }
