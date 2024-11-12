import { Component, Input, SimpleChanges } from '@angular/core';
import { Stat, Team } from '../../models/team.model';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule, JsonPipe],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss'
})
export class StatsComponent {

  @Input() teams!: Team;
  @Input() stats!: any;

  ngOnChanges(changes: SimpleChanges): void {
    this.teams = changes['teams']?.currentValue;
    this.stats = changes['stats']?.currentValue;
  }

}
