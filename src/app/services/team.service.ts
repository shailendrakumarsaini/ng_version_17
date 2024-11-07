import { Injectable } from '@angular/core';
import { Stat, Team } from '../models/team.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor() { }

  getTeamStats() : Observable<Stat[]> {
    const stats : Stat[] = [
      {
        name: 'Bangalore',
        abbrevation: 'BLR',
        avaragepointconceded: 45,
        avaragepointscored: 7,
        lastWins: ['L', 'W', 'L', 'W'],
        association: 'West'

      },
      {
        name: 'Mumbai',
        abbrevation: 'MEM',
        avaragepointconceded: 56,
        avaragepointscored: 8,
        lastWins: ['L', 'W', 'L', 'W'],
        association: 'East'
      },
      {
        name: 'Odisha',
        abbrevation: 'ORL',
        avaragepointconceded: 45,
        avaragepointscored: 23,
        lastWins: ['L', 'W', 'L', 'W'],
        association: 'North'
      },
      {
        name: 'Noida',
        abbrevation: 'NOD',
        avaragepointconceded: 23,
        avaragepointscored: 14,
        lastWins: ['W', 'W', 'L', 'L'],
        association: 'South'
      }
    ];

    return of(stats);
  }

  getTeams() : Observable<Team[]> {
    const teams = [
      { id: 0, name: 'Bangalore', fullname: 'Nation1', code: 'BLR' },
      { id: 1, name: 'Mumbai', fullname: 'Nation2', code: 'MEM' },
      { id: 2, name: 'Odisha', fullname: 'Nation3', code: 'ORL' },
      { id: 3, name: 'Noida', fullname: 'Nation4', code: 'NOD' }
    ];
    return of(teams);
  }

}
