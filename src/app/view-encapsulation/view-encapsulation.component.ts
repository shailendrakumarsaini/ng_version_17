import { Component } from '@angular/core';
import { HerderComponent } from './herder/herder.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-view-encapsulation',
  standalone: true,
  imports: [HerderComponent,FooterComponent],
  templateUrl: './view-encapsulation.component.html',
  styleUrl: './view-encapsulation.component.scss'
})
export class ViewEncapsulationComponent {

}
