import { Component, Input } from '@angular/core';
import { Team } from '../../models/team.model';
import { JsonPipe, NgClass, NgFor } from '@angular/common';
import { Stats } from '../../models/basket-ball.model';

@Component({
  selector: 'app-team-stats',
  standalone: true,
  imports: [JsonPipe,NgClass],
  templateUrl: './team-stats.component.html',
  styleUrl: './team-stats.component.scss'
})
export class TeamStatsComponent {

  @Input() team!:any;
  @Input() stats!:any;


}
