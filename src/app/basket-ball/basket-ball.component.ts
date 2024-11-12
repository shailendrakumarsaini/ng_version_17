import { Component, inject } from '@angular/core';
import { BasketBallService } from '../services/basket-ball.service';
import { CommonModule, NgFor } from '@angular/common';
import { TeamStatsComponent } from './team-stats/team-stats.component';

@Component({
  selector: 'app-basket-ball',
  standalone: true,
  imports: [CommonModule, NgFor, TeamStatsComponent],
  templateUrl: './basket-ball.component.html',
  styleUrl: './basket-ball.component.scss'
})
export class BasketBallComponent {
  basketBallService = inject(BasketBallService);

  teams$ = this.basketBallService.getAllTeams();
  selectedTeam:any = null;
  stats:any;
  ngOnInit(): void {}

  onTeamSelect(team:any){
    console.log(team);
    this.selectedTeam = team;
    // this.basketBallService.getTeamResults(team.id).subscribe(res=>{
    //   console.log(res);
    // })
    this.basketBallService.getStatsFromGames(team).subscribe(res=>{
      console.log(res);
      this.stats = res;
    })
  }
}
