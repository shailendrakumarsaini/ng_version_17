import { Injectable } from '@angular/core';
import {Observable, of, switchMap} from 'rxjs';
import {Game, Stats, Team} from '../models/basket-ball.model';
import {ALL_SCORES, ATLANTA, PHILADELPHIA, SACRAMENTO} from '../mocks';


@Injectable({
  providedIn: 'root'
})
export class BasketBallService {

  getAllTeams(): Observable<Team[]> {
    return of([SACRAMENTO, ATLANTA, PHILADELPHIA]);
  }

  getTeamResults(teamId: string | number): Observable<Game[]> {
    return of(ALL_SCORES[+teamId]);
  }

  // getStatsFromGames(team: Team): Observable<Stats> {
  getStatsFromGames(team: Team) {
    return this.getTeamResults(team.id).pipe(
      switchMap(games => of(this.getAllGamesStats(team, games)))
    )
  }

  private getAllGamesStats(team: Team, games: Game[]): Stats {
    const stats: Stats = {wins: 0, losses: 0, averagePointsScored: 0, averagePointsConceded: 0, lastGames: []};
    games.forEach(game => {
      const gameStats = this.getSingleGameStats(team, game);
      stats.wins += gameStats.wins;
      stats.losses += gameStats.losses;
      stats.averagePointsConceded += gameStats.averagePointsConceded;
      stats.averagePointsScored += gameStats.averagePointsScored;
      stats.lastGames.push(gameStats.wins == 1 ? 'W' : 'L');
    });
    stats.averagePointsScored = Math.round(stats.averagePointsScored / games.length);
    stats.averagePointsConceded = Math.round(stats.averagePointsConceded / games.length);
    return stats;
  }

  // private getSingleGameStats(team: Team, game: Game): Stats {
  private getSingleGameStats(team :any , game:any) {
    const stats: Stats = {wins: 0, losses: 0, averagePointsScored: 0, averagePointsConceded: 0, lastGames: []};
    if (game.home_team.id === team.id) {
      stats.averagePointsScored = game.home_team_score;
      stats.averagePointsConceded = game.visitor_team_score;
      if (game.home_team_score > game.visitor_team_score) {
        stats.wins +=1;
      } else {
        stats.losses += 1;
      }
    }
    if (game.visitor_team.id === team.id) {
      stats.averagePointsScored = game.visitor_team_score;
      stats.averagePointsConceded = game.home_team_score;
      if (game.visitor_team_score > game.home_team_score) {
        stats.wins = 1;
      } else {
        stats.losses = 1;
      }
    }
    return stats;
  }
}
