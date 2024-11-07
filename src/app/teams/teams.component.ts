import { Component, inject } from '@angular/core';
import { Team, Stat } from '../models/team.model';
import { TeamService } from '../services/team.service';
import { Observable } from 'rxjs';
import { CommonModule, JsonPipe } from '@angular/common';
import { StatsComponent } from './stats/stats.component';

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [JsonPipe, CommonModule, StatsComponent],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.scss'
})
export class TeamsComponent {
  teams : Team[] = [];
  stats : Stat[] = [];
  selectedTeam = -1;
  constructor(private teamService:TeamService){}

  ngOnInit(){
    this.teamService.getTeams().subscribe(res=>{
      this.teams = res;
    });
  }

  onTeamSelect(team:Team){
    const id  = team.id;
    this.teams.filter((t)=>{
      if(t.id === id){
        this.teamService.getTeamStats().subscribe((stats: Stat[])=>{
          console.log(stats);
          this.stats = stats;
        })
        this.selectedTeam = t.id;
      }
    });
  }

}
