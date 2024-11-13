import { Component, Input } from '@angular/core';
import { Stats, Team } from '../../models/team.model';
import { JsonPipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-team-stats',
  standalone: true,
  imports: [JsonPipe,NgClass],
  templateUrl: './team-stats.component.html',
  styleUrl: './team-stats.component.scss'
})
export class TeamStatsComponent {

  @Input() team! : Team;
  @Input() stats! : Stats | undefined;

}
