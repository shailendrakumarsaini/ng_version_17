export interface Game {
    id :number,
    conference:string,
    division:string,
    city:string,
    name:string,
    full_name:string,
    abbreviation:string,
    date:string
}

export interface Team {
    id: number;
    conference: string;
    division: string;
    city: string;
    name: string;
    full_name: string;
    abbreviation: string;
}
  
export interface Stats{
    wins: number,
    losses: number,
    averagePointsScored: number, 
    averagePointsConceded: number, 
    lastGames: string[]
}