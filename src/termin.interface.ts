

export interface Termin{
    id: string,
    name: string,
    description: string,
    date: Date,
    time: string,
    place: string,
    people: number,
    maxPeople?: number,
    requirements?: string[],
    creator: string
}