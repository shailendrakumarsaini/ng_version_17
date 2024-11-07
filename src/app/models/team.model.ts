export interface Stat {
    name: string,
    abbrevation: string,
    avaragepointconceded: number,
    avaragepointscored: number,
    lastWins: string[],
    association: string
}

export interface Team {
    id: number, 
    name: string, 
    fullname: string, 
    code: string
}