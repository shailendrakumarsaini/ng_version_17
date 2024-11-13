import { Component, inject } from '@angular/core';
import { TeamService } from '../services/team.service';
import { Observable } from 'rxjs';
import { Stats, Team } from '../models/team.model';
import { AsyncPipe } from '@angular/common';
import { TeamStatsComponent } from './team-stats/team-stats.component';
@Component({
  selector: 'app-team',
  standalone: true,
  imports: [AsyncPipe, TeamStatsComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {

  teamService = inject(TeamService);
  teams$ : Observable<Team[]> = this.teamService.getAllTeams();
  selectedTeam : Team | null = null;
  stats : Stats | undefined;

  onTeamSelect(team : Team){
    console.log(team);
    this.selectedTeam = team;
    this.teamService.getStatsFromGames(team).subscribe((res:Stats)=>{
      console.log(res);
      this.stats = res;
    })
  }
}
